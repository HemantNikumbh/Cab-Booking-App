import React from 'react'

const ConformRide = (props) => {
  return (
    <div>
      <h5 onClick={()=>{
                    props.setConformRidePanel(false)
                }} className="text-2xl p-3 text-centera absolute top-0 right-6 ">
                <i className="ri-arrow-down-wide-fill"></i>
                </h5>
                <h3 className="text-2xl font-semibold mb-5">Conform Your Ride</h3>
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
                  props.setVehicleFound(true)
                  props.setConformRidePanel(false)
                }} className='w-full bg-green-500 mt-5 text-white font-semibold p-2 rounded-lg'>Confirm</button>
                </div>
  )
}

export default ConformRide