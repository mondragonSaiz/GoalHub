import React from 'react';
import MonthBars from './monthBars';
import { useQuery } from '@apollo/client';
import { QUERY_AREAS } from '../utils/queries';

export default function MonthOverview() {
  const { loading, data } = useQuery(QUERY_AREAS);
  if (loading) {
    return <div>Loading...</div>;
  }
  

  const areas = data?.areas;
  let allCompletedTask = areas.map(area=>area.users.map(user=>user.tasks.filter(task=>task.isCompleted).map(tas=> {
    let formatted = new Date(tas.createdAt)
    return formatted.getDay()}))).flat().flat()
  

  return (
    <div className="w-full 2xl:mt-0 xl:mt-32 lg:mt-56 md:mt-10 mt-5">
      <div
        className="border-2 rounded-2xl border-gray-500 py-5 px-7 text-white font-bold text-xl pb-8 font-poppins flex flex-col justify-between"
        style={{ height: '32rem' }}
      >
        Month overview
        <MonthBars allCompletedTask={allCompletedTask}/>
      </div>
    </div>
  );
}
