import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, ArrowUpCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';

const Footer: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const currentContent = content[currentLanguage];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#2C3188] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/images/logo berckley cs 4 (1).png"
                alt="International Berckley School"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">International Berckley School</h3>
                <p className="text-sm text-gray-300">Excellence in Education</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              {currentContent.footer.description}
            </p>

            {/* Social media */}
            <div>
              <h4 className="font-semibold mb-4">{currentContent.footer.followUs}</h4>
              <div className="flex space-x-4">
                <a href="http://facebook.com/InternationalBerckleySchool" target="_blank" className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-[#F6E824] hover:text-[#2C3188] transition-colors duration-300">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/berckleyschool/" target="_blank" className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-[#F6E824] hover:text-[#2C3188] transition-colors duration-300">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.youtube.com/channel/UCRxv7lyOxBD0fOhHA-E7dRw" target="_blank" className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-[#F6E824] hover:text-[#2C3188] transition-colors duration-300">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-6">{currentContent.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {currentContent.navigation.slice(0, 5).map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href || '#'}
                    className="text-gray-300 hover:text-[#F6E824] transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold mb-6">{currentContent.footer.contact}</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#F6E824] mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{currentContent.contact.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#F6E824] flex-shrink-0" />
                <span className="text-gray-300 text-sm">{currentContent.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#F6E824] flex-shrink-0" />
                <span className="text-gray-300 text-sm">{currentContent.contact.email}</span>
              </div>
            </div>

            {/* Accreditations */}
            <div className="mt-8">
              <h5 className="font-semibold mb-4">
                {currentLanguage === 'es' ? 'Acreditaciones' : 'Accreditations'}
              </h5>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white bg-opacity-10 p-2 rounded text-center text-xs">
                  Cambridge
                </div>
                <div className="bg-white bg-opacity-10 p-2 rounded text-center text-xs">
                  IB
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white border-opacity-20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              {currentContent.footer.rights}
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-[#F6E824] transition-colors duration-300">
                {currentLanguage === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
              </a>
              <a href="#" className="text-gray-300 hover:text-[#F6E824] transition-colors duration-300">
                {currentLanguage === 'es' ? 'Términos de Uso' : 'Terms of Use'}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-5 top-5 p-2 cursor-pointer" onClick={() => scrollToTop()}>
        <ArrowUpCircle/>
      </div>
    </footer>
  );
};

export default Footer;