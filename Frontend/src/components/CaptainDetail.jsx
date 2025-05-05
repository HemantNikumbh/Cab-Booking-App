import React from 'react'

export const CaptainDetail = () => {
  return (
    <div>
        <div className="flex item-center justify-between">
            <div className="flex gap-4 items-center justify-start">
                <img className="h-10 w-10 rounded-full" src="https://i.pinimg.com/originals/c3/2e/6a/c32e6a9db3aa7c60496cfea7819bf2b2.png" alt="" />
                <h4 className="text-lg font-medium">Hemant Nikumbh</h4>
            </div>
            <div>
                <h4 className="text-xl font-semibold">500</h4>
                <p className="text-sm font-medium text-gray-600">Earned</p>
            </div>

        </div>
        <div className="flex p-3 bg-gray-100 rounded-full justify-center gap-5 items-start">
            <div className="text-center">
            <i className="text-3xl mb-2 font-thin ri-time-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">hours online</p>
            </div>
            <div className="text-center">
            <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">hours online</p>
            </div>
            <div className="text-center">
            <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">hours online</p>
            </div>
        </div>
    </div>
  )
}
