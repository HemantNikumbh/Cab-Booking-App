import React, { useEffect,useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

export const UserProtectWrapper = ({ children }) => {
    
    const token = localStorage.getItem('token')
    const{user,setUser} = useContext(UserDataContext)
    const[isLodding,setIsLodding] = useState(true)  
    const navigate = useNavigate()

    console.log(token)

    useEffect(()=>{
        if(!token){
            navigate('/UserLogin')
        }

        axios.get("http://localhost:4000/user/profile",{
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then(response =>{
            if(response.status===200){
                setUser(response.data.user)
                setIsLodding(false)
            }
        }).catch(err =>{
            localStorage.removeItem("token")
            navigate("/UserLogin")
        })
    },[token])

    if(isLodding){
        return(
            <div>Lodding....</div>
        )
    }
    
    return(
        <div>
            {children}
        </div>
    )
}