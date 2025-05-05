import React, { useState,useRef } from "react";
import { Link } from "react-router-dom";    
import { CaptainDetail } from "../components/CaptainDetail";
import { RidePopup } from "../components/RidePopup";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ConformRidePopup } from "../components/ConformRidePopup";  

export const CaptainHome = () => {
    const[ridePopupPanel, setRidePopupPanel] = useState(true)
    const ridePopupref = useRef(null)
    const [conformRidePopup, setConformRidePopup] = useState(false)
    const ConformridePopupref = useRef(null)

     useGSAP(function(){
         if(ridePopupPanel){
             gsap.to(ridePopupref.current,{
                 transform:"translateY(0%)",

             })
         }else{
             gsap.to(ridePopupref.current,{
                 transform:"translateY(100%)"
             })
         }
      },[ridePopupPanel])

      
     useGSAP(function(){
        if(conformRidePopup){
            gsap.to(ConformridePopupref.current,{
                transform:"translateY(0%)",

            })
        }else{
            gsap.to(ConformridePopupref.current,{
                transform:"translateY(100%)"
            })
        }
     },[conformRidePopup])

    return(
        <>
        <div className='h-screen'>
            <div className="fixed p-3 top-0 flex items-center justify-between w-screen">
                <img className="w-16 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="" />
                <Link to='/Home' className="h-10 w-5  bg-white flex items-center justify-center rounded-full">
                <i className="ri-logout-box-r-line"></i>
                </Link>
            </div>
        <div className='h-1/2'>
        <img className="h-full w-full object-cover" 
                src="https://www.hanbit.co.kr/data/editor/20210429161116_qvzgnfvw.gif" alt="" />
        </div>
        <div className='h-2/6 p-4'>
        <CaptainDetail/>
        </div>
        <div ref={ridePopupref} className="w-full fixed z-10 bg-white translate-y-full bottom-0 px-3 py-6 pt-12">
                 <RidePopup setRidePopupPanel={setRidePopupPanel} setConformRidePopup={setConformRidePopup}/>     
                {/* <RidePopup/> */}
        </div>
        <div ref={ConformridePopupref} className="w-full fixed h-screen z-10 bg-white translate-y-full bottom-0 px-3 py-6 pt-12">
                 <ConformRidePopup setConformRidePopup={setConformRidePopup} setRidePopupPanel={setRidePopupPanel}/>     
                {/* <RidePopup/> */}
        </div>
    </div>
    </>
    )
}
