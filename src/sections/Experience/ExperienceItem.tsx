import { Badge } from '../../components/ui/Badge'
import { Card } from '../../components/ui/Card'
import { useAnimateOnVisible } from '../../hooks/useAnimateOnVisible'
import { clsx } from '../../lib/cn'
import type { Experience as ExperienceType } from '../../types/portfolio'

export function ExperienceItem({
  period,
  role,
  company,
  summary,
  highlights,
  type,
  color,
}: ExperienceType) {
  const [animateRef, animateClassName] = useAnimateOnVisible<HTMLElement>('fadeInLeft')

  return (
    <article
      ref={animateRef}
      className={clsx('relative pl-16', animateClassName)}
    >
      <span
        className="absolute left-4 top-7 size-4 -translate-x-1/2 rounded-full border-[3px] border-[#07111f]"
        style={{ backgroundColor: color, boxShadow: `0 0 0 2px ${color}44` }}
      />
      <Card
        className="transition hover:-translate-y-0.5"
        style={{ borderColor: `${color}55` }}
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-bold text-[#dce8f5]">{role}</h3>
            <p
              className="mt-0.5 text-sm font-medium"
              style={{ color }}
            >
              {company}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span
              className="rounded-md px-2.5 py-1 font-mono text-xs"
              style={{ backgroundColor: `${color}15`, color }}
            >
              {period}
            </span>
            <span className="font-mono text-xs text-[#6a85a0]">{type}</span>
          </div>
        </div>
        <p className="mt-4 leading-7 text-[#a0b8d0]">{summary}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {highlights.map((highlight) => (
            <Badge key={highlight}>{highlight}</Badge>
          ))}
        </div>
      </Card>
    </article>
  )
}
