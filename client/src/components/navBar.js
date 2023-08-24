import React, { useState } from 'react';
import { RxCalendar } from 'react-icons/rx';
import Logo from '../img/logo.svg';
import { Link } from 'react-router-dom';
function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}

export default function Nav({ firstName, lastName }) {
  const [currentDate, setCurrentDate] = useState(getDate())

  return (
    <nav className="flex justify-between pt-4">
      <a href="/dashboard">
        <img src={Logo} width={200} height={200} alt="" />
      </a>
      <ul className="flex items-center justify-end">
        <div className="flex flex-row justify-center items-center mr-5 border-2 rounded-lg border-gray-500 px-5 py-1.5">
          {/* <img src={Logo} alt="" className="backdrop-invert-0"/> */}
          <RxCalendar className=" text-slate-200 text-2xl" />
          <p className="flex px-2 text-slate-200 text-xs md:text-lg font-poppins font-bold">
            {currentDate}
          </p>
        </div>

        <li>
          <Link
            className=" bg-slate-200 py-2 px-3 font-normal font-poppins rounded-lg"
            to="/member-dashboard"
            state={{ firstName: firstName, lastName: lastName }}
          >
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}
