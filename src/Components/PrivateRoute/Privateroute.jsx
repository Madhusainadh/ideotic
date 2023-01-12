import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";


export default function PrivateRoute({ children }) {
    let userSigin = localStorage.getItem("user")
    // console.log(data)
    const navigate = useNavigate();
    // console.log(data)
    const { data, error, loading } = useSelector((store) => store.auth);
    console.log(data.isAuth)
    useEffect(() => {
        if (!userSigin&&!data.isAuth) {
            return navigate("/login");
        }
    },[data])

    return children
    
}