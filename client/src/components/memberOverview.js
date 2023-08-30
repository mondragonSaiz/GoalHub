import React from 'react';
import memberOne from '../img/avatar/avatar1.png';
import { Progress } from './progress';
import { useQuery } from '@apollo/client';
import { QUERY_AREA } from '../utils/queries';

export default function MembersOverview({ _id }) {
  const { loading, data } = useQuery(QUERY_AREA, { variables: { id: _id } });
  if (loading) {
    return <div>Loading...</div>;
  }
  const area = data.area;
  const memberImg = memberOne;
  const memberTeam = `${area.name} team`;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col w-full font-poppins mb-10">
      <div
        className="border-2 rounded-2xl border-gray-500 py-5 px-7 text-xl overflow-auto"
        style={{ height: '32rem' }}
      >
        <h1 className=" font-bold text-slate-200">Member</h1>
        <p className=" font-thin text-gray-500">Look at our progress!</p>
        {area.users.map((user, index) => {
          return (
            <div
              key={index}
              className="flex flex-row justify-between items-center mt-5"
            >
              <div className="bg-slate-200 rounded-full w-20 h-20 overflow-hidden">
                <img
                  src={user.userIcon}
                  alt="memberOne"
                  layout="fill"
                  objectfit="cover"
                />
              </div>

              <div>
                <h2 className=" flex font-bold text-slate-200">{`${
                  user.firstName.slice(0, 1).toUpperCase() +
                  user.firstName.slice(1).toLowerCase()
                } ${user.lastName.slice(0, 1).toUpperCase()}.`}</h2>
                <p className=" font-thin text-gray-500">{memberTeam}</p>
              </div>

              {user.tasks.length !== 0 ? (
                <div className="w-80">
                  <Progress
                    value={
                      (user.tasks.filter((task) => task.isCompleted).length /
                        user.tasks.length) *
                      100
                    }
                  />
                  {/* <ProgressBar/> */}
                  <div className="flex justify-between mt-1">
                    <p className="text-gray-500">0%</p>
                    <p className="text-gray-500">100%</p>
                  </div>
                </div>
              ) : (
                <div className="w-80">
                  <Progress
                    value={
                      (user.tasks.filter((task) => task.isCompleted).length /
                        user.tasks.length) *
                      100
                    }
                  />
                  {/* <ProgressBar/> */}
                  <div className="flex justify-center mt-1">
                    <p className="text-gray-500">No Task assigned</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
