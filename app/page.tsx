'use client'
import Layout from '@/components/Layout';
import React from 'react'
import styled from 'styled-components';

const Home = () => {
  return(
    <Layout>
      <MainDiv>
        <h2>
          Hello, Shubham
        </h2>
      </MainDiv>
    </Layout>
  )
}

const MainDiv = styled.div`
  h2{
    color: rgb(45,45,153);
  }

`


export default Home;