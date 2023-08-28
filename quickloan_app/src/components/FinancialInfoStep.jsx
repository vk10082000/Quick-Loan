import React from 'react';
import { Box, FormControl, FormLabel, Text, Input, Center, Button, HStack } from '@chakra-ui/react';

export const FinancialInfoStep = ({ userInfo, handleChange, onNext, onPrevious }) => {
    return (

        <Box w={{ base: "250px", sm: "200px", md: "500px", lg: "600px", xl: "700px" }} >

            <Text mt={{ base: "50px", sm: "50px", lg: "0px", md: "0px", xl: "0px" }} fontSize={"20px"} fontWeight={"bold"} color={"#283593"}>Financial Information</Text>

            <FormControl isRequired m={"20px"}>
                <FormLabel>Monthly Expenses</FormLabel>
                <Input type='number' placeholder='Monthly Expenses' name={"monthlyExpenses"} value={userInfo.monthlyExpenses} onChange={handleChange} />
            </FormControl>

            <FormControl isRequired m={"20px"}>
                <FormLabel>Savings/Investments</FormLabel>
                <Input type='number' placeholder='Savings/Investments' name={"savingsInvestments"} value={userInfo.savingsInvestments} onChange={handleChange} />
            </FormControl>

            <FormControl isRequired m={"20px"}>
                <FormLabel>Outstanding Loans/Credit Card Debt</FormLabel>
                <Input type='text' placeholder='Outstanding Loans/Credit Card Debt' name={"outstandingLoansDebt"} value={userInfo.outstandingLoansDebt} onChange={handleChange} />
            </FormControl>

            <FormControl isRequired m={"20px"}>
                <FormLabel>Assets(if applicable)</FormLabel>
                <Input type='text' placeholder='for example: Car - 2018 Honda Civic (owned)' name={"assets"} value={userInfo.assets} onChange={handleChange} />
            </FormControl>

            <Text color={"red"} ml={"20px"} mb={"20px"} >*note:  fill NA if not applicable</Text>

            <HStack display={"flex"} justifyContent={"space-around"}>
                <Button variant={'outline'} onClick={onPrevious} colorScheme='blue' >Prev</Button>
                <Button variant={'outline'} onClick={onNext} colorScheme='blue' >Next</Button>
            </HStack>
        </Box>

    )
}
