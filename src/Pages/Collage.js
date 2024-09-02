import React, { useState } from 'react';

function ImageTile({ src, title, description }) {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div 
      className="relative w-full h-64 rounded-lg overflow-hidden cursor-pointer"
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      <img src={src} alt={title} className="w-full h-full object-cover" />
      {showOverlay && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center text-white p-4 transition-opacity duration-300">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}

function CollageInteractivo() {
  const images = [
    { src: '/images/Ahorro.jpg', title: 'Ahorro', description: 'Acumulación de dinero para un uso futuro.' },
    { src: '/images/Amor.jpg', title: 'Amor', description: 'Sentimiento profundo de afecto y conexión con otra persona o cosa' },
    { src: '/images/Honradez.jpg', title: 'Honradez', description: 'Cualidad de ser sincero, justo y veraz en todas las acciones' },
    { src: '/images/Ley.jpg', title: 'Ley', description: 'Norma o conjunto de normas que regulan la conducta humana en una sociedad.' },
    { src: '/images/Limpieza.jpg', title: 'Limpieza', description: 'Estado de estar libre de suciedad o impurezas.' },
    { src: '/images/Orden.jpg', title: 'Orden', description: 'Disposición de las cosas de forma metódica y lógica.' },
    { src: '/images/Puntualidad.jpg', title: 'Puntualidad', description: 'Cualidad de llegar o hacer algo a la hora exacta.' },
    { src: '/images/Respeto.jpg', title: 'Respeto', description: 'Consideración y aprecio hacia los demás y sus derechos.' },
    { src: '/images/Responsabilidad.jpg', title: 'Responsabilidad', description: 'Cualidad de ser consciente de las propias obligaciones y cumplirlas.' },
    { src: '/images/Superacion.jpg', title: 'Superación', description: 'Acción de superar obstáculos y alcanzar metas.' },
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Collage Interactivo</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <ImageTile key={index} {...img} />
        ))}
      </div>
    </div>
  );
}

export default CollageInteractivo;