import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { content } from '../../data/content';
import PageHeader from '../shared/PageHeader';

const Gallery: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const currentContent = content[currentLanguage];
  const [selectedImage, setSelectedImage] = useState<{ url: string; caption: string } | null>(null);
  const [activeCategory, setActiveCategory] = useState(0);

  const allImages = currentContent.gallery.categories.flatMap(category => category.images);

  const openLightbox = (image: { url: string; caption: string }) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentIndex = allImages.findIndex(img => img.url === selectedImage.url);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : allImages.length - 1;
    } else {
      newIndex = currentIndex < allImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(allImages[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title={currentContent.gallery.title}
        subtitle={currentContent.gallery.subtitle}
        backgroundImage="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          {currentContent.gallery.categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 mx-2 mb-4 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-[#2C3188] text-white shadow-lg'
                  : 'bg-white text-[#2C3188] hover:bg-[#2C3188] hover:text-white shadow-md'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {currentContent.gallery.categories[activeCategory].images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openLightbox(image)}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-[#F6E824] transition-colors duration-300 z-10"
              >
                <X className="h-8 w-8" />
              </button>
              
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#F6E824] transition-colors duration-300 z-10"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#F6E824] transition-colors duration-300 z-10"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
              
              <img
                src={selectedImage.url}
                alt={selectedImage.caption}
                className="max-w-full max-h-full object-contain"
              />
              
              <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <p className="text-lg font-medium">{selectedImage.caption}</p>
              </div>
            </div>
          </div>
        )}

        {/* Virtual Tour CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-[#2C3188] to-[#7180A1] p-12 rounded-2xl text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-6">
            {currentLanguage === 'es' ? 'Visita Nuestro Campus' : 'Visit Our Campus'}
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            {currentLanguage === 'es' 
              ? 'Agenda una visita personalizada y conoce de primera mano nuestras instalaciones y metodología.'
              : 'Schedule a personalized visit and experience our facilities and methodology firsthand.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-[#F6E824] text-[#2C3188] px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-300"
            >
              {currentLanguage === 'es' ? 'Agendar Visita' : 'Schedule Visit'}
            </a>
            <a
              href="#contact"
              className="bg-white bg-opacity-20 text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-30 transition-colors duration-300"
            >
              {currentLanguage === 'es' ? 'Tour Virtual' : 'Virtual Tour'}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;