import React, { useState } from 'react';
import InfoCard from './InfoCard';

function IE() {
  const images = [
    '/images/IE_1.png',
    '/images/IE_2.png',
    '/images/IE_3.png',
    '/images/IE_4.png',
    '/images/IE_5.png',
    '/images/IE_6.png',
    '/images/IE_7.png',
    '/images/IE_8.png',
    '/images/IE_9.png',
    '/images/IE_10.png',
    '/images/IE_11.png',
    '/images/IE_12.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Inteligencia Emocional</h2>

      <div className="relative flex justify-center items-center">
        {/* Botón Anterior */}
        <button
          onClick={handlePrev}
          className="absolute left-0 bg-gray-200 text-gray-700 p-2 rounded-full shadow-md hover:bg-gray-300"
        >
          &#8592;
        </button>

        <div className="w-3/4 h-96 flex justify-center items-center">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-contain rounded-lg shadow-lg"
          />
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 bg-gray-200 text-gray-700 p-2 rounded-full shadow-md hover:bg-gray-300"
        >
          &#8594;
        </button>
      </div>

      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 mx-1 rounded-full ${
              currentIndex === index ? 'bg-gray-700' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>

      <InfoCard />
    </div>
  );
}

export default IE;
