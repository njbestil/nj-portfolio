import { Card } from '../../components/ui/Card'
import { Badge } from '../../components/ui/Badge'
import type { SkillGroup as SkillGroupType } from '../../types/portfolio'
export function SkillGroup({ title, skills, color }: SkillGroupType) {
  return (
    <Card
      className="transition duration-200 hover:-translate-y-0.5"
      style={{ borderColor: `${color}55` }}
    >
      <div className="mb-5 flex items-center gap-3">
        <span
          className="h-6 w-1 rounded-full"
          style={{ backgroundColor: color }}
        />
        <h3 className="text-sm font-semibold uppercase tracking-wide text-[#dce8f5]">{title}</h3>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </Card>
  )
}
