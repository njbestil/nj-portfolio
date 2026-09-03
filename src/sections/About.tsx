import { Section } from '../components/layout/Section'
import { Card } from '../components/ui/Card'
const lifecycle = [
  'Requirements Analysis',
  'Architecture',
  'Frontend Development',
  'Backend Development',
  'API Integration',
  'Database Design',
  'Testing',
  'Deployment',
  'Production Support',
]
const domains = [
  'FinTech',
  'POS Payments',
  'SaaS',
  'Oracle ERP',
  'E-Commerce',
  'CMS',
  'AI Applications',
  'API Platforms',
]
export function About() {
  return (
    <Section
      id="about"
      labelledBy="about-heading"
    >
      <p className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[.18em] text-[#2dd4f7]">
        <span
          className="h-px w-5 bg-current"
          aria-hidden="true"
        />
        01 / About
      </p>
      <div className="mt-6 grid items-start gap-14 lg:grid-cols-2">
        <div className="space-y-6">
          <h2
            id="about-heading"
            className="text-4xl font-extrabold leading-tight tracking-tight text-[#dce8f5] sm:text-5xl"
          >
            End-to-end
            <br />
            <span className="bg-gradient-to-r from-[#4b8ef0] to-[#2dd4f7] bg-clip-text text-transparent">
              engineering
            </span>
          </h2>
          <p className="leading-7 text-[#dce8f5]">
            I work across the complete software development lifecycle — from translating business
            requirements into technical architecture, through to production deployment and ongoing
            support.
          </p>
          <p className="text-sm leading-7 text-[#6a85a0]">
            Over the past decade I have built payment processors, enterprise Oracle integrations,
            React and Angular SPA platforms, Laravel APIs, and AI-powered applications across
            FinTech, SaaS, e-commerce, and ERP domains.
          </p>
          <div className="flex flex-wrap gap-2">
            {lifecycle.map((item) => (
              <span
                key={item}
                className="rounded-md border border-[#4b8ef0]/20 bg-[#4b8ef0]/[.07] px-3 py-1.5 font-mono text-xs text-[#a0b8d0]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: '10+', label: 'Years Software Development', color: '#4b8ef0' },
              { stat: 'Full Stack', label: 'Frontend + Backend', color: '#2dd4f7' },
              { stat: 'Enterprise', label: 'FinTech · SaaS · ERP', color: '#a78bfa' },
              { stat: 'AI Assisted', label: 'Modern Dev Workflow', color: '#f59e0b' },
            ].map(({ stat, label, color }) => (
              <Card
                key={stat}
                className="p-5 transition hover:-translate-y-0.5"
                style={{ borderColor: `${color}55` }}
              >
                <p
                  className="text-xl font-extrabold"
                  style={{ color }}
                >
                  {stat}
                </p>
                <p className="mt-1 font-mono text-xs leading-snug text-[#6a85a0]">{label}</p>
              </Card>
            ))}
          </div>
          <Card className="p-5">
            <p className="font-mono text-xs text-[#2dd4f7]">// Domains served</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {domains.map((domain) => (
                <span
                  key={domain}
                  className="rounded-full border border-[#4b8ef0]/20 bg-[#4b8ef0]/[.06] px-3 py-1.5 text-xs text-[#dce8f5]"
                >
                  {domain}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </Section>
  )
}
