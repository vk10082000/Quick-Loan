import React, { useEffect, useState } from "react";
import {Table,Thead,Tbody,Tfoot,Tr,Th,Td,Select,TableContainer,Button,Box,
  Center} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
// import { getAllUsers } from "../Redux/BankApplication/action";
import Swal from "sweetalert2";
import axios from "axios";
import { getUsersAction } from "../redux/AdminRedux/action";

export const Admin = () => {    
  const dispatch = useDispatch();
  const[loanData,setLoanData]=useState(true)
  
  useEffect(() => {
    dispatch(getUsersAction)
  }, []);

  const allUsers=useSelector((store)=>{
      console.log(store)
      return store.adminReducer.users
  })
//   console.log('users:', allUsers)

const handleLoans=(id)=>{
    setLoanData(false)
}

  return (
    <TableContainer>
      {loanData ? (
        <Table variant="striped" colorScheme="purple">
          <Thead>
            <Tr>
              <Th>id</Th>
              <Th>name</Th>
              <Th>Conatct</Th>
              <Th>Email</Th>
              <Th>credit score</Th>
              <Th>Loans</Th>
            </Tr>
          </Thead>
          <Tbody>
            {allUsers.map((el) => (
              <Tr key={el.id}>
                <Td>{el.id}</Td>
                <Td>{el.fullname}</Td>
                <Td>{el.contact}</Td>
                <Td>{el.email}</Td>
                <Td>{el.creditscore}</Td>
                <Td>
                  <Button
                    colorScheme="blue"
                    variant={"outline"}
                    onClick={() => handleLoans(el.id)}
                  >
                    ALL LOANS
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      ) : (
        <Box>
          <Center m={"20px"}>
            <Button
              colorScheme="purple"
              variant={"outline"}
              onClick={() => setLoanData(true)}
            >
              BACK
            </Button>
          </Center>

          <Table variant="striped" colorScheme="purple">
            <Thead>
              <Tr>
                <Th>user id</Th>
                <Th>bank name</Th>
                <Th>loan type</Th>
                <Th>loan amount</Th>
                <Th>loanTerm</Th>
                <Th>loan status</Th>
                <Th>change status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {/* {loan.map((el) => (
                <Tr key={el.id}>
                  <Td>{el.id}</Td>
                  <Td>{el.bankname}</Td>
                  <Td>{el.loanType}</Td>
                  <Td>{el.loanAmount}</Td>
                  <Td>{el.loanTerm}</Td>
                  <Td>
                    <Select
                      placeholder="Select option"
                      value={selectedStatus.status}
                      onChange={(e) => handleChange(e, el.id)}
                    >
                      <option value="pending">Pending</option>
                      <option value="rejected">Reject</option>
                      <option value="accepted">Accept</option>
                    </Select>
                  </Td>
                  <Td>
                    <Button
                      colorScheme="blue"
                      variant={"outline"}
                      onClick={() => handleUpdateStatus(el.id)}
                    >
                      UPDATE
                    </Button>
                  </Td>
                </Tr>
              ))} */}
            </Tbody>
          </Table>
        </Box>
      )}
    </TableContainer>
  );
};
