
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Sobre Nosotros</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mt-4"></div>
        </div>
        <div className="max-w-3xl mx-auto text-center text-gray-600 text-lg leading-relaxed">
          {/* --- You can edit the text description below --- */}
          <p>
            En <strong>Taller Guerrero</strong>, somos expertos dedicados exclusivamente al sistema de dirección automotriz. 
            Con años de trayectoria en el sector, ofrecemos soluciones precisas para direcciones hidráulicas, 
            mecánicas y asistidas electrónicamente. Nuestro compromiso es brindar un diagnóstico honesto 
            y una reparación duradera, garantizando que su vehículo se maneje con suavidad y seguridad.
          </p>
           {/* --- End of editable text --- */}
        </div>
      </div>
    </section>
  );
};

export default About;
