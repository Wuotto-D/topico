import React, { useState } from 'react';
import example from './example.jpg'
import InfoCard from './InfoCard';


const EntrepreneurImage = () => {
  const [currentQualities, setCurrentQualities] = useState('');

  const handleMouseEnter = (qualities) => {
    setCurrentQualities(qualities);
  };

  const handleMouseLeave = () => {
    setCurrentQualities('');
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img
          src={example} 
          alt="Empresario Ideal"
          style={styles.image}
        />

        <div
          style={styles.head}
          onMouseEnter={() => handleMouseEnter('Visión estratégica y liderazgo')}
          onMouseLeave={handleMouseLeave}
        ></div>

        <div
          style={styles.eyes}
          onMouseEnter={() => handleMouseEnter('Atención al detalle y enfoque')}
          onMouseLeave={handleMouseLeave}
        ></div>

        <div
          style={styles.mouth}
          onMouseEnter={() => handleMouseEnter('Comunicación efectiva')}
          onMouseLeave={handleMouseLeave}
        ></div>

        <div
          style={styles.arms}
          onMouseEnter={() => handleMouseEnter('Confianza y resolución')}
          onMouseLeave={handleMouseLeave}
        ></div>

        <div
          style={styles.hands}
          onMouseEnter={() => handleMouseEnter('Capacidad de ejecución y resolución de problemas')}
          onMouseLeave={handleMouseLeave}
        ></div>

        <div
          style={styles.torso}
          onMouseEnter={() => handleMouseEnter('Resiliencia y determinación')}
          onMouseLeave={handleMouseLeave}
        ></div>
      </div>

      <div style={styles.qualitiesBox}>
        <p>{currentQualities}</p>
      </div>
      <InfoCard />

    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    position: 'relative',
    width: '400px',
    margin: '0 auto',
  },
  imageContainer: {
    position: 'relative',
    display: 'inline-block',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
  },
  qualitiesBox: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#f4f4f4',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
    color: '#333',
  },
  head: {
    position: 'absolute',
    top: '10%',
    left: '37%',
    width: '25%',
    height: '12%',
    cursor: 'pointer',
    zIndex: 1,
  },
  eyes: {
    position: 'absolute',
    top: '16%',
    left: '38%',
    width: '24%',
    height: '7%',
    cursor: 'pointer',
    zIndex: 1,
  },
  mouth: {
    position: 'absolute',
    top: '26%',
    left: '40%',
    width: '20%',
    height: '5%',
    cursor: 'pointer',
    zIndex: 1,
  },
  arms: {
    position: 'absolute',
    top: '35%',
    left: '30%',
    width: '40%',
    height: '15%',
    cursor: 'pointer',
    zIndex: 1,
  },
  hands: {
    position: 'absolute',
    top: '75%',
    left: '34%',
    width: '30%',
    height: '8%',
    cursor: 'pointer',
    zIndex: 1,
  },
  torso: {
    position: 'absolute',
    top: '30%',
    left: '35%',
    width: '30%',
    height: '20%',
    cursor: 'pointer',
    zIndex: 1,
  },
};

export default EntrepreneurImage;
