import React from 'react';
import { FileText, CheckCircle, Users, Award, BookOpen, Brain, Compass, Eye, Globe, Handshake, Heart, Leaf, Lightbulb, Music, Rocket, Shield, Star, Target, Trophy, Zap } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';

const Admissions: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const currentContent = content[currentLanguage];

  const processIcons = [FileText, CheckCircle, Users, Award];

  const values = [
    {
      icon: <Award className="w-5 h-5" />,
      title: "Excelencia Académica",
      description: "Estándares internacionales de calidad educativa"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Mentalidad Global",
      description: "Perspectiva internacional y multicultural"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Comunidad Inclusiva",
      description: "Diversidad y respeto por todas las culturas"
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Aprendizaje Continuo",
      description: "Pasión por el conocimiento y la investigación"
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Innovación Pedagógica",
      description: "Metodologías educativas de vanguardia"
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Desarrollo Emocional",
      description: "Inteligencia emocional y bienestar integral"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Orientación a Resultados",
      description: "Metas claras y logros medibles"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Liderazgo Dinámico",
      description: "Formación de líderes transformadores"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Integridad Moral",
      description: "Valores éticos sólidos y transparencia"
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: "Excelencia Personal",
      description: "Desarrollo del máximo potencial individual"
    },
    {
      icon: <Compass className="w-5 h-5" />,
      title: "Pensamiento Crítico",
      description: "Análisis profundo y toma de decisiones"
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      title: "Espíritu Competitivo",
      description: "Superación constante y logro de metas"
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "Desarrollo Cognitivo",
      description: "Estimulación del pensamiento superior"
    },
    {
      icon: <Handshake className="w-5 h-5" />,
      title: "Colaboración Efectiva",
      description: "Trabajo en equipo y cooperación"
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Visión de Futuro",
      description: "Preparación para los desafíos del mañana"
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "Espíritu Emprendedor",
      description: "Iniciativa y creatividad empresarial"
    },
    {
      icon: <Leaf className="w-5 h-5" />,
      title: "Conciencia Ambiental",
      description: "Responsabilidad ecológica y sostenibilidad"
    },
    {
      icon: <Music className="w-5 h-5" />,
      title: "Expresión Artística",
      description: "Desarrollo de talentos creativos y culturales"
    }
  ];

  return (

    <section id="admissions" className="">
      <section className="relative flex items-center justify-center overflow-hidden w-full max-h-[650px]">
        <img src='images/primary-full.png' className='!w-full !h-full' />

        <div className="z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white absolute bottom-28">
          <h1 className="text-5xl md:text-8xl font-medium mb-6">
            ¡BIENVENIDOS!
            <span className="block text-3xl md:text-4xl mt-4">
              Al International Berckley school
            </span>
          </h1>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section id="nosotros" className="pt-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-block bg-[#2C3188]/10 text-[#2C3188] px-4 py-2 rounded-full text-sm font-semibold">
                    Desde 1985 • 40 años de excelencia
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Una Tradición de
                    <span className="block text-[#2C3188]">Excelencia Académica</span>
                  </h2>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    Formar seres humanos integrales capaces de desarrollarse en un entorno globalizado y tecnificado, basados en valores éticos, morales, religiosos, deportivos y culturales, con una comunicación trilingüe (Español, Inglés y Francés) que les permita interactuar en cualquier lugar del mundo.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-orange-500/30 p-6 rounded-xl">
                    <div className="text-2xl font-bold text-[#2C3188] mb-2">13+</div>
                    <div className="text-sm text-gray-600">Años como colegio IB autorizado</div>
                  </div>
                  <div className="bg-red-500/20 p-6 rounded-xl">
                    <div className="text-2xl font-bold text-[#E31D28] mb-2">100%</div>
                    <div className="text-sm text-gray-600">Graduados Bilingües Certificados</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <img src="https://images.pexels.com/photos/8471781/pexels-photo-8471781.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                    alt="Students" className="rounded-xl object-cover h-48" />
                  <img src="https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                    alt="Campus" className="rounded-xl object-cover h-48 mt-8" />
                  <img src="https://images.pexels.com/photos/8471916/pexels-photo-8471916.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                    alt="Laboratory" className="rounded-xl object-cover h-48 -mt-8" />
                  <img src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                    alt="Library" className="rounded-xl object-cover h-48" />
                </div>

                {/* Accreditation Badges */}
                <div className="absolute -bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg border">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-[#2C3188] rounded-lg flex items-center justify-center text-white font-bold text-sm">IB</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="valores" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block bg-[#2C3188]/10 text-[#2C3188] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Nuestros Pilares Fundamentales
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Valores que nos <span className="text-[#2C3188]">Definen</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cada valor representa nuestro compromiso con la formación integral de estudiantes excepcionales,
                preparados para liderar en un mundo globalizado y en constante evolución.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 group cursor-pointer"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-400 text-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm mb-1 leading-tight">{value.title}</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="campus" className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#2C3188]">
                Nuestro campus
              </h2>
              <div>
                <iframe className='w-full min-h-[400px]' src="https://www.youtube.com/embed/kTFnBzqR310" title="International Berckley School | #IBS" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="relative flex items-center justify-center overflow-hidden w-full max-h-[350px]">
          <img src='images/prees-full.png' className='!w-full !h-full' />

          <div className="z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white absolute">
            <h1 className="text-5xl md:text-6xl font-medium mb-6">
              ¡APLICA AHORA!
              <span className="block text-2xl md:text-2xl mt-4">
                ¡Te estamos esperando!
              </span>
            </h1>
            <a
              href='/'
              className="bg-[#2C3188] text-white px-7 py-3 rounded-md hover:bg-[#3f4399] transition-colors duration-200"
            >
              INICIA TU PROCESO AQUI
            </a>
          </div>
        </section>
    </section>
  );
};

export default Admissions;