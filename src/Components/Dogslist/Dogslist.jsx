import {
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dogslist = () => {
  const [data, setdata] = useState([]);

  const [loading,setloading]=useState(false)
  useEffect(() => {
    setloading(true)
    getdogslist();
  }, []);

  const navigate = useNavigate();
  const getdogslist = async () => {
    setloading(true)
    try{
        
        let { data } = await axios.get("https://ideoticbackend-production.up.railway.app/list");
        setdata(data);
        
        setloading(false)
    }catch(err){
        console.log(err.message)
    }
    setloading(false)
  };
  if(loading){
    return (
        <Flex  justifyContent={'center'}>
        <Image src={'https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700'}  />
        </Flex>
    )
  }
  return (
    <Flex justifyContent={"center"}>
    <Box>
    <Heading as={'h1'} >Dogs list</Heading>
      <SimpleGrid gap={"10px"} columns={[1, 2, 3, 4]}>
        {data?.map((e) => (
          <Box textAlign={'left'} key={e} cursor={"pointer"} onClick={() => navigate(`/dog/${e}`)}>
            <li  fontSize={"30px"}>{e.toUpperCase()}</li>
          </Box>
        ))}
      </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default Dogslist;
