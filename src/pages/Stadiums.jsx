import React from 'react';
import { stadiums } from '../data/mockStadiums';
import StadiumCard from '../components/StadiumCard';

const Stadiums = () => {
  return (
    <div className="min-h-screen bg-maroc-dark pt-24 pb-12 px-4 md:px-8">
      
      <div className="container mx-auto text-center mb-10 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight">
           Cities & <span className="text-maroc-red">stadiums </span>
        </h1>
        <p className="text-maroc-cream mt-4 text-lg md:text-xl">
          Discover the 6 legendary stadiums that will make Africa vibrate in 2025.
        </p>
      </div>

      <div className="container mx-auto flex flex-col gap-8 md:gap-12">
        {stadiums.map((stadium) => (
          <StadiumCard key={stadium.id} stadium={stadium} />
        ))}
      </div>

    </div>
  );
};

export default Stadiums;
