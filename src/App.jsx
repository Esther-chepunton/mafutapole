import { useState, useEffect } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import { Routes, Route } from 'react-router-dom'
import Contacts from './pages/Contacts'
import Events from './pages/Events'
import Blog from './pages/Blog'
import Announcements from './components/Announcements'
import Popup from './components/Popup'

function App() {

  const [showPopup, setShowPopup] = useState(false);


  useEffect(() => {
    // Function to show the popup
    const showPopupNow = () => {
      setShowPopup(true);
    };

    // Set interval to show the popup every 30 seconds
    const intervalId = setInterval(showPopupNow, 10000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>

{showPopup && <Popup/>}
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
