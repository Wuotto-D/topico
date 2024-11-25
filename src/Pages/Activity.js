import React from 'react';
import { Link } from 'react-router-dom';
import InfoCard from './InfoCard';

function ActivityButton({ number, description }) {
  const path = number === 1 ? "/RB":number === 2 ? "/HombreTierra" : number ===3 ? "/MusicIA":number === 4 ? "/actividad4": number === 6 ? "/collage-interactivo"
   : number === 7 ? "/actividad7" : number === 8 ? "/actividad8": number === 9 ? "/actividad9": number===10?"/FODA" :
   number=== 11 ? "/catwda" : number === 12 ? "/ishikawa": number === 13 ? "/Pareto": number === 14 ? "/6Sombreros": number === 15 ? "/resumen" : number === 16 ? "/Google"
   : number === 17 ? "/Detona": number===18 ? "/Collage2": number === 19 ? "/Tabla": number===20 ? "/Empresario": number ===21 ? "/Arquetipos": 
   number===22?"/InteligenciaEmocional": number === 23 ? "/PaisesF":"#";
  
  return (
    <Link 
      to={path}
      className="block p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-200 ease-in-out transform hover:scale-105 shadow-sm"
    >
      <h3 className="font-semibold text-lg text-gray-100 mb-2">Actividad {number}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </Link>
  );
}

function Actividades() {
  const descriptions = [
    "Resumen Raquel Buenrostro",
    "Resumen el hombre de la tierra.",
    "Predictor de música con IA",
    "7 hábitos",
    "Descripción de la actividad 5.",
    "Collage creativo.",
    "Yokoi Kenji",
    "Carlos Kasuga",
    "Mentes brillantes.",
    "FODA",
    "CAWTDA",
    "Ishikawa",
    "Pareto",
    "Sombreros",
    "Resumen",
    "Google",
    "Detona",
    "Collage 2",
    "Tabla",
    "Empresario",
    "Arquetipo",
    "Inteligencia emocional en la directiva",
    "Actividades Libro ¿Por qué fracasan los paises?"
  ];
  
  return (
    <div className="container mx-auto px-6 py-8 bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-light text-gray-100 mb-8 text-center">Actividades</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18, 19, 20,21,22,23].map((num) => (
          <ActivityButton 
            key={num} 
            number={num} 
            description={descriptions[num - 1]} 
          />
        ))}
      </div>
      <InfoCard />
    </div>
  );
}

export default Actividades;
