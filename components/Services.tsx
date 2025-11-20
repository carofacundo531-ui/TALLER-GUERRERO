
import React from 'react';
import { WrenchIcon, CogIcon, ShieldCheckIcon, SearchIcon } from './IconComponents';

const Services: React.FC = () => {
  // --- You can edit the list of services here ---
  const servicesList = [
    {
      icon: <SearchIcon />,
      title: 'Mantenimiento Preventivo',
      description: 'Mantenimiento completo de direcciones hidráulicas para prevenir fugas y desgaste prematuro.',
    },
    {
      icon: <CogIcon />,
      title: 'Reparación de Bombas',
      description: 'Diagnóstico y reparación especializada de bombas hidráulicas para recuperar la presión óptima.',
    },
    {
      icon: <WrenchIcon />,
      title: 'Reconstrucción de Cremalleras',
      description: 'Restauración profesional de cremalleras hidráulicas y mecánicas con repuestos de alta calidad.',
    },
    {
      icon: <ShieldCheckIcon />,
      title: 'Servicio Técnico Especializado',
      description: 'Asesoría técnica experta y garantía en todos nuestros trabajos de dirección.',
    },
  ];
  // --- End of editable services ---

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Nuestros Servicios</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center border-t-4 border-blue-700">
              <div className="text-blue-700 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
