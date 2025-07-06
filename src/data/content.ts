import { Content } from '../types';

export const content: Record<'es' | 'en', Content> = {
  es: {
    navigation: [
      { id: 'inicio', label: 'Inicio', href: '/' },
      {
        id: 'nosotros',
        label: 'Nosotros',
        children: [
          { id: 'historia', label: 'Nuestra Historia', href: '/historia' },
          { id: 'mision', label: 'Misión y Visión', href: '/mision' },
          { id: 'directivos', label: 'Directivos', href: '/directivos' },
        ],
      },
      {
        id: 'academico',
        label: 'Académico',
        children: [
          { id: 'preescolar', label: 'Preescolar', href: '/preescolar' },
          { id: 'primaria', label: 'Primaria', href: '/primaria' },
          { id: 'bachillerato', label: 'Bachillerato', href: '/bachillerato' },
          { id: 'programas', label: 'Programas Especiales', href: '/programas' },
        ],
      },
      {
        id: 'admisiones',
        label: 'Admisiones',
        children: [
          { id: 'proceso', label: 'Proceso de Admisión', href: '#admissions' },
          { id: 'requisitos', label: 'Requisitos', href: '#admissions' },
          { id: 'costos', label: 'Costos y Becas', href: '#contact' },
        ],
      },
      {
        id: 'vida-escolar',
        label: 'Vida Escolar',
        children: [
          { id: 'actividades', label: 'Actividades Extracurriculares', href: '/actividades' },
          { id: 'galeria', label: 'Galería', href: '/galeria' },
        ],
      },
      { id: 'contacto', label: 'Contacto', href: '#contact' },
    ],
    hero: {
      title: 'International Berckley School',
      subtitle: 'Excelencia Educativa Internacional',
      description: 'Formamos líderes del futuro con una educación bilingüe de calidad mundial, valores sólidos y pensamiento crítico. Más de 40 años de tradición académica en Bogotá.',
      ctaButton: 'Conoce Más',
      admissionsButton: 'Iniciar Admisiones',
    },
    about: {
      title: 'Sobre Nosotros',
      subtitle: 'Una tradición de excelencia educativa',
      description: 'International Berckley School es una institución educativa de prestigio que combina la tradición académica con la innovación pedagógica. Nuestro compromiso es formar estudiantes íntegros, bilingües y preparados para los desafíos del siglo XXI. Con más de 40 años de experiencia, hemos graduado generaciones de líderes que impactan positivamente en la sociedad.',
      values: [
        {
          title: 'Excelencia Académica',
          description: 'Programas educativos de alta calidad con estándares internacionales Cambridge e IB.',
        },
        {
          title: 'Educación Bilingüe',
          description: 'Inmersión completa en inglés y español para una formación global y competitiva.',
        },
        {
          title: 'Valores Sólidos',
          description: 'Formación integral basada en principios éticos, respeto y responsabilidad social.',
        },
        {
          title: 'Innovación Pedagógica',
          description: 'Metodologías STEAM y tecnología educativa de vanguardia para el aprendizaje del futuro.',
        },
      ],
    },
    academics: {
      title: 'Programas Académicos',
      subtitle: 'Educación integral desde los primeros años',
      programs: [
        {
          title: 'PREESCOLAR',
          description: 'Desarrollo integral en un ambiente bilingüe estimulante que fomenta la creatividad, el pensamiento crítico y el amor por el aprendizaje desde los primeros años.',
          ages: '3-5 años',
        },
        {
          title: 'PRIMARIA',
          description: 'Formación académica sólida con énfasis en habilidades fundamentales, pensamiento científico y desarrollo de competencias para el siglo XXI.',
          ages: '6-11 años',
        },
        {
          title: 'BACHILLERATO',
          description: 'Preparación universitaria con programas Cambridge IGCSE, orientación vocacional personalizada y desarrollo de liderazgo estudiantil.',
          ages: '12-17 años',
        },
      ],
    },
    admissions: {
      title: 'Proceso de Admisiones',
      subtitle: 'Tu camino hacia la excelencia educativa',
      process: [
        {
          step: 1,
          title: 'Solicitud Inicial',
          description: 'Completa el formulario de admisión en línea con la información del estudiante y programa de interés.',
        },
        {
          step: 2,
          title: 'Documentación',
          description: 'Entrega de documentos requeridos, certificados académicos y referencias del colegio anterior.',
        },
        {
          step: 3,
          title: 'Evaluación',
          description: 'Pruebas académicas de inglés y matemáticas, entrevista personal con el estudiante y familia.',
        },
        {
          step: 4,
          title: 'Admisión',
          description: 'Notificación de resultados, proceso de matrícula y bienvenida a la comunidad Berckley.',
        },
      ],
      requirements: {
        title: 'Requisitos de Admisión',
        items: [
          'Formulario de admisión completo y firmado',
          'Certificados académicos de los últimos dos años',
          'Fotocopia del documento de identidad del estudiante',
          'Certificado médico actualizado y carnet de vacunas',
          'Dos fotografías tamaño cédula recientes',
          'Carta de recomendación del colegio anterior',
          'Constancia de paz y salvo académico y financiero',
          'Entrevista familiar con coordinación académica',
        ],
      },
    },
    contact: {
      title: 'Contacto',
      address: 'Km 5 via al mar poste 115, Barranquilla - Colombia',
      phone: '317 429 9966 - (+57) 605 - 3195893',
      email: 'berckley@ibs.edu.co',
      hours: 'Lunes a Viernes: 7:00 AM - 4:00 PM',
    },
    footer: {
      description: 'International Berckley School - Formando líderes del futuro con excelencia académica, educación bilingüe y valores sólidos desde 1985.',
      quickLinks: 'Enlaces Rápidos',
      contact: 'Contacto',
      followUs: 'Síguenos',
      rights: '© 2025 International Berckley School. Todos los derechos reservados.',
    },
    history: {
      title: 'Nuestra Historia',
      subtitle: 'Más de 40 años forjando el futuro',
      description: 'International Berckley School nació en 1998 con la visión de crear una institución educativa que combinara la excelencia académica internacional con los valores colombianos. A lo largo de más de dos décadas, hemos crecido y evolucionado, manteniéndonos siempre a la vanguardia de la educación.',
      timeline: [
        {
          year: '1998',
          title: 'Fundación',
          description: 'Inicio de operaciones con 50 estudiantes en preescolar y primaria, estableciendo las bases de nuestra filosofía educativa bilingüe.',
        },
        {
          year: '2003',
          title: 'Expansión Bachillerato',
          description: 'Apertura del programa de bachillerato con metodología Cambridge, consolidando la educación integral K-12.',
        },
        {
          year: '2008',
          title: 'Certificación Cambridge',
          description: 'Obtención de la certificación oficial como Cambridge International School, reconociendo nuestros estándares académicos.',
        },
        {
          year: '2012',
          title: 'Campus Moderno',
          description: 'Inauguración de nuestras nuevas instalaciones con laboratorios de última tecnología y espacios deportivos.',
        },
        {
          year: '2018',
          title: 'Programa IB',
          description: 'Implementación del Programa del Diploma del Bachillerato Internacional, ampliando oportunidades universitarias.',
        },
        {
          year: '2020',
          title: 'Educación Digital',
          description: 'Transformación digital completa con plataformas virtuales y metodologías híbridas de aprendizaje.',
        },
        {
          year: '2024',
          title: 'Excelencia Continua',
          description: 'Más de 1,200 graduados exitosos en universidades nacionales e internacionales, consolidando nuestro liderazgo educativo.',
        },
      ],
    },
    mission: {
      title: 'Misión, Visión y Valores',
      mission: {
        title: 'Nuestra Misión',
        description: 'Formar estudiantes íntegros, bilingües y competentes, con pensamiento crítico y valores sólidos, preparados para ser líderes transformadores en un mundo globalizado, a través de una educación de excelencia que combina tradición académica con innovación pedagógica.',
      },
      vision: {
        title: 'Nuestra Visión',
        description: 'Ser reconocidos como la institución educativa líder en Colombia por nuestra excelencia académica internacional, formación integral y contribución al desarrollo de ciudadanos globales comprometidos con la construcción de una sociedad más justa y sostenible.',
      },
      values: [
        {
          title: 'Excelencia',
          description: 'Buscamos la máxima calidad en todos nuestros procesos educativos y formativos.',
        },
        {
          title: 'Integridad',
          description: 'Actuamos con honestidad, transparencia y coherencia en todas nuestras acciones.',
        },
        {
          title: 'Respeto',
          description: 'Valoramos la diversidad y promovemos un ambiente de tolerancia y comprensión.',
        },
        {
          title: 'Responsabilidad',
          description: 'Fomentamos el compromiso social y ambiental en nuestra comunidad educativa.',
        },
        {
          title: 'Innovación',
          description: 'Adoptamos metodologías y tecnologías que enriquecen el proceso de aprendizaje.',
        },
        {
          title: 'Liderazgo',
          description: 'Desarrollamos habilidades de liderazgo positivo y transformador en nuestros estudiantes.',
        },
      ],
    },
    staff: {
      title: 'Nuestro Equipo Directivo',
      subtitle: 'Líderes comprometidos con la excelencia educativa',
      directors: [
        {
          name: 'Dr. María Elena Rodríguez',
          position: 'Rectora General',
          description: 'PhD en Educación Internacional, 20 años de experiencia en liderazgo educativo. Especialista en currículos Cambridge e IB.',
          image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
          name: 'Mg. Carlos Andrés Martínez',
          position: 'Coordinador Académico',
          description: 'Magíster en Pedagogía, coordinador de programas Cambridge IGCSE. Experto en metodologías STEAM.',
          image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
          name: 'Lic. Ana Patricia Gómez',
          position: 'Coordinadora de Bilingüismo',
          description: 'Licenciada en Lenguas Modernas, certificada Cambridge CELTA. 15 años desarrollando programas bilingües.',
          image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
          name: 'Mg. Roberto Silva',
          position: 'Coordinador de Convivencia',
          description: 'Magíster en Psicología Educativa, especialista en desarrollo socioemocional y resolución de conflictos.',
          image: 'https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
      ],
    },
    programs: {
      title: 'Programas Especiales',
      subtitle: 'Experiencias educativas que marcan la diferencia',
      specialPrograms: [
        {
          title: 'Programa STEAM',
          description: 'Integración de Ciencias, Tecnología, Ingeniería, Artes y Matemáticas para desarrollar habilidades del siglo XXI.',
          features: [
            'Laboratorios de robótica y programación',
            'Proyectos interdisciplinarios',
            'Ferias de ciencia y tecnología',
            'Competencias nacionales e internacionales',
          ],
        },
        {
          title: 'Liderazgo Estudiantil',
          description: 'Desarrollo de habilidades de liderazgo, emprendimiento y responsabilidad social en nuestros estudiantes.',
          features: [
            'Gobierno estudiantil activo',
            'Proyectos de servicio comunitario',
            'Conferencias de liderazgo juvenil',
            'Intercambios internacionales',
          ],
        },
        {
          title: 'Programa Artístico',
          description: 'Formación integral en artes visuales, música, teatro y danza para el desarrollo de la creatividad.',
          features: [
            'Coros y grupos musicales',
            'Teatro y artes escénicas',
            'Artes visuales y digitales',
            'Festivales y presentaciones',
          ],
        },
        {
          title: 'Deportes y Bienestar',
          description: 'Promoción de la actividad física, el deporte competitivo y el bienestar integral de nuestros estudiantes.',
          features: [
            'Equipos deportivos competitivos',
            'Torneos intercolegiados',
            'Programas de bienestar y salud',
            'Actividades al aire libre',
          ],
        },
      ],
    },
    activities: {
      title: 'Actividades Extracurriculares',
      subtitle: 'Desarrollo integral más allá del aula',
      categories: [
        {
          title: 'Deportes',
          description: 'Formación deportiva competitiva y recreativa',
          activities: [
            'Fútbol masculino y femenino',
            'Baloncesto',
            'Voleibol',
            'Natación',
            'Tenis',
            'Atletismo',
            'Taekwondo',
            'Gimnasia',
          ],
        },
        {
          title: 'Artes y Cultura',
          description: 'Expresión artística y desarrollo cultural',
          activities: [
            'Coro institucional',
            'Banda sinfónica',
            'Teatro y drama',
            'Danza contemporánea',
            'Artes plásticas',
            'Fotografía',
            'Cine y video',
            'Literatura creativa',
          ],
        },
        {
          title: 'Ciencia y Tecnología',
          description: 'Innovación y desarrollo tecnológico',
          activities: [
            'Club de robótica',
            'Programación y coding',
            'Olimpiadas de matemáticas',
            'Feria de ciencias',
            'Astronomía',
            'Biotecnología',
            'Ingeniería juvenil',
            'Maker space',
          ],
        },
        {
          title: 'Liderazgo y Servicio',
          description: 'Formación en liderazgo y responsabilidad social',
          activities: [
            'Gobierno estudiantil',
            'Servicio comunitario',
            'Modelo de Naciones Unidas',
            'Debate y oratoria',
            'Emprendimiento juvenil',
            'Ecología y sostenibilidad',
            'Voluntariado',
            'Liderazgo estudiantil',
          ],
        },
      ],
    },
    gallery: {
      title: 'Galería',
      subtitle: 'Momentos que definen nuestra comunidad',
      categories: [
        {
          title: 'Instalaciones',
          images: [
            {
              url: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800',
              caption: 'Campus principal con arquitectura moderna',
            },
            {
              url: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800',
              caption: 'Biblioteca con recursos digitales',
            },
            {
              url: 'https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=800',
              caption: 'Laboratorios de ciencias equipados',
            },
          ],
        },
        {
          title: 'Vida Estudiantil',
          images: [
            {
              url: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800',
              caption: 'Estudiantes en clase de ciencias',
            },
            {
              url: 'https://images.pexels.com/photos/8471691/pexels-photo-8471691.jpeg?auto=compress&cs=tinysrgb&w=800',
              caption: 'Trabajo colaborativo en proyectos',
            },
            {
              url: 'https://images.pexels.com/photos/8471929/pexels-photo-8471929.jpeg?auto=compress&cs=tinysrgb&w=800',
              caption: 'Presentaciones estudiantiles',
            },
          ],
        },
        {
          title: 'Eventos',
          images: [
            {
              url: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
              caption: 'Ceremonia de graduación 2024',
            },
            {
              url: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=800',
              caption: 'Festival cultural anual',
            },
            {
              url: 'https://images.pexels.com/photos/1181535/pexels-photo-1181535.jpeg?auto=compress&cs=tinysrgb&w=800',
              caption: 'Competencias deportivas',
            },
          ],
        },
      ],
    },
  },
  en: {
    navigation: [
      { id: 'home', label: 'Home', href: '/' },
      {
        id: 'about',
        label: 'About Us',
        children: [
          { id: 'history', label: 'Our History', href: '/history' },
          { id: 'mission', label: 'Mission & Vision', href: '/mission' },
          { id: 'staff', label: 'Staff', href: '/staff' },
        ],
      },
      {
        id: 'academics',
        label: 'Academics',
        children: [
          { id: 'preschool', label: 'Preschool', href: '/preschool' },
          { id: 'elementary', label: 'Elementary', href: '/elementary' },
          { id: 'highschool', label: 'High School', href: '/highschool' },
          { id: 'programs', label: 'Special Programs', href: '/programs' },
        ],
      },
      {
        id: 'admissions',
        label: 'Admissions',
        children: [
          { id: 'process', label: 'Admission Process', href: '#admissions' },
          { id: 'requirements', label: 'Requirements', href: '#admissions' },
          { id: 'costs', label: 'Costs & Scholarships', href: '#contact' },
        ],
      },
      {
        id: 'school-life',
        label: 'School Life',
        children: [
          { id: 'activities', label: 'Extracurricular Activities', href: '/activities' },
          { id: 'gallery', label: 'Gallery', href: '/gallery' },
        ],
      },
      { id: 'contact', label: 'Contact', href: '#contact' },
    ],
    hero: {
      title: 'International Berckley School',
      subtitle: 'International Educational Excellence',
      description: 'We shape future leaders with world-class bilingual education, solid values, and critical thinking. Over 25 years of academic tradition in Bogotá.',
      ctaButton: 'Learn More',
      admissionsButton: 'Start Admissions',
    },
    about: {
      title: 'About Us',
      subtitle: 'A tradition of educational excellence',
      description: 'International Berckley School is a prestigious educational institution that combines academic tradition with pedagogical innovation. Our commitment is to form integral, bilingual students prepared for 21st-century challenges. With over 25 years of experience, we have graduated generations of leaders who positively impact society.',
      values: [
        {
          title: 'Academic Excellence',
          description: 'High-quality educational programs with Cambridge and IB international standards.',
        },
        {
          title: 'Bilingual Education',
          description: 'Complete immersion in English and Spanish for global and competitive formation.',
        },
        {
          title: 'Solid Values',
          description: 'Integral formation based on ethical principles, respect, and social responsibility.',
        },
        {
          title: 'Pedagogical Innovation',
          description: 'STEAM methodologies and cutting-edge educational technology for future learning.',
        },
      ],
    },
    academics: {
      title: 'Academic Programs',
      subtitle: 'Comprehensive education from early years',
      programs: [
        {
          title: 'Preschool',
          description: 'Comprehensive development in a stimulating bilingual environment that fosters creativity, critical thinking, and love for learning from early years.',
          ages: '3-5 years',
        },
        {
          title: 'Elementary',
          description: 'Solid academic formation with emphasis on fundamental skills, scientific thinking, and development of 21st-century competencies.',
          ages: '6-11 years',
        },
        {
          title: 'High School',
          description: 'University preparation with Cambridge IGCSE programs, personalized vocational guidance, and student leadership development.',
          ages: '12-17 years',
        },
      ],
    },
    admissions: {
      title: 'Admissions Process',
      subtitle: 'Your path to educational excellence',
      process: [
        {
          step: 1,
          title: 'Initial Application',
          description: 'Complete the online admission form with student information and program of interest.',
        },
        {
          step: 2,
          title: 'Documentation',
          description: 'Submit required documents, academic certificates, and references from previous school.',
        },
        {
          step: 3,
          title: 'Evaluation',
          description: 'Academic tests in English and mathematics, personal interview with student and family.',
        },
        {
          step: 4,
          title: 'Admission',
          description: 'Results notification, enrollment process, and welcome to the Berckley community.',
        },
      ],
      requirements: {
        title: 'Admission Requirements',
        items: [
          'Complete and signed admission form',
          'Academic certificates from the last two years',
          'Copy of student identity document',
          'Updated medical certificate and vaccination record',
          'Two recent passport-size photographs',
          'Recommendation letter from previous school',
          'Academic and financial clearance certificate',
          'Family interview with academic coordination',
        ],
      },
    },
    contact: {
      title: 'Contact',
      address: 'Carrera 15 #123-45, Chapinero, Bogotá, Colombia',
      phone: '+57 (1) 234-5678',
      email: 'info@berckleyschool.edu.co',
      hours: 'Monday to Friday: 7:00 AM - 4:00 PM',
    },
    footer: {
      description: 'International Berckley School - Shaping future leaders with academic excellence, bilingual education, and solid values since 1998.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      followUs: 'Follow Us',
      rights: '© 2024 International Berckley School. All rights reserved.',
    },
    history: {
      title: 'Our History',
      subtitle: 'Over 25 years forging the future',
      description: 'International Berckley School was born in 1998 with the vision of creating an educational institution that would combine international academic excellence with Colombian values. Throughout more than two decades, we have grown and evolved, always staying at the forefront of education.',
      timeline: [
        {
          year: '1998',
          title: 'Foundation',
          description: 'Started operations with 50 students in preschool and elementary, establishing the foundations of our bilingual educational philosophy.',
        },
        {
          year: '2003',
          title: 'High School Expansion',
          description: 'Opening of the high school program with Cambridge methodology, consolidating K-12 integral education.',
        },
        {
          year: '2008',
          title: 'Cambridge Certification',
          description: 'Official certification as Cambridge International School, recognizing our academic standards.',
        },
        {
          year: '2012',
          title: 'Modern Campus',
          description: 'Inauguration of our new facilities with state-of-the-art laboratories and sports facilities.',
        },
        {
          year: '2018',
          title: 'IB Program',
          description: 'Implementation of the International Baccalaureate Diploma Programme, expanding university opportunities.',
        },
        {
          year: '2020',
          title: 'Digital Education',
          description: 'Complete digital transformation with virtual platforms and hybrid learning methodologies.',
        },
        {
          year: '2024',
          title: 'Continuous Excellence',
          description: 'Over 1,200 successful graduates in national and international universities, consolidating our educational leadership.',
        },
      ],
    },
    mission: {
      title: 'Mission, Vision and Values',
      mission: {
        title: 'Our Mission',
        description: 'To form integral, bilingual, and competent students with critical thinking and solid values, prepared to be transformative leaders in a globalized world, through excellence in education that combines academic tradition with pedagogical innovation.',
      },
      vision: {
        title: 'Our Vision',
        description: 'To be recognized as the leading educational institution in Colombia for our international academic excellence, integral formation, and contribution to the development of global citizens committed to building a more just and sustainable society.',
      },
      values: [
        {
          title: 'Excellence',
          description: 'We seek the highest quality in all our educational and formative processes.',
        },
        {
          title: 'Integrity',
          description: 'We act with honesty, transparency, and coherence in all our actions.',
        },
        {
          title: 'Respect',
          description: 'We value diversity and promote an environment of tolerance and understanding.',
        },
        {
          title: 'Responsibility',
          description: 'We foster social and environmental commitment in our educational community.',
        },
        {
          title: 'Innovation',
          description: 'We adopt methodologies and technologies that enrich the learning process.',
        },
        {
          title: 'Leadership',
          description: 'We develop positive and transformative leadership skills in our students.',
        },
      ],
    },
    staff: {
      title: 'Our Leadership Team',
      subtitle: 'Leaders committed to educational excellence',
      directors: [
        {
          name: 'Dr. María Elena Rodríguez',
          position: 'General Principal',
          description: 'PhD in International Education, 20 years of experience in educational leadership. Specialist in Cambridge and IB curricula.',
          image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
          name: 'Mg. Carlos Andrés Martínez',
          position: 'Academic Coordinator',
          description: 'Master in Pedagogy, Cambridge IGCSE programs coordinator. Expert in STEAM methodologies.',
          image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
          name: 'Lic. Ana Patricia Gómez',
          position: 'Bilingual Coordinator',
          description: 'Bachelor in Modern Languages, Cambridge CELTA certified. 15 years developing bilingual programs.',
          image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
          name: 'Mg. Roberto Silva',
          position: 'Student Life Coordinator',
          description: 'Master in Educational Psychology, specialist in socio-emotional development and conflict resolution.',
          image: 'https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
      ],
    },
    programs: {
      title: 'Special Programs',
      subtitle: 'Educational experiences that make a difference',
      specialPrograms: [
        {
          title: 'STEAM Program',
          description: 'Integration of Science, Technology, Engineering, Arts, and Mathematics to develop 21st-century skills.',
          features: [
            'Robotics and programming laboratories',
            'Interdisciplinary projects',
            'Science and technology fairs',
            'National and international competitions',
          ],
        },
        {
          title: 'Student Leadership',
          description: 'Development of leadership, entrepreneurship, and social responsibility skills in our students.',
          features: [
            'Active student government',
            'Community service projects',
            'Youth leadership conferences',
            'International exchanges',
          ],
        },
        {
          title: 'Arts Program',
          description: 'Comprehensive training in visual arts, music, theater, and dance for creativity development.',
          features: [
            'Choirs and musical groups',
            'Theater and performing arts',
            'Visual and digital arts',
            'Festivals and presentations',
          ],
        },
        {
          title: 'Sports and Wellness',
          description: 'Promotion of physical activity, competitive sports, and integral wellness of our students.',
          features: [
            'Competitive sports teams',
            'Interscholastic tournaments',
            'Wellness and health programs',
            'Outdoor activities',
          ],
        },
      ],
    },
    activities: {
      title: 'Extracurricular Activities',
      subtitle: 'Integral development beyond the classroom',
      categories: [
        {
          title: 'Sports',
          description: 'Competitive and recreational sports training',
          activities: [
            'Soccer (male and female)',
            'Basketball',
            'Volleyball',
            'Swimming',
            'Tennis',
            'Track and Field',
            'Taekwondo',
            'Gymnastics',
          ],
        },
        {
          title: 'Arts and Culture',
          description: 'Artistic expression and cultural development',
          activities: [
            'Institutional choir',
            'Symphonic band',
            'Theater and drama',
            'Contemporary dance',
            'Visual arts',
            'Photography',
            'Film and video',
            'Creative writing',
          ],
        },
        {
          title: 'Science and Technology',
          description: 'Innovation and technological development',
          activities: [
            'Robotics club',
            'Programming and coding',
            'Math Olympics',
            'Science fair',
            'Astronomy',
            'Biotechnology',
            'Youth engineering',
            'Maker space',
          ],
        },
        {
          title: 'Leadership and Service',
          description: 'Leadership training and social responsibility',
          activities: [
            'Student government',
            'Community service',
            'Model United Nations',
            'Debate and public speaking',
            'Youth entrepreneurship',
            'Ecology and sustainability',
            'Volunteering',
            'Student leadership',
          ],
        },
      ],
    },
    gallery: {
      title: 'Gallery',
      subtitle: 'Moments that define our community',
      categories: [
        {
          title: 'Facilities',
          images: [
            {
              url: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800',
              caption: 'Main campus with modern architecture',
            },
            {
              url: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800',
              caption: 'Library with digital resources',
            },
            {
              url: 'https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=800',
              caption: 'Equipped science laboratories',
            },
          ],
        },
        {
          title: 'Student Life',
          images: [
            {
              url: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800',
              caption: 'Students in science class',
            },
            {
              url: 'https://images.pexels.com/photos/8471691/pexels-photo-8471691.jpeg?auto=compress&cs=tinysrgb&w=800',
              caption: 'Collaborative work on projects',
            },
            {
              url: 'https://images.pexels.com/photos/8471929/pexels-photo-8471929.jpeg?auto=compress&cs=tinysrgb&w=800',
              caption: 'Student presentations',
            },
          ],
        },
        {
          title: 'Events',
          images: [
            {
              url: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
              caption: 'Graduation ceremony 2024',
            },
            {
              url: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=800',
              caption: 'Annual cultural festival',
            },
            {
              url: 'https://images.pexels.com/photos/1181535/pexels-photo-1181535.jpeg?auto=compress&cs=tinysrgb&w=800',
              caption: 'Sports competitions',
            },
          ],
        },
      ],
    },
  },
};