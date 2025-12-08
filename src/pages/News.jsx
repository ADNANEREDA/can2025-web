import React, { useState } from 'react';
import { news } from '../data/mockNews';
import NewsCard from '../components/NewsCard';
import { FaChevronDown } from 'react-icons/fa';

const News = () => {
  const INITIAL_COUNT = 6;
  const LOAD_STEP = 6;

  const heroArticle = news.find(article => article.isHero);
  const allGridArticles = news.filter(article => !article.isHero);

  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const displayedArticles = allGridArticles.slice(0, visibleCount);

  const hasMore = visibleCount < allGridArticles.length;

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + LOAD_STEP);
  };

  return (
    <div className="min-h-screen bg-maroc-dark pt-24 pb-12 px-4 md:px-8">
      <div className="container mx-auto mb-8">
        <h1 className="text-4xl font-black text-white uppercase">
          News <span className="text-maroc-red">AFCON 2025</span>
        </h1>
      </div>

      {heroArticle && (
        <div className="container mx-auto mb-16 group cursor-pointer">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
               src={heroArticle.image} 
               alt={heroArticle.title} 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-4xl">
                <span className="bg-maroc-red text-white text-sm font-bold px-3 py-1 rounded-sm uppercase tracking-wider mb-4 inline-block">
                    {heroArticle.category}
                </span>
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase leading-none mb-4 group-hover:text-maroc-red transition-colors">
                    {heroArticle.title}
                </h2>
                <p className="text-gray-200 text-lg md:text-xl mb-6 line-clamp-2">
                    {heroArticle.description}
                </p>
                <div className="flex items-center text-gray-300 space-x-4">
                  <span>{heroArticle.date}</span>
                  <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                  <span>{heroArticle.readTime}</span>
                </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-white uppercase mb-8 pl-4 border-l-4 border-maroc-red">
            Latest Updates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayedArticles.map((article) => (
                <NewsCard key={article.id} article={article} />
            ))}
        </div>

        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={handleLoadMore}
              className="group inline-flex items-center space-x-2 bg-transparent border-2 border-maroc-red text-white font-bold uppercase px-8 py-3 rounded-full hover:bg-maroc-red transition-all duration-300 transform hover:-translate-y-1"
            >
              <span>Load More News</span>
              <FaChevronDown className="group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        )}

        {!hasMore && allGridArticles.length > 0 && (
             <p className="text-center text-gray-500 mt-12 text-sm uppercase tracking-widest">
                 You've reached the end
             </p>
        )}
      </div>
    </div>
  );
};

export default News;
