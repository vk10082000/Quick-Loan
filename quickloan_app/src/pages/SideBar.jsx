import { Box ,Button, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper} from "@chakra-ui/react"
import { Text } from '@chakra-ui/react'
import { useEffect, useState } from "react"

import { useSearchParams } from "react-router-dom"







export const SideBar=({changeinterest})=>{



// media query 
const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 650);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div>
      {isDesktop ? (
        <div style={{textAlign:"center",alignItems:"center"}}>
           
        <Box   margin={"10px"}  display={"flex"} alignItems={"center"} textAlign={"center"}  justifyContent={"space-around"}>
        <Box fontSize={"15px"} fontWeight={"bold"}  w={"200px"}>Bank-Name</Box>
       
        <Box fontSize={"15px"} fontWeight={"bold"} w={"100px"}>Loan Amount</Box>
        <Box w={"100px"} display={"flex"} >

<Box><Text fontSize={"15px"} fontWeight={"bold"}>Interest</Text></Box>
<Box> <NumberInput ml={7}>

<NumberInputStepper>
<NumberIncrementStepper onClick={()=>{changeinterest("asc")}}  />
<NumberDecrementStepper onClick={()=>{changeinterest("desc")}}  />
</NumberInputStepper>
</NumberInput></Box>


</Box>
        <Box w={"300px"} fontSize={"15px"} fontWeight={"bold"}>Prepayment Charges</Box>
        <Box display={"flex"} justifyContent={"space-around"}>

        <Box><Text fontSize={"15px"} fontWeight={"bold"}>EMI</Text></Box>
       <Box> <NumberInput ml={7}>
       
       <NumberInputStepper  >
         <NumberIncrementStepper  />
         <NumberDecrementStepper />
       </NumberInputStepper>
     </NumberInput></Box>


        </Box>
        <Box fontSize={"15px"} fontWeight={"bold"}  >Processing Fee</Box>
        <Box fontSize={"15px"} fontWeight={"bold"}>Proceed</Box>
    </Box>
       
    </div>

      ) : (
        <div>
           
        <Box   margin={"10px"}  display={"flex"} textAlign={"center"}  justifyContent={"space-around"} alignItems={"center"}>
      
       
       
        <Box w={"100px"} display={"flex"} >

<Box><Text fontSize={"15px"} fontWeight={"bold"}>Interest</Text></Box>
<Box> <NumberInput ml={7}>

<NumberInputStepper>
<NumberIncrementStepper onClick={()=>{changeinterest("asc")}} />
<NumberDecrementStepper onClick={()=>{changeinterest("desc")}} />
</NumberInputStepper>
</NumberInput></Box>


</Box>
      
        <Box display={"flex"} justifyContent={"space-around"}>

        <Box><Text fontSize={"15px"} fontWeight={"bold"}>EMI</Text></Box>
       <Box> <NumberInput ml={7}>
       
       <NumberInputStepper>
         <NumberIncrementStepper />
         <NumberDecrementStepper />
       </NumberInputStepper>
     </NumberInput></Box>


        </Box>
       
       
    </Box>
       
    </div>
      )}
       
    </div>
  );
}

