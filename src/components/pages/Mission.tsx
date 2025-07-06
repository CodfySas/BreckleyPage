import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Star, Shield, Lightbulb } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { content } from '../../data/content';
import PageHeader from '../shared/PageHeader';

const Mission: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const currentContent = content[currentLanguage];

  const valueIcons = [Star, Shield, Heart, Lightbulb, Target, Eye];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title={currentContent.mission.title}
        subtitle={currentLanguage === 'es' ? 'Los principios que nos guían' : 'The principles that guide us'}
        backgroundImage="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Mission and Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-[#2C3188] to-[#7180A1] p-4 rounded-full mr-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-[#2C3188]">{currentContent.mission.mission.title}</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              {currentContent.mission.mission.description}
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-[#E31D28] to-[#F6E824] p-4 rounded-full mr-4">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-[#2C3188]">{currentContent.mission.vision.title}</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              {currentContent.mission.vision.description}
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2C3188] mb-6">
            {currentLanguage === 'es' ? 'Nuestros Valores' : 'Our Values'}
          </h2>
          <div className="w-24 h-1 bg-[#F6E824] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentContent.mission.values.map((value, index) => {
            const Icon = valueIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="bg-gradient-to-br from-[#2C3188] to-[#7180A1] p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2C3188] mb-4 text-center">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{value.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Commitment Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-[#2C3188] to-[#7180A1] p-12 rounded-2xl text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-6">
            {currentLanguage === 'es' ? 'Nuestro Compromiso' : 'Our Commitment'}
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
            {currentLanguage === 'es' 
              ? 'Estamos comprometidos con la formación integral de nuestros estudiantes, preparándolos para ser ciudadanos globales responsables y líderes transformadores en sus comunidades.'
              : 'We are committed to the integral formation of our students, preparing them to be responsible global citizens and transformative leaders in their communities.'
            }
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-[#F6E824] mb-2">100%</div>
              <div className="text-lg">{currentLanguage === 'es' ? 'Compromiso' : 'Commitment'}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#F6E824] mb-2">40+</div>
              <div className="text-lg">{currentLanguage === 'es' ? 'Años de Experiencia' : 'Years of Experience'}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#F6E824] mb-2">∞</div>
              <div className="text-lg">{currentLanguage === 'es' ? 'Posibilidades' : 'Possibilities'}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Mission;