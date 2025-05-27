import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import SriImage from './Sri.png';
import Sripdf from './sriresume.pdf'

const Home: React.FC = () => {
  return (
    <section className="pt-32 md:pt-40 pb-16 md:pb-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <p className="text-primary-500 font-medium mb-4">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              K R Srimathi
            </h1>
            <h2 className="text-2xl md:text-3xl text-dark-300 mb-8">
              Software Engineer 
            </h2>
            <p className="text-dark-400 text-lg mb-8 max-w-lg">
              I’m a Software Engineer specialised in full stack with a passion for building scalable web applications and intelligent AI solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="https://github.com/SrimathiKR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-dark-800 text-dark-300 hover:text-primary-400 rounded-full transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/srimathikr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-dark-800 text-dark-300 hover:text-primary-400 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:krsrimathi7@gmail.com" 
                className="p-3 bg-dark-800 text-dark-300 hover:text-primary-400 rounded-full transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href={Sripdf} download>
                <Button variant="primary">
                  <Download size={18} />
                  Download Resume
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="outline">
                  Contact Me
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center animate-fade-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-600 shadow-xl shadow-primary-900/20">
              <img 
                src={SriImage}
                alt="Srimathi" 
                className="w-full h-full object-cover scale-150 object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;