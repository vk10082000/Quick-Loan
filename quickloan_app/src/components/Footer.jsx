import {
    Box,
    Center,
    Grid,
    Heading,
    HStack,
    Image,
    ListItem,
    Spacer,
    Text,
    UnorderedList,
    VStack,
  } from "@chakra-ui/react";
  import React, { useEffect } from "react";
  import logo from "../Images/1.jpg";
  import footer_bg from "../Images/footer_bg.jpg";
  import { BsFacebook, BsTwitter, BsPinterest } from "react-icons/bs";
  import { GrLinkedinOption } from "react-icons/gr";

  
  const Footer = () => {
    
  
  
    return (
      <Box bg={"black"} color="white" p="30px" marginTop={"0px"}>
        <Center mb="40px">
          <Box w="300px" >
            <Image w={"200px"} h={"200px"} src={logo} alt="logo" />
          </Box>
        </Center>
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          gap="20px"
  
           
          w={{
            base: "30px",
            sm: "300px",
            md: "700px",
            lg: "900px",
            xl: "1200px",
          }}
          justifyContent={"center"}
          m="auto"
        >
          <VStack 
          display={{base:"none", sm:"none", md:"block", lg:"block", xl:"block"}}
            align={"center"}
            
            textAlign={"left"}
            m="auto"
          >
            <Heading textAlign={"left"} fontSize={"25px"} marginBottom={"30px"}>
              We're on a mission.
            </Heading>
  
            <Text w="250px">
              At Money Mentor, we're using cutting-edge technology to transform
              the industry and deliver financial services that actually work for
              you.
            </Text>
          </VStack>
  
          <VStack
            align={"center"}
            textAlign="left"
            fontSize={"17px"}
            m="auto"
        
          >
            <Heading size="md" marginBottom={"30px"}>Company</Heading>
  
            <UnorderedList listStyleType={"none"} spacing="18px">
              <ListItem>About Us</ListItem>
              <ListItem>Recognition</ListItem>
              <ListItem>Executive Team</ListItem>
              <ListItem>Careers</ListItem>
            </UnorderedList>
          </VStack>
  
          <VStack
            align={"center"}
            fontSize={"17px"}
           
          >
            <Heading marginBottom={"30px"} textAlign={"left"} size="md">
              Products
            </Heading>
            <UnorderedList listStyleType={"none"} spacing="18px">
              <ListItem>Business Loans | Main</ListItem>
              <ListItem>Loan Calculator</ListItem>
              <ListItem>Refer a Friend</ListItem>
              <ListItem>Partner Program</ListItem>
            </UnorderedList>
          </VStack>
  
          <VStack
          display={{base:"none", sm:"none", md:"block", lg:"block", xl:"block"}}
            align={"center"}
            fontSize={"17px"}
           
          >
            <Heading marginBottom={"30px"} textAlign={"center"} size="md">
              Help
            </Heading>
            <UnorderedList listStyleType={"none"} spacing="18px">
              <ListItem>Customer Care</ListItem>
              <ListItem>Recognition</ListItem>
              <ListItem>Security Center</ListItem>
              <ListItem>Blog</ListItem>
            </UnorderedList>
          </VStack>
        </Grid>
  
        <Center mt="50px">
          <HStack fontSize={"30px"} spacing={"30px"}>
            <BsFacebook />
            <BsTwitter />
            <BsPinterest />
            <GrLinkedinOption />
          </HStack>
        </Center>
  
        <Center pt="20px">
          <Text>Copyright© 2023. Privecy | Term of Use</Text>
        </Center>
      </Box>
    );
  };
  
  export default Footer;