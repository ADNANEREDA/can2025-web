import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8 animate-fade-in-up font-sans border-t border-maroc-red/20">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          <div className="space-y-6 text-center lg:text-left">
            <Link to="/" className="inline-block">
              <img 
                src="/src/assets/images/Logo1.jpg"
                alt="AFCON Morocco 2025"
                className="h-24 w-auto object-contain mx-auto lg:mx-0 grayscale hover:grayscale-0 transition-all duration-500" 
                onError={(e) => { 
                  e.target.onerror = null; 
                  e.target.src = "https://via.placeholder.com/200x100/000000/FFFFFF?text=CAN+MAROC"; 
                }}
              />
            </Link>

            <p className="text-sm font-medium text-gray-400 leading-relaxed mx-auto lg:mx-0 max-w-xs">
              The heartbeat of African football. Unofficial supporter platform for Morocco 2025.
            </p>

            <div className="flex items-center justify-center lg:justify-start space-x-3 pt-2">
              <SocialLink href="https://facebook.com" icon={<FaFacebookF />} />
              <SocialLink href="https://instagram.com" icon={<FaInstagram />} />
              <SocialLink href="https://youtube.com" icon={<FaYoutube />} />
              <SocialLink href="https://tiktok.com" icon={<FaTiktok />} />
            </div>
          </div>

          <div className="text-center lg:text-left">
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="space-y-3 text-sm font-medium">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/news">Latest News</FooterLink>
              <FooterLink to="/teams">Teams & Groups</FooterLink>
              <FooterLink to="/stadiums">Host Cities</FooterLink>
              <FooterLink to="/gallery">Fan Gallery</FooterLink>
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <FooterHeading>Resources</FooterHeading>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <a href="/documents/calendrier-officiel.pdf" target="_blank" download="CAN2025-Schedule.pdf" className="group flex items-center justify-center lg:justify-start space-x-2 hover:text-white transition-colors">
                  <div className="bg-gray-800 p-2 rounded-md group-hover:bg-maroc-red transition-colors">
                    <FaFilePdf className="text-maroc-red group-hover:text-white text-lg" />
                  </div>
                  <span>Official Schedule (PDF)</span>
                </a>
              </li>

              <li>
                <a href="https://fr.cafonline.com/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center lg:justify-start space-x-2 hover:text-white transition-colors">
                  <FaExternalLinkAlt className="text-gray-500 group-hover:text-maroc-red" />
                  <span>CAF Official Website</span>
                </a>
              </li>

              <li className="pt-2">
                <Link to="/tickets" className="text-maroc-red hover:text-white font-bold uppercase tracking-wider transition-colors inline-flex items-center">
                  Book Tickets <span className="ml-2">&rarr;</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center lg:text-left bg-gray-900/50 p-6 rounded-2xl border border-gray-800 lg:border-none lg:bg-transparent lg:p-0">
            <FooterHeading>Get the Full Experience</FooterHeading>
            <p className="text-xs text-gray-500 mb-6 leading-relaxed">
              Live scores, exclusive fan guides, and digital ticketing in your pocket.
            </p>

            <a 
              href="#" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full md:w-auto h-16 items-center justify-center space-x-3 bg-white text-black font-bold px-6 rounded-xl hover:bg-maroc-red hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg group"
            >
              <img 
                src="/src/assets/images/mon-app-icon.png"
                alt="App Icon"
                className="h-11 w-11 rounded-lg object-cover border-2 border-gray-200 group-hover:border-white transition-colors flex-shrink-0"
              />

              <div className="text-left rtl:text-right grow">
                <div className="block group-hover:hidden">
                  <p className="text-[10px] uppercase font-bold text-gray-500 leading-none mb-0.5">Download on</p>
                  <p className="text-base font-black leading-none">App Store / Play</p>
                </div>

                <div className="hidden group-hover:flex items-center h-full animate-fade-in">
                  <p className="text-xl font-black leading-none tracking-wide">AFCON Mobile</p>
                </div>
              </div>
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 text-center md:text-left space-y-4 md:space-y-0">
          <p>© {currentYear} AFCON Morocco 2025. All rights reserved</p>
          <div className="flex space-x-6 font-medium">
            <p>DIMA MAGHRIB <span className="text-maroc-red">❤</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterHeading = ({ children }) => (
  <h3 className="text-white text-sm font-bold uppercase mb-6 tracking-widest after:content-[''] after:block after:w-12 after:h-0.5 after:bg-maroc-red after:mt-2 mx-auto lg:mx-0">
    {children}
  </h3>
);

const FooterLink = ({ to, children }) => (
  <li>
    <Link 
      to={to} 
      className="block py-1.5 hover:text-white hover:translate-x-1 transition-all duration-200 text-gray-400"
    >
      {children}
    </Link>
  </li>
);

const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-800/80 text-gray-400 hover:bg-maroc-red hover:text-white transition-all duration-300 transform hover:scale-110 border border-gray-700 hover:border-maroc-red"
  >
    {React.cloneElement(icon, { className: "w-4 h-4" })}
  </a>
);

export default Footer;
