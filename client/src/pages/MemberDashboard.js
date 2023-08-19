import React from 'react';
import Nav from '../components/navBar';
import MembersOverview from '../components/memberOverview';
import MonthOverview from '../components/monthOverview';
import DashboardCard from '../components/DashboardCard';
import MyTeamOverview from '../components/MyTeamOverview';
import EmployeeDashboard from '../components/Employee/EmployeeDashboard';
import MemberAddTask from '../components/Manager/ManagerAddTask';
import MemberUpper from '../components/Manager/ManagerUpper';
import EmployeeUpper from '../components/Employee/EmployeeUpper';

// import LeaderUpperDashboard from '../components/LeaderUpperDashboard';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import { Navigate } from 'react-router-dom';

// import {useState} from 'react';

// ! TODO: Remove console logs
// ! TODO: Fix font that is not loading properly

export default function MemberDashboard() {
  
  const { loading, data } = useQuery(QUERY_ME);
  const user = data?.me;

  if (!Auth.loggedIn()) {
    return <Navigate to="/" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  // const [darkMode, setDarkMode] = useState(false);
  return (
    // <div className={darkMode ? 'dark' : ''}>
    <div>
      {user.isEmployee ? (
        <main className="bg-neutral-900 px-10 md:px-20 lg:px-40">
          <section className="min-h-screen">
            <Nav />
            {/* Employee Dashboard */}
            <EmployeeUpper
              firstName={user.firstName}
              lastName={user.lastName}
              tasks={user.tasks}
              areaName={user.area.name}
              userIcon={user.userIcon}
              _id={user.area._id}
            />
            <div className="flex flex-col lg:flex-row gap-4">
              <EmployeeDashboard tasks={user.tasks} />
              <MembersOverview _id={user.area._id} />
            </div>
          </section>
        </main>
      ) : (
        <div>
          <main className="bg-neutral-900 px-10 md:px-20 lg:px-40">
            <section className="min-h-screen">
              <Nav firstName={user.firstName} lastName={user.lastName} />
              {/* Member Upper Dashboard */}
              <MemberUpper
                firstName={user.firstName}
                lastName={user.lastName}
                _id={user.area._id}
              />
              
              <div className="flex flex-col lg:flex-row gap-4">
                {/* <LeadDashboard _id={user.area._id} /> */}
                <MemberAddTask _id={user.area._id} />
                {/* <MembersOverview _id={user.area._id} /> */}
                {/* <DashboardCard>
            <h1 className=" font-bold text-slate-200 font-poppins">
              My dashboard
            </h1>
            <p className=" font-thin text-gray-500 font-poppins">
              Kepp track of your achievements
            </p>
          </DashboardCard>
          <DashboardCard>
            <h1 className=" font-bold text-slate-200 font-poppins">
              My team
            </h1>
            <p className=" font-thin text-gray-500 font-poppins">
              Check out other's achievements
            </p>
          </DashboardCard> */}
              </div>
            </section>
          </main>
        </div>
      )}
    </div>
  );
}
