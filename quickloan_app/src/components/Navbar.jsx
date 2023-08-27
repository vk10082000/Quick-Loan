import React, { useEffect, useState } from 'react'
import {
    Button,
    Box,
    HStack,
    Flex,
    Image,
 
   
  } from "@chakra-ui/react";
import logo_jpg from "../Images/1.jpg"
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../redux/store';
import { LOGIN_FAILURE, LOGIN_SUCCESS } from '../redux/Authentication/actionType';
// import { Box,Flex,Spacer,Button,Heading, ButtonGroup} from '@chakra-ui/react'

const links = [
    { title: "Home", path: "/" },


    { title: "Product", path: "/verification" },

    { title: "Company", path: "/process" },
    { title: "Support", path: "/support" },
  ];


const Navbar = () => {
   const dispatch = useDispatch()
    const {currentUser } = useSelector((store) => store.AuthReducer);
    const { isAuth } = useSelector((store) => store.AuthReducer);
    console.log(store)
     console.log(isAuth)
    //  console.log(currentUser.firstname);
    const [shouldElevate, setShouldElevate] = useState(false);


    let pathname=window.location.pathname;

    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setShouldElevate(isScrolled);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

   
    
  return (
    <Flex
    w="100%"
    bgColor={"#0d0618"}
    color="white"
    justify="space-around"
    fontSize={{
      base: "15px",
      sm: "15px",
      md: "16px",
      lg: "20px",
      xl: "20px",
    }}
    alignItems="center"
    py={0}
    px={0}
    position="sticky"
    top={0}
    zIndex="sticky"
    transition="box-shadow 0.2s"
     boxShadow={shouldElevate ? "md" : "none"}
  >
   
    <Box
      w={{
        base: "130px",
        sm: "130px",
        md: "180px",
        lg: "180px",
        xl: "180px",
      }}
    >
      <Link to="/"><Image sizes='s' borderRadius={"100%"} src={logo_jpg} alt="logo" h="70px" w="90px" p="-10px" /></Link>
    </Box>
    <HStack
      justify={"space-evenly"}
      spacing="30px"
      display={{
        base: "none",
        sm: "none",
        md: "flex",
        lg: "flex",
        xl: "flex",
      }}
    >
      {links.map((el) => (
        <NavLink key={el.title} to={el.path}>
          {el.title}
        </NavLink>
      ))}
    </HStack>
    {pathname==='/admin'?              
     <Button size={{ base: "sm", sm: "sm", md: "md", lg: "md", xl: "md" }}
                colorScheme={"pink"}
              >
                WELCOME ADMIN
              </Button>
              :
    
    <HStack
            justify={"space-evenly"}
            spacing={{
              base: "20px",
              sm: "20px",
              md: "30px",
              lg: "30px",
              xl: "30px",
            }}
          >
             
            {isAuth ? <h1>{currentUser.firstname}</h1> : <Link to="/login">Login</Link>}
         
         
            
            {isAuth ? <Link to="/login"> <Button onClick={() => dispatch({ type: LOGIN_FAILURE})}>Log Out</Button></Link> : <Link to="/signup"><Button
                size={{ base: "sm", sm: "sm", md: "md", lg: "md", xl: "md" }}
                colorScheme={"yellow"}
              >
                Sign Up
              </Button>
              </Link>
              }
              
            {/* */}

          </HStack>
    }

    
    </Flex>
   



  )
}

export default Navbar

