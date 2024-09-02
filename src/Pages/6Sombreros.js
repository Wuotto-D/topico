import React, { useState } from 'react';

function SeisSombreros() {
  const [sombreros, setSombreros] = useState({
    white: '',
    red: '',
    black: '',
    yellow: '',
    green: '',
    blue: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSombreros({
      ...sombreros,
      [name]: value,
    });
  };

  const handleClear = () => {
    setSombreros({
      white: '',
      red: '',
      black: '',
      yellow: '',
      green: '',
      blue: '',
    });
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Seis Sombreros para Pensar</h2>
      
      <form>
        <div className="mb-4">
          <label className="block text-xl font-bold mb-2" htmlFor="white">
            Sombrero Blanco (Datos y Hechos)
          </label>
          <textarea
            id="white"
            name="white"
            value={sombreros.white}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            placeholder="Escribe los datos y hechos aquí..."
          />
        </div>

        <div className="mb-4">
          <label className="block text-xl font-bold mb-2" htmlFor="red">
            Sombrero Rojo (Emociones)
          </label>
          <textarea
            id="red"
            name="red"
            value={sombreros.red}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            placeholder="Escribe las emociones aquí..."
          />
        </div>

        <div className="mb-4">
          <label className="block text-xl font-bold mb-2" htmlFor="black">
            Sombrero Negro (Pesimismo)
          </label>
          <textarea
            id="black"
            name="black"
            value={sombreros.black}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            placeholder="Escribe el pesimismo aquí..."
          />
        </div>

        <div className="mb-4">
          <label className="block text-xl font-bold mb-2" htmlFor="yellow">
            Sombrero Amarillo (Optimismo)
          </label>
          <textarea
            id="yellow"
            name="yellow"
            value={sombreros.yellow}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            placeholder="Escribe el optimismo aquí..."
          />
        </div>

        <div className="mb-4">
          <label className="block text-xl font-bold mb-2" htmlFor="green">
            Sombrero Verde (Creatividad)
          </label>
          <textarea
            id="green"
            name="green"
            value={sombreros.green}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            placeholder="Escribe la creatividad aquí..."
          />
        </div>

        <div className="mb-4">
          <label className="block text-xl font-bold mb-2" htmlFor="blue">
            Sombrero Azul (Control)
          </label>
          <textarea
            id="blue"
            name="blue"
            value={sombreros.blue}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            placeholder="Escribe el control aquí..."
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

      {Object.values(sombreros).some(value => value) ? (
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Resumen Seis Sombreros para Pensar:</h3>
          <div className="grid grid-cols-3 gap-4">
            {Object.entries(sombreros).map(([key, value]) => (
              value && (
                <div key={key} className="border p-4">
                  <h4 className="text-xl font-bold mb-2">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </h4>
                  <p>{value}</p>
                </div>
              )
            ))}
          </div>
        </div>
      ) : (
        <p className="mt-8 text-center text-gray-500">No se han ingresado datos en los Seis Sombreros para Pensar.</p>
      )}
    </div>
  );
}

export default SeisSombreros;
