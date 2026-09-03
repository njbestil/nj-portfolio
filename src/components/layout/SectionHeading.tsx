export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: {
  eyebrow: string
  title: string
  description: string
  id: string
}) {
  const [index, label = ''] = eyebrow.split(/\s+[—/]\s+/, 2)
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#2dd4f7]">
        <span
          className="h-px w-5 bg-current"
          aria-hidden="true"
        />
        {index} / {label}
      </p>
      <h2
        id={id}
        className="text-3xl font-bold tracking-tight text-[#dce8f5] sm:text-4xl"
      >
        {title}
      </h2>
      <p className="mt-4 leading-7 text-[#6a85a0]">{description}</p>
    </div>
  )
}
