import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Events from './pages/Events';
import Blog from './pages/Blog';
import Announcements from './components/Announcements';
import Popup from './components/Popup';
import Error from './components/Error';



function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [isOnline, setIsOnline] = useState(false); // Set to false to simulate an offline website

  useEffect(() => {
    // Set interval to show the popup every 30 seconds
    const intervalId = setInterval(() => {
      setShowPopup(true);
    }, 10000);

    // Clear the interval when the component is unmounted
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  if (!isOnline) {
    return <Error />;
  }

  return (
    <>
      <div className=''>
        {showPopup && <Popup />}
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
