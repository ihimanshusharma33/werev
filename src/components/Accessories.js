import React from 'react'

// Dynamically import all images from the accessories folder
const images = require.context('../assests/accessories', false, /\.(jpe?g|png|webp)$/);

// Create an array of image file names
const imageFiles = images.keys();

const Accessories = () => {
  return (
    <div className="flex justify-center">
      <section className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-10 mt-10 mb-10 px-2">
        {imageFiles.map((file) => {
          // Extract a readable name from the file name
          const name = file
            .replace('./', '')
            .replace(/\.[^/.]+$/, '')
            .replace(/[_-]/g, ' ')
            .replace(/\b\w/g, l => l.toUpperCase());
          return (
            <div
              key={file}
              className="w-full bg-white shadow-lg rounded-2xl duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center p-6 border border-gray-100"
            >
              <div className="w-40 h-44 flex items-center justify-center bg-gray-50 rounded-lg mb-4 overflow-hidden">
                <img
                  src={images(file)}
                  alt={name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <span className="text-gray-400 uppercase text-xs tracking-wider mb-1">WeRev</span>
              <p className="text-lg font-semibold text-gray-800 capitalize text-center">{name}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Accessories
