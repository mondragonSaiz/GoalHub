import React from "react";
import Logo from "../img/logo.svg";
import Auth from '../utils/auth';


export default function NavHome() {
    return (
        <nav className='flex justify-between'>
            <a href="/">
                <img 
                    src={Logo} 
                    width={200} 
                    eight={200} 
                    alt="logo" 
                />
            </a>
            <ul className='flex items-center'>
                <p className="text-slate-200 py-2 px-3 font-boldfont-poppins">|</p>
                <li><a href="/log-in" className=' text-slate-200 py-2 px-3 font-mediumfont-poppins'>{Auth.loggedIn() ? 'Dashboard':'Log In'}</a></li>
            </ul>
        </nav>
    )
}