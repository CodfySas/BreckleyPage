import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';

const Academics: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const currentContent = content[currentLanguage];

  const colors = ['from-[#F6E824] to-[#E31D28]', 'from-[#E31D28] to-[#2C3188]', 'from-[#2C3188] to-[#7180A1]'];
  const images = ['images/preescolar.png', 'images/primaria.png', 'images/bachillerato.png']

  return (
    <section id="academics" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C3188] mb-6">
            NUESTRO PROYECTO EDUCATIVO
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {currentContent.academics.subtitle}
          </p>
          <div className="w-24 h-1 bg-[#E31D28] mx-auto rounded-full"></div>
        </div>

        {/* Programs */}
        <div className="grid lg:grid-cols-3 gap-8">
          {currentContent.academics.programs.map((program, index) => {
            const colorClass = colors[index];

            return (
              <div
                key={index}
                className="group bg-cover relative rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Content */}
                <div className="relative p-8">
                  <img src={images[index]} className='mb-4 rounded-full'/>

                  {/* Title */}
                  <h3  className="text-2xl font-bold text-[#2C3188] drop-shadow-lg mb-4 text-center">
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-center mb-6">
                    {program.description}
                  </p>

                  {/* CTA */}
                  <div className="text-center">
                    <a
                      href="#contact"
                      className="inline-flex items-center text-[#2C3188] font-semibold hover:text-[#E31D28] transition-colors duration-300"
                    >
                      {currentLanguage === 'es' ? 'Más información' : 'Learn more'}
                      <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-white bg-opacity-20 rounded-full transform rotate-45 group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Additional info */}
        <div className="mt-16 bg-gradient-to-r from-[#2C3188] to-[#7180A1] rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            {currentLanguage === 'es' ? 'Metodología Internacional' : 'International Methodology'}
          </h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            {currentLanguage === 'es'
              ? 'Nuestros programas están diseñados siguiendo estándares internacionales, preparando a nuestros estudiantes para un mundo globalizado.'
              : 'Our programs are designed following international standards, preparing our students for a globalized world.'
            }
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-amber-400 mb-2">Cambridge</div>
              <div className="text-sm">{currentLanguage === 'es' ? 'Certificación' : 'Certification'}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400 mb-2">IB</div>
              <div className="text-sm">{currentLanguage === 'es' ? 'Bachillerato Internacional' : 'International Baccalaureate'}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400 mb-2">Proyectos</div>
              <div className="text-sm">{currentLanguage === 'es' ? 'Indagación y pensamiento crítico' : 'Methodology'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;