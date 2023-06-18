"use client"
import Layout from '@/components/Layout'
import axios from 'axios'
import { useParams ,useRouter} from 'next/navigation'
import React from 'react'
import styled from 'styled-components'

const DeleteProduct = () => {
  const _id = useParams().product_id;
  const router = useRouter();

  const deleteProduct=async()=>{
    await axios.delete(`/api/products?id=${_id}`);
    router.push("/products");
  }


  return (
    <Layout>
      <MainDiv>
        <h2>
          Do you really want to delete?
        </h2>
        <Wrapper>
        <button className='Yes-btn' onClick={()=>deleteProduct()}>
          Yes
        </button>
        <button className='No-btn' onClick={()=>router.push("/products")}>
          No
        </button>
        </Wrapper>
      </MainDiv>
    </Layout>
  )
}

const MainDiv = styled.div`
  width: 100%;
  text-align: center;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0 0 0;
  .Yes-btn{
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    background-color: green;
    border: none;
    border-radius: 0.5rem;
    color: white;
    margin: 0 1rem 0 0;
    cursor: pointer;
  }
  .No-btn{
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    background-color: red;
    border: none;
    border-radius: 0.5rem;
    color: white;
    cursor: pointer;
  }
`
export default DeleteProduct