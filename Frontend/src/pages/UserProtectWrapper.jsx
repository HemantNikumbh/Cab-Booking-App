import React, { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";

export const UserProtectWrapper = ({ children }) => {
    
    const token = localStorage.getItem('token')
    const navigate = useNavigate()


    console.log(token)
    useEffect(()=>{
        if(!token){
            navigate('/UserLogin')
        }
    },[])
    return(
        <div>
            {children}
        </div>
    )
}