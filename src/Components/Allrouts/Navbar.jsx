import { Button, color, Flex } from "@chakra-ui/react";
import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGOUT } from "../../Store/auth/auth.actions";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <Flex padding={"20px"} justifyContent={"space-around"} flexWrap={"wrap"}>
        <Button color={"while"} bg={"blue"} onClick={() => navigate("/")}>Dogs page</Button>
        <Button color={"while"} bg={"blue"} onClick={() => navigate("/login")}>Loginpage</Button>
        <Button color={"while"} bg={"blue"} onClick={() => navigate("/signup")}>Signuppage</Button>
        <Button color={"while"} bg={"blue"} onClick={() => dispatch({ type: LOGOUT, payload: {} })}>
          Logout
        </Button>
      </Flex>
    </div>
  );
};

export default Navbar;
