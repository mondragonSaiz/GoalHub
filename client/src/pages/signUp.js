import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import { Navigate } from 'react-router-dom';

export default function SignUp() {
  const [isEmployee, setIsEmployee] = useState(true);

  if (Auth.loggedIn()) {
    return <Navigate to="/dashboard" />;
  }

  const handleClick = (e) => {
    if (e.target.id === 'employee') {
      setIsEmployee(true);
    } else if (e.target.id === 'employer') {
      setIsEmployee(false);
    }
  };

  // ! TODO: Remove this console.log
  console.log(isEmployee);
  return (
    <div className="font-poppins bg-neutral-950">
      <main className="flex justify-center items-center min-h-screen px-8 md:px-20 lg:px-40">
        <section className="flex">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-center border-2 rounded-2xl border-slate-200 py-8 px-4 md:px-20 lg:px-14 lg:py-14 gap-8">
              <h1 className="text-slate-200 text-2xl font-bold lg:text-4xl text-center">
                Join as an employee or employer
              </h1>
              <div className="flex flex-col md:flex-row lg:flex-row px-4  md:px-0 gap-8">
                <button
                  id="employee"
                  onClick={handleClick}
                  className="w-56 h-[136px] px-4 py-4 gap-4 border-2 rounded-2xl border-slate-200 lg:hover:border-sky-400 cursor-pointer focus:outline-none flex flex-row-reverse items-center flex-shrink-0"
                  > 
                  <div
                    className={
                      !isEmployee
                        ? 'visible btn-employee border-slate-200 border-2 rounded-full w-8 h-8 flex-shrink-0'
                        : 'visible btn-employee border-slate-200 bg-slate-200 border-2 rounded-full w-8 h-8 flex-shrink-0'
                    }
                  ></div>
                  <h1 className="text-slate-200 font-medium text-sm text-left flex-grow max-w-xs">
                    I'm an employee, looking to keep track of my achievements
                  </h1>
                </button>
                <button
                  id="employer"
                  onClick={handleClick}
                  className="w-56 h-auto px-4 py-4 gap-4 border-2 rounded-2xl border-slate-200 lg:hover:border-sky-400 cursor-pointer focus:outline-none flex flex-row-reverse items-center flex-shrink-0"
                >
                  <div
                    className={
                      isEmployee
                        ? 'visible btn-employee border-slate-200 border-2 rounded-full w-8 h-8 shrink-0'
                        : 'visible btn-employee border-slate-200 bg-slate-200 border-2 rounded-full w-8 h-8 flex-shrink-0'
                    }
                  ></div>
                  <h1 className="text-slate-200 font-medium text-sm text-left flex-grow max-w-xs">
                    I’m an employer, looking to increase motivation and
                    productivity on my team
                  </h1>
                </button>
              </div>
              <div className="flex text-center px-4">
                <Link
                  to="/sign-up-form"
                  state={{ isEmployee: isEmployee }}
                  className="flex bg-slate-200 text-neutral-950 py-2 px-4 font-bold font-poppins rounded-full lg:text-lg justify-center w-48 cursor-pointer"
                >
                  Apply as {isEmployee ? 'an Employee' : 'an Employer'}
                </Link>
              </div>
              <div className="flex flex-col justify-center text-center">
                <p className="text-slate-200 font-normal">
                  Already have an account?
                </p>
                <a href="/log-in" className="text-slate-200 font-bold">
                  Log In
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
