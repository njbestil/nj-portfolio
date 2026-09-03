import type { Project } from '../types/portfolio'
import payflowPreview from '../assets/images/payflow-case-study.png'
export const projects: Project[] = [
  {
    id: 'payflow',
    title: 'PayFlow — Payment Platform',
    type: 'FinTech · POS',
    category: 'Product',
    year: '2025',
    description:
      'Production payment platform handling card-present and card-not-present transactions across multiple providers.',
    stack: ['React', 'TypeScript', 'Java', 'Laravel', 'PostgreSQL', 'Docker'],
    role: 'Lead Full-Stack Developer',
    challenge:
      'Unified multiple incompatible payment processor protocols behind a single merchant-facing API',
    color: '#4b8ef0',
    caseStudy: {
      headerPhoto: payflowPreview,
      tag: 'FINTECH',
      overview:
        'A production payment processing platform handling card-present and card-not-present transactions across multiple payment providers and terminal types.',
      problem:
        'The client needed one unified payment gateway that could communicate with REST and TCP socket processor APIs while maintaining a consistent merchant-facing interface.',
      myRole:
        'Designed the payment orchestration layer, implemented processor connections, built the React TypeScript terminal UI, and containerized the full stack.',
      architectureSteps: [
        'React Terminal UI',
        'Laravel API Gateway',
        'Java Transaction Engine',
        'Processor Adapters',
        'PostgreSQL',
        'Docker',
      ],
      solution:
        'Built provider-agnostic Java adapters behind a common interface while Laravel handled routing, retries, and stable merchant-facing responses.',
      result:
        'Reduced new-provider integration time from six weeks to under two and supported peak loads of 1,200 transactions per minute.',
    },
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce + CMS Platform',
    type: 'E-Commerce · CMS',
    category: 'Web',
    year: '2024',
    description:
      'Multi-tenant React and Laravel platform with a plugin-based CMS engine and integrated Stripe checkout.',
    stack: ['React', 'Laravel', 'PHP', 'PostgreSQL', 'Stripe'],
    role: 'Full-Stack Developer',
    challenge:
      'Built a content-block system flexible enough to serve eight client structures without touching code per client',
    color: '#2dd4f7',
    caseStudy: {
      headerGradient: 'linear-gradient(135deg, #0d2a3a 0%, #0d1b2e 45%, #102030 100%)',
      tag: 'E-COMMERCE',
      overview:
        'A multi-tenant React and Laravel platform combining a storefront with a self-service CMS for products, pages, and promotions.',
      problem:
        'Client teams needed to own storefront content without recurring developer support, while rigid off-the-shelf systems could not fit their different content structures.',
      myRole:
        'Designed the React SPA, Laravel API, plugin-based CMS engine, payment integration, and cloud asset workflow.',
      architectureSteps: [
        'React SPA',
        'Laravel REST API',
        'CMS Block Engine',
        'PostgreSQL',
        'Stripe',
        'AWS S3',
      ],
      solution:
        'Implemented reusable content blocks, each pairing a React renderer with a Laravel model and admin form so new blocks could be added independently.',
      result:
        'Reduced routine content updates from more than two hours to under ten minutes across eight client businesses.',
    },
  },
  {
    id: 'aiagent',
    title: 'AI Agent Application',
    type: 'AI · Automation',
    category: 'AI',
    year: '2025',
    description:
      'Prompt-driven workflow builder for validated, structured multi-step AI pipelines.',
    stack: ['React', 'Node.js', 'OpenAI API', 'PostgreSQL', 'Docker'],
    role: 'Full-Stack Developer',
    challenge:
      'Enforced structured output contracts across chained AI calls using schema validation and auto-retry',
    color: '#f59e0b',
    caseStudy: {
      headerGradient: 'linear-gradient(135deg, #2a1a00 0%, #0d1b2e 45%, #1a1200 100%)',
      tag: 'AI · AUTOMATION',
      overview:
        'A prompt-driven workflow builder for repeatable research, summarisation, classification, and extraction tasks.',
      problem:
        'Business users had no reliable way to save, chain, validate, or audit recurring AI workflows.',
      myRole:
        'Designed the orchestration architecture, React workflow builder, Node.js API, structured-output validation, and Docker environment.',
      architectureSteps: [
        'React Builder',
        'Node.js API',
        'OpenAI Orchestrator',
        'Schema Validator',
        'PostgreSQL',
        'Docker',
      ],
      solution:
        'Enforced JSON Schema contracts between agent steps, with automatic retry and clarification when a response failed validation.',
      result:
        'Achieved 94% structured-output consistency and reduced workflow setup from hours to under five minutes.',
    },
  },
  {
    id: 'oracle',
    title: 'Oracle Integration Platform',
    type: 'Enterprise · SaaS',
    category: 'Product',
    year: '2023',
    description:
      'Enterprise middleware connecting Oracle ERP modules through a unified Angular dashboard and REST-driven near real-time pipelines.',
    stack: ['Angular', 'TypeScript', 'Oracle IC', 'Java', 'REST API'],
    role: 'Integration Developer',
    challenge:
      'Normalised incompatible schemas across Oracle ERP modules into one canonical data model',
    color: '#a78bfa',
    caseStudy: {
      headerGradient: 'linear-gradient(135deg, #1a0d3a 0%, #0d1b2e 45%, #130d2e 100%)',
      tag: 'ENTERPRISE',
      overview:
        'Enterprise middleware connecting finance, inventory, and HR modules through an Angular dashboard and REST-driven pipelines.',
      problem:
        'Siloed ERP modules required manual exports and multi-day spreadsheet reconciliation for cross-system reporting.',
      myRole:
        'Designed the Oracle Integration Cloud workflows, Angular dashboard, REST transformation layer, and canonical reporting schema.',
      architectureSteps: [
        'Angular Dashboard',
        'REST API',
        'Oracle Integration Cloud',
        'ERP Connectors',
        'PostgreSQL',
      ],
      solution:
        'Normalized module payloads into a canonical schema and used queue-backed synchronization to respect payload and rate constraints.',
      result:
        'Reduced four-hour batch cycles to near real-time synchronization and shortened finance reporting from three days to same-day.',
    },
  },
]
