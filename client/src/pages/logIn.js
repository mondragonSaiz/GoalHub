import React from "react";

export default function logIn() {

    return (
        <div className=" font-poppins">
            <main className="flex justify-center bg-neutral-950">
                <section className="flex min-h-screen">
                    <div className="flex flex-col justify-center items-center lg:-mt-20">
                        <div className="flex flex-col items-center w-auto border-2 rounded-2xl border-slate-200 px-14 py-14 gap-8">
                            <h2 className="text-slate-200 font-bold text-4xl mb-5 text-center">Log in to GoalHub</h2>
                            <form action="" className="flex flex-col gap-6">
                                <input 
                                    placeholder='Username or Email'
                                    type="text"
                                    className=' focus:text-slate-200 text-slate-200 bg-neutral-950 border-2 rounded-lg border-gray-500 text-left py-2 pr-56 pl-4'
                                />
                                <input 
                                    placeholder='Password'
                                    type="password"
                                    className=' focus:text-slate-200 text-slate-200 bg-neutral-950 border-2 rounded-lg border-gray-500 text-left py-2 pr-56 pl-4'
                                />
                                <input type="submit" name="loginSub" id="loginSub" value="Continue with Email" className=" bg-slate-200 text-neutral-950 rounded-lg py-2 px-36 cursor-pointer"/>
                            </form>
                            
                            <div className="flex flex-row gap-4 items-center">
                                <p className=" rotate-90 text-gray-500">|</p>
                                <p className=" text-gray-500 text-sm">Don't have a GoalHub account?</p>
                                <p className=" rotate-90 text-gray-500">|</p>
                            </div>
                            <a href="/sign-up" className='flex text-slate-200 bg-neutral-950 border-2 rounded-lg border-gray-500 font-bold font-poppins justify-center text-center py-2 px-48'>Signup</a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}