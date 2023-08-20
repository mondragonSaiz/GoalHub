import React from 'react';
import memberOne from '../img/avatar/avatar1.png';
export default function SettingsModal() {
  const memberImg = memberOne;
  const memberName = 'David M.';
  const memberTeam = 'dev team';
  return (
    <div
      style={{
        display: 'flex',
        backgroundClip: 'white',
        width: '20rem',
        height: '20rem',
        borderRadius: '8%',
      }}
    >
      <div className="lg:flex lg:flex-col mb-5 flex flex-col items-center">
        <div className=" bg-slate-200 rounded-full lg:w-40 lg:h-40 w-60 h-60 mt-10 overflow-hidden">
          <img
            src={memberImg}
            alt="memberOne"
            layout="fill"
            oobjectfit="cover"
          />
        </div>
        <h2 className="flex justify-end text-slate-200 text-2xl font-boldfont-poppins lg:text-center">
          {memberName}
        </h2>
        <p className="flex justify-end text-gray-500 text-basefont-poppins lg:text-right">
          {memberTeam}
        </p>
      </div>
    </div>
  );
}
