import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Award, Globe, Users, ChevronLeft, ChevronRight, BookOpen, Trophy, Star, GraduationCap, Heart, Lightbulb, Shield, Target, Zap, ListRestart, Brain, RefreshCcw, Layers3, BookOpenCheck, School, Globe2 } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';

const Hero: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const currentContent = content[currentLanguage];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const [isTransitioning, setIsTransitioning] = useState(false);


  // Slides data
  const slides = [
    {
      id: 1,
      title: 'International Berckley School',
      subtitle: 'Excelencia Educativa Internacional',
      description: 'Formamos seres humanos integrales capaces de desarrollarse en un entorno globalizado y tecnificado.',
      background: 'from-[#1d3e6d] via-[#7180a1] to-[#c7dce6]',
      icon: GraduationCap,
      highlights: [
        {
          icon: Award,
          title: 'Excelencia academica',
          desc: 'Currículo de primer nivel y docentes certificados'
        },
        {
          icon: Heart,
          title: 'Formación en Valores',
          desc: 'Educación basada en valores para la vida'
        },
        {
          icon: Globe2,
          title: 'Excelencia Internacional',
          desc: 'Certificación ISO-9001:2008 y Certificación 1B'
        }
      ]
    },
    {
      id: 2,
      title: 'Educación que trasciende fronteras',
      subtitle: 'Formamos mentes bilingües con visión internacional',
      description: 'Desde preescolar nuestros niños aprenden inglés y español, desarrollando habilidades para destacar en un mundo sin fronteras',
      background: 'from-[#f6e824] via-[#e31d28] to-[#2c3188]',
      icon: Lightbulb,
      highlights: [
        {
          icon: BookOpenCheck,
          title: 'Doble lectoescritura',
          desc: 'Nuestros estudiantes llegan a primaria leyendo y escribiendo en ingles y español'
        },
        {
          icon: School,
          title: 'Primaria Innovadora',
          desc: 'Docentes facilitadores y herramientas educativas de vanguardia'
        },
        {
          icon: Globe,
          title: 'Certificación Cambridge',
          desc: 'Programas internacionales reconocidos'
        }
      ]
    },
    {
      id: 3,
      title: 'Proyecto de AULA Integrador (PAI)',
      subtitle: 'Motivamos, integramos y fortalecemos el aprendizaje',
      description: 'Una estrategia didactica que despierta el interes del estudiante, conecta areas del conocimiento y refuerza actividades investigativas.',
      background: 'from-[#6a3f1e] via-[#b5945f] to-[#e4d7c2]',
      icon: Users,
      highlights: [
        {
          icon: RefreshCcw,
          title: 'Reteaching',
          desc: 'Refuerzo semanal en Language Arts según las necesidades del grupo'
        },
        {
          icon: Brain,
          title: 'Socioafectividad',
          desc: 'Encuentros quincenales para fortalecer la inteligencia emocional'
        },
        {
          icon: Layers3,
          title: 'Integración de Saberes',
          desc: 'Aprendizaje significativo a través de la conexión entre áreas'
        }
      ]
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && !isTransitioning) {
      const interval = setInterval(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentSlide((prev) => (prev + 1) % slides.length);
          setTimeout(() => setIsTransitioning(false), 50);
        }, 300);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, slides.length, isTransitioning]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsAutoPlaying(false);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsAutoPlaying(false);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  const goToSlide = (index: number) => {
    console.log(index);
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsAutoPlaying(false);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  const currentSlideData = slides[currentSlide];
  const IconComponent = currentSlideData.icon;

  return (
    <div className="h-[120vh] md:h-[100vh] bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-full flex items-center !justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.background} transition-all duration-1000`}>
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -right-4 w-72 h-72 bg-white rounded-full opacity-5 animate-pulse"></div>
          <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-white rounded-full opacity-5 animate-pulse delay-1000"></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white rounded-full opacity-10 animate-bounce delay-500"></div>
          <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-white rounded-full opacity-10 animate-bounce delay-2000"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 backdrop-blur-md md:p-4 p-2 rounded-full hover:bg-opacity-30 transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 backdrop-blur-md md:p-4 p-2 rounded-full hover:bg-opacity-30 transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        <div className="relative z-10 max-w-7xl h-full p-5 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`max-w-5xl mx-auto transition-all duration-500 ${isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
            }`}>
            <div className="md:mb-8 flex justify-center">
              <div className="bg-white bg-opacity-20 backdrop-blur-md p-2 rounded-full animate-pulse">
                <IconComponent className="h-8 w-8 text-white" />
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold mb-4 text-white animate-fade-in-up">
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                {currentSlideData.title}
              </span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl md:text-2xl text-[#F6E824] lg:text-3xl font-semibold mb-4 animate-fade-in-up delay-200">
              {currentSlideData.subtitle}
            </h2>

            {/* Description */}
            <p className="text-sm md:text-md mb-8 max-w-4xl mx-auto leading-relaxed text-gray-200 animate-fade-in-up delay-400">
              {currentSlideData.description}
            </p>

            {/* Key Highlights */}
            <div style={{justifyItems: 'center'}} className="grid md:grid-cols-3 gap-8 mb-6 animate-fade-in-up delay-600 !justify-center items-center">
              {currentSlideData.highlights.map((highlight, index) => {
                const HighlightIcon = highlight.icon;
                return (
                  <div
                    key={index}
                    className="w-[80%] md:w-auto bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-2xl border border-white border-opacity-20 transform hover:scale-105 transition-all duration-500 hover:bg-opacity-20"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="bg-white bg-opacity-20 p-2 hidden md:block rounded-full w-fit mx-auto mb-4">
                      <HighlightIcon className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="md:text-xl font-bold mb-1 text-sm text-[#F6E824] ">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-200 md:text-sm text-xs leading-relaxed">
                      {highlight.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-800">
              <button className="group bg-white text-gray-900 px-5 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-2xl">
                <span>Conoce más</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button className="group bg-gradient-to-r from-red-600 to-red-500 text-white px-5 py-3 rounded-full font-bold text-lg hover:from-red-500 hover:to-red-400 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-2xl">
                <span>Iniciar Proceso</span>
                <Play className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex space-x-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all cursor-pointer duration-300 ${index === currentSlide
                ? 'bg-white scale-125 shadow-lg'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black bg-opacity-20">
          <div
            className="h-full bg-gradient-to-r from-white to-gray-300 transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>

        {/* Auto-play Toggle */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute top-6 left-6 bg-white bg-opacity-20 backdrop-blur-md p-3 rounded-full hover:bg-opacity-30 transition-all duration-300 hover:scale-110"
        >
          {isAutoPlaying ? (
            <div className="w-4 h-4 bg-white rounded-sm" />
          ) : (
            <Play className="h-4 w-4 text-white" />
          )}
        </button>

        <img className="absolute top-5 right-5 w-12 md:top-6 md:right-6 md:w-20" src="images/ib.png" />
      </section>
      
    </div>
    
  );
};
// 6. Agregar el style tag en tu JSX (opcional si ya tienes las clases)


export default Hero;