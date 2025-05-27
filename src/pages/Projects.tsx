import React, { useEffect, useRef } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';


const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectElements = projectsRef.current?.children;
            if (projectElements) {
              Array.from(projectElements).forEach((project, index) => {
                setTimeout(() => {
                  project.classList.add('animate-fade-in');
                  project.classList.remove('opacity-0');
                }, index * 200);
              });
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <section className="section">
      <div className="container-custom">
        <SectionHeading 
          title="My Projects" 
          subtitle="A showcase of my recent work and personal projects" 
          align="center"
        />

        <div 
          ref={projectsRef} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <div key={project.id} className="opacity-0 transition-opacity duration-700">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;