import React from 'react';
import { Award, Users, BookOpen } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';

const About: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const currentContent = content[currentLanguage];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-[100px]">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C3188] mb-6">
            WELCOME TO IBS
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            En el International Berckley School, tenemos como compromiso formar estudiantes bilingües con un alto nivel académico, mediante una formación integral desde sus primeros años, dando cumplimiento a los estándares del Ministerio de Educación Nacional (MEN) y proyectándonos a la acreditación del programa de la escuela primaria Bachillerato Internacional.
          </p>
          <div className="w-24 h-1 bg-[#F6E824] mx-auto rounded-full"></div>
          <div style={{ height: '50vh' }} className="w-full flex justify-center px-4">
            <iframe
              className="
      w-full max-w-sm
      sm:max-w-md sm:h-64
      md:max-w-2xl md:h-80
      lg:max-w-4xl lg:h-96
      rounded-lg shadow-lg border-0
    "
              src="https://www.youtube.com/embed/QWCPspu8nK4"
              title="Welcome Back IBS"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="w-24 h-1 bg-[#F6E824] mx-auto rounded-full mb-18"></div>
        </div>


        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 mt-20">
          <div>
            <h3 className="text-3xl font-bold text-[#2C3188] mb-6">
              {currentLanguage === 'es' ? 'LO QUE NOS DISTINGUE' : 'Why choose IBS?'}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {currentContent.about.description}
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-yellow-600 p-2 rounded-full mt-1">
                  <BookOpen className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#2C3188] mb-1">
                    {currentLanguage === 'es' ? 'Metodología Internacional' : 'International Methodology'}
                  </h4>
                  <p className="text-gray-600">
                    {currentLanguage === 'es'
                      ? 'Programas Cambridge Primary, Secondary y IGCSE reconocidos mundialmente.'
                      : 'Globally recognized Cambridge Primary, Secondary and IGCSE programs.'
                    }
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-orange-500 p-2 rounded-full mt-1">
                  <Users className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#2C3188] mb-1">
                    {currentLanguage === 'es' ? 'Atención Personalizada' : 'Personalized Attention'}
                  </h4>
                  <p className="text-gray-600">
                    {currentLanguage === 'es'
                      ? 'Grupos pequeños que permiten un seguimiento individual del progreso.'
                      : 'Small groups that allow individual progress tracking.'
                    }
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-[#2C3188] p-2 rounded-full mt-1">
                  <Award className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#2C3188] mb-1">
                    {currentLanguage === 'es' ? 'Preparación Universitaria' : 'University Preparation'}
                  </h4>
                  <p className="text-gray-600">
                    {currentLanguage === 'es'
                      ? 'Nuestros graduados ingresan a las mejores universidades del mundo.'
                      : 'Our graduates enter the best universities in the world.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="images/classroom.png"
              alt="Students learning"
              className="rounded-lg shadow-xl w-full h-120 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-orange-500 p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-white">40+</div>
              <div className="text-sm text-gray-200 font-medium">
                {currentLanguage === 'es' ? 'Años de Experiencia' : 'Years of Experience'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;