import React from 'react';
import memberOne from '../img/avatar/avatar1.png';
import { Progress } from './progress';
import Card from './Card';
import { useQuery } from '@apollo/client';
import { QUERY_AREAS } from '../utils/queries';
export default function UpperDashboard({
  firstName,
  lastName,
  isEmployee,
  areaName,
  userIcon,
  id,
}) {
  /*let allTask=area.users.reduce((acum, task)=>{
    return acum+task.tasks.length},0 )
  let completedTask=area.users.map(user=>user.tasks.filter(comp=>comp.isCompleted)).reduce((acum,task)=>acum+task.length,0)*/
  

  const memberImg = memberOne;
  const memberName = `${
    firstName.slice(0, 1).toUpperCase() + firstName.slice(1).toLowerCase()
  } ${lastName.slice(0, 1).toUpperCase()}.`;

  const { loading, data } = useQuery(QUERY_AREAS);
  if (loading) {
    return <div>Loading...</div>;
  }
  
  const areas = data?.areas;
  
  
      return (
        <section>
          <div className="lg:flex-row-reverse lg:flex md:flex-col justify-between mt-5 mb-1">
            <div className="lg:flex lg:flex-col mb-5 flex flex-col items-center">
              <div className=" bg-slate-200 rounded-full lg:w-40 lg:h-40 w-60 h-60 mt-10 overflow-hidden">
                <img
                  src={userIcon}
                  alt="memberOne"
                  layout="fill"
                  oobjectfit="cover"
                />
              </div>
              <h2 className="flex justify-end text-slate-200 text-2xl font-boldfont-poppins lg:text-center">
                {memberName}
              </h2>
    
              <p className="flex justify-end text-gray-500 text-basefont-poppins lg:text-right">
                {areaName}
              </p>
            </div>
            <div className="flex flex-col lg:items-center gap-10 lg:flex-row lg:h-40 lg:mt-8">
             {areas.map(area=>{
                let allTask = area.users.reduce((acum, task) => {
                  
                  return acum + task.tasks.length;}, 0);
                  let completedTask = area.users.map((user) => user.tasks.filter((comp) => comp.isCompleted)).reduce((acum, task) => acum + task.length, 0);
                return (
                <>
                  
               {areaName===area.name ? ( 
                <>
                <div className=' order-first'>
                  <Card>
                    <h2 className="text-slate-200 font-bold text-xl mb-2 ">
                      Achievements completed
                    </h2>
                    <h1 className="text-slate-200 font-bold text-4xl mb-2">{`${completedTask}/${allTask}`}</h1>
                    <p className="text-gray-500">We are almost there!</p>
                  </Card>
                  </div>
                  <div className=' order-first'>
                  <Card>
                    <h2 className="text-slate-200 font-bold text-xl ">{area.name}</h2>
                    <p className="text-gray-500 mb-4">overview</p>
                    <Progress value={completedTask/allTask*100} />
                    <div className="flex justify-between mt-1">
                      <p className="text-gray-500">0%</p>
                      <p className="text-gray-500">100%</p>
                    </div>
                  </Card>
                  </div>
                </>):
                <Card>
                  <h2 className="text-slate-200 font-bold text-xl ">{area.name}</h2>
                  <p className="text-gray-500 mb-4">overview</p>
                  <Progress value={completedTask/allTask*100} />
                  <div className="flex justify-between mt-1">
                    <p className="text-gray-500">0%</p>
                    <p className="text-gray-500">100%</p>
                  </div>
                </Card>
                }
               
                
                
              </>)})}  
              </div>    
         </div> 
       </section>
      );
 
}