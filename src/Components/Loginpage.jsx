import { FormControl, FormLabel, Input, Button, Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../Store/auth/auth.actions";

const LoginPage = () => {
  const [usersdata, setusersdata] = useState("");
  const {loading} = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  
  const navigate = useNavigate()
  const handleSubmit =async (e) => {
    e.preventDefault();
    // Perform login logic here, such as calling an API or authenticating with a service
    // console.log("email:", email);
    // console.log("password:", password);
    console.log(usersdata);
    dispatch(loginUser(usersdata));

    setTimeout(()=>{
      navigate("/")
    },1500)

  };
 

  const setusersdatafun = (e) => {
    setusersdata({
      ...usersdata,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={usersdata.email}
            onChange={(e) => setusersdatafun(e)}
          />
        </FormControl>
       
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={usersdata.password}
            onChange={(e) => setusersdatafun(e)}
          />
        </FormControl>
        <Button isLoading={loading} m={"20px"} colorScheme={"green"} color={"white"} type="submit">Login</Button>
      </form>
      <Text>Did'nt have an account <Link color="red"  to={"/signup"} >Signup</Link></Text>
    </Box>
  );
};

export default LoginPage;
