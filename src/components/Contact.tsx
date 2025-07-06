import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';

const Contact: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const currentContent = content[currentLanguage];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C3188] mb-6">
            CONTACTO
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {currentLanguage === 'es'
              ? 'Estamos aquí para responder todas tus preguntas y ayudarte en el proceso de admisión.'
              : 'We are here to answer all your questions and help you through the admission process.'
            }
          </p>
          <div className="w-24 h-1 bg-[#E31D28] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-[#2C3188] mb-8">
              {currentLanguage === 'es' ? 'Información de Contacto' : 'Contact Information'}
            </h3>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <div className="bg-[#2C3188] p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#2C3188] mb-2">
                    {currentLanguage === 'es' ? 'Dirección' : 'Address'}
                  </h4>
                  <p className="text-gray-600">Km 5 via al mar poste 115, Barranquilla - Colombia</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <div className="bg-[#E31D28] p-3 rounded-full">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#2C3188] mb-2">
                    {currentLanguage === 'es' ? 'Teléfono' : 'Phone'}
                  </h4>
                  <p className="text-gray-600">317 429 9966 - (+57) 605 - 3195893</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <div className="bg-[#F6E824] p-3 rounded-full">
                  <Mail className="h-6 w-6 text-[#2C3188]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#2C3188] mb-2">Email</h4>
                  <p className="text-gray-600">berckley@ibs.edu.co</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <div className="bg-[#7180A1] p-3 rounded-full">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#2C3188] mb-2">
                    {currentLanguage === 'es' ? 'Horarios' : 'Hours'}
                  </h4>
                  <p className="text-gray-600">{currentContent.contact.hours}</p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8 bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <iframe loading="lazy" width="100%" height="100%" src="https://maps.google.com/maps?q=International%20Berckley%20School&amp;t=m&amp;z=16&amp;output=embed&amp;iwloc=near" title="International Berckley School" aria-label="International Berckley School" data-gtm-yt-inspected-8="true"></iframe>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-[#2C3188] to-[#7180A1] p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-6">
              {currentLanguage === 'es' ? 'Envíanos un Mensaje' : 'Send us a Message'}
            </h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {currentLanguage === 'es' ? 'Nombre' : 'Name'}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F6E824] focus:border-transparent"
                    placeholder={currentLanguage === 'es' ? 'Tu nombre' : 'Your name'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {currentLanguage === 'es' ? 'Apellido' : 'Last Name'}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F6E824] focus:border-transparent"
                    placeholder={currentLanguage === 'es' ? 'Tu apellido' : 'Your last name'}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F6E824] focus:border-transparent"
                  placeholder={currentLanguage === 'es' ? 'tu@email.com' : 'your@email.com'}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {currentLanguage === 'es' ? 'Teléfono' : 'Phone'}
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F6E824] focus:border-transparent"
                  placeholder="+57 300 123 4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {currentLanguage === 'es' ? 'Asunto' : 'Subject'}
                </label>
                <select className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white focus:outline-none focus:ring-2 focus:ring-[#F6E824] focus:border-transparent">
                  <option value="" className="text-gray-800">
                    {currentLanguage === 'es' ? 'Selecciona un asunto' : 'Select a subject'}
                  </option>
                  <option value="admissions" className="text-gray-800">
                    {currentLanguage === 'es' ? 'Admisiones' : 'Admissions'}
                  </option>
                  <option value="academics" className="text-gray-800">
                    {currentLanguage === 'es' ? 'Información Académica' : 'Academic Information'}
                  </option>
                  <option value="general" className="text-gray-800">
                    {currentLanguage === 'es' ? 'Información General' : 'General Information'}
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {currentLanguage === 'es' ? 'Mensaje' : 'Message'}
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F6E824] focus:border-transparent resize-none"
                  placeholder={currentLanguage === 'es' ? 'Escribe tu mensaje aquí...' : 'Write your message here...'}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#E31D28] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#c41e3a] transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>{currentLanguage === 'es' ? 'Enviar Mensaje' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;