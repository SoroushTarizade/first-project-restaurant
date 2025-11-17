"use client"
import React, { useEffect, useState } from 'react';
import styles from "./Navbar.module.css";
import Link from 'next/link';
import { CiShoppingBasket } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
const Navbar = ({isLogin}) => {
    console.log(isLogin)
    const [fixTop, setFixTop] = useState(false);
    useEffect(()=>{
        const fixNavbarToTop = () =>{
            const currentScroll = window.pageYOffset;

            if(currentScroll > 1){
                setFixTop(true);
            } else{
                setFixTop(false)
            }
        }

        window.addEventListener('scroll' , fixNavbarToTop)
        return() => window.removeEventListener('scroll' , fixNavbarToTop )
    })
  const [isNavExpanded, setIsNavExpanded] = useState(true);

    return (
        <>
    <nav className={fixTop ? styles.nav : styles.navbar}>
        <div className="nav__header">
            <div className="nav__logo">
                <a href="#">
                    <img src="../images/logo-white.png" alt="logo" className="logo-white" />
                    <img src="../images/logo-dark.png" alt="logo" className="logo-dark" />
                </a>
            </div>
            <div className="nav__menu__btn" id="menu-btn" onClick={()=>{
                setIsNavExpanded(!isNavExpanded);
                console.log("clicked");
                console.log(isNavExpanded)
                
            }}>
                {
                    !isNavExpanded ? (
                        <IoMdClose />

                    ): (

                        <CiMenuFries />  
                    )
                }
            </div>
        </div>
        {
            !isNavExpanded ? (
        <ul className="nav__links open" id="nav–links">
            {isLogin ? (
                <li><Link href="/">
                    <IoPersonCircle></IoPersonCircle>
                    {isLogin.name}</Link></li>

            ):(
            <li><Link href="./login-register" id="">login / sign up</Link></li>
            )}
            <li><Link href="#home" id="">Home</Link></li>
            <li><Link href="#menu" id="">Menu</Link></li>
            <li><Link href="#services" id="">Services</Link></li>
            <li><Link href="#cart" id="">Food Cart</Link></li>
        </ul>
            ) : (
        <ul className="nav__links" id="nav–links">
            <li><Link href="#home" id="">Home</Link></li>
            <li><Link href="#menu" id="">Menu</Link></li>
            <li><Link href="#services" id="">Services</Link></li>
            <li><Link href="#cart" id="">Food Cart</Link></li>
            {isLogin ?(
                    <li><Link href="/" id="">
                        {isLogin.name} 
                        <IoPersonCircle />
                    </Link></li>
                ) :
                (
                    <li><Link href="./login-register" id="">login / sign up
                    </Link></li>
                )
            }
        </ul>

            )
        }
        <div className="nav__btns">
            <button className="btn">
                <IoIosSearch />
            </button>
            <button className="btn">
                <CiShoppingBasket></CiShoppingBasket>
            </button>
        </div>
    </nav>   
        </>
    );
}

export default Navbar;
