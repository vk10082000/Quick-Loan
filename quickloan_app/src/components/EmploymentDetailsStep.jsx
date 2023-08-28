import React from 'react';
import { Box, FormControl, FormLabel, Text, Input, Center, Button, HStack } from '@chakra-ui/react';

export const EmploymentDetailsStep = ({ userInfo, handleChange, onNext, onPrevious }) => {
    return (
        <Center>
            <Box w={{ base: "250px", sm: "200px", md: "500px", lg: "600px", xl: "700px" }}>

                <Text fontSize={"20px"} fontWeight={"bold"} color={"#283593"}>Employment Details</Text>
                <FormControl isRequired m={{ base: "5px", sm: "10px", md: "20px", lg: "20px", xl: "30px" }}>
                    <FormLabel>Employer</FormLabel>
                    <Input type='text' placeholder='Employer' name={"employer"} value={userInfo.employer} onChange={handleChange} />
                </FormControl>

                <FormControl isRequired m={{ base: "5px", sm: "10px", md: "20px", lg: "20px", xl: "30px" }}>
                    <FormLabel>Job Title</FormLabel>
                    <Input type='text' placeholder='Job Title' name={"jobTitle"} value={userInfo.jobTitle} onChange={handleChange} />
                </FormControl>

                <FormControl isRequired m={{ base: "5px", sm: "10px", md: "20px", lg: "20px", xl: "30px" }}>
                    <FormLabel>Years Of Employment</FormLabel>
                    <Input type='text' placeholder='Years Of Employment' name={"yearsOfEmployment"} value={userInfo.yearsOfEmployment} onChange={handleChange} />
                </FormControl>

                <FormControl isRequired m={{ base: "5px", sm: "10px", md: "20px", lg: "20px", xl: "30px" }}>
                    <FormLabel>Monthly Income</FormLabel>
                    <Input type='number' placeholder='Monthly Income' name={"monthlyIncome"} value={userInfo.monthlyIncome} onChange={handleChange} />
                </FormControl>

                <HStack display={"flex"} justifyContent={"space-around"}>
                    <Button variant={'outline'} onClick={onPrevious} colorScheme='blue' >Prev</Button>
                    <Button variant={'outline'} onClick={onNext} colorScheme='blue' >Next</Button>
                </HStack>
            </Box>
        </Center >
    )
}
