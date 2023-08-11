import React from 'react';

export default function DashboardCard({ children }) {
  return (
    <div className="flex flex-col w-fullfont-poppins mb-10">
      <div className="border-2 rounded-2xl border-gray-500 py-5 px-7 text-xl">
        {children}
      </div>
    </div>
  );
}
