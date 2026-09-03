import { socialLinks } from '../../data/profile'
import { IconLink } from './IconLink'
export function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-1">
      {socialLinks.map(({ label, href }) => (
        <IconLink
          key={label}
          href={href}
          target={label === 'Email' ? undefined : '_blank'}
          rel={label === 'Email' ? undefined : 'noreferrer'}
        >
          {label} ↗
        </IconLink>
      ))}
    </div>
  )
}
