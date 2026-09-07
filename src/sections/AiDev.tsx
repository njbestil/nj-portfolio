import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { SectionHeading } from '../components/layout/SectionHeading'
import { aiPipeline, aiTools, humanOversight, workflowSteps } from '../data/ai-dev'

export function AiDev() {
  return (
    <>
      <Section
        id="ai-dev"
        labelledBy="ai-dev-heading"
      >
        <SectionHeading
          id="ai-dev-heading"
          eyebrow="05 — AI Development"
          title="Building Software with AI-Assisted Engineering"
          description="AI tools are integrated into every stage of development to improve velocity and quality. Human engineering oversight remains responsible for architecture, security, and production readiness."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {aiPipeline.map(({ num, title, color, description, assistance }) => (
              <article
                key={num}
                className="flex flex-col gap-3 rounded-xl border border-[#162840] bg-[#0d1b2e] p-5 transition hover:border-[#f59e0b]/30"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="rounded-md border px-2 py-1 font-mono text-xs font-bold"
                    style={{ backgroundColor: `${color}18`, borderColor: `${color}35`, color }}
                  >
                    {num}
                  </span>
                  <h3 className="text-sm font-semibold text-[#dce8f5]">{title}</h3>
                </div>
                <p className="text-xs leading-relaxed text-[#6a85a0]">{description}</p>
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 rounded border border-[#f59e0b]/30 bg-[#f59e0b]/15 px-1.5 py-0.5 font-mono text-xs font-bold text-[#f59e0b]">
                    AI
                  </span>
                  <p className="text-xs leading-relaxed text-[#f59e0b]">{assistance}</p>
                </div>
              </article>
            ))}
          </div>
          <aside
            className="flex flex-col gap-4"
            aria-label="AI engineering details"
          >
            <div className="rounded-xl border border-[#162840] bg-[#0d1b2e] p-5">
              <h3 className="mb-4 text-sm font-bold text-[#dce8f5]">Tools Used</h3>
              <div className="space-y-3">
                {aiTools.map(({ name, description, color }) => (
                  <div
                    key={name}
                    className="flex items-start gap-3"
                  >
                    <span
                      className="mt-1 size-2 shrink-0 rounded-full"
                      style={{ backgroundColor: color, boxShadow: `0 0 5px ${color}` }}
                    />
                    <div>
                      <p className="text-sm font-semibold text-[#dce8f5]">{name}</p>
                      <p className="mt-0.5 text-xs text-[#6a85a0]">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-[#f59e0b]/25 bg-[#0d1b2e] p-5">
              <h3 className="mb-3 text-sm font-bold text-[#dce8f5]">
                <span
                  className="mr-2 text-[#f59e0b]"
                  aria-hidden="true"
                >
                  ◎
                </span>
                Human Oversight
              </h3>
              <p className="mb-4 text-xs leading-relaxed text-[#6a85a0]">
                AI assists — engineers decide. Critical technical choices remain
                developer-controlled.
              </p>
              <ul className="space-y-2">
                {humanOversight.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-xs text-[#dce8f5]"
                  >
                    <span
                      className="font-bold text-[#f59e0b]"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>
      <section
        aria-labelledby="workflow-heading"
        className="relative py-20 sm:py-24"
      >
        <Container>
          <p className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[.18em] text-[#2dd4f7]">
            <span
              className="h-px w-5 bg-current"
              aria-hidden="true"
            />
            07 / Development Workflow
          </p>
          <h2
            id="workflow-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-[#dce8f5] sm:text-4xl"
          >
            End-to-End Engineering
          </h2>
          <ol className="mt-12 flex flex-wrap items-center gap-y-3">
            {workflowSteps.map((step, index) => (
              <li
                key={step}
                className="flex items-center"
              >
                <span className="min-w-24 rounded-lg border border-[#162840] bg-[#0d1b2e] px-4 py-3 text-center text-xs font-semibold text-[#dce8f5] transition hover:border-[#4b8ef0]/50 hover:text-[#4b8ef0]">
                  {step}
                </span>
                {index < workflowSteps.length - 1 && (
                  <span
                    className="px-1.5 text-xs text-[#6a85a0]"
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  )
}
