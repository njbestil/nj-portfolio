import type { SocialLink } from '../types/portfolio'
export const profile = {
  initials: 'NJ',
  name: 'Neil Joseph Bestil',
  role: 'Full-Stack Developer',
  location: 'Available remotely · Worldwide',
  email: 'njbestil90@gmail.com',
  intro:
    'Building reliable web applications, APIs, integrations, and scalable software solutions — across FinTech, SaaS, E-Commerce, and AI-assisted engineering.',
}
export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/neil-joseph-bestil-b8a67822b/' },
  { label: 'GitHub', href: 'https://github.com/njbestil' },
  { label: 'Email', href: `mailto:${profile.email}` },
]
