'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from "./login.module.css"
import Sms from './Sms';
// import swal from 'sweetalert';
import { showSwal } from '@/utils/helpers';
import { ValidateEmail, ValidatePassword, ValidatePhone } from '@/utils/auth';
const Register = ({showLoginForm}) => {
     const [isRegisterWithPass,setIsRegisterWithPass ] = useState(false);
     const [isRegisterWithOtp,setIsRegisterWithOtp ] = useState(false);
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
     const hideOtpForm = () => setIsRegisterWithOtp(false);
     const signUp = async () => {
        //validation

        if(!name.trim()){
            return  showSwal(
                "Registration was unsuccessful.",
                "error",
                "OK"
            )
        }
        const isValidPhone = ValidatePhone(phone);
        if(!isValidPhone) {
            return showSwal(
                "Registration was unsuccessful,phone error.",
                "error",
                "OK")
        }
        if (email){
            const isValidEmail =ValidateEmail(email);
            if(!isValidEmail){
                return showSwal(
                "Registration was unsuccessful,email error.",
                "error",
                "OK")
            }
        }

        const isValidPassword = ValidatePassword(password);
        if (!isValidPassword){
            return showSwal(
                "Registration was unsuccessful,password error.",
                "error",
                "OK")
        }
        const user = {name,phone,email,password};   


        const res = await fetch('/api/auth/signup', {
            method: "POST",
            headers:{
                "Content-type": "application/json",
            },
            body: JSON.stringify(user),
        });
        console.log(res);
        if(res.status === 201){
            showSwal(
                 "Registration was successful.",
                 "success",
                "open panel"
            )
        } else if(res.status === 422){
            return showSwal(
                "this userwas exist.",
                "error",
                "OK")
        }
     }
    return (
        <>
        {
            !isRegisterWithOtp ? (
                <>
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
                    <input type="text" placeholder="Name" 
                    value={name}
                    onChange={event => setName(event.target.value)}
                    />
                    <input type="phone" placeholder="Phone Number" 
                    value={phone}
                    onChange={event => setPhone(event.target.value)}
                    />
                    <input type="email" placeholder="Email" 
                    value={email}
                    onChange={event => setEmail(event.target.value)} />
                    {
                        isRegisterWithPass && (
                            <input type="password" placeholder="Password" 
                    value={password}
                    onChange={event => setPassword(event.target.value)} />
                        ) 
                    }
                    <button onClick={()=>{
                        if (isRegisterWithPass) {
                            signUp()
                        } else{
                            setIsRegisterWithPass(true);
                        }
                    }} className="">SIGN up with password</button>
                    <button onClick={() => setIsRegisterWithOtp (true)} className="">SING up  with SMS code</button>

                </div>
            <div className={styles.login_footer}>
                Already have an account ,
                <p onClick={showLoginForm} className={styles.login_footer_link}>Login now</p> 
            </div>
            <br />
            <hr />
            <Link href="/">
                Go to Home page
            </Link>
        </div>   
        </div>
                </>
            ) : (
                <Sms hideOtpForm={hideOtpForm}></Sms>
            )
        }
        </>
    );
};

export default Register;
