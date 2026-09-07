export type SocialLink = { label: string; href: string }
export type SkillGroup = { title: string; skills: string[]; color: string }
export type Experience = {
  period: string
  role: string
  company: string
  summary: string
  highlights: string[]
  type: string
  color: string
}
export type Project = {
  id: string
  title: string
  type: string
  category: 'Web' | 'AI' | 'Product'
  description: string
  stack: string[]
  year: string
  role: string
  challenge: string
  color: string
  caseStudy: CaseStudy
}
export type CaseStudy = {
  headerPhoto?: string
  headerGradient?: string
  sourceUrl?: string
  tag: string
  overview: string
  problem: string
  myRole: string
  architectureSteps: string[]
  solution: string
  result: string
}
export type Certificate = {
  id: string
  title: string
  issuer: string
  completedAt: string
  issued: string
  expiry: string
  details: string
  category: string
  color: string
  pdfUrl: string
}
