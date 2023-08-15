import React from 'react';
import memberOne from '../img/avatar/avatar1.png';
// import ProgressBar from '../components/progressBar';
// import { Checkbox } from '@radix-ui/react-checkbox';
import { Checkbox } from './checkbox';
import  {Link}  from 'react-router-dom';
 
export default function MyDashboard() {
  const memberImg = memberOne;
  const memberName = 'Lalo P' + '.';
  const memberTeam = 'art team';

  return (
    <div className="flex flex-col w-full font-poppins mb-10">
      <Link to="/new-task">
        <div className="flex flex-row justify-between border-2 rounded-2xl border-gray-500 py-5 px-7 text-xl"> 
          <div className='flex flex-col items-'> 
            
            <h1 className="font-bold text-slate-200">Create New Task</h1>
            <p className="font-thin text-gray-500">
              Assign tasks to your team members.
            </p>
          </div>
          <div className='flex justify-end'> 
            <h2 className="font-bold text-6xl text-slate-200" >  + </h2>
          </div>
          </div>
        </Link>
        <div className="mt-4 p-5 border-2 rounded-2xl border-gray-500" >
        <div className="flex flex-row justify-between items-center">
         
          <div className="flex flex-col justify-between items-center mt-5">
            <h2
              className=" flex font-bold text-slate-200"
              style={{ paddingBottom: '0.8rem' }}
            >
              Nº
            </h2>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              1
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              2
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              3
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              4
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              5
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              6
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              7
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              8
            </p>
          </div>
          <div className="flex flex-col justify-between mt-5">
            <h2
              className=" flex font-bold text-slate-200"
              style={{ paddingBottom: '0.8rem' }}
            >
              Task
            </h2>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              Design User Interface Mockups
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              Develop User Registration System
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              Build Goal Creation Feature
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              Implement Progress Tracking
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
               Integrate Notification System
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              Enable Social Sharing
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              Create Analytics Dashboard
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              Conduct User Testing
            </p>
          </div>
          <div className="flex flex-col justify-between items-center mt-5">
            <h2
              className=" flex font-bold text-slate-200"
              style={{ paddingBottom: '0.8rem' }}
            >
              Assigned to:
            </h2>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              Eduardo
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              Daniel
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              David
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              Carlos
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              Hector
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              Alejandro
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              Samuel
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              Carlos
            </p>
          </div>
          <div className="flex flex-col justify-between items-center mt-5">
            <div style={{ visibility: 'hidden', paddingBottom: '0.8rem' }}>
              <Checkbox />
            </div>
            <div style={{ paddingBottom: '0.8rem' }}>
              <Checkbox />
            </div>
            <div style={{ paddingBottom: '0.8rem' }}>
              <Checkbox />
            </div>
            <div style={{ paddingBottom: '0.8rem' }}>
              <Checkbox />
            </div>
            <div style={{ paddingBottom: '0.8rem' }}>
              <Checkbox />
            </div>
            <div style={{ paddingBottom: '0.8rem' }}>
              <Checkbox />
            </div>
            <div style={{ paddingBottom: '0.8rem' }}>
              <Checkbox />
            </div>
            <div style={{ paddingBottom: '0.8rem' }}>
              <Checkbox />
            </div>
            <div style={{ paddingBottom: '0.8rem' }}>
              <Checkbox />
            </div>
          </div>
        </div>

        {/* <div class="grid grid-cols-4 gap-1" style={{ fontSize: 'smaller' }}>
          <div>
            <div style={{ visibility: 'hidden' }}>check</div>
            <div>
              <Checkbox />
            </div>
            <div>
              <Checkbox />
            </div>
          </div>
          <div>Status</div>
          <div>achievement</div>
          <div> Hours</div>
        </div> */}
      </div>
    </div>
  );
}
