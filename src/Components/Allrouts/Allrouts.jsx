import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Detailspage from "../Detailspage";
import Dogdetailspage from "../Dogslist/Dogdetailspage";
import Dogslist from "../Dogslist/Dogslist";
import LoginPage from "../Loginpage";
import PrivateRoute from "../PrivateRoute/Privateroute";
import Signupgage from "../Signuppage";
import Navbar from "./Navbar";

const Allrouts = () => {
  return (
    <Box>
    <Navbar/>
      <Routes>
        <Route path="/" element={<PrivateRoute><Dogslist  /></PrivateRoute>} />
        <Route path="/dog/:name" element={<PrivateRoute><Dogdetailspage  /></PrivateRoute>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signupgage />} />
      </Routes>
    </Box>
  );
};

export default Allrouts;
