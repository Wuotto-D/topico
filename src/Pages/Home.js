import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="bg-gray-900 rounded-xl shadow-md p-8 text-center">
        <h1 className="text-4xl font-light text-gray-100 mb-4">
          Universidad Autónoma de Querétaro
        </h1>
        <h2 className="text-2xl font-light text-gray-400 mb-6">Tópico I</h2>
        <div className="text-gray-300 mb-8 space-y-2">
          <p>Daniela Wuotto Flores</p>
          <p>8vo semestre</p>
          <p>Ingeniería de Software</p>
        </div>
        <Link
          to="/actividades"
          className="bg-gray-700 hover:bg-gray-600 text-gray-100 font-medium py-3 px-6 rounded-full transition duration-200 ease-in-out"
        >
          Ingresar
        </Link>
      </div>
    </div>
  );
}

export default Home;
