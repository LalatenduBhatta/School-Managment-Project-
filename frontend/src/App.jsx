import React from 'react'
import Home from './components/Home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import StudentLogin from './components/StudentPages/StudentLogin'
import StudentSignup from './components/StudentPages/StudentSignup'
import StudentHomePage from './components/StudentPages/StudentHomePage'
import AuthContextAPI from './context/AuthContext'
import StudentProfile from './components/StudentPages/StudentProfile'
import StudentProfileUpdate from './components/StudentPages/StudentProfileUpdate'
function App() {
  return (
    <>
      <AuthContextAPI>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/studentLogin" element={<StudentLogin />}></Route>
            <Route path="/studentSignup" element={<StudentSignup />}></Route>
            <Route path="/studentHome" element={<StudentHomePage />}></Route>
            <Route path="/studentProfile" element={<StudentProfile />}></Route>
            <Route path="/studentProfileUpdate" element={<StudentProfileUpdate />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthContextAPI>

    </>
  )
}

export default App