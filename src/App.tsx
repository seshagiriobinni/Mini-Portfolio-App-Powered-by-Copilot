import React from 'react';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import ProjectGallery from './components/ProjectGallery';
import ContactForm from './components/ContactForm';
import './App.css';

// Main app layout with navigation and sections
export default function App() {
  const [section, setSection] = React.useState('about');

  return (
    <div className="portfolio-app">
      <Navigation current={section} onNavigate={setSection} />
      <main>
        {section === 'about' && <AboutMe />}
        {section === 'projects' && <ProjectGallery />}
        {section === 'contact' && <ContactForm />}
      </main>
    </div>
  );
}
