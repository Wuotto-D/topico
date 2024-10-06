import React from 'react';
import InfoCard from './InfoCard';


const Tabla = () => {
  const tableContainerStyle = {
    padding: '20px',
    backgroundColor: '#f0f4f8',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    textAlign: 'center',
    color: '#333',
    fontSize: '28px',
    fontFamily: 'Arial, sans-serif',
    marginBottom: '20px',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  };

  const theadStyle = {
    backgroundColor: '#4a90e2',
    color: 'white',
  };

  const thTdStyle = {
    padding: '12px 15px',
    border: '1px solid #ddd',
    textAlign: 'left',
  };

  const tbodyTrEvenStyle = {
    backgroundColor: '#f9f9f9',
  };

  const tbodyTrHoverStyle = {
    backgroundColor: '#f1f1f1',
  };

  const thStyle = {
    fontSize: '16px',
    textTransform: 'uppercase',
  };

  const tdStyle = {
    fontSize: '14px',
  };

  return (
    <div style={tableContainerStyle}>
      <h1 style={titleStyle}>Comparativa de Empresarios Mexicanos</h1>
      <table style={tableStyle}>
        <thead style={theadStyle}>
          <tr>
            <th style={{...thTdStyle, ...thStyle}}>Aspecto</th>
            <th style={{...thTdStyle, ...thStyle}}>Lorenzo Servitje (Bimbo)</th>
            <th style={{...thTdStyle, ...thStyle}}>Ricardo Salinas Pliego (Grupo Salinas)</th>
            <th style={{...thTdStyle, ...thStyle}}>Emilio Azcárraga Jean (Televisa)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={thTdStyle}>Empresa</td>
            <td style={thTdStyle}>Grupo Bimbo</td>
            <td style={thTdStyle}>Grupo Salinas (TV Azteca, Elektra, Banco Azteca)</td>
            <td style={thTdStyle}>Grupo Televisa</td>
          </tr>
          <tr style={tbodyTrEvenStyle}>
            <td style={thTdStyle}>Industria</td>
            <td style={thTdStyle}>Panificación, Alimentos</td>
            <td style={thTdStyle}>Medios de Comunicación, Comercio, Servicios Financieros</td>
            <td style={thTdStyle}>Medios de Comunicación, Entretenimiento</td>
          </tr>
          <tr>
            <td style={thTdStyle}>Fecha de Fundación</td>
            <td style={thTdStyle}>1945</td>
            <td style={thTdStyle}>1906 (Elektra) / 1993 (TV Azteca)</td>
            <td style={thTdStyle}>1973 (Televisa)</td>
          </tr>
          <tr style={tbodyTrEvenStyle}>
            <td style={thTdStyle}>Posición en la Empresa</td>
            <td style={thTdStyle}>Fundador</td>
            <td style={thTdStyle}>Fundador y CEO</td>
            <td style={thTdStyle}>CEO (heredado de su padre)</td>
          </tr>
          <tr>
            <td style={thTdStyle}>Fortuna estimada</td>
            <td style={thTdStyle}>4 mil millones USD</td>
            <td style={thTdStyle}>12 mil millones USD</td>
            <td style={thTdStyle}>1.5 mil millones USD</td>
          </tr>
          <tr style={tbodyTrEvenStyle}>
            <td style={thTdStyle}>Principales Logros</td>
            <td style={thTdStyle}>Expansión de Bimbo en 33 países, responsabilidad social.</td>
            <td style={thTdStyle}>Competencia con Televisa, diversificación financiera.</td>
            <td style={thTdStyle}>Dominio en medios en español, expansión internacional.</td>
          </tr>
          <tr>
            <td style={thTdStyle}>Filantropía</td>
            <td style={thTdStyle}>Fundación Bimbo, iniciativas educativas y sociales.</td>
            <td style={thTdStyle}>Fundación Azteca, programas como "Esperanza Azteca".</td>
            <td style={thTdStyle}>Fundación Televisa, enfoque en salud y educación.</td>
          </tr>
          <tr style={tbodyTrEvenStyle}>
            <td style={thTdStyle}>Legado Empresarial</td>
            <td style={thTdStyle}>Una de las empresas más grandes de alimentos en el mundo.</td>
            <td style={thTdStyle}>Innovación en medios y servicios financieros accesibles.</td>
            <td style={thTdStyle}>Dominio en entretenimiento en español.</td>
          </tr>
          <tr>
            <td style={thTdStyle}>Estilo de Liderazgo</td>
            <td style={thTdStyle}>Tradicional, enfoque en bienestar y responsabilidad social.</td>
            <td style={thTdStyle}>Agresivo, innovación y disrupción de mercados.</td>
            <td style={thTdStyle}>Moderno, adaptación tecnológica.</td>
          </tr>
        </tbody>
      </table>
      <InfoCard />

    </div>
  );
};

export default Tabla;
