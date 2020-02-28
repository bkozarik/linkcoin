import React from 'react';
import '../App.css';

const Footer = props => {
  return (
    <footer>
        <div className="footer__logo">
            <img src="./img/logo-color.png" alt=""/>
        </div>
        <p className="copy">Copyright ©2020 linkcoin.com</p>

        <nav>                   
            <ul>
                <li>About Us</li>
                <li>Agreement</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Support</li>
            </ul>
        </nav>
    </footer>
  );
}

export default Footer;
