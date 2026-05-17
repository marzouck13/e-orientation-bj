import { useState, useEffect } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarBJ from './components/NavbarBJ';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import ProcessSection from './components/ProcessSection';
import ScholarshipSection from './components/ScholarshipSection';
import UniversitiesSection from './components/UniversitiesSection';
import SimulateurPreview from './components/Simulateur';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import CtaSection from './components/CtaSection';
import SimulateurPage from './pages/SimulateurPage'; 
import { useScrollReveal } from './hooks/useScrollReveal';
import './Styles/index.css'; 
import Loader from './components/Loader';
import VideoSection from './components/VideoSection';

// Inclusion de la modale d'information sur les débouchés
import DebouchesModal from './components/DebouchesModal';

const HomePage = () => {
  useScrollReveal();
  return (
    <>
      <main className="container py-5 text-center">
        <Hero/>
      </main>
      <div className="reveal"><StatsSection/></div>
      <div className="reveal"><ProcessSection/></div>
      <div className="reveal"><ScholarshipSection/></div>
      <div className="reveal"><UniversitiesSection/></div>
      <div className="reveal"><VideoSection/></div>
      <div className="reveal"><SimulateurPreview/></div>
      <div className="reveal"><FaqSection/></div>
      <CtaSection/>
    </>
  );
};

function App() {
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 1990); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isAppLoading && <Loader />}

      <div className={`app-content ${!isAppLoading ? 'fade-in-visible' : 'hide-content'}`}>
        <Router>
          <div className="min-vh-100 bg-light">
            <NavbarBJ />
            
            {/* La modale se tient prête ici et s'affichera de manière autonome */}
            <DebouchesModal />
            
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/simulateur" element={<SimulateurPage />} />
            </Routes>

            <Footer />
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;