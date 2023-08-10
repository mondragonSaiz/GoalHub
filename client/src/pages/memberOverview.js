import React from 'react';
import memberOne from '../img/avatar/avatar1.png';
// import ProgressBar from '../components/progressBar';
import { Progress } from '../components/progress';

export default function membersOverview() {
  const memberImg = memberOne;
  const memberName = 'Lalo P' + '.';
  const memberTeam = 'art team';

  return (
    <div className="flex flex-col w-full font-visby-regular mb-10">
      <div className="border-2 rounded-2xl border-gray-500 py-5 px-7 text-xl">
        <h1 className=" font-bold text-slate-200">Member</h1>
        <p className=" font-thin text-gray-500">Look at our progress!</p>

        <div className="flex flex-row justify-between items-center mt-5">
          <div className="bg-slate-200 rounded-full w-20 h-20 overflow-hidden">
            <img
              src={memberImg}
              alt="memberOne"
              layout="fill"
              bjectFit="cover"
            />
          </div>

          <div>
            <h2 className=" flex font-bold text-slate-200">{memberName}</h2>
            <p className=" font-thin text-gray-500">{memberTeam}</p>
          </div>

          <div className="w-80">
            <Progress value={30} />
            {/* <ProgressBar/> */}
            <div className="flex justify-between mt-1">
              <p className="text-gray-500">0%</p>
              <p className="text-gray-500">100%</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center mt-5">
          <div className="bg-slate-200 rounded-full w-20 h-20 overflow-hidden">
            <img
              src={memberImg}
              alt="memberOne"
              layout="fill"
              bjectFit="cover"
            />
          </div>

          <div>
            <h2 className=" flex font-bold text-slate-200">{memberName}</h2>
            <p className=" font-thin text-gray-500">{memberTeam}</p>
          </div>

          <div className="w-80">
            <Progress value={80} />
            {/* <ProgressBar/> */}
            <div className="flex justify-between mt-1">
              <p className="text-gray-500">0%</p>
              <p className="text-gray-500">100%</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center mt-5">
          <div className="bg-slate-200 rounded-full w-20 h-20 overflow-hidden">
            <img
              src={memberImg}
              alt="memberOne"
              layout="fill"
              bjectFit="cover"
            />
          </div>

          <div>
            <h2 className=" flex font-bold text-slate-200">{memberName}</h2>
            <p className=" font-thin text-gray-500">{memberTeam}</p>
          </div>

          <div className="w-80">
            <Progress value={10} />
            {/* <ProgressBar/> */}
            <div className="flex justify-between mt-1">
              <p className="text-gray-500">0%</p>
              <p className="text-gray-500">100%</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center mt-5">
          <div className="bg-slate-200 rounded-full w-20 h-20 overflow-hidden">
            <img
              src={memberImg}
              alt="memberOne"
              layout="fill"
              bjectFit="cover"
            />
          </div>

          <div>
            <h2 className=" flex font-bold text-slate-200">{memberName}</h2>
            <p className=" font-thin text-gray-500">{memberTeam}</p>
          </div>

          <div className="w-80">
            <Progress value={50} />
            {/* <ProgressBar/> */}
            <div className="flex justify-between mt-1">
              <p className="text-gray-500">0%</p>
              <p className="text-gray-500">100%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
