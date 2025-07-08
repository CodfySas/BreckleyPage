import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Award, Globe, Users, ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react';
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
      url: 'images/home.png',
      icon: GraduationCap,
      id: 0,
      title1: 'Excelencia',
      title2: 'Educativa',
      title3: 'Internacional',
      subtitle: 'Formamos seres humanos integrales capaces de desarrollarse en un entorno globalizado y tecnificado.',
      description: true,
      button1: 'Conoce Más',
      button2: 'Iniciar proceso'
    },
    {
      url: 'images/home2.jpg',
      icon: GraduationCap,
      id: 1,
      title1: 'Admisiones',
      title2: 'Abiertas',
      subtitle: 'Te invitamos a ser parte de una comunidad educativa comprometida con la formación integral, bilingüe y con estándares internacionales.',
      button1: 'Conoce Más',
    },
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
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsAutoPlaying(false);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative !h-[40rem] flex items-center !justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br transition-all duration-1000">
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

        {/* Navigation Buttons */}
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

        {/* Multiple Background Images for Smooth Transitions */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${slide.url})`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-blue-900/50" />
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            {/* Left Content */}
            <div className="text-white space-y-8">
              {/* Main heading with smooth transitions */}
              <div className="space-y-4 md:px-12">
                <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-center md:text-left transition-all duration-700 transform ${
                  isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                }`}>
                  {currentSlideData.title1 && (
                    <span className="block text-white">{currentSlideData.title1}</span>
                  )}
                  {currentSlideData.title2 && (
                    <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                      {currentSlideData.title2}
                    </span>
                  )}
                  {currentSlideData.title3 && (
                    <span className="block text-white">{currentSlideData.title3}</span>
                  )}
                </h1>

                <p className={`text-xl md:text-2xl text-blue-100 max-w-2xl leading-relaxed text-center md:text-left transition-all duration-700 delay-100 transform ${
                  isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                }`}>
                  {currentSlideData.subtitle}
                </p>
              </div>

              {/* Stats row */}
              {currentSlideData.description && (
                <div className={`flex flex-wrap gap-8 py-6 justify-center items-center transition-all duration-700 delay-200 transform ${
                  isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                }`}>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-500">+800</div>
                    <div className="text-sm text-blue-200">Estudiantes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-500">+15</div>
                    <div className="text-sm text-blue-200">Prom. graduadas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-500">20</div>
                    <div className="text-sm text-blue-200">Tamaño de la clase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-500">1</div>
                    <div className="text-sm text-blue-200">Condecoración</div>
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 md:px-12 transition-all duration-700 delay-300 transform ${
                isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}>
                {currentSlideData.button1 && (
                  <button className="group bg-white backdrop-blur-sm text-black px-8 py-4 rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>{currentSlideData.button1}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
                {currentSlideData.button2 && (
                  <button className="group bg-gradient-to-r from-amber-500 to-red-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                    <span>{currentSlideData.button2}</span>
                    <Play className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Right Content - Logo and Visual Elements */}
            {currentSlide === 0 && (
              <div className={`relative items-center justify-center hidden lg:flex transition-all duration-700 delay-400 transform ${
                isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}>
                {/* Main logo container */}
                <div className="relative">
                  {/* Animated rings */}
                  <div className="absolute inset-0 -m-8">
                    <div className="w-full h-full border-2 border-yellow-400/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                  </div>
                  <div className="absolute inset-0 -m-16">
                    <div className="w-full h-full border border-red-500/20 rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
                  </div>

                  {/* Logo */}
                  <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-full border border-white/20 shadow-2xl">
                    <img
                      src="/images/logo.png"
                      alt="International Berckley School"
                      className="h-32 w-32 md:h-40 md:w-40 object-contain drop-shadow-2xl"
                    />
                  </div>

                  {/* Floating badges */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-amber-400 to-red-500 p-3 rounded-full shadow-lg animate-bounce">
                    <Globe className="w-6 h-6 text-white" />
                  </div>

                  <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-full shadow-lg animate-pulse">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Achievement cards */}
                <div className="absolute top-0 right-0 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="text-center">
                    <Award className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-white">Acreditación</div>
                    <div className="text-xs text-blue-200">Internacional</div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="text-center">
                    <img
                      src="/images/ib.png"
                      alt="International Berckley School"
                      className="h-12 w-12 mx-auto mb-2"
                    />
                    <div className="text-sm font-semibold text-white">Programa</div>
                    <div className="text-xs text-blue-200">IB Diploma</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex space-x-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all cursor-pointer duration-300 ${
                index === currentSlide
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
          className="absolute top-6 left-6 bg-white bg-opacity-20 z-50 backdrop-blur-md p-3 rounded-full hover:bg-opacity-30 transition-all duration-300 hover:scale-110"
        >
          {isAutoPlaying ? (
            <div className="w-4 h-4 bg-white rounded-sm" />
          ) : (
            <Play className="h-4 w-4 text-white" />
          )}
        </button>
      </section>
    </div>
  );
};

export default Hero;