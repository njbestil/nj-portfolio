import type { SocialLink } from '../types/portfolio'
export const profile = {
  initials: 'NJ',
  name: 'Neil Joseph Bestil',
  role: 'Full-Stack Developer',
  location: 'Available remotely · Worldwide',
  email: 'neil@example.com',
  intro:
    'Building reliable web applications, APIs, integrations, and scalable software solutions — across FinTech, SaaS, E-Commerce, and AI-assisted engineering.',
}
export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'Email', href: `mailto:${profile.email}` },
]
