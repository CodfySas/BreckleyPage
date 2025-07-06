import React from 'react';
import { FileText, CheckCircle, Users, Award } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';

const Admissions: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const currentContent = content[currentLanguage];

  const processIcons = [FileText, CheckCircle, Users, Award];

  return (
    <section id="admissions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C3188] mb-6">
            {currentContent.admissions.title}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {currentContent.admissions.subtitle}
          </p>
          <div className="w-24 h-1 bg-[#F6E824] mx-auto rounded-full"></div>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.admissions.process.map((step, index) => {
              const Icon = processIcons[index];
              return (
                <div key={index} className="relative">
                  {/* Connection line */}
                  {index < currentContent.admissions.process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#2C3188] to-[#7180A1] transform translate-x-4 z-0"></div>
                  )}
                  
                  <div className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group z-10">
                    {/* Step number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#E31D28] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                    
                    {/* Icon */}
                    <div className="bg-gradient-to-br from-[#2C3188] to-[#7180A1] p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-[#2C3188] mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Requirements and CTA */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Requirements */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#2C3188] mb-6 flex items-center">
              <CheckCircle className="h-6 w-6 mr-3 text-[#E31D28]" />
              {currentContent.admissions.requirements.title}
            </h3>
            <ul className="space-y-4">
              {currentContent.admissions.requirements.items.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="bg-[#F6E824] p-1 rounded-full mt-1">
                    <CheckCircle className="h-4 w-4 text-[#2C3188]" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-[#2C3188] to-[#7180A1] p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-6">
              {currentLanguage === 'es' ? '¿Listo para comenzar?' : 'Ready to start?'}
            </h3>
            <p className="text-lg mb-8 opacity-90">
              {currentLanguage === 'es' 
                ? 'Inicia el proceso de admisión hoy y forma parte de nuestra comunidad educativa de excelencia.'
                : 'Start the admission process today and become part of our educational community of excellence.'
              }
            </p>
            
            <div className="space-y-4">
              <a
                href="#contact"
                className="block w-full bg-[#E31D28] text-white py-4 px-6 rounded-lg font-semibold text-center hover:bg-[#c41e3a] transition-colors duration-300"
              >
                {currentLanguage === 'es' ? 'Iniciar Proceso' : 'Start Process'}
              </a>
              
              <a
                href="tel:+5712345678"
                className="block w-full bg-white text-[#2C3188] py-4 px-6 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors duration-300"
              >
                {currentLanguage === 'es' ? 'Llamar Ahora' : 'Call Now'}
              </a>
            </div>

            {/* Contact info */}
            <div className="mt-8 pt-8 border-t border-white border-opacity-20">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold mb-1">{currentLanguage === 'es' ? 'Teléfono' : 'Phone'}</div>
                  <div className="opacity-90">+57 (1) 234-5678</div>
                </div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <div className="opacity-90">admissions@berckleyschool.edu.co</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;