
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Shop from './pages/Shop';
import SponsorsStrip from './components/SponsorsStrip';
import Footer from './components/Footer';
import { FaTimes, FaMobileAlt, FaApple, FaGooglePlay } from 'react-icons/fa';
import Home from './pages/Home';
import News from './pages/News';
import Teams from './pages/Teams';
import Stadiums from './pages/Stadiums';
import Gallery from './pages/Gallery';
import Tickets from './pages/Tickets';
import NotFound from './pages/NotFound';
function App() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const closeBanner = () => {
    setIsBannerVisible(false);
  };

  return (
    <Router>
      <ScrollToTop />
      {isBannerVisible && (
        <div className="fixed top-0 left-0 w-full bg-linear-to-r from-maroc-red to-red-900 text-white z-60 shadow-lg animate-fade-in-down font-sans">
          <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
            <div className="flex items-center space-x-3 text-center sm:text-left">
               <div className="bg-white/20 p-2 rounded-full animate-pulse">
                 <FaMobileAlt className="text-xl" />
               </div>
               <div>
                 <p className="font-bold uppercase text-sm md:text-base leading-tight">
                   Don't Miss Out!
                 </p>
                 <p className="text-xs md:text-sm text-red-100 leading-tight">
                   Download the official CAN 2025 App.
                 </p>
               </div>
            </div>

           
            <div className="flex items-center space-x-4">
               <div className="flex space-x-2">
                  <a href="#" className="bg-black/30 hover:bg-black/50 transition p-2 rounded-lg flex items-center space-x-1 text-xs font-bold border border-white/10">
                    <FaApple className="text-lg"/> <span className="hidden md:inline">App Store</span>
                  </a>
                  <a href="#" className="bg-black/30 hover:bg-black/50 transition p-2 rounded-lg flex items-center space-x-1 text-xs font-bold border border-white/10">
                    <FaGooglePlay className="text-lg text-green-400"/> <span className="hidden md:inline">Play Store</span>
                  </a>
               </div>
               <button 
                 onClick={closeBanner} 
                 className="text-white/70 hover:text-white transition p-1"
                 aria-label="Close banner"
               >
                 <FaTimes className="text-xl" />
               </button>
            </div>

          </div>
        </div>
      )}
      
      <div className={`flex flex-col min-h-screen bg-black transition-all duration-300 ${isBannerVisible ? 'mt-[110px] sm:mt-16' : 'mt-0'}`}>
        <Navbar />
        
        <main className="grow">
           
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/stadiums" element={<Stadiums />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="*" element={<NotFound />}/>
          </Routes>
         
        </main>

        <SponsorsStrip />
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;