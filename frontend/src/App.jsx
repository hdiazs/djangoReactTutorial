import React from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Register from "./pages/Register"
import Login from "./pages/Login"
import PasswordResetRequest from "./pages/PasswordResetRequest"
import Navbar from "./components/Navbar"
import ProtectedRoute from "./components/ProtectedRoutes"

function App() {

  const location  = useLocation()
  const noNavbar = location.pathname === "/register" || location.pathname === "/" || location.pathname === "/request/password_reset"
  
  return (
    <>
      {
        noNavbar ?

          <Routes>

            <Route path="/" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/request/password_reset" element={<PasswordResetRequest/>} />

          </Routes>

        :

          <Navbar

          content = {

            <Routes>
              <Route element={<ProtectedRoute/>}>
                  <Route path="/home" element={<Home/>} />
                  <Route path="/about" element={<About/>} />  
              </Route>
            </Routes>

          }
          />
      }
      
      
    </>
  )
}

export default App
