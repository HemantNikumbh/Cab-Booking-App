import React from "react";
import{Routes,Route} from "react-router-dom"
import {Start} from "./pages/Start"
import {UserLogin} from "./pages/UserLogin"
import {UserSignup} from "./pages/UserSignup"
import {CaptainLogin} from "./pages/CaptainLogin"
import {CaptainSignup} from "./pages/CaptainSignup"
import {UserProtectWrapper} from "./pages/UserProtectWrapper"
import {Home} from "./pages/Home"
import { UserLogout } from "./pages/UserLogout";
import { CaptainHome } from "./pages/CaptainHome";
import { CaptainProtectWrapper } from "./pages/CaptainProtectWrapper";
import{Riding} from "./pages/Riding"
import { CaptainRiding } from "./pages/CaptainRiding";  


const App = () => {
  return(
    <div>
      <Routes>
        {/* User */}
      <Route path="/" element={<Start/>}/>
      <Route path="/UserLogin" element={<UserLogin/>}/>
      <Route path="/UserSignup" element={<UserSignup/>}/>
      <Route path="/CaptainLogin" element={<CaptainLogin/>}/>
      <Route path="/CaptainSignup" element={<CaptainSignup/>}/>
      <Route path="/Riding" element={<Riding/>}/>
      <Route path="/CaptainRiding" element={<CaptainRiding/>}/>

      {/* User Protect */}
      <Route path="/Home" element={
        <UserProtectWrapper>
          <Home/>
        </UserProtectWrapper>
      }/>
      <Route path="/UserLogout" element={
        <UserProtectWrapper>
          <UserLogout/>
        </UserProtectWrapper>
      }/>

      {/* captain */}
      <Route path="/CaptainHome" element={
        <CaptainProtectWrapper>
          <CaptainHome/>
        </CaptainProtectWrapper>
      }/>



      </Routes>
    </div>
    
  )
}
export default App
