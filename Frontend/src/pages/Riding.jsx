import React from 'react'
import { Link } from 'react-router-dom'

export const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to='/Home' className="fixed h-10 w-5 right-2 top-2 bg-white flex items-center justify-center rounded-full">
        <i className="ri-home-gear-line text-lg font-medium "></i>
        </Link>
        <div className='h-1/2'>
        <img className="h-full w-full object-cover" 
                src="https://www.hanbit.co.kr/data/editor/20210429161116_qvzgnfvw.gif" alt="" />
        </div>
        <div className='h-1/2 p-4'>
        <div className='flex items-center justify-between'>
              <img className="h-12" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
              <div className='text-right'>
                <h2 className='text-lg font-medium'>Hemant</h2>
                <h4 className='text-xl font-semibold'>MH 15 DY 4258</h4>
                <p className='text-sm text-gray-600'>Maruti Suzuki</p>
              </div>
              </div>
              <div className='w-full mt-5'>
            
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

        <button className='w-full text-white bg-green-500 mt-5 p-2 font-semibold rounded-lg'> Make a Payment</button>
        </div>
    </div>
  )
}
