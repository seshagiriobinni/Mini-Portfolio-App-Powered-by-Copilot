import React from 'react';

/**
 * Project - describes a portfolio project entry
 * @property id - unique identifier
 * @property title - project name
 * @property description - short summary
 * @property url - link to project/demo
 */
type Project = {
  id: number;
  title: string;
  description: string;
  url: string;
};

// Load projects from local JSON file
import projectsData from '../projects.json';

/**
 * ProjectGallery - displays a list of projects loaded from a JSON file
 * Each project shows its title, description, and a link to view more
 */
export default function ProjectGallery() {
  // Cast imported data to Project[]
  const projects = projectsData as Project[];

  return (
    <section className="project-gallery">
      <h2>Project Gallery</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">View Project</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
