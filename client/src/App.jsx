import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProfileCards from './Cards/ProfileCards';
import MyServices from './components/MyServices';
import Skills from './components/Skills';
import ProjectsSlider from './components/ProjectsSlider';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
      <Header />
      <main>
        <HeroSection />
        <ProfileCards />
        <MyServices />
        <Skills />
        <ProjectsSlider />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
