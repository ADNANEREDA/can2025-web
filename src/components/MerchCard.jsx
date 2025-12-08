// src/components/MerchCard.jsx
import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';

const MerchCard = ({ item, onSelect }) => {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg group hover:-translate-y-2 transition-all duration-300 border border-gray-800 flex flex-col">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <span className="absolute top-4 right-4 bg-maroc-red text-white text-xs font-bold px-2 py-1 rounded uppercase">
            {item.category}
        </span>
      </div>
      
      <div className="p-6 flex flex-col grow justify-between">
        <div>
            <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
            <p className="text-gray-400 text-sm mb-4 line-clamp-2">{item.description}</p>
        </div>
        
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-800">
            <span className="text-2xl font-black text-maroc-red">{item.price} DH</span>
            <button 
                onClick={() => onSelect(item)}
                className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-full font-bold text-sm hover:bg-maroc-red hover:text-white transition-colors"
            >
                <FaShoppingBag />
                <span>Select</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default MerchCard;
