import React, { useState } from 'react';
import { qualifiedTeams, groupsList } from '../data/mockTeams';
import TeamCard from '../components/TeamCard';

const Teams = () => {
  const [selectedGroup, setSelectedGroup] = useState('All');

  const filterButtons = ['All', ...groupsList];

  const filteredTeams = selectedGroup === 'All'
    ? qualifiedTeams
    : qualifiedTeams.filter(team => team.group === selectedGroup);

  return (
    <div className="min-h-screen bg-maroc-dark pt-24 pb-12 px-4 md:px-8">
      
      <div className="container mx-auto mb-12 text-center animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-black text-white uppercase mb-4">
          The 24 <span className="text-maroc-red">Qualified Nations</span>
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Discover the teams that will compete in Morocco for the continental title.
          Hover over a card to see more details.
        </p>
      </div>

      <div className="container mx-auto mb-10 flex flex-wrap justify-center gap-3 animate-fade-in-up lg:px-20">
        {filterButtons.map((group) => (
          <button
            key={group}
            onClick={() => setSelectedGroup(group)}
            className={`px-6 py-2 rounded-full font-bold text-sm transition-all uppercase tracking-wider
              ${selectedGroup === group 
                ? 'bg-maroc-red text-white shadow-lg shadow-maroc-red/30 scale-105'
                : 'bg-transparent text-gray-300 border border-gray-700 hover:border-white hover:text-white hover:bg-white/5'}
            `}
          >
            {group === 'All' ? 'All Teams' : `Group ${group}`}
          </button>
        ))}
      </div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredTeams.map((team) => (
            <div key={team.id} className="animate-fade-in-up">
               <TeamCard team={team} />
            </div>
          ))}
        </div>

        {filteredTeams.length === 0 && (
             <p className="text-center text-gray-400 mt-12">No team found.</p>
        )}

      </div>
    </div>
  );
};

export default Teams;
