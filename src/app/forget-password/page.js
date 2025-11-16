import React from 'react';
import styles from "@/styles/login-register.module.css"
import Link from 'next/link';
const ForgetPass = () => {
    return (
        <>
            <div className={styles.body}>
            <div className={styles.circle}></div>
            <div className={styles.card}>
                    <div className={styles.logo}>
                        <a href="./index.html">
                            <img src="./images/logo-dark.png" alt="" className={styles.login_img} />
                        </a>
                    </div>
                <h2>Login With SMS </h2>
                    <div className={styles.form}>
                        <input type="code" placeholder="Phone Number /Email" />
                        <button className="">Continue </button>
                    </div>
                <Link href="./login-register" className={styles.login_footer} >
                 Sign in
                    {/* <p onClick={showRegisterForm} className={styles.link}>signup now</p> */}
                </Link>
                <br />
                <hr />
                <Link href="/">
                    Go to Home page
                </Link>
            </div>   
            </div>  
        </>
    );
}

export default ForgetPass;
