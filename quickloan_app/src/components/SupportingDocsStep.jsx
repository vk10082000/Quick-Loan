import React, { useState } from 'react'
import { Box, HStack, FormControl, FormLabel, Text, Input, Center, Button, UnorderedList, ListItem, OrderedList } from '@chakra-ui/react';

export const SupportingDocsStep = ({ userInfo, handleFileChange, onNext, onPrevious, handleChange }) => {

  const [fileNames, setFileNames] = useState({
    identificationProof: '',
    incomeProof: '',
    addressProof: '',
  });


  const handleFileNameChange = (name, fileName) => {
    setFileNames((prevFileNames) => ({ ...prevFileNames, [name]: fileName }));
  };



  return (
    <Center>
      <Box w={{ base: "200px", sm: "150px", md: "300px", lg: "420px", xl: "700px" }}  >

        <Text mt={{ base: "50px", sm: "50px", lg: "0px", md: "0px", xl: "0px" }} fontSize={"20px"} fontWeight={"bold"} color={"#283593"}>Supporting Documents</Text>

        <FormControl isRequired m="20px">
          <FormLabel>Identification Proof</FormLabel>
          <Box display={{ base: "block", sm: "block", md: "block", lg: "flex", xl: "flex" }}>
            <Input
              type={fileNames.identificationProof ? "text" : "file"}
              placeholder="Identification Proof"
              name="identificationProof"
              value={fileNames.identificationProof}
              onChange={(e) => {
                handleFileChange(e);
                handleFileNameChange('identificationProof', e.target.files[0]?.name || '');
              }}

            />
            <Button variant={"outline"} colorScheme={"blue"} ml={"10px"}
              onClick={() => handleFileNameChange('identificationProof', '')}
            >Edit</Button>
          </Box>
        </FormControl>

        <FormControl isRequired m="20px">
          <FormLabel>Income Proof</FormLabel>
          <Box display={{ base: "block", sm: "block", md: "block", lg: "flex", xl: "flex" }}>
            <Input
              type={fileNames.incomeProof ? "text" : "file"}
              placeholder="Income Proof"
              name="incomeProof"
              value={fileNames.incomeProof}
              onChange={(e) => {
                handleFileChange(e);
                handleFileNameChange('incomeProof', e.target.files[0]?.name || '');
              }}
            />
            <Button variant={"outline"} colorScheme={"blue"} ml={"10px"}
              onClick={() => handleFileNameChange('incomeProof', '')}
            >Edit</Button>
          </Box>
        </FormControl>

        <FormControl isRequired m="20px">
          <FormLabel>Address Proof</FormLabel>
          <Box display={{ base: "block", sm: "block", md: "block", lg: "flex", xl: "flex" }}>
            <Input
              type={fileNames.addressProof ? "text" : "file"}
              placeholder="Address Proof"
              name="addressProof"
              value={fileNames.addressProof}
              onChange={(e) => {
                handleFileChange(e);
                handleFileNameChange('addressProof', e.target.files[0]?.name || '');
              }}
            />
            <Button variant={"outline"} colorScheme={"blue"} ml={"10px"}
              onClick={() => handleFileNameChange('addressProof', '')}>Edit</Button>
          </Box>
        </FormControl>

        <Text color={"red"} mb={"20px"} > </Text>


        <OrderedList color={'red.600'} textAlign={'left'}  >

          <Box display={{ base: "block", sm: "block", md: "block", lg: "flex", xl: "flex" }} w={{ base: "300px", sm: "250px", md: "800px", lg: "1000px", xl: "1000px" }} mb={"50px"} >

            <ListItem w={{ base: "150px", sm: "150px", lg: "250px", md: "250px", xl: "250px" }} mt={"20px"}>Identification Proof:
              <UnorderedList textAlign={'left'} color={'black'} >
                <ListItem >Aadhaar Card </ListItem>
                <ListItem>Voter ID Card</ListItem>
                <ListItem>PAN Card </ListItem>
                <ListItem>Driving License</ListItem>
              </UnorderedList>
            </ListItem>

            <ListItem w={{ base: "150px", sm: "150px", lg: "250px", md: "250px", xl: "250px" }} mt={"20px"}>Income Proof:
              <UnorderedList textAlign={'left'} color={'black'}>
                <ListItem >Salary slips</ListItem>
                <ListItem>Form 16 </ListItem>
                <ListItem>Income certificate  </ListItem>
                <ListItem>Income tax returns (ITR) for the last few years</ListItem>
              </UnorderedList>
            </ListItem>

            <ListItem w={{ base: "150px", sm: "150px", lg: "450px", md: "450px", xl: "450px" }} ml={"20px"} mt={"20px"}>Identification Proof:
              <UnorderedList textAlign={'left'} color={'black'}>
                <ListItem >Aadhaar Card </ListItem>
                <ListItem>Driving License</ListItem>
                <ListItem>Voter ID Card</ListItem>
                <ListItem>Utility bills (electricity bill, water bill, gas bill, etc.) in the applicant's name</ListItem>
              </UnorderedList>
            </ListItem>

          </Box>

        </OrderedList>

        <HStack display={"flex"} justifyContent={"space-around"}>
          <Button variant={'outline'} onClick={onPrevious} colorScheme='blue' >Prev</Button>
          <Button variant={'outline'} onClick={onNext} colorScheme='blue' >Next</Button>
        </HStack>

      </Box >
    </Center >
  )
}




