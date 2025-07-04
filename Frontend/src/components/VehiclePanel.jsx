export const VehiclePanel = (props) =>{
    return(
        <div>
            <h5 onClick={()=>{
                    props.setVehiclePanelOpen(false)
                }} className="text-2xl p-3 text-centera absolute top-0 right-6 ">
                <i className="ri-arrow-down-wide-fill"></i>
                </h5>
                <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
                <div onClick={()=>{
                    props.setConformRidePanel(true)
                }} className="w-full flex border-2 mb-2 active:border-black rounded-xl items-center justify-between">
                    <img className="h-10" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
                    <div className=" w-1/2">
                        <h4 className="font-medium text-base">UberGo <span><i className="ri-user-smile-fill"></i>4</span></h4>
                        <h5 className="font-medium text-sm">2 mins away</h5>
                        <p className="font-medium text-sm text-color">Affordable, compact ride</p>
                    </div>
                        <h2 className="text-2xl font-semibold">123.3</h2>
                </div>
                <div onClick={()=>{
                    props.setConformRidePanel(true)
                }} className="w-full flex border-2 mb-2 active:border-black rounded-xl items-center justify-between">
                    <img className="h-10" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
                    <div className="ml-2 w-1/2">
                        <h4 className="font-medium text-base">UberMoto <span><i className="ri-user-smile-fill"></i>1</span></h4>
                        <h5 className="font-medium text-sm">2 mins away</h5>
                        <p className="font-medium text-sm text-color">Affordable, Moter ride</p>
                    </div>
                        <h2 className="text-2xl font-semibold">65.00</h2>
                </div>
                <div onClick={()=>{
                    props.setConformRidePanel(true)
                }} className="w-full flex border-2 mb-2 active:border-black rounded-xl items-center justify-between">
                    <img className="h-10" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
                    <div className="ml-2 w-1/2">
                        <h4 className="font-medium text-base">UberMoto <span><i className="ri-user-smile-fill"></i>1</span></h4>
                        <h5 className="font-medium text-sm">2 mins away</h5>
                        <p className="font-medium text-sm text-color">Affordable, Moter ride</p>
                    </div>
                        <h2 className="text-2xl font-semibold">65.00</h2>
                </div>
        </div>
    )
}