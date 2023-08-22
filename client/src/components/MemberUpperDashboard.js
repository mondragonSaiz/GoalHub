import React, { useState } from 'react';
import memberOne from '../img/avatar/avatar1.png';
import { Progress } from './progress';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_AREA } from '../utils/queries';

export default function MemberUpperDashboard({
  firstName,
  lastName,
  tasks,
  areaName,
  userIcon,
  _id,
}) {
  const [first, setFirst] = useState(firstName);

  const { loading, data } = useQuery(QUERY_AREA, { variables: { id: _id } });
  if (loading) {
    return <div>Loading...</div>;
  }
  const area = data.area;
  let allTask = area.users.reduce((acum, task) => {
    return acum + task.tasks.length;
  }, 0);
  let teamCompletedTask = area.users
    .map((user) => user.tasks.filter((comp) => comp.isCompleted))
    .reduce((acum, task) => acum + task.length, 0);

  let completedTask = tasks.filter((task) => task.isCompleted).length;

  const memberImg = memberOne;
  const memberName = `${
    firstName.slice(0, 1).toUpperCase() + firstName.slice(1).toLowerCase()
  } ${lastName.slice(0, 1).toUpperCase()}.`;
  const memberTeam = 'art team';
  return (
    <section className=" font-poppins">
      <div className="2xl:overflow-auto xl:flex-row-reverse xl:flex md:flex-col justify-between mt-5 mb-1">
        <div className="lg:flex lg:flex-col mb-5 flex flex-col items-center">
          <div className=" bg-slate-200 rounded-full xl:w-48 xl:h-48 lg:w-48 lg:h-48 w-60 h-60 mt-10 xl:mt-0 overflow-hidden">
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
          {/* <p className="flex justify-end text-gray-500 text-basefont-poppins lg:text-right">
            {memberTeam}
          </p> */}
          <Link
            className="flex justify-end text-gray-500 text-basefont-poppins lg:text-right"
            to={`/settings`}
            state={{ first: first, lastName: lastName, area: areaName }}
          >
            Settings
          </Link>
        </div>
        <div className="flex flex-col lg:items-center gap-10 lg:flex-row lg:h-40 lg:mt-8 overflow-auto">
          <Card>
            <h2 className="text-slate-200 font-bold text-xl mb-2 lg:text-base">
              Personal Achievements completed
            </h2>
            <h1 className="text-slate-200 font-bold text-4xl mb-2 lg:text-base">{`${completedTask}/${tasks.length}`}</h1>
            <p className="text-gray-500">We are almost there!</p>
          </Card>
          <Card>
            <h2 className="text-slate-200 font-bold text-xl">My progress</h2>
            <p className="text-gray-500 mb-4">overview</p>
            {/* <ProgressBar/> */}
            <Progress value={(completedTask / tasks.length) * 100} />
            <div className="flex justify-between mt-1">
              <p className="text-gray-500">0%</p>
              <p className="text-gray-500">100%</p>
            </div>
          </Card>
          <Card>
            <h2 className="text-slate-200 font-bold text-xl">
              {areaName + ' Team'}
            </h2>
            <p className="text-gray-500 mb-4">overview</p>
            {/* <ProgressBar/> */}
            <Progress value={(teamCompletedTask / allTask) * 100} />
            <div className="flex justify-between mt-1">
              <p className="text-gray-500">0%</p>
              <p className="text-gray-500">100%</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
