// App.tsx
import { useRouter } from './hooks/useRouter';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Academics from './components/Academics';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Router from './components/Router';
import Testimonials from './components/shared/Testimonials';
import News from './components/pages/News';
import TopHeader from './components/TopHeader';

function App() {
  const { currentPath } = useRouter();

  // Detectar si es una subpágina (no es la página principal)
  const isSubpage = currentPath !== '/' && currentPath !== '';

  return (
    <div className="min-h-screen">
      <TopHeader />
      <Header />
      <main>
        {isSubpage ? (
          <Router currentPath={currentPath} />
        ) : (
          <>
            <Hero />
            <About />
            <Academics />
            <News/>
            <Testimonials />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
