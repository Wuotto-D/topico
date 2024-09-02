import React from 'react';

function InfoCard() {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md max-w-sm mx-auto mt-8">
      <div className="flex items-center">
        <div className="w-16 h-16 bg-white mr-4"></div>
        <div>
          <h3 className="font-bold">Daniela Wuotto Flores</h3>
          <p>Tópico 1</p>
          <p>Ingeniería de software</p>
          <p className="text-sm">danielwuotto@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;