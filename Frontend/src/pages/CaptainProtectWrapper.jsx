import React, { useEffect,useState} from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

export const CaptainProtectWrapper  = ({ children }) => {
    
    const token = localStorage.getItem('token')
    const {captain,setCaptain} = useContext(CaptainDataContext)
    const[isLodding,setIsLodding] = useState(true)
    const navigate = useNavigate()


    console.log(token)
    useEffect(()=>{
        if(!token){
            navigate('/CaptainLogin')
        }

        axios.get("http://localhost:4000/captains/profile",{
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then(response =>{
            if(response.status===200){
                setCaptain(response.data.captain)
                setIsLodding(false)
            }
        }).catch(err =>{
            localStorage.removeItem("token")
            navigate("/CaptainLogin")
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