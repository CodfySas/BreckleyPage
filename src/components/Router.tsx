import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import History from './pages/History';
import Mission from './pages/Mission';
import Staff from './pages/Staff';
import Programs from './pages/Programs';
import Activities from './pages/Activities';
import Gallery from './pages/Gallery';
import AcademicProgram from './pages/AcademicProgram';

interface RouterProps {
  currentPath: string;
}

const Router: React.FC<RouterProps> = ({ currentPath }) => {
  useLanguage();

  // Remove leading slash and normalize path
  const cleanPath = currentPath.replace(/^\//, '').toLowerCase();

  // Handle both Spanish and English routes
  switch (cleanPath) {
    case 'historia':
    case 'history':
      return <History />;
    case 'mision':
    case 'mission':
      return <Mission />;
    case 'directivos':
    case 'staff':
      return <Staff />;
    case 'programas':
    case 'programs':
      return <Programs />;
    case 'actividades':
    case 'activities':
      return <Activities />;
    case 'galeria':
    case 'gallery':
      return <Gallery />;
    case 'preescolar':
    case 'preschool':
      return <AcademicProgram level="preschool" />;
    case 'primaria':
    case 'elementary':
      return <AcademicProgram level="elementary" />;
    case 'bachillerato':
    case 'highschool':
      return <AcademicProgram level="highschool" />;
    default:
      return null;
  }
};

export default Router;