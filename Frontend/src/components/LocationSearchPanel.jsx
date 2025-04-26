export const LocationSearchPanel = (props) => {
    console.log(props)
    // Sample array - changed from function to constant array
    const locations = [
        "Flat no 26, Laxaman Nagar, Lokhande Mala, JaiL Road, Nasik",
        "20B, Shivaji Nagar, Lokhande Mala, JaiL Road, Nasik",
        "33A, Shivaji Nagar, Lokhande Mala, JaiL Road, Nasik", 
        "45B, Shivaji Nagar, Lokhande Mala, JaiL Road, Nasik",
        "50C, Shivaji Nagar, Lokhande Mala, JaiL Road, Nasik"
    ]

    return (
        <div>
            {locations.map((item, index) => (
                <div 
                    key={index}
                    onClick={()=>{
                        props.setVehiclePanelOpen(true)
                        props.setPanelOpen(false)
                    }}
                    className="flex gap-4 mt-5 border-2 border-white active:border-black px-3 rounded-xl my-2 items-center justify-start"
                >
                    <h2 className="bg-[#eee] h-10 flex items-center justify-center w-16 rounded-full">
                        <i className="ri-map-pin-fill text-xl"></i>
                    </h2>
                    <h4 className="font-medium">
                        {item}
                    </h4>
                </div>
            ))}
        </div>
    )
}