import React from 'react';
import { RxCalendar } from 'react-icons/rx';
import Logo from '../img/logo.svg';
import { Link } from 'react-router-dom';
export default function Nav({firstName, lastName}) {
  const Date = 'Aug 08, 2023';
  return (
    <nav className="flex justify-between">
      <a href="/dashboard">
        <img src={Logo} width={200} height={200} alt="" />
      </a>
      <ul className="flex items-center justify-end">
        <div className="flex flex-row justify-center items-center mr-5 border-2 rounded-lg border-gray-500 px-5 py-1.5">
          {/* <img src={Logo} alt="" className="backdrop-invert-0"/> */}
          <RxCalendar className=" text-slate-200" />
          <p className="flex px-2 text-slate-200 font-poppins font-bold">
            {Date}
          </p>
        </div>

        <li>
          <Link
            className=" bg-slate-200 py-2 px-3 font-normal font-poppins rounded-lg"
            to="/member-dashboard"
            state={{firstName: firstName, lastName: lastName}}
          >
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}
