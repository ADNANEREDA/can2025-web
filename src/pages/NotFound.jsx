
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-maroc-dark flex flex-col items-center justify-center text-center px-4">
      
      
      <h1 className="text-9xl font-black text-maroc-red mb-4 animate-bounce">
        404
      </h1>
      <p className="text-gray-400 mb-10 text-lg max-w-lg">
        The page you are trying to reach does not exist or has been replaced.
The referee has blown the whistle to end the play.
      </p>

    
      <Link 
        to="/" 
        className="inline-block bg-white text-black font-black uppercase px-8 py-4 rounded-full hover:bg-maroc-red hover:text-white transition-all transform hover:scale-105 shadow-lg shadow-white/10"
      >
        Back To Home
      </Link>

    </div>
  );
};

export default NotFound;