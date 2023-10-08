import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import { Routes, Route } from 'react-router-dom'
import Contacts from './pages/Contacts'
import Events from './pages/Events'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/about" element={<About />}/>
        <Route index path="/contacts" element={<Contacts />}/>
        <Route index path="/events" element={<Events />}/>
        
    </Routes>
    </>
  )
}

export default App
