import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Award, Users } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { content } from '../../data/content';
import PageHeader from '../shared/PageHeader';

const Staff: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const currentContent = content[currentLanguage];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title={currentContent.staff.title}
        subtitle={currentContent.staff.subtitle}
        backgroundImage="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Leadership Team */}
        <div className="grid lg:grid-cols-2 gap-12">
          {currentContent.staff.directors.map((director, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative">
                <img 
                  src={director.image} 
                  alt={director.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">{director.name}</h3>
                  <p className="text-lg opacity-90">{director.position}</p>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed mb-6">
                  {director.description}
                </p>
                
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 text-[#2C3188] hover:text-[#E31D28] transition-colors duration-300">
                    <Mail className="h-5 w-5" />
                    <span className="text-sm">{currentLanguage === 'es' ? 'Contactar' : 'Contact'}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-[#2C3188] hover:text-[#E31D28] transition-colors duration-300">
                    <Phone className="h-5 w-5" />
                    <span className="text-sm">{currentLanguage === 'es' ? 'Llamar' : 'Call'}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-[#2C3188] to-[#7180A1] p-12 rounded-2xl text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              {currentLanguage === 'es' ? 'Nuestro Equipo Docente' : 'Our Teaching Team'}
            </h3>
            <p className="text-xl opacity-90">
              {currentLanguage === 'es' 
                ? 'Profesionales altamente calificados comprometidos con la excelencia educativa'
                : 'Highly qualified professionals committed to educational excellence'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="bg-white bg-opacity-20 p-6 rounded-xl mb-4">
                <Users className="h-12 w-12 mx-auto mb-4 text-[#F6E824]" />
                <div className="text-3xl font-bold text-[#F6E824] mb-2">45+</div>
                <div className="text-lg">{currentLanguage === 'es' ? 'Docentes' : 'Teachers'}</div>
              </div>
            </div>
            
            <div>
              <div className="bg-white bg-opacity-20 p-6 rounded-xl mb-4">
                <Award className="h-12 w-12 mx-auto mb-4 text-[#F6E824]" />
                <div className="text-3xl font-bold text-[#F6E824] mb-2">85%</div>
                <div className="text-lg">{currentLanguage === 'es' ? 'Con Posgrado' : 'With Graduate Degree'}</div>
              </div>
            </div>
            
            <div>
              <div className="bg-white bg-opacity-20 p-6 rounded-xl mb-4">
                <Award className="h-12 w-12 mx-auto mb-4 text-[#F6E824]" />
                <div className="text-3xl font-bold text-[#F6E824] mb-2">100%</div>
                <div className="text-lg">{currentLanguage === 'es' ? 'Bilingües' : 'Bilingual'}</div>
              </div>
            </div>
            
            <div>
              <div className="bg-white bg-opacity-20 p-6 rounded-xl mb-4">
                <Users className="h-12 w-12 mx-auto mb-4 text-[#F6E824]" />
                <div className="text-3xl font-bold text-[#F6E824] mb-2">15+</div>
                <div className="text-lg">{currentLanguage === 'es' ? 'Años Promedio' : 'Average Years'}</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Join Our Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-20 text-center bg-white p-12 rounded-2xl shadow-lg"
        >
          <h3 className="text-3xl font-bold text-[#2C3188] mb-6">
            {currentLanguage === 'es' ? 'Únete a Nuestro Equipo' : 'Join Our Team'}
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {currentLanguage === 'es' 
              ? 'Buscamos educadores apasionados que compartan nuestra visión de formar líderes del futuro.'
              : 'We seek passionate educators who share our vision of forming future leaders.'
            }
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#E31D28] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c41e3a] transition-colors duration-300"
          >
            {currentLanguage === 'es' ? 'Ver Oportunidades' : 'View Opportunities'}
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Staff;