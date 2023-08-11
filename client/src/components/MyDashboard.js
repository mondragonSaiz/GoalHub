import React from 'react';
import memberOne from '../img/avatar/avatar1.png';
// import ProgressBar from '../components/progressBar';
// import { Checkbox } from '@radix-ui/react-checkbox';
import { Checkbox } from './checkbox';

export default function MyDashboard() {
  const memberImg = memberOne;
  const memberName = 'Lalo P' + '.';
  const memberTeam = 'art team';

  return (
    <div className="flex flex-col w-full font-poppins mb-10">
      <div className="border-2 rounded-2xl border-gray-500 py-5 px-7 text-xl">
        <h1 className=" font-bold text-slate-200">My dashboard</h1>
        <p className=" font-thin text-gray-500">
          Keep track of your achievements!
        </p>

        <Checkbox style={{ color: 'red' }} />
        <Checkbox />
        <Checkbox />
      </div>
    </div>
  );
}
