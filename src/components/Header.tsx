import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useRouter } from '../hooks/useRouter';
import { content } from '../data/content';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { currentLanguage, changeLanguage } = useLanguage();
  const { navigate, currentPath } = useRouter();
  const currentContent = content[currentLanguage];

  const toggleDropdown = (id: string) => {
    changeLanguage('es');
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const handleNavigation = (href: string) => {
    console.log('Navigating to:', href); // Debug log
    
    if (href.startsWith('#')) {
      // Scroll to section on home page
      if (currentPath !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to page
      navigate(href);
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
            <img 
              src="/images/logo.png" 
              alt="International Berckley School" 
              className="h-12 w-12 object-contain"
            />
            <div className="block">
              <h1 className="md:text-xl font-bold text-[#2C3188]">International Berckley School</h1>
              <p className="hidden md:block text-sm text-gray-600">Excellence in Education</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm">
            {currentContent.navigation.map((item) => (
              <div key={item.id} className="relative group">
                {item.children ? (
                  <div>
                    <button
                      className="flex items-center space-x-1 text-gray-700 hover:text-[#2C3188] transition-colors duration-200"
                      onClick={() => toggleDropdown(item.id)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {activeDropdown === item.id && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                        {item.children.map((child) => (
                          <button
                            key={child.id}
                            onClick={() => handleNavigation(child.href || '#')}
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:text-[#2C3188] transition-colors duration-200"
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavigation(item.href || '#')}
                    className="text-gray-700 hover:text-[#2C3188] transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Language Switcher & CTA */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => handleNavigation('#admissions')}
              className="hidden sm:inline-block font-bold bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-400 transition-colors duration-200"
            >
              Matricúlate
            </button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#2C3188] hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="space-y-4">
              {currentContent.navigation.map((item) => (
                <div key={item.id}>
                  {item.children ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full text-left text-gray-700 hover:text-[#2C3188] transition-colors duration-200 font-medium"
                        onClick={() => toggleDropdown(`mobile-${item.id}`)}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      {activeDropdown === `mobile-${item.id}` && (
                        <div className="mt-2 ml-4 space-y-2">
                          {item.children.map((child) => (
                            <button
                              key={child.id}
                              onClick={() => handleNavigation(child.href || '#')}
                              className="block text-gray-600 hover:text-[#2C3188] transition-colors duration-200"
                            >
                              {child.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavigation(item.href || '#')}
                      className="block text-gray-700 hover:text-[#2C3188] transition-colors duration-200 font-medium"
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={() => handleNavigation('#admissions')}
                className="block bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-[#c41e3a] transition-colors duration-200 font-medium text-center w-full"
              >
                {currentContent.hero.admissionsButton}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;