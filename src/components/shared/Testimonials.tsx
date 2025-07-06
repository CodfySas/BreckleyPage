import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { TestimonialType } from '../../types';

const Testimonials: React.FC = () => {
  const { currentLanguage } = useLanguage();

  const testimonials: TestimonialType[] = [
    {
      name: 'María González',
      role: currentLanguage === 'es' ? 'Madre de Familia' : 'Parent',
      content: currentLanguage === 'es' 
        ? 'International Berckley School ha superado todas nuestras expectativas. Mi hija ha desarrollado no solo excelencia académica, sino también valores sólidos y confianza en sí misma.'
        : 'International Berckley School has exceeded all our expectations. My daughter has developed not only academic excellence, but also solid values and self-confidence.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Carlos Mendoza',
      role: currentLanguage === 'es' ? 'Exalumno' : 'Alumni',
      content: currentLanguage === 'es'
        ? 'Gracias a la formación que recibí en Berckley, pude ingresar a una universidad prestigiosa en el extranjero. El nivel académico y el dominio del inglés fueron fundamentales.'
        : 'Thanks to the education I received at Berckley, I was able to enter a prestigious university abroad. The academic level and English proficiency were fundamental.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Ana Rodríguez',
      role: currentLanguage === 'es' ? 'Padre de Familia' : 'Parent',
      content: currentLanguage === 'es'
        ? 'La atención personalizada y el ambiente familiar del colegio han sido clave en el desarrollo integral de nuestros hijos. Recomendamos Berckley sin dudarlo.'
        : 'The personalized attention and family atmosphere of the school have been key in the integral development of our children. We recommend Berckley without hesitation.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C3188] mb-6">
            {currentLanguage === 'es' ? 'TESTIMONIOS' : 'Testimonials'}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {currentLanguage === 'es' 
              ? 'Conoce las experiencias de nuestra comunidad educativa'
              : 'Learn about the experiences of our educational community'
            }
          </p>
          <div className="w-24 h-1 bg-[#F6E824] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              <Quote className="h-8 w-8 text-[#F6E824] mb-4" />
              
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-[#2C3188]">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-[#F6E824] fill-current" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;