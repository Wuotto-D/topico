import React from 'react';
import InfoCard from './InfoCard';

function Actividad7() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Actividad 7</h1>
      
      <article className="prose lg:prose-xl mb-8">
        <h2>El Decálogo de Yokoi Kenji: Lecciones de Vida desde la Perspectiva Japonesa-Colombiana</h2>
        <p className="text-justify">
          Yokoi Kenji, el conferencista y motivador colombo-japonés, se ha convertido en una figura influyente que 
          fusiona lo mejor de dos culturas: la disciplina y la perseverancia del Japón con la calidez y la pasión de Colombia. 
          A través de sus charlas, Kenji ha compartido principios valiosos que han resonado profundamente tanto en su audiencia 
          colombiana como internacional. A continuación, presentamos un decálogo basado en sus enseñanzas más destacadas.
        </p>
        <ul className="text-justify">
          <li>La disciplina no es solo una práctica, sino la esencia misma del éxito. A través de la repetición y 
          el esfuerzo constante, una persona puede alcanzar sus metas y superar cualquier obstáculo, un enfoque que él atribuye 
          a la influencia de la cultura japonesa.</li>

          <li>Kenji recalca que la perseverancia es más poderosa que el talento. Según él, las personas que persisten y se mantienen
          firmes en sus propósitos, a pesar de las dificultades, son las que logran sus objetivos en el largo plazo.</li>

          <li>La humildad es un pilar fundamental en la filosofía de vida de Kenji. Él considera que reconocer nuestras limitaciones y 
          aprender de los errores es crucial para el crecimiento personal y profesional.</li>

          <li>Una de las misiones de Kenji es desmantelar los estereotipos que existen tanto sobre la cultura japonesa como sobre
          la colombiana. Él muestra que ambos pueblos tienen cualidades que pueden complementarse, fomentando una visión más comprensiva y 
          abierta del mundo.</li>

          <li>Kenji es un firme defensor del respeto hacia las diferencias culturales. En sus discursos, promueve la idea de 
          que la diversidad enriquece nuestras vidas y que la convivencia pacífica es fundamental para una sociedad próspera.</li>

          <li>Para Kenji, la educación es la herramienta más poderosa que una persona puede tener para transformar su vida y la sociedad. 
          Él cree que la formación académica y moral es el cimiento sobre el cual se construyen las grandes sociedades.</li>

          <li>Kenji inspira a las personas a soñar en grande, pero también a trabajar con dedicación y planificación para hacer esos sueños 
          realidad. Para él, los sueños no son solo aspiraciones, sino proyectos que requieren esfuerzo y compromiso.</li>

          <li>La familia juega un rol crucial en la formación de una persona, según Kenji. Él destaca cómo los valores y enseñanzas transmitidos 
          en el hogar son fundamentales para desarrollar un carácter fuerte y resiliente.</li>

          <li>La integridad es otro de los principios clave en las enseñanzas de Kenji. Él enfatiza que la honestidad y la coherencia entre lo que
          se dice y lo que se hace son vitales para alcanzar el éxito verdadero y duradero.</li>

          <li>Yokoi Kenji aboga por un equilibrio entre respetar las tradiciones y estar abiertos a la innovación. Según él, una sociedad
          debe valorar su herencia cultural mientras adopta cambios que puedan mejorar la vida de sus miembros.</li>
        </ul>

        <p className="text-justify">
          Este decálogo no solo refleja la visión de Yokoi Kenji sobre cómo vivir una vida plena y significativa, sino que también invita a reflexionar sobre cómo podemos aplicar estos principios en nuestras propias vidas. En un mundo cada vez más globalizado, sus enseñanzas nos recuerdan la importancia de aprender de diferentes culturas y de cultivar valores universales que nos guíen hacia el éxito y la felicidad.
        </p>
      </article>
      
      <div className="text-center">
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSfJtSUwsyFFKJdaKfgG_EvzTyYlSnElMslkCdJRW4Pd5SINSg/viewform?usp=sf_link" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block mb-8"
        >
          Ir al formulario
        </a>
      </div>
      
      <InfoCard />
    </div>
  );
}

export default Actividad7;
