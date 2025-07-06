import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Users, Palette, Trophy, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { content } from '../../data/content';
import PageHeader from '../shared/PageHeader';

const Programs: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const currentContent = content[currentLanguage];

  const programIcons = [Cpu, Users, Palette, Trophy];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title={currentContent.programs.title}
        subtitle={currentContent.programs.subtitle}
        backgroundImage="https://images.pexels.com/photos/8471691/pexels-photo-8471691.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Special Programs */}
        <div className="grid lg:grid-cols-2 gap-12">
          {currentContent.programs.specialPrograms.map((program, index) => {
            const Icon = programIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-[#2C3188] to-[#7180A1] p-4 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#2C3188]">{program.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {program.description}
                  </p>
                  
                  <div className="space-y-3">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#F6E824] mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-[#2C3188] to-[#7180A1] p-6 text-white">
                  <a
                    href="#contact"
                    className="inline-flex items-center text-white hover:text-[#F6E824] transition-colors duration-300 font-semibold"
                  >
                    {currentLanguage === 'es' ? 'Más información' : 'Learn more'}
                    <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Program Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-[#2C3188] to-[#7180A1] p-12 rounded-2xl text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              {currentLanguage === 'es' ? 'Beneficios de Nuestros Programas' : 'Benefits of Our Programs'}
            </h3>
            <p className="text-xl opacity-90">
              {currentLanguage === 'es' 
                ? 'Experiencias que transforman y preparan para el futuro'
                : 'Experiences that transform and prepare for the future'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 p-6 rounded-xl mb-4">
                <div className="text-3xl font-bold text-[#F6E824] mb-2">100%</div>
                <div className="text-lg">{currentLanguage === 'es' ? 'Participación' : 'Participation'}</div>
              </div>
              <p className="text-sm opacity-90">
                {currentLanguage === 'es' 
                  ? 'Todos los estudiantes participan en programas especiales'
                  : 'All students participate in special programs'
                }
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white bg-opacity-20 p-6 rounded-xl mb-4">
                <div className="text-3xl font-bold text-[#F6E824] mb-2">40+</div>
                <div className="text-lg">{currentLanguage === 'es' ? 'Actividades' : 'Activities'}</div>
              </div>
              <p className="text-sm opacity-90">
                {currentLanguage === 'es' 
                  ? 'Diversidad de opciones para todos los intereses'
                  : 'Variety of options for all interests'
                }
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white bg-opacity-20 p-6 rounded-xl mb-4">
                <div className="text-3xl font-bold text-[#F6E824] mb-2">15+</div>
                <div className="text-lg">{currentLanguage === 'es' ? 'Competencias' : 'Competitions'}</div>
              </div>
              <p className="text-sm opacity-90">
                {currentLanguage === 'es' 
                  ? 'Participación en eventos nacionales e internacionales'
                  : 'Participation in national and international events'
                }
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-20 text-center bg-white p-12 rounded-2xl shadow-lg"
        >
          <h3 className="text-3xl font-bold text-[#2C3188] mb-6">
            {currentLanguage === 'es' ? 'Descubre Tu Pasión' : 'Discover Your Passion'}
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {currentLanguage === 'es' 
              ? 'Nuestros programas especiales están diseñados para que cada estudiante encuentre y desarrolle sus talentos únicos.'
              : 'Our special programs are designed for each student to find and develop their unique talents.'
            }
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#E31D28] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c41e3a] transition-colors duration-300"
          >
            {currentLanguage === 'es' ? 'Solicitar Información' : 'Request Information'}
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Programs;