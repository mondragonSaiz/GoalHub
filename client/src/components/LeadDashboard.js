import React from 'react';
import memberOne from '../img/avatar/avatar1.png';
// import ProgressBar from '../components/progressBar';
// import { Checkbox } from '@radix-ui/react-checkbox';
import { Checkbox } from './checkbox';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_AREA } from '../utils/queries';

export default function MyDashboard({_id}) {
  const { loading, data} = useQuery(QUERY_AREA, {variables: { id: _id },})
  if (loading) {
    return <div>Loading...</div>;
  }
  let index =1;
  const area = data.area
  console.log(area.users)
  const memberImg = memberOne;
  const memberName = 'Lalo P' + '.';
  const memberTeam = 'art team';

  return (
    <div className="flex flex-col w-full font-poppins mb-10">
      <Link to="/new-task">
        <div className="flex flex-row justify-between border-2 rounded-2xl border-gray-500 py-5 px-7 text-xl">
          <div className="flex flex-col items-">
            <h1 className="font-bold text-slate-200">Create New Task</h1>
            <p className="font-thin text-gray-500">
              Assign tasks to your team members.
            </p>
          </div>
          <div className="flex justify-end">
            <h2 className="font-bold text-6xl text-slate-200"> + </h2>
          </div>
        </div>
      </Link>
      <div className="mt-4 p-5 border-2 rounded-2xl border-gray-500">
      <div className='flex justify-between items-center'>
           <h2
              className=" flex font-bold text-slate-200"
              style={{ paddingBottom: '0.8rem' }}
            >
              Nº
            </h2>
            <h2
              className=" flex font-bold text-slate-200"
              style={{ paddingBottom: '0.8rem' }}
            >
              Owner
            </h2>
            <h2
              className=" flex font-bold text-slate-200"
              style={{ paddingBottom: '0.8rem' }}
            >
              Task
            </h2>
            <h2
              className=" flex font-bold text-slate-200"
              style={{ paddingBottom: '0.8rem' }}
            >
              Status
            </h2>
      </div>
        {area.users.map((user,i)=>{
          return (
            <div >
            {user.tasks.map((task,j)=>{
              return (
                <div className='flex justify-between items-center'>
                   <p
                    className=" font-thin text-gray-500"
                    style={{ paddingBottom: '0.8rem' }}>
                    {index++}
                  </p>
                  <p
                    className=" font-thin text-gray-500"
                    style={{ paddingBottom: '0.8rem' }} >
                    {user.firstName}
                  </p>
                  <p
                    className=" font-thin text-gray-500"
                    style={{ paddingBottom: '0.8rem' }}>
                    {task.name}
                  </p>
                  <p
                    className=" font-thin text-gray-500"
                    style={{ paddingBottom: '0.8rem' }}>
                    {task.isCompleted ? "Completed": "Pending"}
                  </p>
                </div>
              )
            })}
            </div>
          )
        })}
       
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
