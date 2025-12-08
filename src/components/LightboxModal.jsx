import React, { useEffect } from 'react';

const LightboxModal = ({ selectedImage, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage, onClose]);

  if (!selectedImage) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-maroc-red transition-colors z-50 p-2 cursor-pointer"
        aria-label="Close gallery"
      >
        &times;
      </button>

      <div
        className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-lg shadow-2xl animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={selectedImage.src}
          alt={selectedImage.alt}
          className="w-full h-full object-contain max-h-[85vh]"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white">
          <h3 className="text-lg font-bold">{selectedImage.alt}</h3>
          <span className="text-sm text-maroc-red uppercase tracking-wider">{selectedImage.category}</span>
        </div>
      </div>
    </div>
  );
};

export default LightboxModal;