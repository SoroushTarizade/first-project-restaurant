"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import styles from "./Login.module.css"
import Sms from './Sms';
import { showSwal } from '@/utils/helpers';
import { ValidateEmail, ValidatePassword } from '@/utils/auth';
const Login = ({showRegisterForm}) => {

    const [isLoginWithOtp, setIsLoginWithOtp] = useState(false);
    const [password, setPassword] = useState("");
    const [phoneOrEmail, setPhoneOrEmail] = useState("");


     const hideOtpForm = () => setIsLoginWithOtp(false);

     const loginWithPassword = async () =>{
        if(!phoneOrEmail){
         return   showSwal("pleas compelite phone or email","error","OK")
        }
         const isValidEmail = await ValidateEmail(phoneOrEmail);
        if(!isValidEmail){
         return   showSwal("Your email is not correct","error","Try again")
        }
        if(!password){
         return   showSwal("pleas enter your password","error","Try again")
        }        
        const isValidPassword =  ValidatePassword(password);
        if(!isValidPassword){
         return   showSwal("Your password is not correct","error","Try again")
        }

        const user = {email: phoneOrEmail,password };

        const res = await fetch('/api/auth/signin',{
            method:'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user),
        });
        const data = await res.json();
        console.log("res",res);

        if(res.status === 200){
            showSwal("Logged in successfully","success","open panel")
        } else if(res.status === 422 || res.status === 401){
            showSwal("Not Found","error","Try Again")
        } else if(res.status === 419){
            showSwal("Eamil or Password is not correct","error","Try Again")
        }
     }
    return (
        <>
        {
            ! isLoginWithOtp ? (            <>
            <div className={styles.body}>
            <div className={styles.circle}></div>
            <div className={styles.card}>
                    <div className={styles.logo}>
                        <a href="./index.html">
                            <img src="./images/logo-dark.png" alt="" className={styles.login_img} />
                        </a>
                    </div>
                <h2>Create Account</h2>
                    <div className={styles.form}>
                        <input type="text"
                        value={phoneOrEmail}
                        onChange= {event =>setPhoneOrEmail(event.target.value)}
                        placeholder="Name /email"
                          />
                        <input type="password"
                         placeholder="Password"
                         value={password}
                         onChange={event => setPassword(event.target.value)}
                          />
                        <button className="" onClick={loginWithPassword}>SIGN UP</button>
                        <Link href="/forget-password" className={styles.forgot_content}>Forgot Password?</Link>
                        <button onClick={() => setIsLoginWithOtp(true)} className="">Login with SMS code</button> 
                    </div>
                <div className={styles.login_footer} >
                 Not a member? 
                    <p onClick={showRegisterForm} className={styles.link}>signup now</p>
                </div>
                <br />
                <hr />
                <Link href="/">
                    Go to Home page
                </Link>
            </div>   
            </div>
            </> )
            :
            (<Sms hideOtpForm={hideOtpForm}></Sms>)
        }
        </>
    );
};

export default Login;
