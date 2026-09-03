import type { FormEvent } from 'react'
import { Section } from '../components/layout/Section'
import { profile, socialLinks } from '../data/profile'

const socialColors: Record<string, string> = {
  LinkedIn: '#4b8ef0',
  GitHub: '#a78bfa',
  Email: '#2dd4f7',
}

export function Contact() {
  const submit = (event: FormEvent<HTMLFormElement>) => event.preventDefault()
  return (
    <Section
      id="contact"
      labelledBy="contact-heading"
      className="overflow-hidden"
    >
      <div className="pointer-events-none absolute left-[-8rem] top-1/2 size-96 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(75,142,240,.12),transparent_70%)] blur-3xl" />
      <p className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[.18em] text-[#2dd4f7]">
        <span
          className="h-px w-5 bg-current"
          aria-hidden="true"
        />
        08 / Contact
      </p>
      <h2
        id="contact-heading"
        className="mt-3 text-3xl font-bold tracking-tight text-[#dce8f5] sm:text-4xl"
      >
        Let&apos;s Build Something
      </h2>
      <p className="mb-12 mt-4 max-w-2xl leading-7 text-[#6a85a0]">
        Looking for a Full-Stack Developer for your next web application, integration, SaaS
        platform, or AI-powered project?
      </p>
      <div className="grid gap-12 lg:grid-cols-2">
        <form
          className="flex flex-col gap-4"
          onSubmit={submit}
        >
          <div>
            <label
              htmlFor="contact-name"
              className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#6a85a0]"
            >
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder="Your name"
              className="focus-ring w-full rounded-lg border border-[#162840] bg-[#0d1b2e] px-4 py-3 text-sm text-[#dce8f5] placeholder:text-[#6a85a0]"
            />
          </div>
          <div>
            <label
              htmlFor="contact-email"
              className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#6a85a0]"
            >
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="your@email.com"
              className="focus-ring w-full rounded-lg border border-[#162840] bg-[#0d1b2e] px-4 py-3 text-sm text-[#dce8f5] placeholder:text-[#6a85a0]"
            />
          </div>
          <div>
            <label
              htmlFor="contact-message"
              className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#6a85a0]"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              required
              placeholder="Tell me about your project..."
              className="focus-ring w-full resize-none rounded-lg border border-[#162840] bg-[#0d1b2e] px-4 py-3 text-sm text-[#dce8f5] placeholder:text-[#6a85a0]"
            />
          </div>
          <button
            type="submit"
            className="focus-ring rounded-lg bg-[#4b8ef0] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#3a7ae0]"
          >
            Send Message
          </button>
        </form>
        <div className="flex flex-col justify-center gap-4">
          {socialLinks.map(({ label, href }) => {
            const color = socialColors[label] ?? '#4b8ef0'
            const icon = label === 'LinkedIn' ? 'in' : label === 'GitHub' ? 'gh' : '@'
            return (
              <a
                key={label}
                href={href}
                target={label === 'Email' ? undefined : '_blank'}
                rel={label === 'Email' ? undefined : 'noreferrer'}
                className="focus-ring flex items-center gap-4 rounded-xl border border-[#162840] bg-[#0d1b2e] p-4 text-[#dce8f5] transition hover:translate-x-1"
              >
                <span
                  className="grid size-10 shrink-0 place-items-center rounded-lg border font-mono text-sm font-bold"
                  style={{ backgroundColor: `${color}15`, borderColor: `${color}30`, color }}
                  aria-hidden="true"
                >
                  {icon}
                </span>
                <span className="font-medium">{label}</span>
                <span
                  className="ml-auto text-[#6a85a0]"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>
            )
          })}
          <div className="rounded-xl border border-[#162840] bg-[#0d1b2e] p-4">
            <p className="mb-1 font-mono text-xs text-[#6a85a0]">Location</p>
            <p className="font-medium text-[#dce8f5]">{profile.location}</p>
          </div>
        </div>
      </div>
    </Section>
  )
}
