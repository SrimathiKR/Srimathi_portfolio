import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 py-12 border-t border-dark-800">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-white mb-2">Portfolio</h3>
            <p className="text-dark-400 max-w-md">
              Transforming Ideas into Impactful Web & AI Experiences
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/SrimathiKR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-dark-400 hover:text-primary-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/srimathikr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-dark-400 hover:text-primary-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:krsrimathi7@gmail.com" 
                className="text-dark-400 hover:text-primary-400 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
            <p className="text-dark-500 text-sm">
              &copy; {currentYear} K R Srimathi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;