import React from 'react';
import memberOne from '../img/avatar/avatar1.png';
import { Progress } from '../pages/progress';

export default function upperDashboard() {
  const memberImg = memberOne;
  const memberName = 'Eduardo P.';
  const memberTeam = 'art team';
  return (
    <section>
      <div className="lg:flex-row-reverse lg:flex justify-evenly mt-1 mb-1">
        <div className="lg:flex lg:flex-col mb-5 flex flex-col items-center">
          <div className=" bg-slate-200 rounded-full lg:w-40 lg:h-40 w-60 h-60 mt-10 overflow-hidden">
            <img
              src={memberImg}
              alt="memberOne"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h2 className="flex justify-end text-slate-200 text-2xl font-bold font-visby-regular lg:text-center">
            {memberName}
          </h2>
          <p className="flex justify-end text-gray-500 text-base font-visby-regular lg:text-right">
            {memberTeam}
          </p>
        </div>
        <div className="flex flex-col lg:items-center gap-10 lg:flex-row lg:h-40 lg:mt-8">
          <div className="border-2 rounded-xl border-gray-500 py-5 px-7 h-full">
            <h2 className="text-slate-200 font-bold text-xl mb-2">
              Achievements completed
            </h2>
            <h1 className="text-slate-200 font-bold text-4xl mb-2">25/45</h1>
            <p className="text-gray-500">We are almost there!</p>
          </div>
          <div className="border-2 rounded-xl border-gray-500 py-5 px-7 h-full lg:w-80">
            <h2 className="text-slate-200 font-bold text-xl">Media Team</h2>
            <p className="text-gray-500 mb-4">overview</p>
            {/* <ProgressBar/> */}
            <Progress value={50} />
            <div className="flex justify-between mt-1">
              <p className="text-gray-500">0%</p>
              <p className="text-gray-500">100%</p>
            </div>
          </div>
          <div className="border-2 rounded-xl border-gray-500 py-5 px-7 h-full lg:w-80">
            <h2 className="text-slate-200 font-bold text-xl">Art Team</h2>
            <p className="text-gray-500 mb-4">overview</p>
            {/* <ProgressBar/> */}
            <Progress value={30} />
            <div className="flex justify-between mt-1">
              <p className="text-gray-500">0%</p>
              <p className="text-gray-500">100%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
