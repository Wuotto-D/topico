import React, { useState } from 'react';
import InfoCard from './InfoCard';

function Video() {
  const videos = [
    '/images/enfocate.mp4',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Libro enfocate</h2>

      <div className="relative flex justify-center items-center">
        

        <div className="w-full max-w-4xl h-[600px] flex justify-center items-center">
          <video
            src={videos[currentIndex]}
            controls
            className="w-full h-full object-contain rounded-lg shadow-xl"
          >
            Your browser does not support the video tag.
          </video>
        </div>

    
      </div>

      {/* Indicadores */}
      <div className="flex justify-center mt-4">
        {videos.map((_, index) => (
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

export default Video;
