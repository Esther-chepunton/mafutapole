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
import Blog from './pages/Blog'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route  path="/contacts" element={<Contacts />}/>
        <Route path="/events" element={<Events />}/>
        <Route path="/blog" element={<Blog />}/>
        
    </Routes>
    </>
  )
}

export default App
