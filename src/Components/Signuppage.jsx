import React, { useState } from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

import { useSelector, useDispatch } from "react-redux";
import { signupUser } from "../Store/auth/auth.actions";
import { Link, useNavigate } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
const Signupgage = () => {
  const [data, setdata] = useState("");
  const dispatch = useDispatch();
 const {loading} = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(data);
    dispatch(signupUser(data));
    setTimeout(()=>{

      navigate("/")
    },2000)
  };


  const setdatafun = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            type="email"
            value={data.email}
            placeholder="enter email"
            onChange={(e) => setdatafun(e)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Full Name</FormLabel>
          <Input
            type="name"
            name="name"
            value={data.name}
            onChange={(e) => setdatafun(e)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type="password"
            placeholder="enter password"
            value={data.password}
            onChange={(e) => setdatafun(e)}
          />
        </FormControl>
        <Button isLoading={loading}  m={"20px"} colorScheme={"green"} color={"white"} type="submit"   >Login</Button>
      </form>
      <Text>
        Allready have an account{" "}
        <Link color="red" to="/login">
          login
        </Link>
      </Text>
    </Box>
  );
};

export default Signupgage;
