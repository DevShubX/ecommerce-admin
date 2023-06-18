import React, { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import { GiHamburgerMenu } from 'react-icons/gi';
import useWindowDimensions from '@/app/hooks/useWindowDimension';
const NavBar = ({isNavOpen,setIsNavOpen}:{isNavOpen:boolean,setIsNavOpen:React.Dispatch<React.SetStateAction<boolean>>}) => {
    const pathname = usePathname();
    const {width} = useWindowDimensions();
  return (
    <Container>
        <Heading href={"#"}>
            {width! < 900 && 
            <button onClick={()=>setIsNavOpen(!isNavOpen)}>
                <GiHamburgerMenu/>
              </button>}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={30} className='svg-icon'>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
            </svg>
            <span>
                EcommerceAdmin
            </span>
        </Heading>
        <nav>
            <Link href={"/"} className={pathname === "/" ? "activeLink" : "notActiveLink"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={30} className='svg-icon'>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>

                <span>
                    Dasboard
                </span>
            </Link>
            <Link href={"/products"} className={pathname.includes("products") ? "activeLink" : "notActiveLink"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} width={30} stroke="currentColor"  className='svg-icon'>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
                <span>
                    Products
                </span>
            </Link>
            <Link href={'/categories'} className={pathname.includes("categories") ? "activeLink" : "notActiveLink"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} width={30} stroke="currentColor" className="svg-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <span>
                    Categories
                </span>
            </Link>
            <Link href={"/orders"} className={pathname.includes("orders") ? "activeLink" : "notActiveLink"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={30} className="svg-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z" />
                </svg>
                <span>
                    Orders
                </span>
            </Link>
            <Link href={"/settings"}  className={pathname.includes("settings") ? "activeLink" : "notActiveLink"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={30} className="svg-icon">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                    Settings
                </span>
            </Link>
        </nav> 
    </Container>

  )
}
const Heading = styled(Link)`
    margin: 0 0.9rem 0 0;
    display: flex;
    align-items: center;
    button{
      margin: 0.9rem 0.5rem 0.5rem 0;
      font-size: 2rem;
      border: none;
      background-color: transparent;

    }
`
const Container = styled.aside`
    margin: 1rem 1rem 0 1rem;
    nav{
        margin-top: 2rem;
        .activeLink{
            font-weight: 500;
            background-color: white;
            color: black;
            padding: 0.5rem 0 0.5rem 0.5rem;
            border-radius: 0.5rem;
            .svg-icon{
               color: rgb(45,45,153);
            }
        }
        .notActiveLink{
            color: #6b7280;
            padding: 0 0 0.5rem 0.5rem;
            .svg-icon{
                color:#6b7280;
            }
        }
    }
    a{
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #6b7280;
        gap: 0.3rem;
        margin-bottom: 0.8rem;
        .svg-icon{
            color:#6b7280;
           
        }
    }

    @media screen and (max-width:900px){
        position: fixed;
        z-index: 999;
        width: 100vw;
        height: 100vh;
        background-color: #e5e7eb;
        transition: all cubic-bezier(0.075, 0.82, 0.165, 1);
        margin: 0;
        padding: 1rem;
    }
    
`


export default NavBar