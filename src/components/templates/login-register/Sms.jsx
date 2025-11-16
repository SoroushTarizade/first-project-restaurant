import React from 'react';
import styles from "./Login.module.css"
import Link from 'next/link';
const Sms = ({hideOtpForm}) => {
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
                        <input type="code" placeholder="Code" />
                        <button className="">Continue</button>
                    </div>
                <p onClick={hideOtpForm} className={styles.login_footer} >
                 Cancel
                    {/* <p onClick={showRegisterForm} className={styles.link}>signup now</p> */}
                </p>
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

export default Sms;
