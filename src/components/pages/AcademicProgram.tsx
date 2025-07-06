import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Clock, CheckCircle, Star } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import PageHeader from '../shared/PageHeader';

interface AcademicProgramProps {
  level: 'preschool' | 'elementary' | 'highschool';
}

const AcademicProgram: React.FC<AcademicProgramProps> = ({ level }) => {
  const { currentLanguage } = useLanguage();

  const programData = {
    preschool: {
      es: {
        title: 'Preescolar',
        subtitle: 'Primeros pasos hacia la excelencia',
        ages: '3-5 años',
        description: 'Nuestro programa de preescolar está diseñado para desarrollar las habilidades fundamentales en un ambiente bilingüe estimulante que fomenta la creatividad, el pensamiento crítico y el amor por el aprendizaje.',
        curriculum: [
          'Desarrollo del lenguaje bilingüe (español-inglés)',
          'Matemáticas tempranas y lógica',
          'Ciencias naturales y exploración',
          'Artes creativas y expresión',
          'Educación física y motricidad',
          'Habilidades sociales y emocionales',
        ],
        features: [
          'Aulas especializadas con tecnología educativa',
          'Jardín de aprendizaje al aire libre',
          'Programa de lectura temprana',
          'Actividades de arte y música',
          'Desarrollo de habilidades motoras',
          'Preparación para primaria',
        ],
        schedule: 'Lunes a Viernes: 7:30 AM - 2:30 PM',
      },
      en: {
        title: 'Preschool',
        subtitle: 'First steps towards excellence',
        ages: '3-5 years',
        description: 'Our preschool program is designed to develop fundamental skills in a stimulating bilingual environment that fosters creativity, critical thinking, and love for learning.',
        curriculum: [
          'Bilingual language development (Spanish-English)',
          'Early mathematics and logic',
          'Natural sciences and exploration',
          'Creative arts and expression',
          'Physical education and motor skills',
          'Social and emotional skills',
        ],
        features: [
          'Specialized classrooms with educational technology',
          'Outdoor learning garden',
          'Early reading program',
          'Art and music activities',
          'Motor skills development',
          'Primary school preparation',
        ],
        schedule: 'Monday to Friday: 7:30 AM - 2:30 PM',
      },
    },
    elementary: {
      es: {
        title: 'Primaria',
        subtitle: 'Construyendo bases sólidas',
        ages: '6-11 años',
        description: 'Nuestro programa de primaria ofrece una formación académica integral con énfasis en el desarrollo de habilidades fundamentales, pensamiento científico y competencias del siglo XXI.',
        curriculum: [
          'Matemáticas avanzadas y resolución de problemas',
          'Ciencias naturales con laboratorio',
          'Lengua castellana y literatura',
          'English Language Arts',
          'Ciencias sociales y geografía',
          'Educación artística y musical',
          'Tecnología e informática',
          'Educación física y deportes',
        ],
        features: [
          'Metodología Cambridge Primary',
          'Laboratorios de ciencias equipados',
          'Biblioteca digital y física',
          'Programa STEAM integrado',
          'Actividades extracurriculares',
          'Evaluación continua personalizada',
        ],
        schedule: 'Lunes a Viernes: 7:00 AM - 3:00 PM',
      },
      en: {
        title: 'Elementary',
        subtitle: 'Building solid foundations',
        ages: '6-11 years',
        description: 'Our elementary program offers comprehensive academic training with emphasis on developing fundamental skills, scientific thinking, and 21st-century competencies.',
        curriculum: [
          'Advanced mathematics and problem solving',
          'Natural sciences with laboratory',
          'Spanish language and literature',
          'English Language Arts',
          'Social sciences and geography',
          'Arts and music education',
          'Technology and computing',
          'Physical education and sports',
        ],
        features: [
          'Cambridge Primary methodology',
          'Equipped science laboratories',
          'Digital and physical library',
          'Integrated STEAM program',
          'Extracurricular activities',
          'Personalized continuous assessment',
        ],
        schedule: 'Monday to Friday: 7:00 AM - 3:00 PM',
      },
    },
    highschool: {
      es: {
        title: 'Bachillerato',
        subtitle: 'Preparación para el futuro',
        ages: '12-17 años',
        description: 'Nuestro programa de bachillerato prepara a los estudiantes para la universidad y la vida profesional con programas Cambridge IGCSE, orientación vocacional y desarrollo de liderazgo.',
        curriculum: [
          'Cambridge IGCSE Mathematics',
          'Cambridge IGCSE Sciences (Biology, Chemistry, Physics)',
          'Cambridge IGCSE English as a Second Language',
          'Spanish Language and Literature',
          'Social Sciences and History',
          'Business Studies',
          'Computer Science',
          'Arts and Design',
          'Physical Education',
        ],
        features: [
          'Programa Cambridge IGCSE',
          'Preparación universitaria',
          'Orientación vocacional personalizada',
          'Proyectos de investigación',
          'Intercambios internacionales',
          'Programa de liderazgo estudiantil',
          'Servicio comunitario',
          'Preparación para exámenes internacionales',
        ],
        schedule: 'Lunes a Viernes: 7:00 AM - 3:30 PM',
      },
      en: {
        title: 'High School',
        subtitle: 'Preparing for the future',
        ages: '12-17 years',
        description: 'Our high school program prepares students for university and professional life with Cambridge IGCSE programs, vocational guidance, and leadership development.',
        curriculum: [
          'Cambridge IGCSE Mathematics',
          'Cambridge IGCSE Sciences (Biology, Chemistry, Physics)',
          'Cambridge IGCSE English as a Second Language',
          'Spanish Language and Literature',
          'Social Sciences and History',
          'Business Studies',
          'Computer Science',
          'Arts and Design',
          'Physical Education',
        ],
        features: [
          'Cambridge IGCSE Program',
          'University preparation',
          'Personalized vocational guidance',
          'Research projects',
          'International exchanges',
          'Student leadership program',
          'Community service',
          'International exam preparation',
        ],
        schedule: 'Monday to Friday: 7:00 AM - 3:30 PM',
      },
    },
  };

  const data = programData[level][currentLanguage];
  const backgroundImages = {
    preschool: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1600',
    elementary: 'https://images.pexels.com/photos/8471691/pexels-photo-8471691.jpeg?auto=compress&cs=tinysrgb&w=1600',
    highschool: 'https://images.pexels.com/photos/8471929/pexels-photo-8471929.jpeg?auto=compress&cs=tinysrgb&w=1600',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title={data.title}
        subtitle={data.subtitle}
        backgroundImage={backgroundImages[level]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Program Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-[#2C3188] to-[#7180A1] p-4 rounded-full mr-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#2C3188]">{data.title}</h2>
                  <p className="text-[#E31D28] font-semibold">{data.ages}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">{data.description}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white p-6 rounded-xl shadow-lg flex items-center">
              <Clock className="h-8 w-8 text-[#F6E824] mr-4" />
              <div>
                <h3 className="font-bold text-[#2C3188]">
                  {currentLanguage === 'es' ? 'Horario' : 'Schedule'}
                </h3>
                <p className="text-gray-600">{data.schedule}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg flex items-center">
              <Users className="h-8 w-8 text-[#E31D28] mr-4" />
              <div>
                <h3 className="font-bold text-[#2C3188]">
                  {currentLanguage === 'es' ? 'Tamaño de Clase' : 'Class Size'}
                </h3>
                <p className="text-gray-600">
                  {currentLanguage === 'es' ? 'Máximo 20 estudiantes' : 'Maximum 20 students'}
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg flex items-center">
              <Award className="h-8 w-8 text-[#2C3188] mr-4" />
              <div>
                <h3 className="font-bold text-[#2C3188]">
                  {currentLanguage === 'es' ? 'Certificación' : 'Certification'}
                </h3>
                <p className="text-gray-600">Cambridge International</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Curriculum */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-[#2C3188] mb-8 text-center">
            {currentLanguage === 'es' ? 'Plan de Estudios' : 'Curriculum'}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.curriculum.map((subject, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center"
              >
                <CheckCircle className="h-5 w-5 text-[#F6E824] mr-3 flex-shrink-0" />
                <span className="text-gray-700">{subject}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-[#2C3188] mb-8 text-center">
            {currentLanguage === 'es' ? 'Características del Programa' : 'Program Features'}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
              >
                <div className="bg-gradient-to-br from-[#2C3188] to-[#7180A1] p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <p className="text-gray-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-[#2C3188] to-[#7180A1] p-12 rounded-2xl text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-6">
            {currentLanguage === 'es' ? 'Únete a Nuestro Programa' : 'Join Our Program'}
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            {currentLanguage === 'es' 
              ? 'Descubre cómo nuestro programa puede transformar el futuro de tu hijo con una educación de excelencia.'
              : 'Discover how our program can transform your child\'s future with excellence in education.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-[#F6E824] text-[#2C3188] px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-300"
            >
              {currentLanguage === 'es' ? 'Solicitar Información' : 'Request Information'}
            </a>
            <a
              href="#contact"
              className="bg-white bg-opacity-20 text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-30 transition-colors duration-300"
            >
              {currentLanguage === 'es' ? 'Agendar Visita' : 'Schedule Visit'}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AcademicProgram;