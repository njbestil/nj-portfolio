import type { Project } from '../types/portfolio'
import ampSmartPosPreview from '../assets/images/amp-smart-pos-case-study.jpg'
import bedtimeStoryAppHomePreview from '../assets/images/bedtime-story-app-home.png'
import gym2GoPreview from '../assets/images/gym2go-case-study.png'
import almezanLawPreview from '../assets/images/almezan-law-case-study.png'
import ruralBankLoanManagementPreview from '../assets/images/rural-bank-loan-management-case-study.png'
import stcSupplierPortalPreview from '../assets/images/stc-supplier-portal-case-study.png'
export const projects: Project[] = [
  {
    id: 'aiagent',
    title: 'AI Bedtime Story App',
    type: 'AI · Story Generation',
    category: 'AI',
    year: '2026–Present',
    description:
      'An in-progress mobile-first bedtime-story app for discovering, generating, and reading personalized AI stories.',
    stack: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Express', 'PostgreSQL', 'OpenAI API'],
    role: 'Personal Project · Full-Stack Developer',
    challenge:
      'Create a safe, engaging story-generation flow that stays usable through validation, generation, saving, and reading-progress states.',
    color: '#f59e0b',
    caseStudy: {
      headerPhoto: bedtimeStoryAppHomePreview,
      headerGradient: 'linear-gradient(135deg, #083b62 0%, #0d1b2e 45%, #0b5a82 100%)',
      sourceUrl: 'https://github.com/njbestil/bedtime-story-app',
      tag: 'AI · PERSONAL PROJECT',
      overview:
        'An in-progress personal project that reimagines bedtime storytelling as a mobile-first pirate-themed experience. Users can discover saved stories, describe a new story, generate it with AI, and read it in a paginated story reader.',
      problem:
        'Creating personalized stories should feel simple and enjoyable, but AI generation also needs thoughtful validation, safe failure handling, and a reading experience that does not lose a user’s place.',
      myRole:
        'Designed the product architecture and UI flow, built the React and Vite frontend foundation, and am developing the server-side OpenAI, Express, and PostgreSQL layers.',
      architectureSteps: [
        'React & Vite UI',
        'Story Generator',
        'Express API (In Progress)',
        'OpenAI Responses API (In Progress)',
        'Output Validation',
        'PostgreSQL (In Progress)',
      ],
      solution:
        'Structured the product around loading, story library, story generator, and story reader flows, with explicit loading, empty, validation, failure, retry, and disabled states. The in-progress backend keeps prompts, API credentials, provider responses, and output validation out of the browser.',
      result:
        'Established the user experience and technical foundation for an AI-powered story product, with backend generation and persistence in active development.',
    },
  },
  {
    id: 'payflow',
    title: 'AMP Smart POS & Payment Integrations',
    type: 'FinTech · POS Payments',
    category: 'Product',
    year: '2024–2026',
    description:
      'Developed Android payment features and processor integrations for AMP in-person and self-service unattended payment solutions.',
    stack: ['Java', 'Android', 'SQLite', 'REST APIs', 'TCP Socket APIs', 'GPAY', 'TSYS', 'FDRC'],
    role: 'POS Developer',
    challenge:
      'Maintained dependable card acceptance and transaction recovery across attended and unattended Android terminal flows.',
    color: '#4b8ef0',
    caseStudy: {
      headerPhoto: ampSmartPosPreview,
      headerGradient: 'linear-gradient(135deg, #08263f 0%, #0d1b2e 45%, #102e46 100%)',
      tag: 'FINTECH · SMART POS',
      overview:
        'Contributed to Advanced Mobile Payment’s in-person and self-service unattended payment ecosystem, working on terminal application features and payment-processor integrations for Android payment devices.',
      problem:
        'Production POS systems can encounter inconsistent card acceptance, incomplete transaction flows, receipt-printing issues, and differences in device behavior or processor responses—all of which can disrupt checkout.',
      myRole:
        'Built Java and Android transaction flows and UI features; integrated GPAY, TSYS, and FDRC through REST and TCP socket APIs; implemented receipt printing, settlement, refund, reversal, and unattended payment behavior.',
      architectureSteps: [
        'Android POS App',
        'Payment Workflow',
        'REST/TCP Adapter',
        'GPAY · TSYS · FDRC',
        'Device Services',
        'SQLite',
      ],
      solution:
        'Implemented processor-specific communication and transaction-state handling while keeping merchant-facing POS workflows consistent across AMP 6500, AMP 8200, Sunmi P2, and Sunmi P3 terminals.',
      result:
        'Completed GPAY production deployment and certification and release work for GPAY, TSYS, and FDRC in 2026. Post-production fixes improved payment-flow stability, receipt handling, and card-acceptance reliability across supported attended and unattended terminals.',
    },
  },
  {
    id: 'ecommerce',
    title: 'Loan Management & Risk Analytics System',
    type: 'FinTech · Risk Analytics',
    category: 'Product',
    year: '2025',
    description:
      'A full-stack loan management system that streamlines applications, risk evaluation, approval workflows, and probability-based lending insights.',
    stack: ['React', 'Vite', 'Flowbite UI', 'Recharts', 'Laravel', 'MySQL', 'REST APIs', 'Probability & Statistics'],
    role: 'Freelance Full-Stack Developer',
    challenge:
      'Turn applicant, financial, and historical lending data into clear risk signals and decision-ready workflows.',
    color: '#22c55e',
    caseStudy: {
      headerPhoto: ruralBankLoanManagementPreview,
      headerGradient: 'linear-gradient(135deg, #061b3f 0%, #0d1b2e 45%, #102a58 100%)',
      tag: 'FINTECH · ANALYTICS',
      overview:
        'Developed for Rural Bank of Hindang, this full-stack loan management system streamlined application processing, applicant-risk evaluation, loan approval workflows, and probability-based lending analytics.',
      problem:
        'Lending teams need to process applications efficiently while assessing repayment capacity and default risk. Disconnected records and manual analysis make it harder to apply consistent approval decisions and understand portfolio performance.',
      myRole:
        'Designed and developed the React and Vite frontend, Laravel REST API, MySQL data layer, risk-evaluation workflows, dashboard visualizations, and reporting features.',
      architectureSteps: [
        'React & Vite UI',
        'Flowbite UI & Recharts',
        'Laravel REST API',
        'Risk Evaluation',
        'Statistical Analysis',
        'MySQL',
      ],
      solution:
        'Created modules for applicant management, loan processing, application-status tracking, approval and rejection decisions, risk scoring, repayment-probability analysis, and reporting. Charts and statistical insights make portfolio and lending trends easier to understand.',
      result:
        'Delivered a centralized system that supports more efficient loan processing, consistent risk evaluation, and data-informed lending decisions.',
    },
  },
  {
    id: 'oracle',
    title: 'Oracle Cloud Integration & Extensions Platform',
    type: 'Oracle Cloud · Enterprise Integration',
    category: 'Product',
    year: '2019–2023',
    description:
      'Delivered full-stack Oracle Cloud extensions and enterprise integrations across HCM, ERP, SCM, and CX.',
    stack: ['Angular', 'Oracle JET', 'Java', 'REST APIs', 'SOAP APIs', 'Oracle Integration Cloud', 'FBDI'],
    role: 'Oracle Cloud Technical Consultant',
    challenge:
      'Connected Oracle Cloud and external business systems while supporting client-specific interfaces, validations, approvals, and data exchanges.',
    color: '#a78bfa',
    caseStudy: {
      headerPhoto: stcSupplierPortalPreview,
      headerGradient: 'linear-gradient(135deg, #32005d 0%, #0d1b2e 50%, #250043 100%)',
      tag: 'ORACLE CLOUD · ENTERPRISE',
      overview:
        'At AppsPro, delivered full-stack applications and Oracle Cloud integrations across enterprise business domains, combining custom web interfaces, Java services, API integrations, Oracle Integration Cloud workflows, and automated data processes.',
      problem:
        'Enterprise clients needed tailored workflows beyond standard Oracle SaaS configuration while keeping data aligned between Oracle Cloud, external systems, and end-user portals.',
      myRole:
        'Built interfaces with Angular and Oracle JET; developed Java REST services; implemented REST and SOAP integrations; and configured Oracle Integration Cloud workflows for real-time validation, FBDI transfers, scheduled synchronization, approvals, notifications, and status tracking.',
      architectureSteps: [
        'Angular & Oracle JET',
        'Java REST Services',
        'Oracle Integration Cloud',
        'Oracle HCM · ERP · SCM · CX',
        'REST · SOAP · FBDI',
        'Approvals & Notifications',
      ],
      solution:
        'Delivered reusable, API-driven integration patterns and full-stack extensions that transformed and routed data while supporting client-specific business processes. A highlighted example is the STC Supplier Registration Portal, built from scratch to support SCM supplier onboarding with real-time validation, approval automation, notifications, data synchronization, and end-to-end status tracking.',
      result:
        'Enabled connected, maintainable enterprise workflows across multiple Oracle Cloud projects, reducing manual handoffs and improving business-process status visibility.',
    },
  },
  {
    id: 'gym2go',
    title: 'Instructor & Tutor Booking Platforms',
    type: 'Health & Education · Marketplace',
    category: 'Web',
    year: '2018–2019',
    description:
      'Cross-platform marketplaces for Gym2Go fitness instructors and TUTHIVE tutors, with provider profiles, booking, messaging, and Stripe payments.',
    stack: ['Laravel', 'REST APIs', 'React', 'Mobile App', 'Booking System', 'Messaging', 'Stripe'],
    role: 'Full-Stack Developer',
    challenge:
      'Coordinate provider discovery, profile management, bookings, payments, and direct client communication across fitness and tutoring services.',
    color: '#f472b6',
    caseStudy: {
      headerPhoto: gym2GoPreview,
      headerGradient: 'linear-gradient(135deg, #3b0a28 0%, #0d1b2e 45%, #311429 100%)',
      tag: 'BOOKING · SERVICE MARKETPLACES',
      overview:
        'Built cross-platform booking solutions for Gym2Go and TUTHIVE. Gym2Go connected certified fitness instructors with students seeking home or gym training, while TUTHIVE connected learners with tutors for booked sessions.',
      problem:
        'Clients need an easy way to find suitable service providers and book sessions, while instructors and tutors need a professional space to present their skills, manage profiles, receive bookings, and communicate with clients.',
      myRole:
        'Developed the Laravel REST APIs, React web interface, and mobile-app experience for Gym2Go and TUTHIVE; implemented provider registration, detailed profiles, session booking, messaging, Stripe payments, and tailored service-selection flows for fitness training and tutoring.',
      architectureSteps: [
        'React Web App',
        'Mobile Interface',
        'Laravel REST APIs',
        'Provider Profiles',
        'Booking & Messaging',
        'Database',
      ],
      solution:
        'Created marketplace workflows where providers manage profiles while clients browse suitable instructors or tutors, evaluate skills, book and pay through Stripe, and communicate directly. Gym2Go supports home or gym training selection, while TUTHIVE supports tutor-session booking.',
      result:
        'Delivered reusable cross-platform marketplace foundations for fitness-instructor discovery, tutor discovery, personalized session bookings, and direct client–provider coordination.',
    },
  },
  {
    id: 'almezan',
    title: 'AlMezan — Legal Consultation Marketplace',
    type: 'LegalTech · Case Bidding Platform',
    category: 'Product',
    year: '2019',
    description:
      'A legal-services platform where clients post cases, lawyers bid or decline, and selected lawyers are notified to schedule consultations.',
    stack: ['Laravel', 'REST APIs', 'React', 'Mobile App', 'Booking System', 'Messaging'],
    role: 'Full-Stack Developer',
    challenge:
      'Turn legal consultation intake into a transparent workflow that lets clients compare lawyer responses and select the right counsel.',
    color: '#60a5fa',
    caseStudy: {
      headerPhoto: almezanLawPreview,
      headerGradient: 'linear-gradient(135deg, #071f3b 0%, #0d1b2e 45%, #102f55 100%)',
      tag: 'LEGALTECH · MARKETPLACE',
      overview:
        'Built a legal consultation platform for AlMezan that extended the firm’s client-service model with a structured digital case-posting and lawyer-selection workflow.',
      problem:
        'Clients need a clear way to submit legal needs and choose appropriate counsel, while lawyers need a controlled process for evaluating cases and responding with bids.',
      myRole:
        'Designed and developed the client case-submission, lawyer-response, bid-selection, notification, meeting-scheduling, and messaging workflows across the Laravel, React, and mobile application stack.',
      architectureSteps: [
        'React Web App',
        'Mobile Interface',
        'Laravel REST APIs',
        'Case Distribution',
        'Lawyer Bids',
        'Selection & Scheduling',
      ],
      solution:
        'Implemented a reverse-marketplace model: clients post a case, multiple lawyers can bid or decline, the client chooses the preferred bid, and the platform notifies the selected lawyer before scheduling a meeting.',
      result:
        'Delivered a structured consultation-intake foundation that supports transparent lawyer selection, clearer case progression, and coordinated follow-up.',
    },
  },
]
