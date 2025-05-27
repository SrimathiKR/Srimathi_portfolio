import React, { useEffect, useRef } from 'react';
import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';
import { skills } from '../data/skills';
import {
  LucideIcon,
  Code,
  Server,
  Cloud,
  Wrench,
  Database,
  Sparkles,
  Terminal,
  BookOpen,
  Globe,
  LayoutDashboard,
  Sliders,
  Zap
} from 'lucide-react';

const Skills: React.FC = () => {
  const categoriesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    categoriesRef.current.forEach((category) => {
      if (category) observer.observe(category);
    });

    return () => {
      categoriesRef.current.forEach((category) => {
        if (category) observer.unobserve(category);
      });
    };
  }, []);

  const categories = [
    { label: 'Programming Languages', key: 'programming', color: 'blue-600', icon: Terminal },
    { label: 'Web Development', key: 'web', color: 'emerald-600', icon: Code },
    { label: 'DevOps & Cloud', key: 'cloud', color: 'indigo-600', icon: Cloud },
    { label: 'Tools & Technologies', key: 'tools', color: 'yellow-600', icon: Wrench },
    { label: 'AI & Machine Learning', key: 'ai', color: 'pink-600', icon: Sparkles },
    { label: 'Databases', key: 'database', color: 'green-600', icon: Database },
  ];

  return (
    <section className="section bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-20">
      <div className="container-custom">
        <SectionHeading 
          title="My Skills" 
          subtitle="Technologies and tools I work with" 
          align="center"
        />

        <div className="space-y-24">
          {categories.map((category, index) => {
            const filteredSkills = skills.filter(skill => skill.category === category.key);
            const IconComponent: LucideIcon = category.icon;
            return (
              <div
                key={category.key}
                ref={(el) => (categoriesRef.current[index] = el)}
                className="opacity-0 transition-opacity duration-700"
              >
                <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                  <span className={`inline-flex items-center justify-center w-12 h-12 bg-${category.color} text-white rounded-xl mr-4 shadow-xl`}>
                    <IconComponent size={24} />
                  </span>
                  {category.label}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {filteredSkills.map((skill) => (
                    <SkillCard key={skill.id} skill={skill} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
