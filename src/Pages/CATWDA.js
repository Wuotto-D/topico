import React, { useState } from 'react';

function Catwda() {
  const [catwda, setCatwda] = useState({
    cause: '',
    attractiveness: '',
    time: '',
    willingness: '',
    difficulty: '',
    action: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCatwda({
      ...catwda,
      [name]: value,
    });
  };

  const handleClear = () => {
    setCatwda({
      cause: '',
      attractiveness: '',
      time: '',
      willingness: '',
      difficulty: '',
      action: '',
    });
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">CATWDA</h2>
      
      <form>
        <div className="mb-4">
          <label className="block text-xl font-bold mb-2" htmlFor="cause">
            Causa
          </label>
          <textarea
            id="cause"
            name="cause"
            value={catwda.cause}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            placeholder="Escribe la causa aquí..."
          />
        </div>

        <div className="mb-4">
          <label className="block text-xl font-bold mb-2" htmlFor="attractiveness">
            Atractividad
          </label>
          <textarea
            id="attractiveness"
            name="attractiveness"
            value={catwda.attractiveness}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            placeholder="Escribe la atractividad aquí..."
          />
        </div>

        <div className="mb-4">
          <label className="block text-xl font-bold mb-2" htmlFor="time">
            Tiempo
          </label>
          <textarea
            id="time"
            name="time"
            value={catwda.time}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            placeholder="Escribe el tiempo aquí..."
          />
        </div>

        <div className="mb-4">
          <label className="block text-xl font-bold mb-2" htmlFor="willingness">
            Disposición
          </label>
          <textarea
            id="willingness"
            name="willingness"
            value={catwda.willingness}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            placeholder="Escribe la disposición aquí..."
          />
        </div>

        <div className="mb-4">
          <label className="block text-xl font-bold mb-2" htmlFor="difficulty">
            Dificultad
          </label>
          <textarea
            id="difficulty"
            name="difficulty"
            value={catwda.difficulty}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            placeholder="Escribe la dificultad aquí..."
          />
        </div>

        <div className="mb-4">
          <label className="block text-xl font-bold mb-2" htmlFor="action">
            Acción
          </label>
          <textarea
            id="action"
            name="action"
            value={catwda.action}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            placeholder="Escribe la acción aquí..."
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

      {Object.values(catwda).some(value => value) ? (
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Resumen CATWDA:</h3>
          <div className="grid grid-cols-3 gap-4">
            {Object.entries(catwda).map(([key, value]) => (
              value && (
                <div key={key} className="border p-4">
                  <h4 className="text-xl font-bold mb-2">{key.charAt(0).toUpperCase() + key.slice(1)}</h4>
                  <p>{value}</p>
                </div>
              )
            ))}
          </div>
        </div>
      ) : (
        <p className="mt-8 text-center text-gray-500">No se han ingresado datos en el CATWDA.</p>
      )}
    </div>
  );
}

export default Catwda;
