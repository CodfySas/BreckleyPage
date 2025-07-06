import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Palette, Cpu, Users } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { content } from '../../data/content';
import PageHeader from '../shared/PageHeader';

const Activities: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const currentContent = content[currentLanguage];

  const categoryIcons = [Trophy, Palette, Cpu, Users];
  const categoryColors = [
    'from-[#E31D28] to-[#F6E824]',
    'from-[#F6E824] to-[#2C3188]',
    'from-[#2C3188] to-[#7180A1]',
    'from-[#7180A1] to-[#E31D28]'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title={currentContent.activities.title}
        subtitle={currentContent.activities.subtitle}
        backgroundImage="https://images.pexels.com/photos/8471929/pexels-photo-8471929.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Activity Categories */}
        <div className="grid lg:grid-cols-2 gap-8">
          {currentContent.activities.categories.map((category, index) => {
            const Icon = categoryIcons[index];
            const colorClass = categoryColors[index];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className={`bg-gradient-to-r ${colorClass} p-6 text-white`}>
                  <div className="flex items-center mb-4">
                    <Icon className="h-8 w-8 mr-3" />
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>
                  <p className="text-lg opacity-90">{category.description}</p>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {category.activities.map((activity, activityIndex) => (
                      <div
                        key={activityIndex}
                        className="bg-gray-50 p-3 rounded-lg text-center text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-300"
                      >
                        {activity}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Schedule Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 bg-white p-12 rounded-2xl shadow-lg"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#2C3188] mb-4">
              {currentLanguage === 'es' ? 'Horarios y Modalidades' : 'Schedules and Modalities'}
            </h3>
            <p className="text-xl text-gray-600">
              {currentLanguage === 'es' 
                ? 'Flexibilidad para que todos puedan participar'
                : 'Flexibility so everyone can participate'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#2C3188] to-[#7180A1] p-6 rounded-xl text-white mb-4">
                <h4 className="text-xl font-bold mb-2">
                  {currentLanguage === 'es' ? 'Después de Clases' : 'After School'}
                </h4>
                <p className="text-sm opacity-90">3:30 PM - 5:00 PM</p>
              </div>
              <p className="text-gray-600">
                {currentLanguage === 'es' 
                  ? 'Actividades regulares de lunes a viernes'
                  : 'Regular activities Monday to Friday'
                }
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-[#E31D28] to-[#F6E824] p-6 rounded-xl text-white mb-4">
                <h4 className="text-xl font-bold mb-2">
                  {currentLanguage === 'es' ? 'Sábados' : 'Saturdays'}
                </h4>
                <p className="text-sm opacity-90">8:00 AM - 12:00 PM</p>
              </div>
              <p className="text-gray-600">
                {currentLanguage === 'es' 
                  ? 'Deportes y actividades especiales'
                  : 'Sports and special activities'
                }
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-[#F6E824] to-[#2C3188] p-6 rounded-xl text-white mb-4">
                <h4 className="text-xl font-bold mb-2">
                  {currentLanguage === 'es' ? 'Vacaciones' : 'Holidays'}
                </h4>
                <p className="text-sm opacity-90">
                  {currentLanguage === 'es' ? 'Horario Especial' : 'Special Schedule'}
                </p>
              </div>
              <p className="text-gray-600">
                {currentLanguage === 'es' 
                  ? 'Campamentos y talleres intensivos'
                  : 'Camps and intensive workshops'
                }
              </p>
            </div>
          </div>
        </motion.div>

        {/* Registration CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-20 bg-gradient-to-r from-[#2C3188] to-[#7180A1] p-12 rounded-2xl text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-6">
            {currentLanguage === 'es' ? 'Inscríbete Hoy' : 'Register Today'}
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            {currentLanguage === 'es' 
              ? 'Las inscripciones están abiertas todo el año. ¡Encuentra la actividad perfecta para ti!'
              : 'Registration is open year-round. Find the perfect activity for you!'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-[#F6E824] text-[#2C3188] px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-300"
            >
              {currentLanguage === 'es' ? 'Inscribirse' : 'Register'}
            </a>
            <a
              href="#contact"
              className="bg-white bg-opacity-20 text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-30 transition-colors duration-300"
            >
              {currentLanguage === 'es' ? 'Más Información' : 'More Information'}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Activities;