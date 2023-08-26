import React from 'react'
import {
    Box,
    Image,
    Text,
    Stack,
    Flex,
    Badge,
    Container,
    ChakraProvider,
    extendTheme,
    HStack,
    Heading
  } from '@chakra-ui/react';
  import YashImage from "../Images/Yash12.jpg"

export const Support = () => {
    const employees = [
        {
          id: 1,
          name: 'Yash Raj',
          age: 25,
          email: 'yr58907@gmail.com',
          mobile: '7004383651',
          image:`${YashImage}`,
        },
        {
            id: 1,
            name: 'Yash Raj',
            age: 25,
            email: 'yr58907@gmail.com',
            mobile: '7004383651',
            image:`${YashImage}`,
          },

          {
            id: 1,
            name: 'Yash Raj',
            age: 25,
            email: 'yr58907@gmail.com',
            mobile: '7004383651',
            image:`${YashImage}`,
          },

          {
            id: 1,
            name: 'Yash Raj',
            age: 25,
            email: 'yr58907@gmail.com',
            mobile: '7004383651',
            image:`${YashImage}`,
          },

          {
            id: 1,
            name: 'Yash Raj',
            age: 25,
            email: 'yr58907@gmail.com',
            mobile: '7004383651',
            image:`${YashImage}`,
          },
    ]
  return (
   
    <Container mt="8" centerContent marginBottom={"100px"}>
         <Heading>
        Support TEAM 
        </Heading>
    <HStack spacing="4">
      {employees.map((employee) => {
        return   <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
      >
        <Image src={employee.image} alt="image" h={"200px"} w={"100%"}/>
  
        <Box p="4">
          <Stack spacing="1">
            <Flex justify="space-between">
              <Badge variant="solid" colorScheme="green">
                Employee ID: {employee.id}
              </Badge>
              <Text>{employee.age} years old</Text>
            </Flex>
            <Text fontWeight="semibold" fontSize="lg">
              {employee.name}
            </Text>
            <Text>{employee.email}</Text>
            <Text>Mobile: {employee.mobile}</Text>
          </Stack>
        </Box>
      </Box>
      })}
    </HStack>
  </Container>
  )
}
