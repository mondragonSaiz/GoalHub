import React from 'react';
import NavHome from './navHome';
import avatar2 from '../img/avatar/avatar2.png'
import avatar3 from '../img/avatar/avatar3.png'
import avatar4 from '../img/avatar/avatar4.png'
import avatar5 from '../img/avatar/avatar5.png'
// import {useState} from 'react';

export default function HomePage() {
  // const [darkMode, setDarkMode] = useState(false);
  return (
    // <div className={darkMode ? 'dark' : ''}>
    <div>
      <main className="bg-neutral-950 px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <NavHome/>
          <div className='flex flex-col mt-20 lg:flex-row lg:justify-around lg:mt-10'>
            <div className='text-slate-200 font-bold text-7xl w-5/6 lg:text-9xl lg:w-7/12 lg:pr-48'>
              All-in-one goal manager.
            </div>
            <div className='mt-10 lg:w-1/3'>
              <p className='text-slate-200 font-normal mt-10 w-4/6 lg:text-2xl lg:w-11/12'>
                Write, plan, collaborate and organize your goals.
                GoalHub is all you need - in one space.
              </p>
              <div className='mt-10'>
                <input 
                  placeholder='Enter your email.'
                  type="text"
                  className=' focus:text-slate-200 text-slate-200 bg-neutral-950 border-2 rounded-lg border-gray-500 text-left pl-4 py-1 mr-4 lg:text-lg lg:w-3/5'
                />
                <a href="/" className=' bg-slate-200 text-neutral-950 py-2 px-6 font-medium font-visby-regular rounded-lg lg:text-lg cursor-pointer'>Get Started</a>
              </div>
            </div>
          </div>
          <div className='flex flex-row flex-wrap mt-10 mb-10 justify-center gap-20 lg:mt-28'>
              <div className='flex flex-col'>
                <img src={avatar3} alt="avatar3" className='w-64 h-auto -mb-5 lg:w-96'/>
                <p className=' text-slate-200 font-normal text-center lg:text-xl'>Keep tasks organized</p>
              </div>
              <div>
                <img src={avatar2} alt="avatar2" className='w-64 h-auto -mb-5 lg:w-96'/>
                <p className='  text-slate-200 font-normal text-center lg:text-xl'>Find out others goals</p>
              </div>
              <div>
                <img src={avatar4} alt="avatar4" className='w-64 h-auto -mb-5 lg:w-96'/>
                <p className='  text-slate-200 font-normal text-center lg:text-xl'>Increase productivity</p> 
              </div>
              <div>
                <img src={avatar5} alt="avatar5" className='w-64 h-auto -mb-5 lg:w-96'/>
                <p className='  text-slate-200 font-normal text-center lg:text-xl'>Motivate others</p>
              </div>
          </div>
        </section>
      </main>
    </div>
  );
}
