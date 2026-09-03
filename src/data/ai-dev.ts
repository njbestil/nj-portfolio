export const aiPipeline = [
  {
    num: '01',
    title: 'Plan',
    color: '#4b8ef0',
    description: 'Requirements breakdown, scope definition, acceptance criteria',
    assistance: 'Clarify requirements, identify gaps, draft user stories',
  },
  {
    num: '02',
    title: 'Architecture',
    color: '#4b8ef0',
    description: 'System design, API contracts, and database schema',
    assistance: 'Explore patterns, review decisions, compare approaches',
  },
  {
    num: '03',
    title: 'Implementation',
    color: '#4b8ef0',
    description: 'Frontend, backend, API integration, and database work',
    assistance: 'Autocomplete, boilerplate, and implementation suggestions',
  },
  {
    num: '04',
    title: 'AI Debugging',
    color: '#f59e0b',
    description: 'Root-cause analysis and edge-case discovery',
    assistance: 'Explain errors, suggest fixes, identify hidden cases',
  },
  {
    num: '05',
    title: 'Code Review',
    color: '#4b8ef0',
    description: 'Logic, security, performance, and documentation review',
    assistance: 'Flag risks and suggest focused improvements',
  },
  {
    num: '06',
    title: 'Testing',
    color: '#4b8ef0',
    description: 'Unit, integration, and regression testing',
    assistance: 'Generate cases, edge conditions, and mock factories',
  },
  {
    num: '07',
    title: 'Git / GitHub',
    color: '#4b8ef0',
    description: 'Commit structure, PR descriptions, and changelogs',
    assistance: 'Draft clear commit and review summaries',
  },
  {
    num: '08',
    title: 'Deployment',
    color: '#4b8ef0',
    description: 'CI/CD, Docker builds, configuration, and monitoring',
    assistance: 'Review pipelines and flag environment issues',
  },
]
export const aiTools = [
  {
    name: 'GitHub Copilot',
    description: 'In-editor autocomplete and code suggestions',
    color: '#22d355',
  },
  {
    name: 'ChatGPT / OpenAI',
    description: 'Architecture review, problem-solving, documentation',
    color: '#22d355',
  },
  {
    name: 'Claude / Codex',
    description: 'Code review, debugging analysis, test generation',
    color: '#f59e0b',
  },
  {
    name: 'VS Code',
    description: 'Primary development environment with AI extensions',
    color: '#4b8ef0',
  },
]
export const humanOversight = [
  'Final architecture decisions',
  'Security and vulnerability review',
  'Data model validation',
  'Production deployment approval',
  'Code quality sign-off',
  'Business logic verification',
]
export const workflowSteps = [
  'Requirements',
  'Architecture',
  'Frontend',
  'Backend',
  'API / DB',
  'Testing',
  'Code Review',
  'GitHub',
  'Deployment',
  'Production',
]
