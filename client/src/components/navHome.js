import React from "react";
import Logo from "../img/logo.svg";

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
                <p className="text-slate-200 py-2 px-3 font-bold font-poppins">|</p>
                <li><a href="/log-in" className=' text-slate-200 py-2 px-3 font-mediumfont-poppins'>Log In</a></li>
            </ul>
        </nav>
    )
}