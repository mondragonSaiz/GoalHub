import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

export default function ForgotPassword() {

  // Extract 'id' and 'token' parameters from the URL using React Router's useParams
  const { id, token } = useParams();

    // Initialize navigation history
  const history = useNavigate();

   // State to store 'data2', not used in this code
  const [data2, setData] = useState(false);

   // State to store the user's new password
  const [password, setPassword] = useState("");

    // State to store a message (used for success or error)
  const [message, setMessage] = useState("");

   // Function to check if the user is valid
  const userValid = async () => {
        // Send a GET request to a server endpoint to validate the user
      const res = await fetch(`/forgot-password/${id}/${token}`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          }
      });

    // Parse the response as JSON
      const data = await res.json()
      
    // Check if the response status is 201 (success)
      if (data.status == 201) {
          console.log("user valid")
      } else {
    // If the user is not valid, navigate to a different route
          history("*")
      }
  }

  //This part goes in CreateNewPassword Modal
  // Function to update the 'password' state when the user types in the input field
  const setval = (e) => {
      setPassword(e.target.value)
  }
  // Function to send the new password to the server
  const sendpassword = async (e) => {
      e.preventDefault();
     // Validate the password
      if (password === "") {
          toast.error("password is required!", {
              position: "top-center"
          });
      } else if (password.length < 6) {
          toast.error("password must be 6 char!", {
              position: "top-center"
          });
      } else {
        // Send a POST request to update the password
          const res = await fetch(`/${id}/${token}`, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({ password })
          });
        // Parse the response as JSON     
          const data = await res.json()

        // Check if the response status is 201 (success)
          if (data.status == 201) {
        // Clear the 'password' state and set a success message in 'message'
              setPassword("")
              setMessage(true)
          } else {
        // Display an error message if the response status is not 201
              console.error("! Token Expired generate new LInk",{
                  position: "top-center"
              })
          }
      } 
    }
  // Use 'useEffect' to execute code when the component is mounted
    useEffect(() => {
  // Call 'userValid' to check if the user is valid
      userValid()
  // After 3000 milliseconds (3 seconds), set 'data2' to true
      setTimeout(() => {
          setData(true)
      }, 3000)
  }, [])

 return ( <div className=" font-poppins">
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
                 Forgot Password
               </h2>
               <p className=" text-slate-200 text-sm text-center  mb-5 w-80"> 
                Enter the email address associated with your account and we'll send you a link to reset your password. 
               </p>
               <fieldset className="flex flex-col gap-6">
                 <input
                  //  onChange={handleChange}
                   placeholder="Email"
                   type="text"
                   name="email"
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
                  //  onClick={handleFormSubmit}
                   name="loginSub"
                   id="loginSub"
                   value="Submit"
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
)
}