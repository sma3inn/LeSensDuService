import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import Prestations from './components/Prestations/Prestations'
import Navbar from './components/Navbar/Navbar'

import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/prestations' element={<Prestations />} />
      </Routes>
    </div>
  )
}

export default App