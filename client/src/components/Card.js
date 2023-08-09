import React from 'react';

export default function Card({ children }) {
  return (
    <div className="border-2 rounded-xl border-gray-500 py-5 px-7 h-full lg:w-80">
      {children}
    </div>
  );
}
