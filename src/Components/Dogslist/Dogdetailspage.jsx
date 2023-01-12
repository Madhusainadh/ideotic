import { Button, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Dogdetailspage = () => {
  const { name } = useParams();
  const [loading,setloading]=useState(false)
  const [pick, setpick] = useState("");
  useEffect(() => {
    setloading(true)
    getpicks();
  }, []);
  
  const navigate = useNavigate();
  const getpicks = async () => {
    setloading(true)
    try {
      let { data } = await axios.get(
        `https://dog.ceo/api/breed/${name}/images/random`
      );
      setpick(data.message);
      setloading(false)
    } catch (err) {
      console.log(err.message);
    }
  };
  if(loading){
    return (
        <Flex  justifyContent={'center'}>
        <Image src={'https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700'}  />
        </Flex>
    )
  }
  return (
    <Flex justifyContent={'center'} >
      <div>
        <Text>{name.toUpperCase()}</Text>
        <Image src={pick} />
        <Button margin={"20px"} colorScheme={'red'} color={"white"} onClick={()=>navigate("/")}  >Back</Button>
      </div>

    </Flex>
  );
};

export default Dogdetailspage;
