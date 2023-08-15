import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

export default function LogIn() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };
  return (
    <div className=" font-poppins">
      <main className="flex justify-center bg-neutral-950">
        <section className="flex min-h-screen">
          <div className="flex flex-col justify-center items-center lg:-mt-20">
            <div className="flex flex-col items-center w-auto border-2 rounded-2xl border-slate-200 px-14 py-14 gap-8">
              <h2 className="text-slate-200 font-bold text-4xl mb-5 text-center">
                Log in to GoalHub
              </h2>
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
                <input
                  onChange={handleChange}
                  placeholder="Email"
                  name="email"
                  type="email"
                  className=" focus:text-slate-200 text-slate-200 bg-neutral-950 border-2 rounded-lg border-gray-500 text-left py-2 pr-56 pl-4"
                />
                <input
                  onChange={handleChange}
                  placeholder="Password"
                  name="password"
                  type="password"
                  className=" focus:text-slate-200 text-slate-200 bg-neutral-950 border-2 rounded-lg border-gray-500 text-left py-2 pr-56 pl-4"
                />
                <button
                  type="submit"
                  className=" bg-slate-200 text-neutral-950 rounded-lg py-2 px-36 cursor-pointer"
                >
                  Continue with Email
                </button>
                {/* <input
                  name="loginSub"
                  id="loginSub"
                  value="Continue with Email"
                  className=" bg-slate-200 text-neutral-950 rounded-lg py-2 px-36 cursor-pointer"
                /> */}
              </form>

              <div className="flex flex-row gap-4 items-center">
                <p className=" rotate-90 text-gray-500">|</p>
                <p className=" text-gray-500 text-sm">
                  Don't have a GoalHub account?
                </p>
                <p className=" rotate-90 text-gray-500">|</p>
              </div>
              <Link
                to="/sign-up"
                className="flex text-slate-200 bg-neutral-950 border-2 rounded-lg border-gray-500 font-bold font-poppins justify-center text-center py-2 px-48"
              >
                Signup
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
