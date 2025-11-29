import React from 'react';

// Navigation bar for switching sections
export default function Navigation({ current, onNavigate }: { current: string; onNavigate: (s: string) => void }) {
  return (
    <nav className="nav-bar">
      <button onClick={() => onNavigate('about')} className={current === 'about' ? 'active' : ''}>About Me</button>
      <button onClick={() => onNavigate('projects')} className={current === 'projects' ? 'active' : ''}>Projects</button>
      <button onClick={() => onNavigate('contact')} className={current === 'contact' ? 'active' : ''}>Contact</button>
    </nav>
  );
}
