import React, { useState } from "react";
import { Link } from "react-router-dom";

export const UserLogin = () =>{
    const[email,setemail] = useState(" ")
    const[password,setpassword] = useState(" ")
    const[userData,setUserData] = useState({})

    const submitHandler = (e) =>{
        e.preventDefault();
        // console.log(email,password)
        setUserData({
            email:email,
            password:password
        })
        console.log(userData)
        setemail(" ")
        setpassword(" ")

    }

    return(
        <div className="p-7 h-screen flex flex-col justify-between">
            <div>
            <form onSubmit={submitHandler}>
                {/* Email section */}
            <img src="https://clipart-library.com/2023/uber-new-logo-2018.png"className="w-14 mb-5"/>
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
                 w-full text-lg ">Loging</button>


               </form>
                <p className="text-center">
                    Now here?
                <Link to="/UserSignup" className="text-blue-600">Create New Account</Link>
                </p>
        </div>
        <div>
        <Link to="/CaptainLogin" className=" bg-[#10b461] flex w-full justify-center align-center text-white mb-7 rounded px-4 py-2
                 w-full text-lg ">Sign in as Captain</Link>

        </div>
    </div>
    )
}
// export default UserLogin;