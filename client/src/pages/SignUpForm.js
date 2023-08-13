import React, {useState} from "react";
import {Link , useLocation} from "react-router-dom"
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';



export default function SignUpForm(){
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [agreement, setAgreement] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');

   const[addUser, {error,data}] = useMutation(ADD_USER)
    
    let {state} = useLocation()
    
    console.log(state.isEmployee)


const handleInputChange=(e)=>{
    const inputName = e.target.name
    const inputValue = e.target.value

    switch (inputName){
        case "firstName":
            setFirstName(inputValue)
            break;
        case "lastName":
            setLastName(inputValue)
            break;
        case "email":
            setEmail(inputValue)
            break;
        case "password":
            setPassword(inputValue)
            break;
    }
}

const validation =(name,value)=>{
    let regPassword = /((?=.*[A-Z])(?=.*[a-z])(?=.*\d))(?=.{8,})/ //Password should include at least 8 char, 1 cap, and 1 low case
    let regEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

    if(name==="password"){
        return regPassword.test(value)
    } else if (name==="email"){
        return regEmail.test(value)
    } else if( name==="name"){
        if(!value){
            setErrorMessage('Name Missing')
        }
    }
}

const handleFormSubmit = async (e)=>{
    e.preventDefault();

    if(!email|| !firstName || !password || !lastName){
        setErrorMessage('input missing')
        return;
    }

    if(!validation('email',email)){
        setErrorMessage('wrong email')
        return;
    }

    if(!validation('password',password)){
        setErrorMessage('Password Must have 1 capital letter, 1 low case, 1 number and at least 8 characters long')
        return;
    }


    try{
        const {data} = await addUser({
            variables: {firstName, lastName, email, password, isEmployee: state.isEmployee},
        })
    } catch(e){
        console.error(e)
    }
    console.log(firstName)
    console.log(lastName)
    console.log(password)
    console.log(email)

    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
    setAgreement(false)
}

    return (
        <div className=" font-poppins">
            <main className="flex justify-center bg-neutral-950">
                <section className="flex min-h-screen">
                    <div className="flex flex-col justify-center items-center lg:-mt-20">
                        <div className="flex flex-col items-center w-auto border-2 rounded-2xl border-slate-200 px-14 py-14 gap-8">
                           { data? (
                                <p>
                                    Directing to your Dashboard{' '}
                                    <Link to='/'> Moving</Link>
                                </p>):(  
                            <div className="flex flex-col items-center w-auto rounded-2xl  gap-8">
                            <h2 className="text-slate-200 font-bold text-4xl mb-5 text-center">I want to keep track of my {state.isEmployee?'tasks':'team'}</h2>
                            <form action="" className="flex flex-col gap-6">
                                <div > 
                                    <input 
                                    value={firstName}
                                    name="firstName"
                                    onChange={handleInputChange}
                                    placeholder='First name'
                                    type="text"
                                    className=' focus:text-slate-200 text-slate-200 bg-neutral-950 border-2 rounded-lg border-gray-500 text-left py-2 pr-56 pl-4'
                                />
                                 <input 
                                    name="lastName"
                                    value={lastName}
                                    onChange={handleInputChange}
                                    placeholder='Last name'
                                    type="text"
                                    className=' focus:text-slate-200 text-slate-200 bg-neutral-950 border-2 rounded-lg border-gray-500 text-left py-2 pr-56 pl-4'
                                />
                                </div>
                                <input
                                    name="email" 
                                    value={email}
                                    onChange={handleInputChange}
                                    placeholder='Email'
                                    type="text"
                                    className=' focus:text-slate-200 text-slate-200 bg-neutral-950 border-2 rounded-lg border-gray-500 text-left py-2 pr-56 pl-4'
                                />
                                <input 
                                    name="password"
                                    value={password}
                                    onChange={handleInputChange}
                                    placeholder='Password (8 or more characters)'
                                    type="password"
                                    className=' focus:text-slate-200 text-slate-200 bg-neutral-950 border-2 rounded-lg border-gray-500 text-left py-2 pr-56 pl-4'
                                />
                                <div className="flex">
                                    <input type="checkbox" name="agreement" onClick={handleInputChange} className="mr-2"/>
                                    <p className="text-white">I understand and agree to the GoalHub Terms of Service, including the User Agreement and Privacy Policy</p>
                                </div>
                                
                                <input type="submit" onClick={handleFormSubmit} name="loginSub" id="loginSub" value="Create my account" className=" bg-slate-200 text-neutral-950 rounded-lg py-2 px-36 cursor-pointer"/>
                            </form>
                            
                            <div className="flex flex-row gap-4 items-center">
                                <p className=" text-gray-500 text-sm">Already have an account?</p>
                                <Link to="/log-in"className="text-white">Log In</Link>
                            </div>
                            {errorMessage && (
                                <div>
                                    <p className="error-text text-white">{errorMessage} !</p>
                                </div>
                            )}
                        </div>)}
                        </div> 
                    </div>
                </section>
            </main>
    </div>
    )
}