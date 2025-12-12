

import React, { useState } from 'react';
import { matches } from '../data/mockMatches';
import MatchCard from '../components/MatchCard';
import { FaApple, FaDownload, FaGooglePlay } from 'react-icons/fa';

const Tickets = () => {
  const [selectedGroup, setSelectedGroup] = useState('All');
  const groups = ['All', 'A', 'B', 'C', 'D', 'E', 'F'];

  const filteredMatches =
    selectedGroup === 'All'
      ? matches
      : matches.filter((match) => match.group === selectedGroup);

  return (
    <div className="min-h-screen bg-maroc-dark pt-24 pb-12 px-4 md:px-8">
      <div className="container mx-auto mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-black text-white uppercase">
          Official <span className="text-maroc-red">Ticketing</span>
        </h1>
        <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
          Book your seats for the group stages on the official CAF platform.
        </p>
      </div>

      <div className="container mx-auto text-center mb-12">
        <a
          href="/src/assets/documents/calendrier-officiel.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-3 bg-white hover:bg-gray-200 text-black font-bold uppercase px-6 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-white/5 group border-2 border-maroc-red"
        >
          <FaDownload className="text-maroc-red text-xl group-hover:animate-bounce" />
          <span>View the Official Schedule </span>
        </a>
      </div>

      <div className="container mx-auto max-w-4xl mb-12">
        <div className="bg-linear-to-r from-maroc-red via-red-800 to-maroc-dark rounded-2xl shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="px-6 py-8 md:p-10 flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="text-center md:text-left mb-6 md:mb-0 md:pr-8">
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase leading-tight mb-3">
                Get Your Digital Ticket!
              </h2>
              <p className="text-red-100 text-lg">
                Download the official CAN 2025 Mobile app for digital tickets, live updates, and exclusive fan guides.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-black hover:bg-gray-900 text-white px-5 py-3 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-md flex-1 md:flex-initial whitespace-nowrap group"
              >
                <FaGooglePlay className="text-2xl text-green-500" />
                <div className="text-left">
                  <p className="text-xs uppercase font-semibold text-gray-400">Get it on</p>
                  <p className="text-lg font-bold leading-none">Google Play</p>
                </div>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-white hover:bg-gray-100 text-black px-5 py-3 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-md flex-1 md:flex-initial whitespace-nowrap"
              >
                <FaApple className="text-2xl" />
                <div className="text-left">
                  <p className="text-xs uppercase font-semibold text-gray-500">Download on the</p>
                  <p className="text-lg font-bold leading-none">App Store</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mb-10 flex flex-wrap justify-center gap-3">
        {groups.map((group) => (
          <button
            key={group}
            onClick={() => setSelectedGroup(group)}
            className={`px-5 py-2 rounded-full font-bold text-sm transition-all uppercase
              ${
                selectedGroup === group
                  ? 'bg-maroc-red text-white shadow-lg shadow-maroc-red/30'
                  : 'bg-transparent text-gray-300 border border-gray-600 hover:bg-gray-800 hover:text-white'
              }
            `}
          >
            {group === 'All' ? 'All Matches' : `Group ${group}`}
          </button>
        ))}
      </div>

      <div className="container mx-auto max-w-5xl">
        {filteredMatches.length > 0 ? (
          filteredMatches.map((match) => <MatchCard key={match.id} match={match} />)
        ) : (
          <div className="text-center py-12 bg-maroc-dark-light rounded-2xl border border-gray-800">
            <p className="text-gray-400 text-xl font-medium">No matches found for this group.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tickets;
