import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TARGET_DATE = "2025-12-21T20:00:00"; 

const CountdownBox = ({ value, label, color = "text-white" }) => (
  <div className="flex flex-col items-center bg-black/60 backdrop-blur-md border border-white/10 rounded-lg p-3 w-20 md:w-28 lg:w-32">
    <span className={`text-3xl md:text-5xl lg:text-6xl font-black ${color} tabular-nums`}>{value}</span>
    <span className="text-xs md:text-sm uppercase text-gray-400 mt-2 font-bold tracking-widest">{label}</span>
  </div>
);

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({ days: "00", hours: "00", minutes: "00", seconds: "00" });

  const heroImages = [
     "/src/assets/images/hero-afcon-winner-2023.png",
    "/src/assets/images/can-edi.png",
    "/src/assets/images/sengal.png",
    "/src/assets/images/morocco.jpeg",
    "/src/assets/images/afcondiasporatour3.png"
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(TARGET_DATE) - +new Date();
      let newTimeLeft = {};
      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0'),
          minutes: Math.floor((difference / 1000 / 60) % 60).toString().padStart(2, '0'),
          seconds: Math.floor((difference / 1000) % 60).toString().padStart(2, '0'),
        };
      } else {
         newTimeLeft = { days: "00", hours: "00", minutes: "00", seconds: "00" };
      }
      setTimeLeft(newTimeLeft);
    };
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const imageSlider = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        return prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1;
      });
    }, 5000); 

    return () => clearInterval(imageSlider);
  }, []); 

  return (
    <div 
      className="relative min-h-screen flex items-center justify-center bg-gray-100 dark:bg-maroc-dark bg-cover bg-center pt-20 transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center text-white">
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase mb-2 leading-none font-sans drop-shadow-lg">
          AFCON MOROCCO <span className="text-maroc-red">2025</span>
        </h1>
        
        {/* CHGT: Réduction de la marge du bas (mb-12 -> mb-6) */}
        <p className="text-lg md:text-2xl font-bold uppercase text-maroc-green mb-6 tracking-wide drop-shadow-md">
          Welcome to the Kingdom of Football
        </p>

        {/* CHGT: Réduction de la marge du bas (mb-16 -> mb-8) */}
        <div className="flex gap-3 md:gap-6 mb-8 ">
          <CountdownBox value={timeLeft.days} label="Days" color="text-maroc-red" />
          <span className="text-4xl md:text-6xl font-black self-start mt-4">:</span>
          <CountdownBox value={timeLeft.hours} label="Hours" />
          <span className="text-4xl md:text-6xl font-black self-start mt-4">:</span>
          <CountdownBox value={timeLeft.minutes} label="Min" />
          <span className="text-4xl md:text-6xl font-black self-start mt-4 hidden md:block">:</span>
          <CountdownBox value={timeLeft.seconds} label="Sec" />
        </div>

        <Link to="/tickets" className="bg-maroc-red hover:bg-red-700 text-white text-lg md:text-xl font-black uppercase px-10 py-4 rounded-full shadow-lg transition-all hover:scale-105">
          Book Your Tickets
        </Link>

      </div>
    </div>
  );
};

export default Home;