import React from 'react'

export const RidePopup = (props) => {
  return (
    <div>
         <h5 onClick={()=>{
                     props.setRidePopupPanel(false)
                }} className="text-2xl p-3 text-centera absolute top-0 right-6 ">
                <i className="ri-arrow-down-wide-fill"></i>
                </h5>
                <h3 className="text-2xl font-semibold mb-5">New Ride For You</h3>
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
                <button onClick={() => {
                  props.setConformRidePopup(true) 
                  
                }} className='w-full bg-green-500 mt-5 text-white font-semibold p-2 rounded-lg'>Accept</button>
                <button  onClick={()=>{
                    props.setRidePopupPanel(false)
                   

                }}className='w-full bg-gray-300 mt-4 text-gray-700 font-semibold p-2 rounded-lg' >Ignore</button>
    </div>
  )
}
