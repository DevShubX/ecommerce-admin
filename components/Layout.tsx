import React, { useState } from 'react'
import styled from 'styled-components'
import NavBar from './NavBar'
import { Toaster } from 'react-hot-toast'
import {GiHamburgerMenu} from 'react-icons/gi'
import useWindowDimension from '@/app/hooks/useWindowDimension'
import Link from 'next/link'
const Layout = ({children}:{children:React.ReactNode}) => {

  const {width} = useWindowDimension();
  const [isNavOpen,setNavOpen] = useState(false);
  return (
    <div>
        <MainDiv>
            <Toaster/>
            {width! < 900 && (
              <div className='mobile-nav'>
              <button onClick={()=>setNavOpen(!isNavOpen)}>
                <GiHamburgerMenu/>
              </button>
            {!isNavOpen && (
              <Heading href={"#"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={30} className='svg-icon'>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                </svg>
                <span>
                    EcommerceAdmin
                </span>
              </Heading>
            )}  
            </div>
            )}
            {width! > 900 && <NavBar isNavOpen={isNavOpen} setIsNavOpen={setNavOpen}/>}
            {(width! < 900 && isNavOpen) && <NavBar isNavOpen={isNavOpen} setIsNavOpen={setNavOpen}/> } 
            <Container>
                {children}
            </Container>
        </MainDiv>
    </div>
  )
}
const Heading = styled(Link)`
    margin: 0 0.9rem 0.5rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:1.3rem;
`

const Container = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  margin: 0.5rem 0.5rem 0.5 0;
  border-radius: 1rem;
  padding: 1rem 1rem;
  overflow-y: scroll;
  @media screen and (max-width:900px){
    height: 100vh;
    border-radius: 0;
  }
`

const MainDiv = styled.div`
  display: flex;
  height: 100vh;
  background-color: #e5e7eb;
  .mobile-nav{
    display: flex;
    align-items: center;
    button{
      margin: 0.5rem 0.5rem 0.5rem 1rem;
      font-size: 2rem;
      border: none;
      background-color: transparent;

    }
  }
  @media screen and (max-width:900px){
    flex-direction: column;
    .mobile-nav{
      background-color: white;
    }
  }
`
export default Layout