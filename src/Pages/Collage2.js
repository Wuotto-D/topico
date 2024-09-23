import React, { useState } from 'react';
import InfoCard from './InfoCard';


const Collage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImageInfo, setSelectedImageInfo] = useState({});

  const images = [
    { uri: '/images/1.jpeg', info: 'Gladwell introduce la idea de que el éxito no es solo una cuestión de talento, sino también de práctica. Señala que se necesitan aproximadamente 10,000 horas de práctica deliberada para alcanzar un nivel de maestría en cualquier disciplina.' },
    { uri: '/images/2.jpeg', info: 'Analiza cómo las oportunidades y circunstancias externas influyen en el éxito. Gladwell observa que en el hockey canadiense, los jugadores nacidos en los primeros meses del año tienen una ventaja significativa debido a las reglas de selección y la madurez física temprana, lo que les da más oportunidades de éxito en sus carreras deportivas.' },
    { uri: '/images/3.jpeg', info: 'Gladwell explica cómo las ventajas pequeñas pueden acumularse con el tiempo, beneficiando desproporcionadamente a los que ya están en una posición de ventaja. El título hace referencia a una parábola bíblica sobre la distribución desigual de las riquezas. En este contexto, se refiere a cómo las pequeñas ventajas en la vida temprana pueden conducir a diferencias significativas en el éxito futuro..' },
    { uri: '/images/4.jpeg', info: 'Aquí, Gladwell argumenta que asistir a una institución educativa de élite no siempre garantiza el éxito. Sostiene que ser un "pez grande en un estanque pequeño" (ser un estudiante destacado en una escuela menos competitiva) puede ser más beneficioso que ser un "pez pequeño en un estanque grande" (un estudiante promedio en una escuela de élite), ya que la autoestima y la confianza son cruciales para el éxito..' },
    { uri: '/images/5.jpeg', info: 'Gladwell explora cómo el éxito de ciertos grupos étnicos, como los judíos en la abogacía en Nueva York, se debe a las oportunidades históricas y culturales, más que a una predisposición genética o inherente al talento. La historia del éxito de los abogados judíos de Nueva York ilustra cómo las adversidades y las oportunidades en momentos específicos pueden influir en el éxito.' },
    { uri: '/images/6.jpeg', info: 'Este capítulo trata sobre cómo la cultura influye en la capacidad de los estudiantes para tener éxito en áreas como las matemáticas. Gladwell analiza el ejemplo de los estudiantes asiáticos, argumentando que las tradiciones culturales que valoran el esfuerzo y la persistencia contribuyen a su éxito en matemáticas, más allá de las habilidades innatas..' },
    { uri: '/images/7.jpeg', info: 'Gladwell continúa con el tema del impacto de la cultura en el éxito. Se enfoca en cómo la herencia agrícola, específicamente el cultivo del arroz, inculca una ética de trabajo en algunas culturas que se traduce en éxito académico y profesional, especialmente en disciplinas que requieren paciencia y precisión, como las matemáticas.' },
    { uri: '/images/8.jpeg', info: 'Este capítulo ilustra cómo la comunicación y la jerarquía cultural pueden afectar el desempeño y el éxito. Gladwell examina los accidentes de aviación en Korean Air y argumenta que las barreras culturales en la comunicación dentro de la cabina contribuyeron a estos accidentes. El cambio en la cultura organizacional y de comunicación de la aerolínea resultó en una mejora significativa en su seguridad..' },
    { uri: '/images/9.jpeg', info: 'El último capítulo analiza cómo las tradiciones culturales, como la "cultura del honor" en el sur de Estados Unidos, influyen en el comportamiento y el éxito de las personas. Gladwell explora cómo estas tradiciones pueden afectar la propensión a la violencia y las relaciones interpersonales, y cómo, en última instancia, influyen en el éxito individual y colectivo.' },
    { uri: '/images/10.jpeg', info: 'Gladwell reflexiona sobre la importancia de la oportunidad, el esfuerzo y las circunstancias en el éxito. Sostiene que el genio o el talento innato, por sí solo, no es suficiente para garantizar el éxito. El entorno, las oportunidades y la capacidad de aprovecharlas son factores igualmente, si no más, importantes. Reitera que el éxito es un producto de la acumulación de ventajas y del esfuerzo, más que de la mera habilidad innata.' },
];

  const handleImagePress = (imageInfo) => {
    setSelectedImageInfo(imageInfo);
    setModalVisible(true);
  };

  return (
    <div style={styles.collageContainer}>
      {images.map((image, index) => (
        <div key={index} style={styles[`imageContainer${index + 1}`]}>
          <img
            src={image.uri}
            alt={`Image ${index + 1}`}
            style={styles[`image${index + 1}`]}
            onClick={() => handleImagePress(image)}
          />
        </div>
      )
      )}
<InfoCard />

      {modalVisible && (
          <div style={styles.modalContainer} onClick={() => setModalVisible(false)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <p style={styles.modalText}>{selectedImageInfo.info}</p>
            <button onClick={() => setModalVisible(false)} style={styles.closeButton}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  collageContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    position: 'relative',
  },
  imageContainer1: {
    position: 'relative',
    transform: 'rotate(-5deg)',
    margin: '15px',
    zIndex: 2,
  },
  imageContainer2: {
    position: 'relative',
    transform: 'rotate(10deg)',
    margin: '15px',
    zIndex: 3,
  },
  imageContainer3: {
    position: 'relative',
    margin: '15px',
    zIndex: 1,
  },
  imageContainer4: {
    position: 'relative',
    transform: 'rotate(-8deg)',
    margin: '15px',
    zIndex: 2,
  },
  imageContainer5: {
    position: 'relative',
    transform: 'rotate(15deg)',
    margin: '15px',
    zIndex: 4,
  },
  imageContainer6: {
    position: 'relative',
    transform: 'rotate(-12deg)',
    margin: '15px',
    zIndex: 3,
  },
  imageContainer7: {
    position: 'relative',
    transform: 'rotate(7deg)',
    margin: '15px',
    zIndex: 1,
  },
  imageContainer8: {
    position: 'relative',
    margin: '15px',
    zIndex: 2,
  },
  imageContainer9: {
    position: 'relative',
    transform: 'rotate(-4deg)',
    margin: '15px',
    zIndex: 3,
  },
  imageContainer10: {
    position: 'relative',
    transform: 'rotate(5deg)',
    margin: '15px',
    zIndex: 4,
  },
  image1: { width: '250px', height: '375px', borderRadius: '20px', objectFit: 'cover', cursor: 'pointer' },
  image2: { width: '300px', height: '300px', borderRadius: '15px', objectFit: 'cover', cursor: 'pointer' },
  image3: { width: '400px', height: '200px', borderRadius: '25px', objectFit: 'cover', cursor: 'pointer' },
  image4: { width: '360px', height: '360px', borderRadius: '20px', objectFit: 'cover', cursor: 'pointer' },
  image5: { width: '250px', height: '350px', borderRadius: '30px', objectFit: 'cover', cursor: 'pointer' },
  image6: { width: '400px', height: '220px', borderRadius: '20px', objectFit: 'cover', cursor: 'pointer' },
  image7: { width: '280px', height: '375px', borderRadius: '25px', objectFit: 'cover', cursor: 'pointer' },
  image8: { width: '300px', height: '300px', borderRadius: '20px', objectFit: 'cover', cursor: 'pointer' },
  image9: { width: '260px', height: '180px', borderRadius: '15px', objectFit: 'cover', cursor: 'pointer' },
  image10: { width: '300px', height: '300px', borderRadius: '20px', objectFit: 'cover', cursor: 'pointer' },
  modalContainer: {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '1000',
    padding: '10px', 
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '10px',
    maxWidth: '90%',
    maxHeight: '80%',
    overflowY: 'auto',
    textAlign: 'center',
    zIndex: '1001',
  },
  modalText: {
    fontSize: '16px',
    lineHeight: '1.5',
  },
  closeButton: {
    marginTop: '10px',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    fontSize: '14px',
  },
};


export default Collage;
