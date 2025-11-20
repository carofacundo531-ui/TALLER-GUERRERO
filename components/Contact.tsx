
import React from 'react';
import { WhatsAppIcon, LocationMarkerIcon, ClockIcon } from './IconComponents';

const Contact: React.FC = () => {
  // --- You can edit the contact information below ---
  const contactInfo = {
    whatsappNumber: '+573204056574', // Use country code, no spaces or symbols
    address: 'Calle 8 # 15-23, Zipaquirá, Colombia',
    hours: 'Lunes a Viernes: 8am - 6pm | Sábados: 8am - 1pm',
  };
  // --- End of editable contact info ---

  const whatsappLink = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent("Hola Taller Guerrero, estoy interesado en reparar mi dirección hidráulica.")}`;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Gracias. Te recomendamos usar el botón de WhatsApp para una respuesta inmediata.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Contáctanos</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mt-4"></div>
          <p className="mt-4 text-gray-600">Estamos listos para solucionar tu problema de dirección.</p>
        </div>

        <div className="flex flex-wrap -mx-4 justify-center">
          {/* Contact Info */}
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div className="bg-white p-8 rounded-lg shadow-md h-full border-t-4 border-blue-700">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Información del Taller</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-blue-700 shrink-0">
                    <LocationMarkerIcon />
                  </div>
                  <span className="ml-4 text-gray-600 font-medium">{contactInfo.address}</span>
                </div>
                <div className="flex items-center">
                  <div className="text-blue-700 shrink-0">
                    <ClockIcon />
                  </div>
                  <span className="ml-4 text-gray-600 font-medium">{contactInfo.hours}</span>
                </div>
                <div className="flex items-center">
                   <div className="text-green-500 shrink-0">
                    <WhatsAppIcon />
                   </div>
                  <span className="ml-4 text-gray-600 font-medium">
                    {contactInfo.whatsappNumber}
                  </span>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-sm text-gray-500 mb-3 text-center">Respuesta más rápida:</p>
                <a 
                    href={whatsappLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-lg w-full"
                >
                    <WhatsAppIcon className="w-6 h-6 mr-3"/>
                    Escribir al WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-gray-300">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Déjanos un mensaje</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nombre</label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Teléfono</label>
                  <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">¿Qué falla presenta el vehículo?</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  Enviar Solicitud
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
