import React from 'react';
import InfoCard from './InfoCard';

const Tabla = () => {
  const tableContainerStyle = {
    padding: '20px',
    backgroundColor: '#1c1c1e',
    borderRadius: '12px',
    maxWidth: '1000px',
    margin: '0 auto',
  };

  const titleStyle = {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: '24px',
    fontWeight: '300',
    fontFamily: 'Helvetica, Arial, sans-serif',
    marginBottom: '20px',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    fontFamily: 'Helvetica, Arial, sans-serif',
  };

  const theadStyle = {
    backgroundColor: '#2c2c2e',
    color: '#f2f2f7',
  };

  const thTdStyle = {
    padding: '14px',
    borderBottom: '1px solid #3a3a3c',
    textAlign: 'left',
    color: '#e5e5ea',
  };

  const tbodyTrEvenStyle = {
    backgroundColor: '#2c2c2e',
  };

  const tbodyTrHoverStyle = {
    backgroundColor: '#3a3a3c',
  };

  const thStyle = {
    fontSize: '15px',
    fontWeight: '500',
    textTransform: 'uppercase',
  };

  const tdStyle = {
    fontSize: '14px',
    fontWeight: '400',
  };

  return (
    <div style={tableContainerStyle}>
      <h1 style={titleStyle}>Comparativa de Empresarios Mexicanos</h1>
      <table style={tableStyle}>
        <thead style={theadStyle}>
          <tr>
            <th style={{ ...thTdStyle, ...thStyle }}>Aspecto</th>
            <th style={{ ...thTdStyle, ...thStyle }}>Lorenzo Servitje (Bimbo)</th>
            <th style={{ ...thTdStyle, ...thStyle }}>Ricardo Salinas Pliego (Grupo Salinas)</th>
            <th style={{ ...thTdStyle, ...thStyle }}>Emilio Azcárraga Jean (Televisa)</th>
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
