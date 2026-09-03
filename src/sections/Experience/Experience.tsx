import { Section } from '../../components/layout/Section'
import { SectionHeading } from '../../components/layout/SectionHeading'
import { experiences } from '../../data/experience'
import { ExperienceItem } from './ExperienceItem'
export function Experience() {
  return (
    <Section
      id="experience"
      labelledBy="experience-heading"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          id="experience-heading"
          eyebrow="03 — Experience"
          title="Career Timeline"
          description="Full-stack engineering experience spanning payment platforms, enterprise integration, SaaS, and e-commerce systems."
        />
        <div className="relative space-y-10 before:absolute before:bottom-0 before:left-6 before:top-0 before:w-px before:bg-gradient-to-b before:from-[#4b8ef0] before:via-[#2dd4f7] before:to-transparent">
          {experiences.map((experience) => (
            <ExperienceItem
              key={experience.period}
              {...experience}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}
