import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="card group h-full flex flex-col">
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-dark-300 mb-4 flex-grow">{project.description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-dark-400 mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-dark-700 text-dark-300 text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex gap-4 mt-auto pt-4 border-t border-dark-700">
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-primary-400 hover:text-primary-300 transition-colors"
          >
            <Github size={16} />
            <span>Code</span>
          </a>
          {/*
          <a 
            href={project.demoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-primary-400 hover:text-primary-300 transition-colors"
          >
            <ExternalLink size={16} />
            <span>Demo</span>
          </a> 
          */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;