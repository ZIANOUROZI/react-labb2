import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Menu = () => {
    return (
        <div className='footer-nav'>
            <ul className='footer-links'>
                <li>
                    <Link to='/' className='footer-link'>Hem</Link>
                </li>
                <li>
                    <Link to='/om' className='footer-link'>Om</Link>
                </li>
                <li>
                    <Link to='/kontakt' className='footer-link'>Kontakt</Link>
                </li>
                <li>
                    <Link to='/projekt' className='footer-link'>Projekt</Link>
                </li>
                <li>
                    <Link to='/cv' className='footer-link'>Cv</Link>
                </li>
            </ul>
        </div>
    );
};
export default Menu;