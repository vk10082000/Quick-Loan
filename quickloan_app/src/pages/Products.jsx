import styled from 'styled-components';

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getproducts } from '../redux/ProductRedux/action'
import ProductCard from '../components/ProductCard'
import { SimpleGrid } from '@chakra-ui/react'
import { useParams } from 'react-router-dom';


export default function Products() {
  const { products, isLoading, isError } = useSelector((store) => store.ProductReducer)
  const dispatch = useDispatch()

  const {category}=useParams()


  useEffect(() => {
    dispatch(getproducts(category))
  }, [])
  return (

      
    <DIV>

      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Something Wents to Wroung</h1>}
      <SimpleGrid gap='30px' templateColumns='repeat(auto-fill, minmax(250px, 1fr))'>
      {products.map((product) => <ProductCard key={product.id} {...product} />)}

      </SimpleGrid>


    </DIV>
  )
}

const DIV = styled.div`

  width: 90%;
  margin:auto;
  margin-top:10px;
`;
