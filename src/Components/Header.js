import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">Portafolio</Link>
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-gray-700">Inicio</Link>
            <Link to="/actividades" className="hover:text-gray-700">Actividades</Link>
            <Link to="/contacto" className="hover:text-gray-700">Contacto</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;