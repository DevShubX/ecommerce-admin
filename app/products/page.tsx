'use client'
import Layout from '@/components/Layout'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {FaEdit} from 'react-icons/fa';
import { BsTrash } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'
const ProductPage = () => {

  const [products,setProducts] = useState<any>([]);

  useEffect(()=>{
    axios.get("/api/products").then((response:any)=>{
      setProducts(response.data);
    }).catch((erro:any)=>{
      // console.log("error",erro);
    }); 
  },[]);
  return (
    <Layout>
      <Container>
        <Link href={"/products/new"} className='addnewproduct'>
           Add a new product
        </Link>
        <table>
          <thead>
            <tr>
              <td colSpan={2}>PRODUCT NAME</td>
            </tr>
          </thead>
          <tbody>
            {products.map((item:any,index:any)=>(
              <tr key={item._id}>
                <td className='title'>
                  {item.title}
                </td>
                <td className='button-box'>
                  <Link href={'/products/edit/'+ item._id} className='buttons'>
                    <FaEdit/>
                    Edit
                  </Link>
                  <Link href={'/products/delete/'+ item._id} className='buttons'>
                    <BsTrash size={"1rem"}/>
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  margin: 2rem 0 0 0 ;
  width: 100%;
  .addnewproduct{
    padding: 1rem 1rem;
    background-color: green;
    color: white;
    border-radius: 0.7rem;
  }
  .buttons{
    background-color: rgb(97, 97, 230);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    margin: 0 0.5rem 0 0 ;
    :hover{
      color: rgb(75, 75, 221);
    }
  }
  thead{
    td{
      color: #464545;
      font-weight: 700;
      border-bottom: 1px solid #c5c6c9;
    }
    
  }
  td{
    padding: 1rem 1rem;
    color: black;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
  }
  th, td {
    margin: 0.5rem 0 0 0;
  }
  table{
    width: 100%;
    margin: 2rem 0 0 0;
    box-shadow: 0px 0px 7px 0px grey;
    border-radius: 0.5rem;
  }
  tr{
    font-size: 18px;
    
  }
  .button-box{
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    padding: 0 0 1rem 0;
    height: 100%;
    row-gap: 0.5rem;
  }
  .title{
    
  }
  
`


export default ProductPage