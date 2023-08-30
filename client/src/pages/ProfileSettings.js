import React, { useState } from 'react';
import SettingsModal from '../components/SettingsModal';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import memberOne from '../img/avatar/avatar3.png';
import { useQuery, useMutation } from '@apollo/client';
import { DEL_USER } from '../utils/mutations';
import { QUERY_ME, QUERY_AREA } from '../utils/queries';
import Auth from '../utils/auth';
import { Navigate } from 'react-router-dom';
import Subscription from './Subscriptions';
import ChangePasswordModal from '../components/ChangePassword';

// ! TODO: Remove console logs
export default function ProfileSettings() {
  const [openModal, setOpenModal] = useState(false);
  const [changePasswordOpen, setChangePasswordOpen] = useState(false);
  const [deleteAccount, { error, data: deletedUser }] = useMutation(DEL_USER);

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
  const employee = user.isEmployee;
  const memberImg = memberOne;
  const memberName = `${
    user.firstName.slice(0, 1).toUpperCase() +
    user.firstName.slice(1).toLowerCase()
  } ${user.lastName.slice(0, 1).toUpperCase()}.`;
  const memberTeam = user.isEmployee
    ? `${user.area.name} Member`
    : `${user.area.name} Manager`;

  const handleDeleteAccount = async () => {
    console.log(user._id);
    try {
      const { data } = await deleteAccount({
        variables: { userId: user._id }, // Pass the user's ID to the mutation
      });
      console.log(data);
      // Check if the deletion was successful and handle it accordingly

      // Logout the user and redirect to the homepage
      Auth.logout();
    } catch (error) {
      // Handle any errors that occur during account deletion
      console.error(error);
    }
  };

  return (
    <div className=" font-poppins">
      <main className="flex justify-center  bg-neutral-950">
        <section className="flex min-h-screen">
          <div className="flex flex-col justify-center items-center lg:-mt-20">
            <div className="items-center md:w-full w-4/5 h-auto border-2 rounded-2xl border-slate-200 px-14 py-5 gap-8 bg-zinc-900">
              {/* Place the SettingsModal here */}
              <Modal
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                title="Confirm Account Deletion"
                className="flex justify-center bg-neutral-950"
              >
                <main className="flex flex-col justify-center h-screen bg-neutral-950 font-poppins">
                  <div className="flex flex-col lg:w-auto">
                    <p className="text-slate-200 font-bold text-xl lg:text-4xl mb-5 text-center">
                      Are you sure you want to delete your account?
                    </p>
                  </div>
                  <div className="flex justify-center mt-4">
                    <button
                      className="bg-red-700 text-white text-xl px-20 py-2 rounded-full"
                      onClick={handleDeleteAccount}
                    >
                      Yes
                    </button>
                    <button
                      className="bg-gray-400 text-white text-xl px-20 py-2 rounded-full ml-4"
                      onClick={() => setOpenModal(false)}
                    >
                      No
                    </button>
                  </div>
                </main>
              </Modal>
              <div className="flex flex-row justify-between  gap-4">
                <button
                  to="/dashboard"
                  className=" text-sm font-bold bg-zinc-900 text-green-300 rounded-xl border-green-300 w-20 h-10 hover:text-gray-500 hover:bg-green-200"
                >
                  <Link to={`/member-dashboard`}>Back</Link>
                </button>
                <button
                  onClick={logout}
                  to="/"
                  className=" text-sm font-bold bg-zinc-900 text-red-400 rounded-xl border-red-300 w-20 h-10 hover:text-zinc-900 hover:bg-red-300"
                >
                  Log out
                </button>
              </div>
              <div className="flex flex-row justify-center items-center">
                <div className="lg:flex lg:flex-col mb-5 flex flex-col items-center">
                  <div className=" bg-slate-200 rounded-full lg:w-48 lg:h-48 w-40 h-40 mt-10 overflow-hidden">
                    <img
                      src={user.userIcon}
                      alt="memberOne"
                      layout="fill"
                      oobjectfit="cover"
                    />
                  </div>
                  <h2 className="flex pt-4 justify-end text-slate-200 text-md font-bold font-poppins lg:text-center lg:text-xl">
                    {memberName}
                  </h2>
                  <p className="flex justify-end text-gray-500  text-md text-base font-poppins lg:text-center lg:text-xl">
                    {memberTeam}
                  </p>
                </div>
              </div>

              <div
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
                    placeholder={user.area.name}
                    type="text"
                    className="focus:text-slate-200 text-slate-200 lg:text-xl border-2 rounded-lg border-gray-500 text-left py-2 md:pr-56 pl-4 bg-zinc-900"
                  />
                </div>
                <div className="flex flex-row ">
                  <div className="flex justify-center gap-3  pt-5 pb-8 ">
                    <button
                      className="border bg-gray-900 font-medium text-sm px-3 text-slate-200 hover:bg-blue-400 hover:text-gray-900 rounded-xl"
                      onClick={(event) => {
                        event.preventDefault();
                        setChangePasswordOpen(true);
                      }}
                    >
                      Change <br></br> Password
                    </button>
                    {changePasswordOpen && (
                      <ChangePasswordModal
                        onClose={() => setChangePasswordOpen(false)}
                      />
                    )}
                    <button
                      to="/sign-up"
                      className="border bg-gray-900 font-medium text-sm px-3 text-slate-200 hover:bg-red-400 hover:text-gray-900 rounded-xl"
                      // style={{
                      //   border: '2px solid gray',
                      //   backgroundColor: '#202020',
                      //   color: 'white',
                      //   padding: '2%',
                      //   width: '6rem',
                      //   height: '3rem',
                      //   fontSize: 'smaller',
                      // }}
                      onClick={(event) => {
                        event.preventDefault();
                        setOpenModal(true);
                      }}
                    >
                      Delete <br></br> Account
                    </button>
                    ;
                  </div>
                </div>
                {!employee ? (
                  <div className="">
                    <button className="border bg-gray-900 font-medium text-sm px-3 text-slate-200 hover:bg-green-400 hover:text-gray-900 rounded-sm">
                      {' '}
                      <Link href="/subscriptions">Subscriptions</Link>
                    </button>
                  </div>
                ) : (
                  <div> </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
