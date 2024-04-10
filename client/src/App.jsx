import React from 'react'
import Login from './pages/login/Login';
import SignUp from './pages/signup/Signup';
import Home from './pages/home/Home';
import { Routes, Route } from 'react-router-dom';
import {Toaster} from "react-hot-toast"

const App = () => {
  return (
    <div className='p-2 h-screen flex items-center justify-center'>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

      </Routes>

      <Toaster/>

    </div>
  )
}

export default App