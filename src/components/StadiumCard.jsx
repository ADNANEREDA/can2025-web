import React from 'react';

const StadiumCard = ({ stadium }) => {
  return (
    <div className="relative h-96 md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
      
      <img 
        src={stadium.image} 
        alt={`Stadium of ${stadium.city}`}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        onError={(e) => {e.target.onerror = null; e.target.src="https://placehold.co/1200x600/111/E62F2F?text=Image+Stade+Manquante"}}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

      <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full flex flex-col md:flex-row justify-between items-end">
        
        <div className="mb-4 md:mb-0">
          <div className="inline-block bg-maroc-red/90 text-white text-sm font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122z" />
            </svg>
            {stadium.capacity}
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-1 drop-shadow-lg leading-none">
            {stadium.city}
          </h2>
          <h3 className="text-xl md:text-2xl text-maroc-cream font-bold">
            {stadium.stadium}
          </h3>
          <p className="text-gray-300 mt-2 max-w-xl hidden md:block">
            {stadium.description}
          </p>
        </div>

        <div className="hidden md:block">
            <a 
              href={stadium.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-maroc-red text-white border border-white/30 font-bold uppercase px-6 py-3 rounded-full transition-all flex items-center gap-2 group-hover:gap-4 cursor-pointer inline-block"
            >
              Explore <span className="text-xl">→</span>
            </a>
        </div>

      </div>
    </div>
  );
};

export default StadiumCard;