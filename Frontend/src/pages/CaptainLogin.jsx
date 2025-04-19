import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";


export const CaptainLogin = () =>{
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    // const[captainData,setCaptainData] = useState({})
    const {captain,setCaptain} = useContext(CaptainDataContext) 
    const navigate = useNavigate()  



    const submitHandler = async(e) =>{
        e.preventDefault();
        // console.log(email,password)
        const captain = {
            email:email,
            password:password
        }
        const response = await axios.post("http://localhost:4000/captains/login",captain)
        if(response.status === 200){
            const data = response.data
            setCaptain(data.captain)
            localStorage.setItem("token",data.token)
            navigate("/CaptainHome")
        }

        // console.log(captainData)
        setEmail('')
        setPassword('')

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
                    setEmail(e.target.value)
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
                    setPassword(e.target.value)
                }} 
                required
                />
                <button className=" bg-[#111] text-white mb-7 rounded px-4 py-2
                 w-full text-lg ">Loging</button>


               </form>
                <p className="text-center">
                    Register as a Captain?
                <Link to="/CaptainSignup" className="text-blue-600">Create New Account</Link>
                </p>
        </div>
        <div>
        <Link to="/UserLogin" className=" bg-[#d5622d] flex w-full justify-center align-center text-white mb-7 rounded px-4 py-2
                 w-full text-lg ">Sign in as User</Link>

        </div>
    </div>
    )
}
// export default UserLogin;