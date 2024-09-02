import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="bg-gray-100 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4">Universidad Autónoma de Querétaro</h1>
        <h2 className="text-2xl font-semibold mb-4">Tópico I</h2>
        <div className="mb-4">
          <p>Daniela Wuotto Flores</p>
          <p>8vo semestre</p>
          <p>Ingeniería de Software</p>
        </div>
        <Link to="/actividades" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Ingresar
        </Link>
      </div>
      
    </div>
  );
}

export default Home;