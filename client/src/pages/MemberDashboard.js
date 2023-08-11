import React from 'react';
import Nav from '../components/navBar';
import MonthOverview from '../components/monthOverview';
import MembersOverview from '../components/memberOverview';
import DashboardCard from '../components/DashboardCard';
import MemberUpperDashboard from '../components/MemberUpperDashboard';
// import {useState} from 'react';

export default function MemberDashboard() {
  // const [darkMode, setDarkMode] = useState(false);
  return (
    // <div className={darkMode ? 'dark' : ''}>
    <div>
      <main className="bg-neutral-900 px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <Nav />
          <MemberUpperDashboard />
          <div className="flex flex-col lg:flex-row gap-4">
            {/* <MonthOverview />
            <MembersOverview /> */}
            <DashboardCard>
              <h1 className=" font-bold text-slate-200 font-poppins">My dashboard</h1>
              <p className=" font-thin text-gray-500 font-poppins">
                Kepp track of your achievements
              </p>
            </DashboardCard>
            <DashboardCard>
              <h1 className=" font-bold text-slate-200 font-poppins">My team</h1>
              <p className=" font-thin text-gray-500 font-poppins">
                Check out other's achievements
              </p>
            </DashboardCard>
          </div>
        </section>
      </main>
    </div>
  );
}
