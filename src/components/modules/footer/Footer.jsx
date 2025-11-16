import React from 'react';

const Footer = () => {
    return (
        <>
          
    <footer>
      <div className="section__container footer__container">
        <div className="footer__col">
          <a href="#" className="footer__logo">
            <img src="../images/logo-dark.png" alt="logo" />
          </a>
          <p>
            Experience fast delivery, easy pick-up, and a menu crafted to
            satisfy every craving. Eat healthy, stay happy!
          </p>
        </div>
        <div className="footer__col">
          <h4>Product</h4>
          <ul className="footer__links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Releases</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Social</h4>
          <ul className="footer__links">
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Youtube</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Legal</h4>
          <ul className="footer__links">
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Licenses</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bar">
        Copyright © 2024 Web Design Mastery. All rights reserved.
      </div>
    </footer>  
        </>
    );
}

export default Footer;
