import { Box } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";

const Detailspage = () => {
  useEffect(() => {
    getdogslist();
  }, []);

  const getdogslist = async () => {
    let { data } = await axios.get("http://localhost:5000/list");
    console.log(data);
  };
  return <Box>Detailspage Detailspage</Box>;
};

export default Detailspage;
