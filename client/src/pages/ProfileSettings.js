import React from 'react';
import SettingsModal from '../components/SettingsModal';
import { Link } from 'react-router-dom';
import memberOne from '../img/avatar/avatar3.png';
import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_AREA } from '../utils/queries';
import Auth from '../utils/auth';
import { Navigate } from 'react-router-dom';


// ! TODO: Remove console logs
export default function ProfileSettings() {
  const { loading, data } = useQuery(QUERY_ME);
  if (!Auth.loggedIn()) {
    return <Navigate to="/" />;
  }

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  const user = data?.me;

  const memberImg = memberOne;
  const memberName = `${
    user.firstName.slice(0, 1).toUpperCase() +
    user.firstName.slice(1).toLowerCase()
  } ${user.lastName.slice(0, 1).toUpperCase()}.`;
  const memberTeam = user.isEmployee
    ? `${user.area.name} Member`
    : `${user.area.name} Manager`;
  return (
    <div className=" font-poppins">
      <main className="flex justify-center bg-neutral-950">
        <section className="flex min-h-screen">
          <div className="flex flex-col justify-center items-center lg:-mt-20">
            <div
              className="items-center md:w-full w-4/5 h-auto border-2 rounded-2xl border-slate-200 px-14 py-5 gap-8 bg-zinc-900"
            >
              <div className="flex flex-row justify-end text-right gap-4">
                <button
                  onClick={logout}
                  to="/"
                  className=' text-sm font-bold bg-zinc-900 text-white border-2 rounded-xl border-slate-200 w-20 h-10 hover:text-zinc-900 hover:bg-slate-200'
                >
                  Log out
                </button>
                <button
                  onClick={logout}
                  to="/dashboard"
                  className=' text-sm font-bold bg-zinc-900 text-white border-2 rounded-xl border-slate-200 w-20 h-10 hover:text-zinc-900 hover:bg-slate-200'
                >
                  Back
                </button>
              </div>
              <div className="flex flex-row justify-center items-center">
                <div className="lg:flex lg:flex-col mb-5 flex flex-col items-center">
                  <div className=" bg-slate-200 rounded-full lg:w-48 lg:h-48 w-40 h-40 mt-10 overflow-hidden">
                    <img
                      src={memberImg}
                      alt="memberOne"
                      layout="fill"
                      oobjectfit="cover"
                    />
                  </div>
                  <h2 className="flex justify-end text-slate-200 text-md font-bold font-poppins lg:text-center lg:text-xl">
                    {memberName}
                  </h2>
                  <p className="flex justify-end text-gray-500  text-md text-base font-poppins lg:text-center lg:text-xl">
                    {memberTeam}
                  </p>
                </div>
              </div>

              <form
                action=""
                className="flex flex-col justify-center items-center gap-4"
              >
                <div className="flex flex-row justify-center items-center gap-4">
                  <label className="text-gray-500  text-md text-basefont-poppins lg:text-xl">
                    Name
                  </label>
                  <input
                    placeholder={memberName}
                    type="text"
                    className=" focus:text-slate-200 text-slate-200 lg:text-xl border-2 rounded-lg border-gray-500 text-left py-2 md:pr-56 pl-4 bg-zinc-900"
                  />
                </div>
                <div className="flex flex-row justify-center items-center gap-4">
                  <label className="text-gray-500  text-md text-basefont-poppins lg:text-xl">
                    Team
                  </label>
                  <input
                    placeholder={memberTeam}
                    type="text"
                    className="focus:text-slate-200 text-slate-200 lg:text-xl border-2 rounded-lg border-gray-500 text-left py-2 md:pr-56 pl-4 bg-zinc-900"
                  />
                </div>
                <div className="flex flex-row  gap-4">
                  <button
                    className="rounded-lg"
                    to="/sign-up"
                    style={{
                      border: '2px solid gray',
                      backgroundColor: '#202020',
                      color: 'white',
                      padding: '2%',
                      width: '6rem',
                      height: '3rem',
                      fontSize: 'smaller',
                    }}
                  >
                    Change Name
                  </button>
                  <button
                    className="rounded-lg"
                    to="/sign-up"
                    style={{
                      border: '2px solid gray',
                      backgroundColor: '#202020',
                      color: 'white',
                      padding: '2%',
                      width: '6rem',
                      height: '3rem',
                      fontSize: 'smaller',
                    }}
                  >
                    Delete Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
