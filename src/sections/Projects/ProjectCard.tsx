import { Badge } from '../../components/ui/Badge'
import { useAnimateOnVisible } from '../../hooks/useAnimateOnVisible'
import { clsx } from '../../lib/cn'
import type { Project } from '../../types/portfolio'

export function ProjectCard({
  title,
  description,
  stack,
  year,
  role,
  challenge,
  color,
  type,
  onView,
}: Project & { onView: () => void }) {
  const [animateRef, animateClassName] = useAnimateOnVisible<HTMLElement>('fadeInUp')

  return (
    <article
      ref={animateRef}
      className={clsx(
        'group flex h-full flex-col overflow-hidden rounded-xl border border-[#162840] bg-[#0d1b2e] transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,.35)]',
        animateClassName,
      )}
      style={{ borderColor: `${color}55` }}
    >
      <div
        className="h-1.5 w-full"
        style={{ background: `linear-gradient(to right, ${color}, ${color}66)` }}
      />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-5">
          <p
            className="font-mono text-xs font-semibold uppercase tracking-widest"
            style={{ color }}
          >
            {type}
          </p>
          <p className="font-mono text-xs text-[#6a85a0]">{year}</p>
        </div>
        <h3 className="mt-4 text-lg font-bold text-[#dce8f5]">{title}</h3>
        <p className="mt-3 grow leading-7 text-[#a0b8d0]">{description}</p>
        <p
          className="mt-4 border-l-2 pl-3 text-sm text-[#6a85a0]"
          style={{ borderColor: color }}
        >
          <span className="font-semibold text-[#dce8f5]">{role}</span>
          <br />
          {challenge}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {stack.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={onView}
            className="focus-ring w-fit rounded-md px-4 py-2 text-xs font-semibold text-white transition hover:opacity-85"
            style={{ backgroundColor: color }}
          >
            View Case Study
          </button>
          <span className="text-xs text-[#6a85a0]">Role: {role}</span>
        </div>
      </div>
    </article>
  )
}
