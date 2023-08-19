import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import memberOne from '../img/avatar/avatar1.png';
import memberTwo from '../img/avatar/avatar2.png';
import memberThree from '../img/avatar/avatar3.png';
import memberFour from '../img/avatar/avatar4.png';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { QUERY_AREAS } from '../utils/queries';
import Auth from '../utils/auth';
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
} from '../components/select';

// ! TODO: Remove console logs
export default function SignUpForm() {
  const { loading: queryLoading, data: queryData } = useQuery(QUERY_AREAS);
  const areas = queryData?.areas;
  const memberImg = memberOne

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [area, setArea] = useState('');
  const [agreement, setAgreement] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedImageSrc, setSelectedImageSrc] = useState('');

  const handleImageClick = (src) => {
    setSelectedImageSrc(src);
    // console.log('SELECTED', selectedImageSrc);
  };
  useEffect(() => {
    console.log('SELECTED', selectedImageSrc);
  }, [selectedImageSrc]);

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
  ];

  const [addUser, { error, data }] = useMutation(ADD_USER);

  let { state } = useLocation();

  console.log('isEmployee', state.isEmployee);

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
      default:
        console.log('No input found');
    }
  };
  const handleInput = (something) => {
    // ! TODO: Remove console logs
    // console.log('handle input triggered');
    // console.log('target', event.target);
    // const selectedValue = event.target.value;
    setArea(something);
    console.log('area selected', area);
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
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();


    // console.log('Submited');
    // console.log('AREA', area);
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
        },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }

    console.log(firstName);
    console.log(lastName);
    console.log(password);
    console.log(email);

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setAgreement(false);
  };

  return (
    <div className=" font-poppins min-h-screen bg-neutral-950">
      <main className="flex justify-center items-center min-h-screen">
        <section className="min-h-screen">
          <article className="min-h-screen">
            <div id='marginBorder' className="flex items-center justify-center min-h-screen">
              <div className="sm:border-2 sm:rounded-2xl sm:border-slate-200 sm:mx-8">
                {data ? (
                  <p>
                    Directing to your Dashboard <Link to="/"> Moving</Link>
                  </p>
                ) : (
                  <div id='mainContainer' className="flex flex-col justify-center items-center px-4 sm:px-16">
                    <div id='signUpFormHeader' className='mb-8'>
                      <h2 className="text-slate-200 font-bold text-3xl text-center sm:mt-16">
                        I want to keep track of my{' '}
                        {state.isEmployee ? 'tasks' : 'team'}
                      </h2>
                    </div>
                    <form action="" className="flex flex-col">
                      <fieldset className="flex flex-col sm:flex-row sm:gap-4">
                        <input
                          value={firstName}
                          name="firstName"
                          onChange={handleInputChange}
                          placeholder="First name"
                          type="text"
                          className=" focus:text-slate-200 text-slate-200 bg-neutral-950 border-2 rounded-lg border-gray-500 text-left py-2 pl-4 w-full mb-4"
                        />
                        <input
                          name="lastName"
                          value={lastName}
                          onChange={handleInputChange}
                          placeholder="Last name"
                          type="text"
                          className=" focus:text-slate-200 text-slate-200 bg-neutral-950 border-2 rounded-lg border-gray-500 text-left py-2 pl-4 w-full mb-4"
                        />
                      </fieldset>
                      <fieldset className='flex flex-col'>
                        <input
                          name="email"
                          value={email}
                          onChange={handleInputChange}
                          placeholder="Email"
                          type="text"
                          className=" focus:text-slate-200 text-slate-200 bg-neutral-950 border-2 rounded-lg border-gray-500 text-left py-2 pl-4 w-full mb-4"
                        />
                        <input
                          name="password"
                          value={password}
                          onChange={handleInputChange}
                          placeholder="Password (8 or more characters)"
                          type="password"
                          className=" focus:text-slate-200 text-slate-200 bg-neutral-950 border-2 rounded-lg border-gray-500 text-left py-2 pl-4 w-full mb-6"
                        />
                      </fieldset>
                      <div id='areaBtn' className='flex justify-center sm:justify-start mb-4'>
                        <Select
                          onValueChange={(something) => handleInput(something)}
                        >
                          <SelectTrigger className="w-[180px] font-bold bg-slate-200">
                            <SelectValue className=' font-poppins font-bold bg-slate-200' placeholder="Select your Area" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel className="font-poppins font-bold">Areas</SelectLabel>
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
                      </div>
                      <div id='avatarHeader'>
                        <h2 className=" text-slate-200 flex justify-center text-lg font-bold">
                          Choose your avatar
                        </h2>
                      </div>

                      <div id='avatarContainer' className="flex flex-wrap gap-3 justify-center items-center lg:flex-row lg:gap-6 mb-2">
                        {userIcons.map((icon, index) => (
                          <div
                            key={index}
                            className={`bg-slate-200 rounded-full lg:w-40 lg:h-40 w-48 h-48 mt-10
                            overflow-hidden hover:transition hover:scale-110 transition
                            duration-300 ease-in-out cursor-pointer${
                            icon.src === selectedImageSrc ? ' selected' : ''
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
                      <div id='termsOfService' className="flex flex-col-reverse sm:flex-row justify-center mb-4 items-center">
                        <input
                          type="checkbox"
                          name="agreement"
                          onClick={handleInputChange}
                          className="mt-2"
                        />
                        <p className="text-white text-sm text-center sm:text-left sm:pl-4 mt-2 sm:m-0">
                          I understand and agree to the GoalHub Terms of Service,
                          including the User Agreement and Privacy Policy
                        </p>
                      </div>
                      <button
                        type="submit"
                        onClick={handleFormSubmit}
                        name="loginSub"
                        id="loginSub"
                        className="bg-slate-200 text-neutral-950 rounded-lg py-2 cursor-pointer font-bold mb-8"
                        >
                        Create my account
                      </button>
                    </form>

                    <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-4 items-center sm:mb-16">
                      <p className=" text-gray-500 text-sm">
                        Already have an account?
                      </p>
                      <Link to="/log-in" className="text-white">
                        Log In
                      </Link>
                    </div>
                    {errorMessage && (
                      <div>
                        <p className="error-text text-white">{errorMessage} !</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}