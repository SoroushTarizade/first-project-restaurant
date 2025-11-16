"use client";
import styles from '@/styles/login-register.module.css';
import React, { useState } from 'react';
import { authTypes } from '@/utils/constants';
import Link from 'next/link';
import Login from '@/components/templates/login-register/Login';
import Register from '@/components/templates/login-register/Register';
const login_register = () => {

    const [authType, setAuthType] = useState(authTypes.LOGIN);

    const showRegisterForm = () => setAuthType(authTypes.REGISTER);
    const showLoginForm = () => setAuthType(authTypes.LOGIN);

    return (
        <div className={styles.body}>
        <div className={styles.circle}></div>
        {
            authType === authTypes.REGISTER ?
            <Register  showLoginForm = {showLoginForm} />
            :
            <Login showRegisterForm = {showRegisterForm} />
        }
        </div>
    );
}

export default login_register;

