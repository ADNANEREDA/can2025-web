import React from 'react';

const NewsCard = ({ article }) => {
  return (
    <div className="bg-black/40 border border-white/10 rounded-xl overflow-hidden hover:border-maroc-red transition-all duration-300 group cursor-pointer">
      
      <div className="h-48 overflow-hidden relative">
         <img 
          src={article.image} 
          alt={article.title}
         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 bg-maroc-red text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
            {article.category}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-maroc-red transition-colors">
          {article.title}
        </h3>
        <div className="flex items-center text-gray-400 text-sm space-x-3">
          <span>{article.date}</span>
          <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
          <span>{article.readTime}</span>
        </div>
      </div>

    </div>
  );
};

export default NewsCard;