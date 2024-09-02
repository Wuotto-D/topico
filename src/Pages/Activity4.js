import React, { useState } from 'react';
import InfoCard from './InfoCard';


function ImageTile({ src }) {
  return (
    <div>
      <img src={src} className="w-full h-full object-cover" />
    </div>
  );
}

function Activity4() {
  const [selectedImage, setSelectedImage] = useState({
    src: '/images/7habitos.png', 
  });

  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Mapa Mental</h2>
      <div className="flex justify-center">
        <ImageTile src={selectedImage.src} title={selectedImage.title} />
      </div>
      
    <InfoCard />
    </div>
    
  );
}

export default Activity4;
