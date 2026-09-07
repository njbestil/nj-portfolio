import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { FiArrowDown, FiArrowUp, FiExternalLink, FiGithub } from 'react-icons/fi'
import { Section } from '../../components/layout/Section'
import { SectionHeading } from '../../components/layout/SectionHeading'
import { projects } from '../../data/projects'
import type { Project } from '../../types/portfolio'
import { ProjectCard } from './ProjectCard'
export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [hasScrollableContent, setHasScrollableContent] = useState(false)
  const [isAtBottom, setIsAtBottom] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const pageScrollPositionRef = useRef({ left: 0, top: 0 })

  useLayoutEffect(() => {
    const dialog = dialogRef.current
    if (!activeProject || !dialog || dialog.open) return

    dialog.showModal()
    window.scrollTo(pageScrollPositionRef.current.left, pageScrollPositionRef.current.top)
    const animationFrame = requestAnimationFrame(() => {
      window.scrollTo(pageScrollPositionRef.current.left, pageScrollPositionRef.current.top)
    })

    return () => cancelAnimationFrame(animationFrame)
  }, [activeProject])

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer || !activeProject) return

    const updateScrollState = () => {
      const hasOverflow = scrollContainer.scrollHeight > scrollContainer.clientHeight + 1
      setHasScrollableContent(hasOverflow)
      setIsAtBottom(
        hasOverflow &&
          scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight - 8,
      )
    }

    const resizeObserver = new ResizeObserver(updateScrollState)
    resizeObserver.observe(scrollContainer)
    scrollContainer.addEventListener('scroll', updateScrollState, { passive: true })
    updateScrollState()

    return () => {
      resizeObserver.disconnect()
      scrollContainer.removeEventListener('scroll', updateScrollState)
    }
  }, [activeProject])

  const closeDialog = () => dialogRef.current?.close()
  const openCaseStudy = (project: Project) => {
    pageScrollPositionRef.current = { left: window.scrollX, top: window.scrollY }
    setActiveProject(project)
  }
  const scrollCaseStudy = () => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    if (isAtBottom) {
      scrollContainer.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    scrollContainer.scrollBy({ top: scrollContainer.clientHeight * 0.8, behavior: 'smooth' })
  }
  return (
    <>
      <Section
        id="projects"
        labelledBy="projects-heading"
      >
        <SectionHeading
          id="projects-heading"
          eyebrow="04 — Featured Projects"
          title="Selected Work"
          description="Production platforms, integrations, and AI-enabled applications built around real operational needs."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
              onView={() => openCaseStudy(project)}
            />
          ))}
        </div>
      </Section>
      <dialog
        ref={dialogRef}
        aria-labelledby="case-study-title"
        onClose={() => setActiveProject(null)}
        onClick={(event) => event.target === event.currentTarget && closeDialog()}
        className="animate__animated animate__zoomIn animate__faster modal-shell m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-2xl overflow-hidden rounded-2xl border border-[#162840] bg-[#0d1b2e] p-0 text-[#dce8f5] backdrop:bg-black/80 backdrop:backdrop-blur-sm"
      >
        {activeProject && (
          <div className="relative max-h-[calc(100dvh-2rem)]">
            <div
              ref={scrollContainerRef}
              className="max-h-[calc(100dvh-2rem)] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
            <div
              className="relative h-48 overflow-hidden sm:h-56"
              style={{ background: activeProject.caseStudy.headerGradient ?? '#0d1b2e' }}
            >
              {activeProject.caseStudy.headerPhoto && (
                <img
                  src={activeProject.caseStudy.headerPhoto}
                  alt={`${activeProject.title} interface preview`}
                  className="size-full object-cover"
                />
              )}
              {!activeProject.caseStudy.headerPhoto && (
                <>
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20"
                  />
                  <div className="absolute right-6 top-6 flex flex-col items-end gap-2 opacity-40">
                    {activeProject.caseStudy.architectureSteps.slice(0, 3).map((step) => (
                      <span
                        key={step}
                        className="rounded border px-2 py-0.5 font-mono text-xs"
                        style={{ borderColor: activeProject.color, color: activeProject.color }}
                      >
                        {step}
                      </span>
                    ))}
                  </div>
                </>
              )}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0d1b2e]/95"
              />
              <div className="absolute bottom-4 left-6 right-16">
                <p
                  className="font-mono text-xs font-semibold uppercase tracking-widest"
                  style={{ color: activeProject.color }}
                >
                  {activeProject.caseStudy.tag}
                </p>
                <h2
                  id="case-study-title"
                  className="mt-1 text-xl font-extrabold text-white sm:text-2xl"
                >
                  {activeProject.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={closeDialog}
                className="focus-ring absolute right-4 top-4 grid size-9 place-items-center rounded-full border border-white/15 bg-black/55 text-white transition hover:bg-white/15"
                aria-label="Close case study"
              >
                ×
              </button>
            </div>
            <div className="space-y-7 p-6 sm:p-8">
              <CaseStudyBlock
                label="Overview"
                color={activeProject.color}
              >
                <p className="text-sm font-medium leading-relaxed">
                  {activeProject.caseStudy.overview}
                </p>
              </CaseStudyBlock>
              <div className="grid gap-6 sm:grid-cols-2">
                <CaseStudyBlock
                  label="Problem"
                  color={activeProject.color}
                >
                  <p>{activeProject.caseStudy.problem}</p>
                </CaseStudyBlock>
                <CaseStudyBlock
                  label="My Role"
                  color={activeProject.color}
                >
                  <p>{activeProject.caseStudy.myRole}</p>
                </CaseStudyBlock>
              </div>
              <CaseStudyBlock
                label="Architecture"
                color={activeProject.color}
              >
                <div className="flex flex-wrap items-center gap-2">
                  {activeProject.caseStudy.architectureSteps.map((step, index) => (
                    <div
                      key={step}
                      className="flex items-center gap-2"
                    >
                      <span
                        className="rounded-md border px-3 py-1.5 font-mono text-xs text-[#dce8f5]"
                        style={{
                          borderColor: `${activeProject.color}30`,
                          backgroundColor: `${activeProject.color}10`,
                        }}
                      >
                        {step}
                      </span>
                      {index < activeProject.caseStudy.architectureSteps.length - 1 && (
                        <span aria-hidden="true">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </CaseStudyBlock>
              <div className="grid gap-6 sm:grid-cols-2">
                <CaseStudyBlock
                  label="Key Challenge"
                  color="#f59e0b"
                >
                  <p>{activeProject.challenge}</p>
                </CaseStudyBlock>
                <CaseStudyBlock
                  label="Solution"
                  color={activeProject.color}
                >
                  <p>{activeProject.caseStudy.solution}</p>
                </CaseStudyBlock>
              </div>
              <div
                className="rounded-xl border p-5"
                style={{
                  borderColor: `${activeProject.color}30`,
                  backgroundColor: `${activeProject.color}0d`,
                }}
              >
                <CaseStudyBlock
                  label="Result"
                  color={activeProject.color}
                >
                  <p className="font-semibold text-[#dce8f5]">{activeProject.caseStudy.result}</p>
                </CaseStudyBlock>
              </div>
              {activeProject.caseStudy.sourceUrl && (
                <CaseStudyBlock
                  label="Source Code"
                  color={activeProject.color}
                >
                  <a
                    href={activeProject.caseStudy.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-describedby="external-link-hint"
                    className="focus-ring inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-semibold text-[#dce8f5] transition hover:bg-white/[.06]"
                    style={{ borderColor: `${activeProject.color}55` }}
                  >
                    <FiGithub aria-hidden="true" />
                    View source on GitHub
                    <FiExternalLink aria-hidden="true" className="size-3.5" />
                  </a>
                  <span
                    id="external-link-hint"
                    className="sr-only"
                  >
                    Opens in a new tab
                  </span>
                </CaseStudyBlock>
              )}
              <CaseStudyBlock
                label="Technologies"
                color={activeProject.color}
              >
                <div className="flex flex-wrap gap-2">
                  {activeProject.stack.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-[#162840] bg-white/[.04] px-3 py-1.5 font-mono text-xs"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </CaseStudyBlock>
            </div>
            </div>
            {hasScrollableContent && (
              <button
                type="button"
                onClick={scrollCaseStudy}
                className="focus-ring absolute bottom-4 right-4 z-10 grid size-11 place-items-center rounded-full border border-[#2dd4f7]/40 bg-[#07111f]/90 text-[#2dd4f7] shadow-lg shadow-black/30 backdrop-blur transition hover:bg-[#0d2945]"
                aria-label={isAtBottom ? 'Scroll case study to top' : 'Scroll case study down'}
              >
                {isAtBottom ? <FiArrowUp aria-hidden="true" /> : <FiArrowDown aria-hidden="true" />}
              </button>
            )}
          </div>
        )}
      </dialog>
    </>
  )
}

function CaseStudyBlock({
  label,
  color,
  children,
}: {
  label: string
  color: string
  children: React.ReactNode
}) {
  return (
    <div className="text-sm leading-relaxed text-[#6a85a0]">
      <h3
        className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider"
        style={{ color }}
      >
        {label}
      </h3>
      {children}
    </div>
  )
}
