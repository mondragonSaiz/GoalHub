import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { CHANGE_PSWD } from '../utils/mutations'

const ChangePasswordModal = ({ onClose }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [deleteAccount, { error, data: deletedUser }] = useMutation(CHANGE_PSWD);

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

  const handleChangePassword = () => {
    // Validate old and new passwords here
    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    // Send a request to change the password to the server
    // You can use a mutation or API call here

    // Close the modal
    onClose();
  };


  return (
  <div className=" font-poppins">
    <main className="flex justify-center bg-neutral-950">
      <section className="flex min-h-screen">
        <div className="flex flex-col justify-center items-center lg:-mt-20">
          <div className="flex flex-col items-center w-auto border-2 rounded-2xl border-slate-200 px-14 py-14 gap-8">
            {/* {data ? ( */}
              {/* <p>
                Successfully loged!{' '}
                <Link to="/dashboard">Taking you to your dashboard.</Link>
              </p> */}
            {/* ) : ( */}
              <div className="flex flex-col items-center w-full rounded-2xl border-slate-200 gap-8">
                
                <form className="flex flex-col items-center">
                  <h2 className="text-slate-200 font-bold text-2xl lg:text-4xl mb-5 text-center">
                    Change your password
                  </h2>
                  {/* <p className=" text-slate-200 text-sm text-center  mb-5 w-80"> 
                   Enter the email address associated with your account and we'll send you a link to reset your password
                  </p> */}
                  <fieldset className="flex flex-col gap-6">
                   {/* <label htmlFor="email">Email </label> */}
                    <input
                     //  onChange={handleChange}
                      placeholder="Enter your current password"
                      type="password"
                      value= {email}
                      onChange={setVal}
                      name="current-password"
                      id="current-password"
                     //  value={formState.email}
                      className=" focus:text-slate-200 text-slate-200 bg-neutral-950 text-sm lg:text-lg border-2 rounded-lg border-gray-500 lg:text-left text-center py-2 pr-0 lg:pr-56 lg:pl-4"
                    />
                    {/* <input
                    onChange={handleChange}
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={formState.password}
                    className=" focus:text-slate-200 text-slate-200 bg-neutral-950 text-sm lg:text-lg border-2 rounded-lg border-gray-500 lg:text-left text-center py-2 pr-0 lg:pr-56 lg:pl-4"
                    /> */}
                    <input
                      type="submit"
                      name="newpassword-1"
                      id="newpassword-1"
                      value="newpassword-1"
                      
                      className=" bg-slate-200 text-neutral-950 text-sm lg:text-lg rounded-lg py-2 px-20 cursor-pointer"
                    />
                    <input
                      type="submit"
                      name="newpassword-2"
                      id="newpassword-2"
                      value="newpassword-2"
                      
                      className=" bg-slate-200 text-neutral-950 text-sm lg:text-lg rounded-lg py-2 px-20 cursor-pointer"
                    />
                  </fieldset>
                  <div className="flex flex-row gap-4 justify-center mt-4">
                    <p className=" rotate-90 text-gray-500">|</p>
                    <p className=" text-gray-500 text-sm">
                      Don't have a GoalHub account?
                    </p>
                    <p className=" rotate-90 text-gray-500">|</p>
                  </div>
                </form>                  
                {message && (
                   <p className="text-red-500 text-sm text-center mb-1 w-80">
                       {message}
                   </p>
                 )}
                <Link
                  to="/sign-up"
                  className="flex text-slate-200 bg-neutral-950 border-2 rounded-lg border-gray-500 font-bold font-poppins justify-center text-center py-2 px-20"
                >
                  Signup
                </Link>
              </div>
            {/* )} */}
          </div>
        </div>
      </section>
    </main>
   </div>
    // Render your modal content here with input fields for old password, new password, and confirm password
  )
}

export default ChangePasswordModal;