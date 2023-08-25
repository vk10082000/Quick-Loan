import styled from 'styled-components'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getproducts } from '../redux/ProductRedux/action'
import ProductCard from '../components/ProductCard'
// import {Navbar} from "../components/Navbar"
export default function Products() {
const {products,isLoading,isError} = useSelector((store)=> store.ProductReducer)
const dispatch = useDispatch()
useEffect(()=>{
dispatch(getproducts)
},[])
  return (
      <DIV>
        {/* <Navbar/> */}
        {isLoading && <h1>Loading...</h1>}
        {isError && <h1>Something Wents to Wroung</h1>}
        {products.map((product)=><ProductCard key={product.id} {...product} />)}
    </DIV>
  )
}

const DIV = styled.div`
  
`