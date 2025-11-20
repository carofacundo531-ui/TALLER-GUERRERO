
import React from 'react';

const Gallery: React.FC = () => {
  // --- Replace these placeholder image URLs with your actual image URLs ---
  // To add more images, just add a new URL to the array.
  const images = [
    'https://picsum.photos/600/400?random=10',
    'https://picsum.photos/600/400?random=11',
    'https://picsum.photos/600/400?random=12',
    'https://picsum.photos/600/400?random=13',
    'https://picsum.photos/600/400?random=14',
    'https://picsum.photos/600/400?random=15',
    'https://picsum.photos/600/400?random=16',
    'https://picsum.photos/600/400?random=17',
  ];
  // --- End of editable images ---

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Galería de Trabajos</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md group">
              <img 
                src={src} 
                alt={`Trabajo realizado ${index + 1}`} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
