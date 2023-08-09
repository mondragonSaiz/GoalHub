import React from 'react';
import {RxCalendar} from "react-icons/rx";

export default function Nav() {
    const Date = ('Aug 08, 2023')
    return (
        <nav className='pt-10 flex justify-end'>
            {/* <a href="/"><img src={Logo} width={50} height={50} alt="" /></a> */}
            <ul className='flex items-center'>
                <div className='flex flex-row justify-center items-center mr-5 border-2 rounded-lg border-gray-500 px-5 py-1.5'>
                    <RxCalendar className=' text-slate-200'/>
                    <p className='flex px-2 text-slate-200 font-visby-regular font-bold'>{Date}</p>
                </div>
                <li><a href="/" className=' bg-slate-200 py-2 px-3 font-normal font-visby-regular rounded-lg'>profile</a></li>
            </ul>
        </nav>
    )
}