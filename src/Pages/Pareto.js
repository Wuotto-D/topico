import React, { useState } from 'react';

function Pareto() {
  const [pareto, setPareto] = useState({
    issues: '',
    percentages: '',
  });
  const [chartUrl, setChartUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPareto({
      ...pareto,
      [name]: value,
    });
  };

  const handleClear = () => {
    setPareto({
      issues: '',
      percentages: '',
    });
    setChartUrl('');
    setError('');
  };

  const handleGenerateChart = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbwczvICSxXpVJrI5_4QPqhtgWbymw9Xk-lp_c3AgfhP0CkHOC5C6htDpQyk7aTZ9Nmv/exec',
        {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            issues: pareto.issues.split('\n'), 
            percentages: pareto.percentages.split('\n').map(Number), 
          }),
        }
      );

      const data = await response.json();
      if (data.chartUrl) {
        setChartUrl(data.chartUrl);
      } else {
        setError('Error al generar el gráfico. Por favor, intenta nuevamente.');
      }
    } catch (err) {
      setError('Error de conexión. Verifica tu red e intenta de nuevo.');
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Diagrama de Pareto</h2>
      
      <form>
        <div className="mb-4">
          <label className="block text-xl font-bold mb-2" htmlFor="issues">
            Problemas
          </label>
          <textarea
            id="issues"
            name="issues"
            value={pareto.issues}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            placeholder="Escribe los problemas aquí, cada uno en una nueva línea..."
          />
        </div>

        <div className="mb-4">
          <label className="block text-xl font-bold mb-2" htmlFor="percentages">
            Porcentajes
          </label>
          <textarea
            id="percentages"
            name="percentages"
            value={pareto.percentages}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            placeholder="Escribe los porcentajes aquí, cada uno en una nueva línea..."
          />
        </div>

        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={handleClear}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Limpiar
          </button>
          <button
            type="button"
            onClick={handleGenerateChart}
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? 'Generando...' : 'Generar Gráfico'}
          </button>
        </div>
      </form>

      {error && (
        <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      {chartUrl && (
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Gráfico de Pareto:</h3>
          <img src={chartUrl} alt="Diagrama de Pareto" className="w-full" />
        </div>
      )}
    </div>
  );
}

export default Pareto;