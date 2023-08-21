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
    <div className="w-full">
      <div
        className="border-2 rounded-2xl border-gray-500 py-5 px-7 text-white font-bold text-xl pb-8 font-poppins"
        style={{ height: '32rem' }}
      >
        Month overview
        <MonthBars allCompletedTask={allCompletedTask}/>
       
      </div>
    </div>
  );
}
