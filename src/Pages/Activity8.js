import React from 'react';
import InfoCard from './InfoCard';

function Actividad7() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Actividad 8</h1>
      
      <article className="prose lg:prose-xl mb-8">
        <h2>Decálogo de Carlos Kasuga: Lecciones para una Vida Exitosa desde la Perspectiva Empresarial y Humana</h2>
        <p className="text-justify">
        Carlos Kasuga, empresario mexicano de origen japonés y presidente de Yakult México, es conocido no solo por su éxito en los negocios, 
        sino también por su enfoque en el desarrollo integral de las personas. A través de sus conferencias y charlas, Kasuga ha compartido 
        valiosos principios que combinan la ética empresarial con valores humanos, formando un decálogo que es fuente de inspiración para
         estudiantes, empresarios y personas en general.
        </p>
        <ul className="text-justify">
          <li>Carlos Kasuga enfatiza la importancia de hacer las cosas correctamente desde el primer intento. Para él, la calidad comienza con el compromiso de cada persona en hacer su mejor esfuerzo desde el principio, evitando así la necesidad de corregir errores después..</li>

          <li>La puntualidad es un valor fundamental para Kasuga. Él la ve como una muestra de respeto hacia los demás y un reflejo de la responsabilidad personal. Llegar a tiempo es una señal de consideración por el tiempo y el esfuerzo de los otros.</li>

          <li>Según Kasuga, la limpieza y el orden en el entorno de trabajo y en la vida diaria son fundamentales para lograr el éxito. Un ambiente ordenado facilita el enfoque y la eficiencia, mientras que la limpieza refleja el respeto hacia uno mismo y hacia los demás.</li>

          <li>Kasuga es un firme defensor del ahorro, no solo como una práctica financiera, sino como una filosofía de vida. Ahorrar recursos, tiempo y energía permite a las personas estar preparadas para el futuro y afrontar mejor los desafíos imprevistos.</li>

          <li>Kasuga destaca la importancia de respetar a los demás y de contribuir al bienestar de la comunidad. Para él, el éxito individual no tiene sentido si no se comparte y se utiliza para mejorar la vida de quienes nos rodean.

</li>

          <li>La educación es un pilar en las enseñanzas de Kasuga. Él sostiene que invertir en educación, tanto en la propia como en la de los demás, es la mejor manera de asegurar un futuro próspero y una sociedad más justa.

</li>

          <li>Kasuga promueve el compromiso con la excelencia en todas las áreas de la vida. Hacer las cosas de manera sobresaliente, con dedicación y esmero, no solo mejora los resultados, sino que también eleva la autoestima y la satisfacción personal.

</li>

          <li>El trabajo en equipo es esencial para Kasuga. Él cree que los grandes logros no se alcanzan individualmente, sino que son el resultado de la cooperación y la sinergia entre personas que comparten una visión común.

</li>

          <li>Kasuga aconseja practicar la gratitud diariamente. Agradecer por lo que se tiene y mantener una actitud positiva frente a los desafíos ayuda a enfrentar la vida con mayor optimismo y resiliencia.

</li>

          <li>Finalmente, Kasuga aboga por un equilibrio entre el trabajo y la vida personal. Para él, el verdadero éxito no se mide solo por los logros profesionales, sino también por la capacidad de disfrutar la vida y cuidar de las relaciones personales.</li>
        </ul>

      
      </article>
      
      <div className="text-center">
        <a 
          href="https://forms.gle/56Hx7dN9tcCo1Xa37" 
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
