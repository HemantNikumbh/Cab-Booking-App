import React, { useState } from "react";
import { Link } from "react-router-dom";

export const CaptainSignup = () =>{
    const[email,setemail] = useState(" ")
    const[password,setpassword] = useState(" ")
    const [firstName,setfirstName] = useState(" ")
    const [lastName,setlastName] = useState(" ")
    const[userData,setUserData] = useState({})

    const submitHandler = (e) =>{
        e.preventDefault();
        // console.log(email,password)
        setUserData({
            fullName:{
                firstName:firstName,
                lastName:lastName

            },
            email:email,
            password:password
        })
        console.log(userData)
        setfirstName(" ")
        setlastName(" ")
        setemail(" ")
        setpassword(" ")

    }

    return(
        <div className="p-7 h-screen flex flex-col justify-between">
            <div>
            <img src="https://clipart-library.com/2023/uber-new-logo-2018.png"className="w-14 mb-5"/>
            <form onSubmit={submitHandler}>
                {/* Name Section  */}
            <h3 className=" text-xl- mb-2 ">What's Your Name</h3>
            <div className="flex gap-4">
            <input className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-1/2 text-lg placehoder:text-base" 
                type="text" 
                required
                placeholder="First name" 
                value={firstName}
                onChange={(e)=>{
                    setfirstName(e.target.value)
                }}
                />
                <input className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-1/2 text-lg placehoder:text-base" 
                type="text" 
                placeholder="Last name"
                required
                value={lastName}
                onChange={(e)=>{
                    setlastName(e.target.value)
                }}
                />
            
            </div>

                {/* Enmail Section */}

                <h3 className=" text-xl- mb-2">What's Your Email</h3>
                <input className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placehoder:text-base" 
                type="email" 
                placeholder="email@example.com" 
                value={email}
                onChange={(e)=>{
                    setemail(e.target.value)
                }}
                required
                />
               
                {/* Password section */}

                 <h3 className=" text-xl- mb-2">Enter Password</h3>
                <input className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placehoder:text-base" 
                type="text" 
                placeholder="Password"  
                value={password}
                onChange={(e)=>{
                    setpassword(e.target.value)
                }} 
                required
                />
                <button className=" bg-[#111] text-white mb-7 rounded px-4 py-2
                 w-full text-lg ">Register</button>


               </form>
                <p className="text-center">
                    Now here?
                <Link to="/CaptainLogin" className="text-blue-600">Captain SignIn</Link>
                </p>
        </div>
        <div>
            <p className="text-[10px] lead">
                This site is protected by reCAPTCHA and the Google <u><b>Privacy</b></u> and 
                <u><b>Terms of Service apply</b></u>
            </p>
        </div>
    </div>
    )
}
// export default UserLogin;