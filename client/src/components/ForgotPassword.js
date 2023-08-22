// import React, { useEffect, useState } from 'react'
// import { useNavigate, useParams, NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// import Auth from '../utils/auth';

// export default function ForgotPassword() {

//   const [email, setEmail] = useState("");

//   const [message, setMessage] = useState("");

//   const setVal = (e) => {
//       setEmail(e.target.value)
//   }

//   const sendLink = async (e) => {
//       e.preventDefault();

//       if (email === "") {
//           console.error("email is required!", {
//               position: "top-center"
//           });
//       } else if (!email.includes("@")) {
//           console.warn("includes @ in your email!", {
//               position: "top-center"
//           });
//       } else {
//           const res = await fetch("/sendpasswordlink", {
//               method: "POST",
//               headers: {
//                   "Content-Type": "application/json"
//               },
//               body: JSON.stringify({ email })
//           });

//           const data = await res.json();

//           if (data.status == 201) {
//               setEmail("");
//               setMessage("Password reset link sent successfully.")
//           } else {
//               setMessage("Invalid User");
//           }
//       }
//   }
//   console.log(email)
  
//  return ( <div className=" font-poppins">
//  <main className="flex justify-center bg-neutral-950">
//    <section className="flex min-h-screen">
//      <div className="flex flex-col justify-center items-center lg:-mt-20">
//        <div className="flex flex-col items-center w-auto border-2 rounded-2xl border-slate-200 px-14 py-14 gap-8">
//          {/* {data ? ( */}
//            {/* <p>
//              Successfully loged!{' '}
//              <Link to="/dashboard">Taking you to your dashboard.</Link>
//            </p> */}
//          {/* ) : ( */}
//            <div className="flex flex-col items-center w-full rounded-2xl border-slate-200 gap-8">
             
//              <form className="flex flex-col items-center">
//                <h2 className="text-slate-200 font-bold text-2xl lg:text-4xl mb-5 text-center">
//                  Enter your email.
//                </h2>
//                <p className=" text-slate-200 text-sm text-center  mb-5 w-80"> 
//                 Enter the email address associated with your account and we'll send you a link to reset your password
//                </p>
//                <fieldset className="flex flex-col gap-6">
//                 {/* <label htmlFor="email">Email </label> */}
//                  <input
//                   //  onChange={handleChange}
//                    placeholder="Enter Your Email Address"
//                    type="email"
//                    value= {email}
//                    onChange={setVal}
//                    name="email"
//                    id="email"
//                   //  value={formState.email}
//                    className=" focus:text-slate-200 text-slate-200 bg-neutral-950 text-sm lg:text-lg border-2 rounded-lg border-gray-500 lg:text-left text-center py-2 pr-0 lg:pr-56 lg:pl-4"
//                  />
//                  {/* <input
//                  onChange={handleChange}
//                  name="password"
//                  placeholder="Password"
//                  type="password"
//                  value={formState.password}
//                  className=" focus:text-slate-200 text-slate-200 bg-neutral-950 text-sm lg:text-lg border-2 rounded-lg border-gray-500 lg:text-left text-center py-2 pr-0 lg:pr-56 lg:pl-4"
//                  /> */}
//                  <input
//                    type="submit"
//                    onClick={sendLink}
//                    name="loginSub"
//                    id="loginSub"
//                    value="Submit"
                   
//                    className=" bg-slate-200 text-neutral-950 text-sm lg:text-lg rounded-lg py-2 px-20 cursor-pointer"
//                  />
//                </fieldset>
//                <div className="flex flex-row gap-4 justify-center mt-4">
//                  <p className=" rotate-90 text-gray-500">|</p>
//                  <p className=" text-gray-500 text-sm">
//                    Don't have a GoalHub account?
//                  </p>
//                  <p className=" rotate-90 text-gray-500">|</p>
//                </div>
//              </form>                  
//              {message && (
//                 <p className="text-red-500 text-sm text-center mb-1 w-80">
//                     {message}
//                 </p>
//               )}
//              <Link
//                to="/sign-up"
//                className="flex text-slate-200 bg-neutral-950 border-2 rounded-lg border-gray-500 font-bold font-poppins justify-center text-center py-2 px-20"
//              >
//                Signup
//              </Link>
//            </div>
//          {/* )} */}
//        </div>
//      </div>
//    </section>
//  </main>
// </div>
// )
// }