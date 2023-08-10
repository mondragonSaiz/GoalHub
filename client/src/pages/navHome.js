import React from "react";

export default function NavHome() {
    return (
        <nav className='pt-10 flex justify-end'>
            {/* <a href="/"><img src={Logo} width={50} height={50} alt="" /></a> */}
            <ul className='flex items-center'>
                <p className="text-slate-200 py-2 px-3 font-boldfont-poppins">|</p>
                <li><a href="/" className=' text-slate-200 py-2 px-3 font-mediumfont-poppins'>Log In</a></li>
            </ul>
        </nav>
    )
}