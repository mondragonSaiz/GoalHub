import React from 'react';
import Nav from '../components/navBar';
import UpperDashboard from '../components/upperDashboard';
import MonthOverview from '../components/monthOverview';
import MembersOverview from '../components/memberOverview';
// import {useState} from 'react';

export default function Dashboard() {
  // const [darkMode, setDarkMode] = useState(false);
  return (
    // <div className={darkMode ? 'dark' : ''}>
    <div className=' font-poppins'>
      <main className="bg-neutral-900 px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <Nav />
          <UpperDashboard />
          <div className="flex flex-col lg:flex-row gap-4">
            <MonthOverview />
            <MembersOverview />
          </div>
        </section>
      </main>
    </div>
  );
}
