import React from 'react';
import SettingsModal from '../components/SettingsModal';
import { Link } from 'react-router-dom';
import memberOne from '../img/avatar/avatar3.png';
import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_AREA } from '../utils/queries';
import Auth from '../utils/auth';

export default function ProfileSettings() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  const { loading, data } = useQuery(QUERY_ME);
  const user = data?.me;

  const memberImg = memberOne;
  const memberName = `${
    user.firstName.slice(0, 1).toUpperCase() +
    user.firstName.slice(1).toLowerCase()
  } ${user.lastName.slice(0, 1).toUpperCase()}.`;
  const memberTeam = user.isEmployee
    ? `${user.area.name} Team`
    : `${user.area.name} Team Manager`;
  return (
    <div className=" font-poppins">
      <main className="flex justify-center bg-neutral-950">
        <section className="flex min-h-screen">
          <div className="flex flex-col justify-center items-center lg:-mt-20">
            <div
              className="items-center w-100 h-100 border-2 rounded-2xl border-slate-200 px-14 py-5 gap-8"
              style={{ backgroundColor: '#202020' }}
            >
              <div className="flex flex-row justify-end text-right">
                <button
                  onClick={logout}
                  to="/"
                  style={{
                    backgroundColor: '#202020',
                    color: 'white',
                    border: '1px solid white',
                    borderRadius: '15px',
                    width: '6rem',
                    height: '2.5rem',
                    fontSize: 'smaller',
                  }}
                >
                  Log out
                </button>
              </div>
              <div className="flex flex-row justify-center items-center">
                <div className="lg:flex lg:flex-col mb-5 flex flex-col items-center">
                  <div className=" bg-slate-200 rounded-full lg:w-20 lg:h-20 w-40 h-40 mt-10 overflow-hidden">
                    <img
                      src={memberImg}
                      alt="memberOne"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <h2 className="flex justify-end text-slate-200 text-md font-boldfont-poppins lg:text-center">
                    {memberName}
                  </h2>
                  <p className="flex justify-end text-gray-500  text-md text-basefont-poppins lg:text-right">
                    {memberTeam}
                  </p>
                </div>
              </div>

              <form
                action=""
                className="flex flex-col justify-center items-center gap-4"
              >
                <div className="flex flex-row justify-center items-center gap-4">
                  <label className="text-gray-500  text-md text-basefont-poppins">
                    Name
                  </label>
                  <input
                    placeholder={memberName}
                    type="text"
                    className=" focus:text-slate-200 text-slate-200  border-2 rounded-lg border-gray-500 text-left py-2 pr-56 pl-4"
                    style={{ backgroundColor: '#202020' }}
                  />
                </div>
                <div className="flex flex-row justify-center items-center gap-4">
                  <label className="text-gray-500  text-md text-basefont-poppins">
                    Team
                  </label>
                  <input
                    placeholder={memberTeam}
                    type="text"
                    className="focus:text-slate-200 text-slate-200  border-2 rounded-lg border-gray-500 text-left py-2 pr-56 pl-4"
                    style={{ backgroundColor: '#202020' }}
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

              {/* <div className="flex flex-row gap-4 items-center">
                <p className=" rotate-90 text-gray-500">|</p>
                <p className=" text-gray-500 text-sm">
                  Don't have a GoalHub account?
                </p>
                <p className=" rotate-90 text-gray-500">|</p>
              </div> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
