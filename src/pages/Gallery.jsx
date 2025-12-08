import React, { useState, useEffect } from 'react';
import { galleryImages } from '../data/mockGallery';
import LightboxModal from '../components/LightboxModal';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-maroc-dark pt-24 pb-12 px-4 md:px-8">
      <div className="container mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-white uppercase">
          Photo <span className="text-maroc-red">Gallery</span>
        </h1>
        <p className="text-maroc-cream mt-4 text-lg">
          Dive into the atmosphere and emotion of the competition.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            onClick={() => openLightbox(image)}
            className="aspect-square overflow-hidden rounded-xl cursor-pointer group relative"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-4 opacity-0 group-hover:opacity-100">
              <span className="bg-maroc-red/80 text-white text-xs font-bold px-2 py-1 rounded-sm uppercase">{image.category}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <LightboxModal
          selectedImage={selectedImage}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
};

export default Gallery;