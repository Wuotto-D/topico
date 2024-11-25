import React from 'react';

function InfoCard() {
  const additionalImages = [
    '/images/yo_1.jpg',
    '/images/yo_2.jpg',
    '/images/yo_3.jpg',
    '/images/yo_4.jpg',
    '/images/yo_5.jpg',
    '/images/yo_6.jpg',
  ];

  return (
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg shadow-sm max-w-sm mx-auto mt-8">
      <div className="flex items-center">
        <div className="w-16 h-16 bg-gray-700 rounded-full flex-shrink-0 mr-4 overflow-hidden">
          <img
            src="/images/yo_5.jpg" 
            alt="Foto de perfil"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Daniela Wuotto Flores</h3>
          <p className="text-gray-400">Tópico 2</p>
          <p className="text-gray-400">Ingeniería de software</p>
          <p className="text-sm text-gray-500 mt-1">danielwuotto@gmail.com</p>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="text-lg font-semibold mb-4">Collage sobre mí</h4>
        <div className="grid grid-cols-3 gap-2">
          {additionalImages.map((src, index) => (
            <div key={index} className="w-full h-24 bg-gray-700 rounded-lg overflow-hidden">
              <img
                src={src}
                alt={`Imagen adicional ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
