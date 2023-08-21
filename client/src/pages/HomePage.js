import React from 'react';
import { Link } from 'react-router-dom';
import NavHome from '../components/navHome';
import avatar2 from '../img/avatar/avatar2.png';
import avatar3 from '../img/avatar/avatar3.png';
import avatar4 from '../img/avatar/avatar4.png';
import avatar5 from '../img/avatar/avatar5.png';

// import {useState} from 'react';
// ! TODO: Remove console logs

export default function HomePage() {
  // const [darkMode, setDarkMode] = useState(false);
  return (
    // <div className={darkMode ? 'dark' : ''}>
    <div className=' font-poppins'>
      <main className="bg-neutral-950 px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <NavHome/>
          <div className='flex flex-col mt-10 lg:flex-row lg:justify-evenly'>
            <div className='text-slate-200 font-bold text-6xl w-5/6 lg:text-8xl lg:w-3/5'>
              <h1 className='font-poppins'>All-in-one goal manager.</h1>
            </div>
            <div className='mt-10 lg:w-1/3'>
              <p className='text-slate-200 font-normal mt-10 w-auto lg:text-lg font-poppins'>
                Write, plan, collaborate and organize your <strong>goals</strong>.
              </p>
              <p className='text-slate-200 font-normal mt-2 w-4/6 lg:text-lg lg:w-11/12 font-poppins'>
                <strong>GoalHub</strong> is all you need - in one space.
              </p>
              <div className='mt-10 flex'>
                <Link to="/sign-up" className=' bg-slate-200 text-neutral-950 py-2 px-6 font-bold font-poppins rounded-lg lg:text-lg cursor-pointer hover:scale-125 transition duration-300 ease-in-out'>Get Started</Link>
              </div>
            </div>
          </div>
          <div className='pb-10 md:pb-0 flex flex-row flex-wrap mt-10 justify-center gap-20 lg:flex-nowrap'>
              <div className='hover:transition hover:scale-125 transition duration-300 ease-in-out'>
                <img src={avatar3} alt="avatar3" className='w-64 h-auto -mb-5 lg:w-72'/>
                <p className=' text-slate-200 font-thin text-center lg:text-base'>Keep tasks <strong className=' font-bold'>organized</strong>.</p>
              </div>
              <div className='hover:transition hover:scale-125 transition duration-300 ease-in-out'>
                <img src={avatar2} alt="avatar2" className='w-64 h-auto -mb-5 lg:w-72'/>
                <p className='  text-slate-200 font-thin text-center lg:text-base'>Find out others <strong className=' font-bold'>goals</strong>.</p>
              </div>
              <div className='hover:transition hover:scale-125 transition duration-300 ease-in-out'>
                <img src={avatar4} alt="avatar4" className='w-64 h-auto -mb-5 lg:w-72'/>
                <p className='  text-slate-200 font-thin text-center lg:text-base'>Increase <strong className=' font-bold'>productivity</strong>.</p> 
              </div>
              <div className='hover:transition hover:scale-125 transition duration-300 ease-in-out'>
                <img src={avatar5} alt="avatar5" className='w-64 h-auto -mb-5 lg:w-72'/>
                <p className='  text-slate-200 font-thin text-center lg:text-base'>Motivate <strong className=' font-bold'>others</strong>.</p>
              </div>
          </div>
        </section>
      </main>
    </div>
  );
}
