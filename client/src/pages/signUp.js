import React from "react";
import { Link } from "react-router-dom";

export default function signUp() {
    const typeUser = 'Employee';
    const handleClick = () => {
        console.log('click button')
    }

    return (
        <div>
            <main className="flex justify-center bg-neutral-950 px-10 md:px-20 lg:px-40">
                <section className="flex min-h-screen">
                    <div className="flex flex-col justify-center items-center lg:-mt-20">
                        <div className="flex flex-col items-center w-auto border-2 rounded-2xl border-slate-200 px-14 py-14 gap-8">
                            <h1 className="text-slate-200 font-bold text-4xl mb-5 text-center">Join as an employee or employer</h1>
                            <div className="flex flex-col lg:flex-row gap-16">
                                <div className="w-80 h-auto border-2 rounded-2xl border-slate-200 hover:border-4 cursor-pointer lg:cursor-default">
                                    <button onClick={handleClick} className="visible btn-employee border-slate-200 border-2 rounded-full w-10 h-10 mt-4 ml-64 cursor-pointer mb-10"></button>
                                    <h1 className="text-slate-200 font-medium text-sm text-left px-10 mb-10 mt-4">I'm an employee, looking to keep track of my achievements</h1>
                                </div>
                                <div className="w-80 h-auto border-2 rounded-2xl border-slate-200 hover:border-4 cursor-pointer lg:cursor-default">
                                    <button onClick={handleClick} className="visible btn-employer border-slate-200 border-2 rounded-full w-10 h-10 mt-4 ml-64 cursor-pointer mb-10 text-white"></button>
                                    <h1 className="text-slate-200 font-medium text-sm text-left px-10 mb-10 mt-4">I’m an employer, looking to increase motivation and productivity</h1>
                                </div>
                            </div>
                            <Link href="/" className='flex bg-gray-500 text-neutral-950 py-2 px-20 font-mediumfont-poppins rounded-full lg:text-lg justify-center w-auto cursor-default'>Apply as an {typeUser}</Link>
                            <div className="flex flex-row gap-2 justify-center">
                                <p className="text-slate-200 font-normal">Already have an account?</p><a href="/" className="text-slate-200 font-medium">Log In</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}