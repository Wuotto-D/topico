import React, { useState } from 'react';
import styled from 'styled-components';

const DiagramContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  padding: 20px;
`;

const Fish = styled.div`
  position: relative;
  width: 800px;
  height: 400px;
`;

const Spine = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 4px;
  background-color: #333;
  transform: translateY(-50%);
`;

const MainEffect = styled.div`
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  font-weight: bold;
  width: 150px;
  text-align: center;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 10px;
`;

const Bone = styled.div`
  position: absolute;
  top: ${props => props.top}%;
  left: ${props => props.left}px;
  width: 300px;
  height: 2px;
  background-color: #666;
  transform: rotate(${props => props.rotate}deg);
  transform-origin: left center;
`;

const Label = styled.span`
  position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  transform: rotate(${props => props.rotate}deg);
  font-size: 0.9rem;
  white-space: nowrap;
`;

function Ishikawa() {
  const [causas, setCausas] = useState({
    metodo: '',
    maquina: '',
    manoDeObra: '',
    material: '',
    medioAmbiente: '',
    medicion: '',
    efecto: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCausas({
      ...causas,
      [name]: value,
    });
  };

  const handleClear = () => {
    setCausas({
      metodo: '',
      maquina: '',
      manoDeObra: '',
      material: '',
      medioAmbiente: '',
      medicion: '',
      efecto: '',
    });
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Diagrama de Ishikawa</h2>

      <form>
        <div className="mb-4">
          <label className="block text-xl font-bold mb-2" htmlFor="efecto">
            Efecto Principal
          </label>
          <input
            id="efecto"
            name="efecto"
            value={causas.efecto}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            placeholder="Escribe el efecto principal aquí..."
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-xl font-bold mb-2" htmlFor="metodo">
            Método
          </label>
          <input
            id="metodo"
            name="metodo"
            value={causas.metodo}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            placeholder="Escribe las causas relacionadas con el método..."
          />
        </div>

        <div className="mb-4">
          <label className="block text-xl font-bold mb-2" htmlFor="maquina">
            Máquina
          </label>
          <input
            id="maquina"
            name="maquina"
            value={causas.maquina}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            placeholder="Escribe las causas relacionadas con la máquina..."
          />
        </div>

        <div className="mb-4">
          <label className="block text-xl font-bold mb-2" htmlFor="manoDeObra">
            Mano de Obra
          </label>
          <input
            id="manoDeObra"
            name="manoDeObra"
            value={causas.manoDeObra}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            placeholder="Escribe las causas relacionadas con la mano de obra..."
          />
        </div>

        <div className="mb-4">
          <label className="block text-xl font-bold mb-2" htmlFor="material">
            Material
          </label>
          <input
            id="material"
            name="material"
            value={causas.material}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            placeholder="Escribe las causas relacionadas con el material..."
          />
        </div>

        <div className="mb-4">
          <label className="block text-xl font-bold mb-2" htmlFor="medioAmbiente">
            Medio Ambiente
          </label>
          <input
            id="medioAmbiente"
            name="medioAmbiente"
            value={causas.medioAmbiente}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            placeholder="Escribe las causas relacionadas con el medio ambiente..."
          />
        </div>

        <div className="mb-4">
          <label className="block text-xl font-bold mb-2" htmlFor="medicion">
            Medición
          </label>
          <input
            id="medicion"
            name="medicion"
            value={causas.medicion}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            placeholder="Escribe las causas relacionadas con la medición..."
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

      <DiagramContainer>
        <Fish>
          <Spine />
          <MainEffect>{causas.efecto || 'Efecto Principal'}</MainEffect>
          <Bone top={20} left={100} rotate={-30}>
            <Label left={10} top={-20} rotate={-30}>{causas.metodo || 'Método'}</Label>
          </Bone>
          <Bone top={40} left={200} rotate={-15}>
            <Label left={10} top={-20} rotate={-15}>{causas.maquina || 'Máquina'}</Label>
          </Bone>
          <Bone top={60} left={300} rotate={-5}>
            <Label left={10} top={-20} rotate={-5}>{causas.manoDeObra || 'Mano de Obra'}</Label>
          </Bone>
          <Bone top={80} left={300} rotate={5}>
            <Label left={10} top={10} rotate={5}>{causas.material || 'Material'}</Label>
          </Bone>
          <Bone top={60} left={200} rotate={15}>
            <Label left={10} top={10} rotate={15}>{causas.medioAmbiente || 'Medio Ambiente'}</Label>
          </Bone>
          <Bone top={80} left={100} rotate={30}>
            <Label left={10} top={10} rotate={30}>{causas.medicion || 'Medición'}</Label>
          </Bone>
        </Fish>
      </DiagramContainer>
    </div>
  );
}

export default Ishikawa;