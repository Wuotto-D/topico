import React, { useState } from 'react';

function FODA() {
  const [foda, setFoda] = useState({
    strengths: '',
    opportunities: '',
    weaknesses: '',
    threats: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFoda({
      ...foda,
      [name]: value,
    });
  };

  const handleClear = () => {
    setFoda({
      strengths: '',
      opportunities: '',
      weaknesses: '',
      threats: '',
    });
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">FODA</h2>
      
      <form>
        <div className="mb-4">
          <label className="block text-xl font-bold mb-2" htmlFor="strengths">
            Fortalezas
          </label>
          <textarea
            id="strengths"
            name="strengths"
            value={foda.strengths}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            placeholder="Escribe las fortalezas aquí..."
          />
        </div>

        <div className="mb-4">
          <label className="block text-xl font-bold mb-2" htmlFor="opportunities">
            Oportunidades
          </label>
          <textarea
            id="opportunities"
            name="opportunities"
            value={foda.opportunities}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            placeholder="Escribe las oportunidades aquí..."
          />
        </div>

        <div className="mb-4">
          <label className="block text-xl font-bold mb-2" htmlFor="weaknesses">
            Debilidades
          </label>
          <textarea
            id="weaknesses"
            name="weaknesses"
            value={foda.weaknesses}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            placeholder="Escribe las debilidades aquí..."
          />
        </div>

        <div className="mb-4">
          <label className="block text-xl font-bold mb-2" htmlFor="threats">
            Amenazas
          </label>
          <textarea
            id="threats"
            name="threats"
            value={foda.threats}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            placeholder="Escribe las amenazas aquí..."
          />
        </div>

        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={handleClear}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Borrar Todo
          </button>
        </div>
      </form>

      {foda.strengths || foda.opportunities || foda.weaknesses || foda.threats ? (
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Resumen FODA:</h3>
          <div className="grid grid-cols-2 gap-4">
            {foda.strengths && (
              <div className="border p-4">
                <h4 className="text-xl font-bold mb-2">Fortalezas</h4>
                <p>{foda.strengths}</p>
              </div>
            )}
            {foda.opportunities && (
              <div className="border p-4">
                <h4 className="text-xl font-bold mb-2">Oportunidades</h4>
                <p>{foda.opportunities}</p>
              </div>
            )}
            {foda.weaknesses && (
              <div className="border p-4">
                <h4 className="text-xl font-bold mb-2">Debilidades</h4>
                <p>{foda.weaknesses}</p>
              </div>
            )}
            {foda.threats && (
              <div className="border p-4">
                <h4 className="text-xl font-bold mb-2">Amenazas</h4>
                <p>{foda.threats}</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <p className="mt-8 text-center text-gray-500">No se han ingresado datos en el FODA.</p>
      )}
    </div>
  );
}

export default FODA;
