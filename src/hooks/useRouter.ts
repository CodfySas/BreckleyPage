import { useState, useEffect } from 'react';

export const useRouter = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    // Escuchar eventos de navegación del navegador
    window.addEventListener('popstate', handlePopState);
    
    // Escuchar eventos personalizados para navegación programática
    const handleNavigation = (event) => {
      setCurrentPath(event.detail.path);
    };
    
    window.addEventListener('navigate', handleNavigation);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('navigate', handleNavigation);
    };
  }, []);

  const navigate = (path) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      
      // Disparar evento personalizado para notificar otros componentes
      window.dispatchEvent(new CustomEvent('navigate', { 
        detail: { path } 
      }));
      
      window.scrollTo(0, 0);
    }
  };

  return { currentPath, navigate };
};