import React from "react";
import { Link } from "react-router-dom";

export const Start = () =>{
    return(
        <div>
            <div className="bg-cover bg-bottom bg-[url(https://images.unsplash.com/photo-1602773040364-522556233e30?q=80&w=1974&)] h-screen pt-8  flex justify-between flex-col w-full bg-red-400">
                <img src="https://clipart-library.com/2023/uber-new-logo-2018.png"className="w-14 ml-8"/>
                <div className="bg-white py-4 pb-7 px-4">
                    <h2 className="text-3xl font-bold">Get Started With Uber</h2>
                    <Link to="/UserLogin" className="w-full flex item-center justify-center bg-black text-white py-3 rounded mt-5">Continue</Link>
                </div>
            </div>
        </div>
        
    )
}