import React from 'react';

const MatchCard = ({ match }) => {
  const ticketURL = "https://tickets.cafonline.com/en";

  return (
    <div className="bg-gray-900 rounded-xl shadow-md overflow-hidden border-l-4 border-maroc-red mb-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-maroc-red/20 animate-fade-in-up">
      
      <div className="bg-black px-6 py-3 flex items-center">
        <span className="font-bold text-white uppercase tracking-wider">
          GROUP {match.group} • <span className="text-maroc-red">{match.round}</span>
        </span>
      </div>

      <div className="p-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col text-center md:text-left">
          <div className="text-lg font-bold text-white">
            {match.date} - <span className="text-maroc-red">{match.time}</span>
          </div>
          <div className="text-gray-400 flex items-center justify-center md:justify-start gap-2 mt-1">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            {match.stadium}
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <div className="flex flex-col items-center">
            <img 
              src={match.team1.flag} 
              alt={match.team1.name}
              className="h-12 w-16 object-cover rounded-md shadow-sm border border-gray-700"
              onError={(e) => {e.target.onerror = null; e.target.src="https://placehold.co/64x48/333/CCC?text=?"}}
            />
            <span className="font-bold mt-2 text-white">{match.team1.name}</span>
          </div>
          
          <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center font-black text-gray-500">
            VS
          </div>

          <div className="flex flex-col items-center">
            <img 
              src={match.team2.flag} 
              alt={match.team2.name}
              className="h-12 w-16 object-cover rounded-md shadow-sm border border-gray-700"
              onError={(e) => {e.target.onerror = null; e.target.src="https://placehold.co/64x48/333/CCC?text=?"}}
            />
            <span className="font-bold mt-2 text-white">{match.team2.name}</span>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3 min-w-[180px]">
          
          {match.status === 'available' ? (
            <>
              <div className="font-bold text-white">
                from <span className="text-2xl text-maroc-red">{match.price} MAD</span>
              </div>
              
              <a 
                href={ticketURL}
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-maroc-red hover:bg-red-700 text-white font-bold uppercase px-6 py-3 rounded-full shadow-md transition-all flex items-center gap-2 w-full justify-center hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                  <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
                </svg>
                Buy Tickets
              </a>
            </>
          ) : (
            <button 
              disabled 
              className="bg-gray-700 text-gray-400 font-bold uppercase px-6 py-3 rounded-full cursor-not-allowed w-full flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
              Sold Out
            </button>
          )}

        </div>

      </div>
    </div>
  );
};

export default MatchCard;