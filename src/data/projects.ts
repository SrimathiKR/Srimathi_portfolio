import { Project } from '../types';
import {fin} from './Finbot.png'
import {ai} from './AI Shirt.png'
import {keeper} from './Keeper App.png'
import {spoticone} from './Spoticlone.png'

export const projects: Project[] = [
  {
    id: 1,
    title: ' Spoticlone: A music Destination',
    description: 'A responsive music streaming full stack web application using the MERN stack.',
    image: {spoticone},
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS','JavaScript'],
    githubLink: 'https://github.com/SrimathiKR/Spoticlone-A-music-destination',
    demoLink: 'https://ecommerce-platform-demo.netlify.app',
  },
  {
    id: 2,
    title: 'Keeper App',
    description: 'A productivity app for managing tasks and tracking progress.',
    image: {keeper},
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubLink: 'https://github.com/SrimathiKR/Keeper-App',
    demoLink: 'https://task-management-app-demo.netlify.app',
  },
  {
    id: 3,
    title: ' FinBot: AI Financial News Research Tool',
    description: 'A URL-based AI financial content retrieving application.',
    image: {fin},
    techStack: ['LangChain', 'LLM', 'FAISS', 'Groq','OpenAI'],
    githubLink: 'https://github.com/SrimathiKR/FINBOT-News-Research-tool',
    demoLink: 'https://weather-dashboard-demo.netlify.app',
  },
  {
    id: 4,
    title: 'AI-Powered SQL Query Assistant',
    description: 'A GenAI tool that transforms natural language into SQL queries to retrieve a t-shirt stock databases of a garments(Lifestyle Garments).',
    image: {ai},
    techStack: ['Groq', 'OpenAI', 'Google Palm','Streamlit'],
    githubLink: 'https://github.com/SrimathiKR/AI-Powered-Database-Query-Assistant',
    demoLink: 'https://social-media-analytics-demo.netlify.app',
  }
];