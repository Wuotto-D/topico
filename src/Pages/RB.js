import React, { useState } from 'react';
import InfoCard from './InfoCard';

function HT() {
  const images = [
    '/images/RB1.jpeg',
    '/images/RB2.jpeg',
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
      <h2 className="text-3xl font-bold mb-8 text-center">Raquel Buenrostro</h2>

      <div className="relative flex justify-center items-center">
        {/* Botón Anterior */}
        <button
          onClick={handlePrev}
          className="absolute left-0 bg-gray-200 text-gray-700 p-4 rounded-full shadow-md hover:bg-gray-300"
        >
          &#8592;
        </button>

        <div className="w-full max-w-4xl h-[600px] flex justify-center items-center">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-contain rounded-lg shadow-xl"
          />
        </div>

        {/* Botón Siguiente */}
        <button
          onClick={handleNext}
          className="absolute right-0 bg-gray-200 text-gray-700 p-4 rounded-full shadow-md hover:bg-gray-300"
        >
          &#8594;
        </button>
      </div>

      {/* Indicadores */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 mx-2 rounded-full ${
              currentIndex === index ? 'bg-gray-700' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>

      <InfoCard />
    </div>
  );
}

export default HT;
