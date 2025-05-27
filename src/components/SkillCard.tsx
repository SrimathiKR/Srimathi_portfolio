import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Skill } from '../types';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  // Dynamically get the icon component from lucide-react
  const IconComponent = (LucideIcons as Record<string, React.ComponentType<any>>)[
    skill.icon.charAt(0).toUpperCase() + skill.icon.slice(1)
  ] || LucideIcons.Code;

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'frontend':
        return 'from-primary-500/20 to-primary-600/20 border-primary-500/30';
      case 'backend':
        return 'from-secondary-500/20 to-secondary-600/20 border-secondary-500/30';
      case 'tools':
        return 'from-accent-500/20 to-accent-600/20 border-accent-500/30';
      case 'other':
        return 'from-success-500/20 to-success-600/20 border-success-500/30';
      default:
        return 'from-dark-700/20 to-dark-800/20 border-dark-700/30';
    }
  };

  const getIconColor = (category: string) => {
    switch (category) {
      case 'frontend':
        return 'text-primary-400';
      case 'backend':
        return 'text-secondary-400';
      case 'tools':
        return 'text-accent-400';
      case 'other':
        return 'text-success-400';
      default:
        return 'text-white';
    }
  };

  return (
    <div 
      className={`p-6 rounded-xl border bg-gradient-to-br transition-transform duration-300 hover:scale-105 ${getCategoryColor(skill.category)}`}
    >
      <div className="flex flex-col items-center">
        <div className={`p-3 rounded-full bg-dark-800 mb-4 ${getIconColor(skill.category)}`}>
          <IconComponent size={24} />
        </div>
        <h3 className="text-lg font-medium text-white">{skill.name}</h3>
      </div>
    </div>
  );
};

export default SkillCard;