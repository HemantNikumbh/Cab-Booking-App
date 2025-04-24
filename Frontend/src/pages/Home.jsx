import { useRef, useState } from "react";
import {useGSAP} from "@gsap/react"
import  gsap  from "gsap";
import 'remixicon/fonts/remixicon.css'
import { LocationSearchPanel } from "../components/LocationSearchPanel";

export const Home = () =>{
    const[pickup,setPickup] = useState("")
    const[destination,setDestination] = useState("")
    const[panelOpen,setPanelOpen] = useState(false)
    const panelRef = useRef(null)    
    const panelCloseref = useRef(null)

     useGSAP(function(){
        if(panelOpen){
            gsap.to(panelRef.current,{
                height:"70%"
            })
            gsap.to(panelCloseref.current,{
                opacity:1
            })
        }else{
            gsap.to(panelRef.current,{
                height:"0%"
            })
            gsap.to(panelCloseref.current,{
                opacity:0
            })
        }

     },[panelOpen])

    const submitHandler = (e) => {
        e.preventdefault();
    }
    return(
        <div className="h-screen relative overflow-hidden">
            <img className="w-16 left-5 absolute top-5" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="" />
           
            <div className="h-screen w-screen">
                <img className="h-full w-full object-cover" 
                src="https://www.hanbit.co.kr/data/editor/20210429161116_qvzgnfvw.gif" alt="" />   
            </div>
           
            <div className="absolute flex flex-col h-screen justify-end top-0 w-full ">
                <div className="h-[30%] p-6 bg-white relative">
                     <h5 ref={panelCloseref} onClick={()=>{
                        setPanelOpen(false)
                    }} className="opacity-0 right-6 top-6 text-xl ">
                         <i className="ri-arrow-down-wide-line"></i>
                    </h5> 
                    
           
                <h4 className="text-3xl font-semibold ">Find a trip</h4>
           
                <form onSubmit={(e)=>{
                    submitHandler(e)
                }}>
                    <div className=" line absolute h-16 w-1 top-[60%] left-10 rounded-full bg-black"></div>
                    <input className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5" 
                    type="text" 
                    placeholder="Add a pick-up location"
                    onClick={()=>{
                        setPanelOpen(true)
                    }}
                    value={pickup}
                    onChange={(e)=>setPickup(e.target.value)}
                    />
           
                    <input className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3" 
                    type="text" 
                    placeholder="Add a destination"
                    onClick={()=> {
                        setPanelOpen(true)
                    }}
                    value={destination}
                    onChange={(e)=>setDestination(e.target.value)}  
                    />  
                </form>
                </div>
            <div ref={panelRef} className=" bg-white h-0 ">
                
                 <LocationSearchPanel /> 
                
            </div>
            </div>
            <div className="w-full fixed z-10 bg-white bottom-0 px-3 py-6">
                <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
                <div className="w-full flex border-2 mb-2 active:border-black rounded-xl items-center justify-between">
                    <img className="h-10" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
                    <div className=" w-1/2">
                        <h4 className="font-medium text-base">UberGo <span><i className="ri-user-smile-fill"></i>4</span></h4>
                        <h5 className="font-medium text-sm">2 mins away</h5>
                        <p className="font-medium text-sm text-color">Affordable, compact ride</p>
                    </div>
                        <h2 className="text-2xl font-semibold">123.323</h2>
                </div>
                <div className="w-full flex border-2 mb-2 active:border-black rounded-xl items-center justify-between">
                    <img className="h-10" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
                    <div className="ml-2 w-1/2">
                        <h4 className="font-medium text-base">UberMoto <span><i className="ri-user-smile-fill"></i>1</span></h4>
                        <h5 className="font-medium text-sm">2 mins away</h5>
                        <p className="font-medium text-sm text-color">Affordable, Moter ride</p>
                    </div>
                        <h2 className="text-2xl font-semibold">65.00</h2>
                </div>
                <div className="w-full flex border-2 mb-2 active:border-black rounded-xl items-center justify-between">
                    <img className="h-10" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
                    <div className="ml-2 w-1/2">
                        <h4 className="font-medium text-base">UberMoto <span><i className="ri-user-smile-fill"></i>1</span></h4>
                        <h5 className="font-medium text-sm">2 mins away</h5>
                        <p className="font-medium text-sm text-color">Affordable, Moter ride</p>
                    </div>
                        <h2 className="text-2xl font-semibold">65.00</h2>
                </div>
            </div>
            
        </div>
    )

}