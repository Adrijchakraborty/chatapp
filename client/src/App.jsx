import React from 'react'
import Register from './components/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App