import React from "react";
import {Link} from "react-router-dom";
import "./Menu.css"
const Menu=()=>{
    return(
        <div className='navbar'>
            <div className='menu-container'>
                <ul className='nav-links'> 
                    <li>
                        <Link to='/' className='nav-link'>
                            Hem
                            </Link>
                        <Link to = '/om'className='nav-link'>
                            Om
                            </Link>
                        <Link to = '/kontakt' className='nav-link'>
                            Kontakt
                            </Link>
                        <Link to = '/projekt' className='nav-link'>
                            Projekt
                            </Link>
                        <Link to = '/cv' className='nav-link'>
                            Cv
                            </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Menu;