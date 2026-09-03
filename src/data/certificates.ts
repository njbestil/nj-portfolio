import type { Certificate } from '../types/portfolio'
export const certificates: Certificate[] = [
  {
    id: 'adv-react',
    title: 'Advanced React',
    issuer: 'Scrimba',
    issued: '13 Aug 2026',
    expiry: 'No expiry',
    details:
      'Advanced React patterns including context, compound components, render props, accessibility, routing, performance optimization, and TypeScript integration.',
    category: 'Frontend',
    color: '#4b8ef0',
  },
  {
    id: 'ts-fundamentals',
    title: 'TypeScript Fundamentals',
    issuer: 'Scrimba',
    issued: '01 Jun 2026',
    expiry: 'No expiry',
    details:
      'Core TypeScript concepts including static typing, interfaces, generics, utility types, type narrowing, and React and Node.js integration.',
    category: 'Frontend',
    color: '#2dd4f7',
  },
  {
    id: 'laravel-api',
    title: 'Laravel API Development',
    issuer: 'Laracasts',
    issued: '15 Mar 2026',
    expiry: 'No expiry',
    details:
      'RESTful API design with Laravel, Sanctum authentication, resource transformers, versioning, rate limiting, testing, and Docker development.',
    category: 'Backend',
    color: '#a78bfa',
  },
  {
    id: 'docker-fundamentals',
    title: 'Docker & Containers',
    issuer: 'Docker Inc.',
    issued: '20 Jan 2026',
    expiry: 'No expiry',
    details:
      'Container fundamentals, Dockerfiles, multi-stage builds, Compose orchestration, volumes, networking, and cloud deployment.',
    category: 'Infrastructure',
    color: '#34d399',
  },
  {
    id: 'openai-dev',
    title: 'OpenAI API & Agents',
    issuer: 'OpenAI',
    issued: '05 Jul 2026',
    expiry: 'No expiry',
    details:
      'Production AI applications using prompt engineering, function calling, structured outputs, agent orchestration, embeddings, and vector search.',
    category: 'AI Development',
    color: '#f59e0b',
  },
  {
    id: 'postgresql-advanced',
    title: 'Advanced PostgreSQL',
    issuer: 'Udemy',
    issued: '10 Nov 2025',
    expiry: 'No expiry',
    details:
      'Query optimization, indexing, window functions, CTEs, partitioning, full-text search, JSONB, and production performance tuning.',
    category: 'Database',
    color: '#fb7185',
  },
]
