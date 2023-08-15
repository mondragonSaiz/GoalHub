import React from 'react';
import MonthBars from './monthBars';

export default function MonthOverview() {
  return (
    <div className="w-full">
      <div
        className="border-2 rounded-2xl border-gray-500 py-5 px-7 text-white font-bold text-xl pb-8 font-poppins"
        style={{ height: '32rem' }}
      >
        Month overview
        <MonthBars />
        <div className="flex flex-row justify-around font-poppins">
          <p className="text-slate-200 font-normal text-xs">Jan</p>
          <p className="text-slate-200 font-normal text-xs">Feb</p>
          <p className="text-slate-200 font-normal text-xs">Mar</p>
          <p className="text-slate-200 font-normal text-xs">Apr</p>
          <p className="text-slate-200 font-normal text-xs">May</p>
          <p className="text-slate-200 font-normal text-xs">Jun</p>
          <p className="text-slate-200 font-normal text-xs">Jul</p>
          <p className="text-slate-200 font-normal text-xs">Aug</p>
          <p className="text-slate-200 font-normal text-xs">Sep</p>
          <p className="text-slate-200 font-normal text-xs">Oct</p>
          <p className="text-slate-200 font-normal text-xs">Nov</p>
          <p className="text-slate-200 font-normal text-xs">Dec</p>
        </div>
      </div>
    </div>
  );
}
