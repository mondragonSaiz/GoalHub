import React from "react";

export default function monthBars() {
    return (
      <div> 
        <div className="flex flex-row w-full mt-2 justify-around rotate-180">
            <div className="relative progress-bar bg-slate-200 w-10 h-72 mb-1 rounded-lg">
                <div className="progress-bar-fill"></div>
            </div>
            <div className="relative progress-bar bg-slate-200 w-10 h-96 mb-1 rounded-lg">
                <div className="progress-bar-fill"></div>
            </div>
            <div className="relative progress-bar bg-slate-200 w-10 h-80 mb-1 rounded-lg">
                <div className="progress-bar-fill"></div>
            </div>
            <div className="relative progress-bar bg-slate-200 w-10 h-80 mb-1 rounded-lg">
                <div className="progress-bar-fill"></div>
            </div>
            <div className="relative progress-bar bg-slate-200 w-10 h-96 mb-1 rounded-lg">
                <div className="progress-bar-fill"></div>
            </div>
            <div className="relative progress-bar bg-slate-200 w-10 h-96 mb-1 rounded-lg">
                <div className="progress-bar-fill"></div>
            </div>
            <div className="relative progress-bar bg-slate-200 w-10 h-72 mb-1 rounded-lg">
                <div className="progress-bar-fill"></div>
            </div>
            <div className="relative progress-bar bg-slate-200 w-10 h-96 mb-1 rounded-lg">
                <div className="progress-bar-fill"></div>
            </div>
            <div className="relative progress-bar bg-slate-200 w-10 h-96 mb-1 rounded-lg">
                <div className="progress-bar-fill"></div>
            </div>
            <div className="relative progress-bar bg-slate-200 w-10 h-96 mb-1 rounded-lg">
                <div className="progress-bar-fill"></div>
            </div>
            <div className="relative progress-bar bg-slate-200 w-10 h-80 mb-1 rounded-lg">
                <div className="progress-bar-fill"></div>
            </div>
            <div className="relative progress-bar bg-slate-200 w-10 h-72 mb-1 rounded-lg">
                <div className="progress-bar-fill"></div>
            </div>
         </div>
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
       
        
    )
}