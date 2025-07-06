import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Users, Globe } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { content } from '../../data/content';
import PageHeader from '../shared/PageHeader';

const History: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const currentContent = content[currentLanguage];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title={currentContent.history.title}
        subtitle={currentContent.history.subtitle}
        backgroundImage="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Introduction */}
        <div className="text-center mb-20">
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            {currentContent.history.description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {[
            { icon: Calendar, number: '40+', label: currentLanguage === 'es' ? 'Años de Experiencia' : 'Years of Experience' },
            { icon: Users, number: '1,200+', label: currentLanguage === 'es' ? 'Graduados Exitosos' : 'Successful Graduates' },
            { icon: Award, number: '50+', label: currentLanguage === 'es' ? 'Reconocimientos' : 'Awards' },
            { icon: Globe, number: '15+', label: currentLanguage === 'es' ? 'Países de Graduados' : 'Graduate Countries' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-gradient-to-br from-[#2C3188] to-[#7180A1] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-[#2C3188] mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#2C3188] to-[#7180A1] h-full"></div>
          
          {currentContent.history.timeline.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#F6E824] rounded-full border-4 border-white shadow-lg z-10"></div>
              
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-3xl font-bold text-[#E31D28] mb-2">{event.year}</div>
                  <h3 className="text-xl font-bold text-[#2C3188] mb-4">{event.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20 bg-gradient-to-r from-[#2C3188] to-[#7180A1] p-12 rounded-2xl text-white"
        >
          <h3 className="text-3xl font-bold mb-6">
            {currentLanguage === 'es' ? 'Únete a Nuestra Historia' : 'Join Our History'}
          </h3>
          <p className="text-xl mb-8 opacity-90">
            {currentLanguage === 'es' 
              ? 'Sé parte de la próxima generación de líderes que escribirán el futuro.'
              : 'Be part of the next generation of leaders who will write the future.'
            }
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#F6E824] text-[#2C3188] px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-300"
          >
            {currentLanguage === 'es' ? 'Conoce Más' : 'Learn More'}
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default History;