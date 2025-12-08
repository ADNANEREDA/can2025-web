import React from 'react';

const TeamCard = ({ team }) => {
  return (
    <div className="relative h-56 rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
      
      <div className="absolute inset-0 bg-maroc-dark flex flex-col items-center justify-center p-4 transition-all duration-500 group-hover:opacity-0 z-10">
        
        <img 
          src={team.flag} 
          alt={team.name}
          className="w-24 h-16 object-cover rounded-lg shadow-md mb-4 border border-gray-700"
          onError={(e) => {e.target.onerror = null; e.target.src="https://placehold.co/96x64/333/CCC?text=?"}}
        />
        
        <h3 className="text-xl font-black text-white uppercase tracking-wider text-center">{team.name}</h3>
        
        <div className="absolute top-3 right-3 bg-maroc-red/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          GRP {team.group}
        </div>
      </div>

      <div className="absolute inset-0 bg-maroc-red bg-gradient-to-br from-maroc-red to-red-800 flex flex-col items-center justify-center p-5 text-center opacity-0 transition-all duration-500 transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 z-20">
        
        <h3 className="text-2xl font-black text-white mb-3 uppercase">{team.name}</h3>
        
        <div className="space-y-2 w-full">
          
          <div className="bg-black/20 rounded-lg p-2">
             <span className="text-maroc-dark font-bold text-xs uppercase block mb-1">AFCON Titles</span>
             <span className="text-white text-xl font-black leading-none">{team.titles}</span>
          </div>

          <div>
            <span className="text-maroc-dark font-bold text-xs uppercase block">Best Perf.</span>
            <span className="text-white text-sm font-medium leading-tight">{team.bestPerformance}</span>
          </div>
           
           <div className="pt-1 border-t border-white/20 mt-2">
            <span className="text-maroc-dark font-bold text-xs uppercase block">Star Player</span>
            <span className="text-white text-lg font-bold">{team.starPlayer}</span>
          </div>

        </div>

      </div>

    </div>
  );
};

export default TeamCard;