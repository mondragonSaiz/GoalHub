import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import AlertModal from '../components/AlertModal';
import { Navigate } from 'react-router-dom';

// ! TODO: Remove console logs

export default function LogIn() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [formState, setFormState] = useState({ email: '', password: '' });

  const [login, { error, data }] = useMutation(LOGIN_USER, {
    onError: (error) => {
      // Handle the error here

      if (
        error.message.includes('No user found with this email address') ||
        error.message.includes('Incorrect credentials')
      ) {
        setAlertMessage('Incorrect email or password. Please try again.');
        setShowAlert(true);
      }

      // if (error) {
      //   setAlertMessage(
      //     'Could not authenticate user. Please check your credentials.'
      //   );
      //   setShowAlert(true);
      // }
    },
    onCompleted: (data) => {
      // Handle successful login here
      console.log(data);
      if (data && data.login && data.login.token) {
        Auth.login(data.login.token);
      }
    },
  });

  if (Auth.loggedIn()) {
    return <Navigate to="/dashboard" />;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log('submitted');
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      // Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
      return;
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <div className=" font-poppins bg-neutral-950">
      <main className="flex justify-center items-center min-h-screen px-8">
        <section className="flex">
          <div className="flex flex-col justify-center items-center lg:-mt-20">
            <div className="flex flex-col items-center w-auto border-2 border-box rounded-2xl border-slate-200 px-8 py-10 sm:px-14 sm:py-14 md:px-16 md:py-16 lg:px-40 lg:py-20 gap-8">
              {data ? (
                <p className="text-slate-200 font-bold text-3xl lg:text-4xl text-center">
                  Successfully loged! <br></br>
                  <Link to="/dashboard">Taking you to your dashboard.</Link>
                </p>
              ) : (
                <div className="flex flex-col items-center w-full rounded-2xl border-slate-200 gap-8">
                  <form>
                    <h2 className="text-slate-200 font-bold text-2xl lg:text-4xl mb-8 lg:mb-8 text-center">
                      Log in to GoalHub
                    </h2>
                    <fieldset className="flex flex-col gap-6">
                      <input
                        onChange={handleChange}
                        placeholder="Email"
                        type="text"
                        name="email"
                        value={formState.email}
                        className=" focus:text-slate-200 text-slate-200 bg-neutral-950 text-sm lg:text-lg border-2 rounded-lg border-gray-500 lg:text-left text-center py-2 pr-0 lg:pr-4 lg:pl-4"
                      />
                      <input
                        onChange={handleChange}
                        name="password"
                        placeholder="Password"
                        type="password"
                        value={formState.password}
                        className=" focus:text-slate-200 text-slate-200 bg-neutral-950 text-sm lg:text-lg border-2 rounded-lg border-gray-500 lg:text-left text-center py-2 pr-0 lg:pr-4 lg:pl-4"
                      />
                      {/* <Link to="/forgot-password">
                        <div className="flex flex-row gap-4 justify-center ">
                          <p className=" text-gray-200 text-sm text-center">
                            Forgot Password?
                          </p>
                        </div>
                      </Link> */}
                      <input
                        type="submit"
                        onClick={handleFormSubmit}
                        name="loginSub"
                        id="loginSub"
                        value="Log In"
                        className=" bg-slate-200 text-neutral-950 text-sm lg:text-lg rounded-lg py-2 px-20 cursor-pointer"
                      />
                    </fieldset>
                    <div className="flex flex-row gap-4 justify-center mt-4">
                      <p className=" rotate-90 text-gray-500">|</p>
                      <p className=" text-gray-500 text-sm text-center">
                        Don't have a GoalHub account?
                      </p>
                      <p className=" rotate-90 text-gray-500">|</p>
                    </div>
                  </form>
                  <Link
                    to="/sign-up"
                    className="flex text-slate-200 bg-neutral-950 border-2 rounded-lg border-gray-500 font-bold font-poppins justify-center text-center py-2 px-20"
                  >
                    Signup
                  </Link>
                </div>
              )}
              <AlertModal
                isVisible={showAlert}
                onClose={() => setShowAlert(false)}
                bgColor="red-500"
              >
                <h1>{alertMessage}</h1>
              </AlertModal>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
