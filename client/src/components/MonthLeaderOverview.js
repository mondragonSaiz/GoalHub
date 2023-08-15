import React from "react";

export default function MonthLeader() {
    return (
      <div>
        <div className="flex flex-row w-full mt-2 justify-around rotate-180">
           
            <div className="relative progress-bar bg-slate-200 w-5 h-6 mb-1 rounded-lg">
                <div className="progress-bar-fill"></div>
            </div>
            <div className="relative progress-bar bg-slate-200 w-5 h-7 mb-1 rounded-lg">
                <div className="progress-bar-fill"></div>
            </div>
            <div className="relative progress-bar bg-slate-200 w-5 h-6 mb-1 rounded-lg">
                <div className="progress-bar-fill"></div>
            </div>
            <div className="relative progress-bar bg-slate-200 w-5 h-9 mb-1 rounded-lg">
                <div className="progress-bar-fill"></div>
            </div>
            <div className="relative progress-bar bg-slate-200 w-5 h-16 mb-1 rounded-lg">
                <div className="progress-bar-fill"></div>
            </div>
            <div className="relative progress-bar bg-slate-200 w-5 h-17 mb-1 rounded-lg">
                <div className="progress-bar-fill"></div>
            </div>
            <div className="relative progress-bar bg-slate-200 w-5 h-12 mb-1 rounded-lg">
                <div className="progress-bar-fill"></div>
            </div>
            </div>
               <div className="flex flex-row pt-2 justify-around font-poppins">
               <p className="text-slate-200 font-normal text-xs">M</p>
               <p className="text-slate-200 font-normal text-xs">T</p>
               <p className="text-slate-200 font-normal text-xs">W</p>
               <p className="text-slate-200 font-normal text-xs">T</p>
               <p className="text-slate-200 font-normal text-xs">F</p>
               <p className="text-slate-200 font-normal text-xs">S</p>
               <p className="text-slate-200 font-normal text-xs">S</p>
              
           </div>
         </div>    
    )
}