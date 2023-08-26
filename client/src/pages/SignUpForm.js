import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import memberOne from '../img/avatar/avatar1.png';
import memberTwo from '../img/avatar/avatar2.png';
import memberThree from '../img/avatar/avatar3.png';
import memberFour from '../img/avatar/avatar4.png';
import memberFive from '../img/avatar/avatar5.png';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { QUERY_AREAS } from '../utils/queries';
import Auth from '../utils/auth';
import { Navigate } from 'react-router-dom';
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
} from '../components/select';

export default function SignUpForm() {
  const { loading: queryLoading, data: queryData } = useQuery(QUERY_AREAS);

  const areas = queryData?.areas;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [area, setArea] = useState('');
  const [agreement, setAgreement] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [userIcon, setUserIcon] = useState('');

  const handleImageClick = (src) => {
    setUserIcon(src);
  };
  useEffect(() => {}, [userIcon, area]);

  const userIcons = [
    {
      name: 'memberOne',
      src: memberOne,
    },
    {
      name: 'memberTwo',
      src: memberTwo,
    },
    {
      name: 'memberThree',
      src: memberThree,
    },
    {
      name: 'memberFour',
      src: memberFour,
    },
    {
      name: 'memberFive',
      src: memberFive,
    },
  ];

  const [addUser, { error, data }] = useMutation(ADD_USER);

  let { state } = useLocation();

  if (Auth.loggedIn()) {
    return <Navigate to="/dashboard" />;
  }

  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    switch (inputName) {
      case 'firstName':
        setFirstName(inputValue);
        break;
      case 'lastName':
        setLastName(inputValue);
        break;
      case 'email':
        setEmail(inputValue);
        break;
      case 'password':
        setPassword(inputValue);
        break;
      case 'confirmPassword':
        setConfirmPassword(inputValue);
        break;
      case 'agreement':
        setAgreement(!agreement);
        break;
      default:
        break;
    }
  };
  const handleInput = (something) => {
    setArea(something);
  };

  const validation = (name, value) => {
    let regPassword = /((?=.*[A-Z])(?=.*[a-z])(?=.*\d))(?=.{8,})/; //Password should include at least 8 char, 1 cap, and 1 low case
    let regEmail = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;

    if (name === 'password') {
      return regPassword.test(value);
    } else if (name === 'email') {
      return regEmail.test(value);
    } else if (name === 'name') {
      if (!value) {
        setErrorMessage('Name Missing');
      }
    } else if (name == 'confirmPassword') {
      return password !== confirmPassword;
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!firstName) {
      setErrorMessage('Please add your first name');
      return;
    }

    if (!lastName) {
      setErrorMessage('Please add your last name');
      return;
    }

    if (!email) {
      setErrorMessage('Please enter your email');
      return;
    }

    if (!validation('email', email)) {
      setErrorMessage('Please enter a valid email');
      return;
    }

    if (!password) {
      setErrorMessage('Please create a password');
      return;
    }

    if (!validation('password', password)) {
      setErrorMessage(
        'Password Must have 1 capital letter, 1 low case, 1 number and at least 8 characters long'
      );
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Please double check your password');
      return;
    }

    if (!area) {
      setErrorMessage('Please select your area');
      return;
    }

    try {
      const { data } = await addUser({
        variables: {
          firstName,
          lastName,
          email,
          password,
          isEmployee: state.isEmployee,
          area,
          userIcon,
        },
      });

      Auth.login(data.addUser.token);
    } catch (err) {
      return;
    }

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setAgreement(false);
  };

  return (
    <div className="font-poppins ">
      <main className="flex justify-center bg-neutral-950 lg:py-4 ">
        <section className="flex min-h-screen">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-center w-auto border-2 rounded-2xl border-slate-200 px-14 py-2 gap-8">
              {data ? (
                <p>
                  Directing to your Dashboard <Link to="/"> Moving</Link>
                </p>
              ) : (
                <div className="flex flex-col items-center w-auto rounded-2xl  gap-8">
                  <h2 className="text-slate-200 font-bold text-4xl mb-5 text-center pt-5">
                    I want to keep track of my{' '}
                    {state.isEmployee ? 'tasks' : 'team'}
                  </h2>
                  <form action="" className="flex flex-col gap-6">
                    <div className="flex flex-col lg:flex-row gap-5 justify-between">
                      <input
                        value={firstName}
                        name="firstName"
                        onChange={handleInputChange}
                        placeholder="First name"
                        type="text"
                        className={`focus:text-slate-200 text-slate-200 bg-neutral-950 border-2 rounded-lg border-gray-500 text-left py-2 pl-4 w-full ${
                          errorMessage && 'outline-red-950 border-red-500'
                        }`}
                      />
                      <input
                        name="lastName"
                        value={lastName}
                        onChange={handleInputChange}
                        placeholder="Last name"
                        type="text"
                        className={`focus:text-slate-200 text-slate-200 bg-neutral-950 border-2 rounded-lg border-gray-500 text-left py-2 pl-4 w-full ${
                          errorMessage && 'outline-red-950 border-red-500'
                        }`}
                      />
                    </div>
                    <input
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      type="text"
                      className={`focus:text-slate-200 text-slate-200 bg-neutral-950 border-2 rounded-lg border-gray-500 text-left py-2 pl-4 w-full ${
                        errorMessage && 'outline-red-950 border-red-500'
                      }`}
                    />
                    <input
                      name="password"
                      value={password}
                      onChange={handleInputChange}
                      placeholder="Password (8 or more characters)"
                      type="password"
                      className={`focus:text-slate-200 text-slate-200 bg-neutral-950 border-2 rounded-lg border-gray-500 text-left py-2 pl-4 w-full ${
                        errorMessage && 'outline-red-950 border-red-500'
                      }`}
                    />
                    <input
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm password"
                      type="password"
                      className={`focus:text-slate-200 text-slate-200 bg-neutral-950 border-2 rounded-lg border-gray-500 text-left py-2 pl-4 w-full ${
                        errorMessage && 'outline-red-950 border-red-500'
                      }`}
                    />
                    <Select
                      onValueChange={(something) => handleInput(something)}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select your Area" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Areas</SelectLabel>
                          {queryLoading ? (
                            <SelectItem value="loading"></SelectItem>
                          ) : (
                            areas.map((area) => (
                              <SelectItem key={area.name} value={area._id}>
                                {area.name}
                              </SelectItem>
                            ))
                          )}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <h2 className=" text-slate-200 flex justify-center text-lg font-bold">
                      Choose your avatar
                    </h2>

                    <div className="flex flex-col md:flex-row md:flex-wrap md:gap-10 justify-center items-center lg:flex-row lg:gap-6">
                      {userIcons.map((icon, index) => (
                        <div
                          key={index}
                          className={`bg-slate-200 rounded-full lg:w-40 lg:h-40 w-60 h-60 mt-10
                    overflow-hidden hover:transition hover:scale-110 transition
                    duration-300 ease-in-out cursor-pointer${
                      icon.src === userIcon ? ' selected' : ''
                    }`}
                          onClick={() => handleImageClick(icon.src)}
                        >
                          <img src={icon.src} alt={icon.name} />
                        </div>
                      ))}
                    </div>
                    <div className=" flex flex-row justify-between">
                      <AiOutlineArrowLeft className=" text-slate-200 font-bold text-xl cursor-pointer" />
                      <AiOutlineArrowRight className=" text-slate-200 font-bold text-xl cursor-pointer" />
                    </div>
                    <div className="flex">
                      <input
                        type="checkbox"
                        name="agreement"
                        onClick={handleInputChange}
                        className="mr-2"
                      />
                      <p className="text-white">
                        I understand and agree to the GoalHub Terms of Service,
                        including the User Agreement and Privacy Policy
                      </p>
                    </div>
                    <input
                      type="submit"
                      onClick={handleFormSubmit}
                      name="loginSub"
                      id="loginSub"
                      value="Create my account"
                      className={`bg-slate-200 text-neutral-950 rounded-lg py-2 cursor-pointer font-bold ${
                        !agreement && 'opacity-50 cursor-not-allowed'
                      }`}
                      disabled={!agreement}
                    />
                  </form>

                  <div className="flex flex-row gap-4 items-center">
                    <p className=" text-gray-500 text-sm">
                      Already have an account?
                    </p>
                    <Link to="/log-in" className="text-white">
                      Log In
                    </Link>
                  </div>
                  {errorMessage ? (
                    <div>
                      <p className="error-text text-red-500">
                        {errorMessage} !
                      </p>
                    </div>
                  ) : (
                    <p> </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <style>
        {`
          .selected {
            outline: 4px solid green;
            transform: scale(1.1)
          }
          .selectedImage {
            border: 2px solid green;
          }
        `}
      </style>
        
    </div>
  );
}
