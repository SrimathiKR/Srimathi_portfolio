import React, { useEffect, useRef } from 'react';
import SectionHeading from '../components/SectionHeading';

const About: React.FC = () => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <section className="section">
      <div className="container-custom">
        <SectionHeading 
          title="About Me" 
          subtitle="Learn more about my background and experience" 
          align="center"
        />

        <div 
          ref={(el) => (sectionsRef.current[0] = el)} 
          className="opacity-0 translate-y-10 transition-all duration-700 mb-12"
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6 text-dark-300">
              Hello! I'm <span className="text-primary-400 font-medium">K R Srimathi</span>, a passionate Software Engineer with a love for building responsive, user-centric web applications and intelligent AI-powered solutions. With a strong foundation in the MERN stack and proficiency in languages like Java, Python, JavaScript, and SQL, I enjoy creating seamless digital experiences that are both functional and visually engaging.
            </p>
            <p className="text-lg mb-6 text-dark-300">
              My journey into tech has been driven by curiosity and the thrill of solving complex problems. Beyond full-stack development, I’m deeply interested in the world of Artificial Intelligence and have hands-on experience working with GenAI tools, LangChain, and vector databases like FAISS.
            </p>
            <p className="text-lg text-dark-300">
              When I’m not coding, you’ll find me exploring new tech trends, polishing my DSA skills, or working on side projects that challenge me to learn and grow.

I'm currently seeking opportunities where I can contribute to impactful projects, collaborate with forward-thinking teams, and continue expanding my skills in both software engineering and AI development.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div 
            ref={(el) => (sectionsRef.current[1] = el)} 
            className="opacity-0 translate-y-10 transition-all duration-700 card p-6 md:p-8"
          >
            <h3 className="text-xl font-bold text-white mb-4">Education</h3>
            <ul className="space-y-4">
              <li>
                <div className="text-primary-400 font-medium">2024 - 2025</div>
                <div className="text-white font-medium">Specialization in Software Development </div>
                <div className="text-dark-400">Scaler</div>
              </li>
              <li>
                <div className="text-primary-400 font-medium">2021 - 2023</div>
                <div className="text-white font-medium">M.Tech. in Construction Engineering & Management</div>
                <div className="text-dark-400">SRM Institute of Science and Technology </div>
              </li>
              <li>
                <div className="text-primary-400 font-medium">2017-2021</div>
                <div className="text-white font-medium">B.Tech. in Civil Engineering</div>
                <div className="text-dark-400">Vellore Institute of Technology</div>
              </li>
            </ul>
          </div>

          <div 
            ref={(el) => (sectionsRef.current[2] = el)} 
            className="opacity-0 translate-y-10 transition-all duration-700 card p-6 md:p-8"
          >
            <h3 className="text-xl font-bold text-white mb-4">Experience</h3>
            <ul className="space-y-4">
              <li>
                <div className="text-primary-400 font-medium">2023 - 2025</div>
                <div className="text-white font-medium">Senior Engineer</div>
                <div className="text-dark-400">Larsen and Toubro</div>
              </li>
              
             
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;