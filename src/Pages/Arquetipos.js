import React, { useState, useEffect } from 'react';

const arquetipos = [
  { 
    titulo: "Compensación entre Proceso y Demora", 
    descripcion: "Una estructura donde una organización actúa para lograr una meta, adaptando su conducta en respuesta a retroalimentación demorada.",
    ejemplo: "En desarrollo de software, apresurar lanzamientos sin pruebas puede causar problemas a largo plazo.",
    quiz: {
      question: "¿Cuál arquetipo se aplica si una empresa lanza funciones sin suficiente prueba y luego enfrenta problemas?",
      options: ["Compensación entre Proceso y Demora", "Escalada", "Tragedia del Terreno Común"],
      correctAnswer: "Compensación entre Proceso y Demora"
    }
  },
  { 
    titulo: "Límites del Crecimiento", 
    descripcion: "Un proceso de crecimiento que se desacelera al alcanzar un límite de recursos o de capacidad.",
    ejemplo: "Un equipo de desarrollo crece rápido, pero al no contratar más personal de soporte, empiezan a fallar en sus entregas.",
    quiz: {
      question: "¿Qué arquetipo se aplica si un equipo de software se ralentiza al no tener suficiente soporte?",
      options: ["Límites del Crecimiento", "Desplazamiento de la Carga", "Éxito para quien tiene éxito"],
      correctAnswer: "Límites del Crecimiento"
    }
  },
  { 
    titulo: "Desplazamiento de la Carga", 
    descripcion: "Se aplica una solución a corto plazo para un problema, lo que genera dependencia y evita una solución fundamental.",
    ejemplo: "Resolver bugs con parches rápidos en lugar de abordar la raíz del problema en el código.",
    quiz: {
      question: "¿Qué arquetipo se aplica cuando una empresa se enfoca en soluciones rápidas en lugar de resolver la raíz de un problema?",
      options: ["Desplazamiento de la Carga", "Erosión de Metas", "Tragedia del Terreno Común"],
      correctAnswer: "Desplazamiento de la Carga"
    }
  },
  { 
    titulo: "Caso Especial: Desplazamiento de la Carga Hacia la Intervención", 
    descripcion: "La intervención externa alivia los síntomas del problema sin enseñar al sistema a resolverlo de forma autónoma.",
    ejemplo: "Contratar consultores externos para resolver problemas sin capacitar al equipo interno.",
    quiz: {
      question: "¿Qué arquetipo representa la dependencia en consultores externos sin desarrollar capacidad interna?",
      options: ["Caso Especial: Desplazamiento de la Carga Hacia la Intervención", "Crecimiento y Subinversión", "Escalada"],
      correctAnswer: "Caso Especial: Desplazamiento de la Carga Hacia la Intervención"
    }
  },
  { 
    titulo: "Erosión de Metas", 
    descripcion: "Una estructura donde las soluciones de corto plazo degradan una meta a largo plazo.",
    ejemplo: "Un equipo de desarrollo reduce estándares de calidad para cumplir con plazos ajustados.",
    quiz: {
      question: "¿Qué arquetipo se aplica si una empresa baja sus estándares de calidad para cumplir plazos?",
      options: ["Erosión de Metas", "Escalada", "Límites del Crecimiento"],
      correctAnswer: "Erosión de Metas"
    }
  },
  { 
    titulo: "Escalada", 
    descripcion: "Dos partes compiten por una ventaja, escalando sus esfuerzos y recursos en una competencia.",
    ejemplo: "Dos empresas tecnológicas reducen precios continuamente para ganar más clientes.",
    quiz: {
      question: "¿Qué arquetipo representa una competencia agresiva de precios entre dos empresas?",
      options: ["Escalada", "Desplazamiento de la Carga", "Compensación entre Proceso y Demora"],
      correctAnswer: "Escalada"
    }
  },
  { 
    titulo: "Éxito para quien tiene éxito", 
    descripcion: "Dos actividades compiten por recursos; la actividad con más éxito recibe más recursos.",
    ejemplo: "Un equipo exitoso recibe más recursos mientras otros equipos quedan desatendidos.",
    quiz: {
      question: "¿Qué arquetipo se aplica cuando un equipo exitoso recibe todos los recursos mientras otros quedan desatendidos?",
      options: ["Éxito para quien tiene éxito", "Escalada", "Erosión de Metas"],
      correctAnswer: "Éxito para quien tiene éxito"
    }
  },
  { 
    titulo: "Tragedia del Terreno Común", 
    descripcion: "Los individuos sobreexplotan un recurso común sin tener en cuenta los efectos a largo plazo.",
    ejemplo: "Varios equipos de desarrollo usan excesivamente un servidor compartido, provocando su colapso.",
    quiz: {
      question: "¿Qué arquetipo describe el sobreuso de un servidor compartido hasta que se colapsa?",
      options: ["Tragedia del Terreno Común", "Desplazamiento de la Carga", "Compensación entre Proceso y Demora"],
      correctAnswer: "Tragedia del Terreno Común"
    }
  },
  { 
    titulo: "Soluciones Rápidas que Fallan", 
    descripcion: "Una solución a corto plazo genera consecuencias imprevistas a largo plazo, creando dependencia.",
    ejemplo: "Parchear problemas urgentes en lugar de rediseñar el sistema, lo que provoca problemas recurrentes.",
    quiz: {
      question: "¿Qué arquetipo describe la situación de resolver problemas rápidamente sin abordar la raíz?",
      options: ["Soluciones Rápidas que Fallan", "Límites del Crecimiento", "Erosión de Metas"],
      correctAnswer: "Soluciones Rápidas que Fallan"
    }
  },
  { 
    titulo: "Crecimiento y Subinversión", 
    descripcion: "Una organización crece rápidamente sin invertir adecuadamente en recursos de soporte, lo que lleva a problemas.",
    ejemplo: "Un equipo expande sus funciones rápidamente sin contratar más personal, provocando sobrecarga.",
    quiz: {
      question: "¿Qué arquetipo representa el crecimiento sin suficiente inversión en recursos de soporte?",
      options: ["Crecimiento y Subinversión", "Tragedia del Terreno Común", "Escalada"],
      correctAnswer: "Crecimiento y Subinversión"
    }
  }
];

