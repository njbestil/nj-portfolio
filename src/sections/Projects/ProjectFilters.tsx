import { clsx } from '../../lib/cn'
const categories = ['All', 'Web', 'AI', 'Product'] as const
export type ProjectCategory = (typeof categories)[number]
export function ProjectFilters({
  selected,
  onChange,
}: {
  selected: ProjectCategory
  onChange: (category: ProjectCategory) => void
}) {
  return (
    <div
      className="mb-7 flex flex-wrap gap-2"
      aria-label="Project categories"
    >
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          aria-pressed={selected === category}
          className={clsx(
            'focus-ring rounded-md px-4 py-2 text-sm font-medium transition',
            selected === category
              ? 'bg-[#4b8ef0] text-white'
              : 'border border-[#162840] text-[#a0b8d0] hover:bg-[#4b8ef0]/10',
          )}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
