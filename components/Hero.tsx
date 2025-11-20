
import React from 'react';

const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative bg-cover bg-center h-screen flex items-center" 
      style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2&random=1')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative container mx-auto px-6 text-center text-white z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 animate-fade-in-down">
          Especialistas en Direcciones Hidráulicas
        </h1>
        <p className="text-lg md:text-2xl mb-8 animate-fade-in-up max-w-2xl mx-auto">
          Diagnóstico, reparación y mantenimiento profesional para la seguridad de su vehículo en Zipaquirá.
        </p>
        <a 
          href="#contact"
          onClick={scrollToContact}
          className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg border-2 border-transparent hover:border-white"
        >
          Agendar Revisión
        </a>
      </div>
    </section>
  );
};

export default Hero;
