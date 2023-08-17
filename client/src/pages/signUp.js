import React, {useState} from "react";
import { Link } from 'react-router-dom';

export default function SignUp() {
    const [isEmployee, setIsEmployee] = useState(true)



    const handleClick = (e) => {
        if(e.target.id==='employee'){
            setIsEmployee(true)
        } else if(e.target.id==='employer'){
            setIsEmployee(false)
        }     
    }

    console.log(isEmployee)
    return (
        <div className="font-poppins">
            <main className="flex justify-center bg-neutral-950 px-10 md:px-20 lg:px-40">
                <section className="flex min-h-screen">
                    <div className="flex flex-col justify-center items-center lg:-mt-20 mt-10 mb-10">
                        <div className="flex flex-col items-center w-auto border-2 rounded-2xl border-slate-200 px-14 py-14 gap-8">
                            <h1 className="text-slate-200 text-2xl font-bold lg:text-4xl mb-5 text-center">Join as an employee or employer</h1>
                            <div className="flex flex-col lg:flex-row gap-16">
                                <button id="employee" onClick={handleClick }className="w-80 h-auto border-2 rounded-2xl border-slate-200 hover:border-4 cursor-pointer">
                                    <div className={!isEmployee? "visible btn-employee border-slate-200 border-2 rounded-full w-10 h-10 mt-4 ml-64  mb-10":"bg-slate-200 visible btn-employee border-slate-200 border-2 rounded-full w-10 h-10 mt-4 ml-64 mb-10"}></div>
                                    <h1 className="text-slate-200 font-medium text-sm text-left px-10 mb-10 mt-4">I'm an employee, looking to keep track of my achievements</h1>
                                </button>
                                <button id="employer" onClick={handleClick}  className="w-80 h-auto border-2 cursor-pointer rounded-2xl border-slate-200 hover:border-4 ">
                                    <div  className={isEmployee? "visible btn-employee border-slate-200 border-2 rounded-full w-10 h-10 mt-4 ml-64  mb-10":"bg-slate-200 visible btn-employee border-slate-200 border-2 rounded-full w-10 h-10 mt-4 ml-64  mb-10"}></div>
                                    <h1 className="text-slate-200 font-medium text-sm text-left px-10 mb-10 mt-4">I’m an employer, looking to increase motivation and productivity</h1>
                                </button>
                            </div>
                            <Link to="/sign-up-form" state={{isEmployee: isEmployee}} className='flex bg-slate-200 text-neutral-950 py-2 px-20 font-mediumfont-poppins rounded-full lg:text-lg justify-center w-auto cursor-pointer'>Apply as {isEmployee? 'an Employee': 'an Employer'}</Link>
                            <div className="flex flex-row gap-2 justify-center">
                                <p className="text-slate-200 font-normal">Already have an account?</p><a href="/log-in" className="text-slate-200 font-bold">Log In</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}