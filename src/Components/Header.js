import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-900">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-light text-gray-100 tracking-wide">
            Portafolio
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-300 hover:text-gray-100 transition-colors duration-200">
              Inicio
            </Link>
            <Link to="/actividades" className="text-gray-300 hover:text-gray-100 transition-colors duration-200">
              Actividades
            </Link>
         
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
