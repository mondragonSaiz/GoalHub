import React from "react";

export default function progressBar() {
    return (
        <div className="flex w-full lg:w-80 mt-2 justify-start">
            <div className="relative progress-bar bg-slate-200 w-52 h-8 mb-1 rounded-lg">
                <div className="progress-bar-fill"></div>
            </div>
        </div>
    )
}