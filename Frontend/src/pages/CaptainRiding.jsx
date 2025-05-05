import React from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'   
import { gsap } from 'gsap'
import { useState,useRef } from 'react'
import { FinishRide } from '../components/FinishRide'

export const CaptainRiding = () => {
        const[FinishRidePanel,setFinishRidePanel] = useState(false)     
        const FinishRidePanelref = useRef(null) 
        useGSAP(function(){
                if(FinishRidePanel){
                    gsap.to(FinishRidePanelref.current,{
                        transform:"translateY(0%)",
       
                    })
                }else{
                    gsap.to(FinishRidePanelref.current,{
                        transform:"translateY(100%)"
                    })
                }
             },[FinishRidePanel])

  return (
    <div className='h-screen relative'>
    
            <div className="fixed p-3 top-0 flex items-center justify-between w-screen">
                <img className="w-16 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="" />
                <Link to='/Home' className="h-10 w-5  bg-white flex items-center justify-center rounded-full">
                <i className="ri-logout-box-r-line"></i>
                </Link>
            </div>
        <div className='h-4/5'>
        <img className="h-full w-full object-cover" 
                src="https://www.hanbit.co.kr/data/editor/20210429161116_qvzgnfvw.gif" alt="" />
        </div>
        <div className='h-1/5 p-4 bg-yellow-400 flex items-center justify-between relative'
        onClick={()=>{
                setFinishRidePanel(true)
        }}>
        <h5 onClick={()=>{
                    
                }} className="text-2xl p-3 text-centera absolute top-0 right-6 ">
                <i className="ri-arrow-down-wide-fill"></i>
                </h5>
        <h4 className='text-xl font-semibold'>4 KM Away</h4>
        <button className='bg-green-400 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
        
        </div>
        <div ref={FinishRidePanelref} className="w-full fixed z-10 bg-white translate-y-full bottom-0 px-3 py-6 pt-12">
                <FinishRide setFinishRidePanel={setFinishRidePanel} />     
                        {/* <RidePopup/> */}
        </div>
        
    </div>
  )
}
