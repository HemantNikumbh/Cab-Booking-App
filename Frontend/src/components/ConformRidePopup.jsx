import React from 'react'
import { Link } from 'react-router-dom' 

export const ConformRidePopup = (props) => {
  const [otp, setOtp] = React.useState('')  

  const submitHandler = (e) => {
    e.preventDefault()
   
  }
  return (
    <div>
         <h5 onClick={()=>{
                     props.setConformRidePopup(false)
                }} className="text-2xl p-3 text-centera absolute top-0 right-6 ">
                <i className="ri-arrow-down-wide-fill"></i>
                </h5>
                <h3 className="text-2xl font-semibold mb-5">Conform this ride to start</h3>
                <div className='flex items-center justify-between bg-yellow-400 p-3 rounded-lg'>
                    <div className='flex items-center gap-3'>
                        <img className='h-10 w-10 rounded-full object-cover' 
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <h2 className='text-lg font-medium'>Rishi Pillai</h2>
                    </div>
                    <h5 className='text-lg font-semibold'>2.2 km</h5>
                </div>
                <div className="flex-col justify-between gap-2 flex items-center">
                <img className='h-20' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" /> 
                </div>
                <div className='w-full mt-5'>
                  <div className='flex items-center gap-5 p-3 border-b-2'>
                  <i className="text-lg ri-map-pin-2-fill"></i>
                  <div>
                    <h3 className='text-lg font-medium'>545/34</h3>
                    <p className='text-base text-gray-600 -mt-1'>College Road,Dasak,Camp,Nashik</p>
                  </div>
                  </div>

                  <div className='flex items-center gap-5 p-3 border-b-2'>
                  <i className="ri-map-pin-user-fill"></i>
                  <div>
                    <h3 className='text-lg font-medium'>545/34</h3>
                    <p className='text-base text-gray-600 -mt-1'>College Road,Dasak,Camp,Nashik</p>
                  </div>
                  </div>
                  
                  <div className='flex items-center gap-5 p-3 '>
                  <i className="ri-money-rupee-circle-fill"></i>
                  <div>
                    <h3 className='text-lg font-medium'>123.3</h3>
                    <p className='text-base text-gray-600 -mt-1'>Cash</p>
                  </div>
                  </div>

                </div>
                <div>
                    <form onSubmit={(e)=>{
                        submitHandler(e)

                    }}>
                        <input type="text" placeholder='Enter OTP' value={otp} onChange={(e) => setOtp(e.target.value)} className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5" />

                <Link to="/CaptainRiding" className='w-full flex items-center justify-center bg-green-500 mt-5 text-white font-semibold p-2 rounded-lg'>Confirm</Link>
                <button  onClick={()=>{
                
                    props.setConformRidePopup(false)  
                    props.setRidePopupPanel(false)  
                   

                }}className='w-full bg-red-500 mt-4 text-white font-semibold p-2 rounded-lg' >Cancel Ride</button>
                </form>
                </div>
    </div>
  )
}
