import React from 'react';

function MusicIA() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100">
      <h1 className="text-2xl font-bold mb-6">Predigamos tus gustos musicales</h1>
      <a
        href="https://music-ia-wuotto-ds-projects.vercel.app/" 
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Comenzar
      </a>
    </div>
  );
}

export default MusicIA;
