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
<<<<<<< HEAD
                <p className="text-slate-200 py-2 px-3 font-boldfont-poppins">|</p>
                <li><a href="/log-in" className=' text-slate-200 py-2 px-3 font-mediumfont-poppins'>{Auth.loggedIn() ? 'Dashboard':'Log In'}</a></li>
=======
                <p className="text-slate-200 py-2 px-3 font-bold font-poppins">|</p>
                <li><a href="/log-in" className=' text-slate-200 py-2 px-3 font-mediumfont-poppins'>Log In</a></li>
>>>>>>> 7afaaca8d553183f4ffe3257b1798370c51b0ceb
            </ul>
        </nav>
    )
}