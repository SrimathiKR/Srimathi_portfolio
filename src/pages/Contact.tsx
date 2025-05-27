import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { MapPin, Mail, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <SectionHeading 
          title="Contact Me" 
          subtitle="Get in touch for opportunities or just to say hi! " 
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            <p className="text-dark-300 mb-8">
              I'm currently looking for new opportunities. Whether you have a question, please contact me on the following handles!
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-dark-800 rounded-lg mr-4">
                  <MapPin className="text-primary-400" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Location</h4>
                  <p className="text-dark-300">Bangalore, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-dark-800 rounded-lg mr-4">
                  <Mail className="text-primary-400" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <a 
                    href="mailto:krsrimathi7@gmail.com" 
                    className="text-dark-300 hover:text-primary-400 transition-colors"
                  >
                    krsrimathi7@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-dark-800 rounded-lg mr-4">
                  <Linkedin className="text-primary-400" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/srimathikr/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-dark-300 hover:text-primary-400 transition-colors"
                  >
                    https://www.linkedin.com/in/srimathikr/
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card p-6 md:p-8 animate-fade-in">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
