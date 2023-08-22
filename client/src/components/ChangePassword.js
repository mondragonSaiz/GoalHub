import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { CHANGE_PSWD } from '../utils/mutations'
import Auth from '../utils/auth';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ChangePasswordModal = ({ onClose }) => {
  // const [openModal, setOpenModal] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [changePassword, { error, data: changePsswd }] = useMutation(CHANGE_PSWD);

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
  
  const handleChangePassword = async () => {
    // Validate old and new passwords here
    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    try {
      // Send a request to change the password to the server
      const { data } = await changePassword({
        variables: {
          email: user.email, // Assuming you have access to the user's email
          password: newPassword,
        },
      });
      
      // Check if the password change was successful
      if (data.forgotPassword && data.forgotPassword.token) {
        // Password change successful, you can handle it as needed
        // Close the modal
        onClose()
        console.log('Success!')
      } else {
        // Handle error, display an error message or take appropriate action
        setErrorMessage('Failed to change password.');
      }
    } catch (error) {
      // Handle any errors that occur during the password change process
      console.error(error);
      setErrorMessage('An error occurred.');
    }
  };


  return (
  <div className=" font-poppins">
    <main className="ont-poppins fixed inset-0 bg-neutral-950 flex justify-center items-center z-10">
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
                    Change password
                  </h2>
                  {/* <p className=" text-slate-200 text-sm text-center  mb-5 w-80"> 
                   Enter the email address associated with your account and we'll send you a link to reset your password
                  </p> */}
                  <fieldset className="flex flex-col pt-3 gap-6">
                   {/* <label htmlFor="email">Email </label> */}
                   <p className=" text-gray-200 text-base text-left">
                      Current password
                    </p>
                    <input
                     //  onChange={handleChange}
                      placeholder="Enter password"
                      type="password"
                      value= {currentPassword}
                      // onChange={setVal}
                      name="current-password"
                      id="current-password"
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      className=" focus:text-slate-200 text-slate-200 bg-neutral-950 text-sm lg:text-lg border-2 rounded-lg border-gray-500 lg:text-left text-center py-2 pr-0 lg:pr-56 lg:pl-4"
                    />
                    <p className=" text-gray-200 text-base text-left">
                      New Password
                    </p>
                    <input
                     //  onChange={handleChange}
                      placeholder="Enter password"
                      type="password"
                      value= {newPassword}
                      // onChange={setVal}
                      name="new-password"
                      id="new-password"
                     onChange={(e) => setNewPassword(e.target.value)}
                      className=" focus:text-slate-200 text-slate-200 bg-neutral-950 text-sm lg:text-lg border-2 rounded-lg border-gray-500 lg:text-left text-center py-2 pr-0 lg:pr-56 lg:pl-4"
                    />
                    <p className=" text-gray-200 text-base text-left">
                      Confirm New password
                    </p>
                    <input
                     //  onChange={handleChange}
                      placeholder="Enter password"
                      type="password"
                      value= {confirmPassword}
                      // onChange={setVal}
                      name="confirm-password"
                      id="confirm-password"
                     //  value={formState.email}
                     onChange={(e) => setConfirmPassword(e.target.value)}
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
                    {/* <input
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
                    /> */}
                  </fieldset>
                  {/* <div className="flex flex-row gap-4 justify-center mt-4">
                    <p className=" rotate-90 text-gray-500">|</p>
                    <p className=" text-gray-500 text-sm">
                      Don't have a GoalHub account?
                    </p>
                    <p className=" rotate-90 text-gray-500">|</p>
                  </div> */}
                </form>                  
                {/* {message && (
                   <p className="text-red-500 text-sm text-center mb-1 w-80">
                       {message}
                   </p>
                 )} */}
                <div className='flex justify-center mt-4 gap-4'>
                <button className="bg-red-700 text-white text-xl px-10 py-2 rounded-full" onClick={onClose}> 
                  Cancel
                </button>
                <Link
                  to="/settings"
                  className="flex text-slate-200 bg-neutral-950 border-2 rounded-full border-gray-500 font-bold font-poppins justify-center text-center text-xl py-2 px-12"
                  onClick={handleChangePassword}
                >
                  Change Password
                </Link>
                </div>
               
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