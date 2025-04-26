import { useRef, useState } from "react";
import {useGSAP} from "@gsap/react"
import  gsap  from "gsap";
import 'remixicon/fonts/remixicon.css'
import { LocationSearchPanel } from "../components/LocationSearchPanel";
import { VehiclePanel } from "../components/VehiclePanel";
import ConformRide from "../components/ConformRide";
import { LookingForDriver } from "../components/LookingForDriver";
import { WaitingForDriver } from "../components/WaitingForDriver";  

export const Home = () =>{
    const[pickup,setPickup] = useState("")
    const[destination,setDestination] = useState("")
    const[panelOpen,setPanelOpen] = useState(false)
    const panelRef = useRef(null)    
    const panelCloseref = useRef(null)
    const vehiclepanelref = useRef(null)    
    const[vehiclePanelOpen,setVehiclePanelOpen] = useState(false)
    const [conformRidePanel,setConformRidePanel] = useState(false)
    const ConformRideRef = useRef(null)
    const[vehicleFound,setVehicleFound] = useState(false)
    const vehicleFoundref = useRef(null)
    const[waitingForDriver,setWaitingForDriver] = useState(false)
    const WaitingForDriverref = useRef(null)


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

     useGSAP(function(){
        if(vehiclePanelOpen){
            gsap.to(vehiclepanelref.current,{
                transform:"translateY(0%)",

            })
        }else{
            gsap.to(vehiclepanelref.current,{
                transform:"translatey(100%"
            })
        }
     },[vehiclePanelOpen])

     useGSAP(function(){
        if(conformRidePanel){
            gsap.to(ConformRideRef.current,{
                transform:"translateY(0%)",

            })
        }else{
            gsap.to(ConformRideRef.current,{
                transform:"translatey(100%"
            })
        }
     },[conformRidePanel])

     useGSAP(function(){
        if(vehicleFound){
            gsap.to(vehicleFoundref.current,{
                transform:"translateY(0%)",

            })
        }else{
            gsap.to(vehicleFoundref.current,{
                transform:"translatey(100%"
            })
        }
     },[vehicleFound])

     useGSAP(function(){
        if(waitingForDriver){
            gsap.to(WaitingForDriverref.current,{
                transform:"translateY(0%)",

            })
        }else{
            gsap.to(WaitingForDriverref.current,{
                transform:"translatey(100%"
            })
        }
     },[waitingForDriver])

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
                
                 <LocationSearchPanel panelOpen={panelOpen} setPanelOpen={setPanelOpen} vehiclePanelOpen={vehiclePanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} /> 

                
            </div>
            </div>
            
            <div ref={vehiclepanelref} className="w-full fixed z-10 bg-white bottom-0 translate-y-full px-3 py-6">
                <VehiclePanel setConformRidePanel={setConformRidePanel} setVehiclePanelOpen={setVehiclePanelOpen}/>
            </div>
            
            <div ref={ConformRideRef} className="w-full fixed z-10 bg-white bottom-0 translate-y-full px-3 py-6 pt-12">
                <ConformRide setConformRidePanel={setConformRidePanel} setVehicleFound={setVehicleFound}/>
            </div>
            
            <div ref={vehicleFoundref} className="w-full fixed z-10 bg-white bottom-0 translate-y-full px-3 py-6 pt-12">
                <LookingForDriver setVehicleFound={setVehicleFound} />
            </div>

            <div ref={WaitingForDriverref} className="w-full fixed z-10 bg-white bottom-0  px-3 py-6 pt-12">
                <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
            </div>

        </div>
    )

}