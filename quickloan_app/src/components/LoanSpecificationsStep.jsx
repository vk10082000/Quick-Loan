import React, { useEffect } from 'react'
import { Select, Box, FormControl, FormLabel, Text, Input, Center, Button, HStack, AlertIcon, Alert, VStack } from '@chakra-ui/react'


export const LoanSpecificationsStep = ({ alert, userInfo, handleChange, handleSubmit, onPrevious }) => {

    return (
        <Center>
            <VStack>
                <Box>
                    {alert ? <Alert status='error'>
                        <AlertIcon />
                        Please fill all form details before submitting !!!
                    </Alert> : ""}
                </Box>
                <Box w={{ base: "200px", sm: "200px", md: "500px", lg: "600px", xl: "700px" }} >

                    <Text mt={{ base: "50px", sm: "50px", lg: "0px", md: "0px", xl: "0px" }} fontSize={"20px"} fontWeight={"bold"} color={"#283593"}>Loan Specifications</Text>

                    <FormControl isRequired m={"20px"}>
                        <FormLabel>Loan Type</FormLabel>
                        <Select placeholder=' Select Loan Type' name={"loanType"} value={userInfo.loanType} onChange={handleChange} >
                            <option value='personalloan'>Personal Loan</option>
                            <option value='homeloan'>Home Loan</option>
                            <option value='educationloan'>Education Loan</option>
                            <option value='businessloan'>Business Loan</option>
                        </Select>
                    </FormControl>

                    <FormControl isRequired m={"20px"}>
                        <FormLabel>Loan Amount Requested</FormLabel>
                        <Input type='number' placeholder='0 ₹' name={"loanAmount"} value={userInfo.loanAmount} onChange={handleChange} />
                    </FormControl>

                    <FormControl isRequired m={"20px"}>
                        <FormLabel>Desired Loan Term</FormLabel>
                        <Input type='number' placeholder='Desired Loan Term(in months)' name={"loanTerm"} value={userInfo.loanTerm} onChange={handleChange} />
                    </FormControl>

                    <FormControl isRequired m={"20px"}>
                        <FormLabel>Purpose of the Loan</FormLabel>
                        <Input type='text' placeholder='for example: Home Renovation' name={"loanPurpose"} value={userInfo.loanPurpose} onChange={handleChange} />
                    </FormControl>

                    <HStack display={"flex"} justifyContent={"space-around"}>
                        <Button variant={'outline'} onClick={onPrevious} colorScheme='blue' >Prev</Button>
                        <Button disabled={alert == true} variant={'solid'} onClick={handleSubmit} colorScheme='green' >Submit</Button>
                    </HStack>
                </Box>
            </VStack>
        </Center >
    )
}
