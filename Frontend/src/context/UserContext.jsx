import React, { createContext, useState } from "react";

export const UserDataContex = createContext()
const UserContext = ({children})=>{
    const[user,setuser] = useState({
        email:"",
        fullName:{
            firstName:" ",
            lastName:" "
        }
    })
    return(        
    <div>
        <UserDataContex.Provider value={[user,setuser]}>
            {children}
        </UserDataContex.Provider>
    </div>
    )
}

export default UserContext