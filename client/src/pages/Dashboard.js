import React from 'react';
import Nav from '../components/navBar';
import {Navigate} from 'react-router-dom'
import UpperDashboard from '../components/upperDashboard';
import MonthOverview from '../components/monthOverview';
import MembersOverview from '../components/memberOverview';
import { useQuery } from '@apollo/client';
import { QUERY_ME, } from '../utils/queries';
import Auth from '../utils/auth'
import LeaderUpperDashboard from '../components/LeaderUpperDashboard';
import MyTeamOverview from '../components/MyTeamOverview';
import LeadDashboard from '../components/LeadDashboard';


export default function Dashboard() {
  //

  const { loading, data } = useQuery( QUERY_ME);
  const user = data?.me
  console.log(user)
  
/*
  if (!Auth.loggedIn()) {
    return <Navigate to="/" />;
  }
*/
  if (loading) {
    return <div>Loading...</div>;
  }

 
/*
  if (!user?.me) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }*/
  // const [darkMode, setDarkMode] = useState(false);
  return (
   <div>
    {user.isEmployee ? (<div className=" font-poppins">
    <main className="bg-neutral-900 px-10 md:px-20 lg:px-40">
      <section className="min-h-screen">
        <Nav firstName={user.firstName} lastName={user.lastName}/>
        <UpperDashboard firstName={user.firstName} lastName={user.lastName}/>
        <div className="flex flex-col lg:flex-row gap-4">
          <MonthOverview />
          <MembersOverview _id={user.area._id}/>
        </div>
      </section>
    </main>
  </div>):(<div>
    <main className="bg-neutral-900 px-10 md:px-20 lg:px-40">
      <section className="min-h-screen">
        <Nav firstName={user.firstName} lastName={user.lastName}/>
        {/* Leader Upper Dashboard */}
        <LeaderUpperDashboard firstName={user.firstName} lastName={user.lastName}/>
        <div className="flex flex-col lg:flex-row gap-4">
          <LeadDashboard />
          <MembersOverview _id={user.area._id}/>
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
  </div>)}
  </div>
  );
}
