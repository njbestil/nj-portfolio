import type { SkillGroup } from '../types/portfolio'
export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    color: '#4b8ef0',
    skills: [
      'React',
      'Angular',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Responsive UI',
    ],
  },
  {
    title: 'Backend',
    color: '#2dd4f7',
    skills: ['Laravel', 'PHP', 'Java', 'Express.js', 'Node.js', 'REST API', 'SOAP', 'TCP Socket'],
  },
  {
    title: 'Database & Infra',
    color: '#a78bfa',
    skills: ['PostgreSQL', 'Oracle DB', 'Docker', 'Git', 'GitHub', 'CI/CD', 'Deployment'],
  },
  {
    title: 'Engineering',
    color: '#34d399',
    skills: [
      'Software Architecture',
      'MVC',
      'OOP',
      'API Design',
      'System Integration',
      'Unit Testing',
      'Code Review',
    ],
  },
  {
    title: 'AI Development',
    color: '#f59e0b',
    skills: ['OpenAI APIs', 'AI Agents', 'Prompt Engineering', 'GitHub Copilot', 'AI-Assisted Dev'],
  },
]
