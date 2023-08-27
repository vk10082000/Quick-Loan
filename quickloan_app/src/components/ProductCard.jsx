import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {  useNavigate,  } from 'react-router-dom'
import styled from 'styled-components';

export default function ProductCard(props) {
    const {id,name,image,amount,interest,category,extra} =props
   
    const nav = useNavigate()
  return (
   
<Card maxW='sm' align='center' style={{
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;"
}}>  
  <CardBody>
      <Image
        src={image}
        alt={name}
        borderRadius='lg'
        align="center"
      />
      <Stack mt='6' spacing='1'>
        <Heading size='lg '>{name}</Heading>
        <Text size='md'><b>Category:</b>{category}</Text>
        <Text style={{textAlign:"justify"}}>
          {extra.map((el)=>el)}
          <Text>Interest - {interest}% </Text>
        </Text>
        <Text color='blue.600' fontSize='2xl'>

        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
        <Button  variant='solid' colorScheme='blue' onClick={()=>{
         nav(`/bank/${name}/${id}`)
        }}>
         Know More
        </Button>
      
      </ButtonGroup>
    </CardFooter>
  </Card>
 
  )
}



const DIV=styled.div`
    
`