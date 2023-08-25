import { Box, Button, Image, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import pic1 from "../Images/Pic1.avif"
import pic2 from "../Images/Pic2.avif"
import { styled } from 'styled-components'
export default function Bank() {
  const { id } = useParams()
  const [data, setdata] = useState("")

  const fetchdata = () => {
    axios.get(`https://sour-snowy-purpose.glitch.me/banks/${id}`).then((res) => {
      console.log(res.data)
      setdata(res.data)
    }).catch((error) => { console.log(error) })
  }
  useEffect(() => {
    fetchdata()
  }, [id])

  const { name, image, amount, interest, category, extra } = data
  return (
    <DIV>
      <Box >
        <img src={image} alt={name} />
        <Text>
       {extra}
        
        </Text>
        <p>Loan  Amount: -{amount}₹</p>
        <Text>Category:-{category}</Text>
        <Text>Rate-of-Interest -{interest}%</Text>
<br/>
<Button>Apply</Button>
      </Box>
      <Box  width="50%" >
        <Image
       className='pic'
          width="100%"
          src={pic1} alt='' />

      </Box>

    </DIV>
  )
}

const DIV = styled.div`

width: 90%;
border: 1px solid red;
margin: auto;
margin-top: 20px;
display:flex;
justify-content:space-between;
.pic{
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  border-radius:10px;
}


`