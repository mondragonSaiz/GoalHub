import React from 'react';
import MonthBars from './monthBars';

export default function MonthOverview() {
  return (
    <div className="w-full">
      <div className="border-2 rounded-2xl border-gray-500 py-5 px-7 text-white font-bold text-xl pb-8 font-poppins">
        Month overview
        <MonthBars />
        <div className="flex flex-row justify-around font-poppins">
          <p className="text-slate-200 font-normal text-sm">Jan</p>
          <p className="text-slate-200 font-normal text-sm">Feb</p>
          <p className="text-slate-200 font-normal text-sm">Mar</p>
          <p className="text-slate-200 font-normal text-sm">Apr</p>
          <p className="text-slate-200 font-normal text-sm">May</p>
          <p className="text-slate-200 font-normal text-sm">Jun</p>
          <p className="text-slate-200 font-normal text-sm">Jul</p>
          <p className="text-slate-200 font-normal text-sm">Aug</p>
          <p className="text-slate-200 font-normal text-sm">Sep</p>
          <p className="text-slate-200 font-normal text-sm">Oct</p>
          <p className="text-slate-200 font-normal text-sm">Nov</p>
          <p className="text-slate-200 font-normal text-sm">Dec</p>
        </div>
      </div>
    </div>
  );
}
