import React from 'react';

const SponsorsStrip = () => {
  const sponsors = [
    { name: "CAF", logo: "/src/assets/sponsors//visa.png" },
    { name: "TotalEnergies", logo: "/src/assets/sponsors/1xbet.png" },
    { name: "Orange", logo: "/src/assets/sponsors/agl.png" },
    { name: "RAM", logo: "/src/assets/sponsors/air-maroc.png" },
    { name: "CAF", logo: "/src/assets/sponsors/danon.png" },
    { name: "TotalEnergies", logo: "/src/assets/sponsors/lonaci.png" },
    { name: "Orange", logo: "/src/assets/sponsors/puma.png" },
    { name: "RAM", logo: "/src/assets/sponsors/tecno.png" },
    { name: "CAF", logo: "/src/assets/sponsors/tetale.png" },
   
  ];

  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    <div className="bg-black py-12 overflow-hidden relative border-t border-white/10">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 mb-8">
        <h3 className="text-center text-gray-400 text-sm font-bold uppercase tracking-[0.2em]">
          Official Partners
        </h3>
      </div>
      
      <div className="flex gap-16 md:gap-24 animate-marquee hover:pause items-center w-max px-4">
        {duplicatedSponsors.map((sponsor, index) => (
          <img 
            key={index} 
            src={sponsor.logo} 
            alt={sponsor.name} 
            className="h-12 md:h-16 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
            onError={(e) => {e.target.onerror = null; e.target.src="https://placehold.co/150x80/333333/AAAAAA?text=" + sponsor.name}}
          />
        ))}
      </div>
    </div>
  );
};

export default SponsorsStrip;