const QuizQuestion = ({ question, options, correctAnswer, onAnswer }) => {
    const [shuffledOptions, setShuffledOptions] = useState([]);
  
    useEffect(() => {
      // Revolver opciones aleatoriamente cada vez que el componente se monta
      const shuffled = [...options].sort(() => Math.random() - 0.5);
      setShuffledOptions(shuffled);
    }, [options]);
  
    const handleAnswer = (answer) => {
      onAnswer(answer === correctAnswer);
    };
  
    return (
      <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-md">
        <h4 className="text-xl font-semibold mb-4 text-gray-100">{question}</h4>
        <div className="space-y-2">
          {shuffledOptions.map((option, index) => (
            <button 
              key={index} 
              onClick={() => handleAnswer(option)}
              className="w-full bg-purple-600 text-gray-100 py-2 px-4 rounded-lg hover:bg-purple-700"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  const Activity = () => {
    const [selectedArquetipo, setSelectedArquetipo] = useState(null);
    const [showQuiz, setShowQuiz] = useState(false);
    const [quizResult, setQuizResult] = useState(null);
  
    const handleSelectArquetipo = (index) => {
      setSelectedArquetipo(arquetipos[index]);
      setShowQuiz(false);
      setQuizResult(null); 
    };
  
    const handleQuizAnswer = (isCorrect) => {
      setQuizResult(isCorrect ? "¡Correcto!" : "Incorrecto, intenta de nuevo.");
      setShowQuiz(false);
    };
  
    return (
      <div className="container mx-auto px-6 py-8 bg-gray-900 min-h-screen">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-100">Arquetipos Sistémicos en Ingeniería de Software</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {arquetipos.map((arquetipo, index) => (
            <button 
              key={index} 
              onClick={() => handleSelectArquetipo(index)}
              className="p-4 bg-gray-700 text-gray-100 rounded-lg shadow hover:bg-gray-600 transition duration-200"
            >
              <h3 className="font-semibold text-lg">{arquetipo.titulo}</h3>
            </button>
          ))}
        </div>
  
        {selectedArquetipo && (
          <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-100">{selectedArquetipo.titulo}</h3>
            <p className="text-gray-300 mt-2">{selectedArquetipo.descripcion}</p>
            <p className="text-gray-300 mt-4"><strong>Ejemplo:</strong> {selectedArquetipo.ejemplo}</p>
            <button 
              onClick={() => setShowQuiz(true)}
              className="mt-4 bg-green-800 text-gray-100 py-2 px-4 rounded-lg hover:bg-green-900"
            >
              Hacer Quiz
            </button>
          </div>
        )}
  
        {showQuiz && selectedArquetipo && (
          <QuizQuestion
            question={selectedArquetipo.quiz.question}
            options={selectedArquetipo.quiz.options}
            correctAnswer={selectedArquetipo.quiz.correctAnswer}
            onAnswer={handleQuizAnswer}
          />
        )}
  
        {quizResult && (
          <div className="mt-4 text-xl font-semibold text-center text-gray-100">
            {quizResult}
          </div>
        )}
      </div>
    );
  };
  
  export default Activity;
