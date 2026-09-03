import { Section } from '../../components/layout/Section'
import { SectionHeading } from '../../components/layout/SectionHeading'
import { skillGroups } from '../../data/skills'
import { SkillGroup } from './SkillGroup'
export function Skills() {
  return (
    <Section
      id="skills"
      labelledBy="skills-heading"
    >
      <SectionHeading
        id="skills-heading"
        eyebrow="02 — Skills"
        title="Technology Stack"
        description="Structured engineering skills across frontend, backend, infrastructure, and AI-assisted development."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <SkillGroup
            key={group.title}
            {...group}
          />
        ))}
      </div>
    </Section>
  )
}
