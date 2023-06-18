'use client'
import Layout from '@/components/Layout'
import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components';
import {BsFillArrowLeftSquareFill} from "react-icons/bs";
import toast from 'react-hot-toast'
const NewProducts = () => {
  const [productName,setProductName] = useState("");
  const [description,setDescription] = useState("");
  const [price,setPrice] = useState("");

  const postProductInfo=async(e:any)=>{
    e.preventDefault();
    const data = {productName,description,price};
    await axios.post("/api/products",data).then((res)=>{
      toast.success("Data Inserted");
    }).catch((err)=>{
      toast.error("Something went wrong");
    });
    e.target.reset();
  }
  return (
    <Layout>
        <MainDiv onSubmit={postProductInfo}>
          <Heading>
             <h1>
              New Product
            </h1>
            <Link href={"/products"}>
              <BsFillArrowLeftSquareFill/>
              Back
            </Link>
          </Heading>
            <label>Product Name</label>
            <input type="text" onChange={(e:any)=>setProductName(e.target.value)}/>
            <label >Description</label>
            <textarea name="desc" id="" onChange={(e:any)=>setDescription(e.target.value)}></textarea>
            <label>Price (in USD)</label>
            <input type="text" onChange={(e:any)=>setPrice(e.target.value)}/>
          <div>
            <Button>
              Save
            </Button>
          </div>
      </MainDiv>
    </Layout>
  )
}
const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  a{
    display: flex;
    padding: 0.5rem 0.5rem;
    height: 40px;
    width: 90px;
    margin: 0.2rem 0 0 0;
    color: rgb(45,45,153);
    font-size: 17px;
    border: 3px solid rgb(45,45,153);
    gap: 0.3rem;
    border-radius: 0.3rem;
    vertical-align: middle;
  }
`
const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 20px;
  border-radius:0.3rem;
  border: none;
  background-color:rgb(45,45,153);
  color: white;
  margin: 1rem 0 0 0;
`
const MainDiv = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  h1{
    margin:0 0 2rem 0 ;
    color: rgb(45,45,153);
    font-weight: 600;
  }
  textarea,input{
    margin: 0 0 1rem 0;
    font-size: 20px;
    border-radius: 0.2rem;
    border: 2px solid #80808039;
    padding: 0.2rem 0.2rem 0.2rem 0.2rem;
    :focus{
      outline: none;
      border-color: rgb(45,45,153);
    }
  }
  label{
    color: rgb(45,45,153);
    font-weight: 600;
  }
`


export default NewProducts