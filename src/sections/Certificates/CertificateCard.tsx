import type { Certificate } from '../../types/portfolio'
export function CertificateCard({
  certificate,
  onView,
}: {
  certificate: Certificate
  onView: () => void
}) {
  const { title, issuer, issued, expiry, details, category, color } = certificate
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-[#162840] bg-[#0d1b2e] transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,.35)]">
      <div
        className="h-1.5"
        style={{ background: `linear-gradient(to right, ${color}, ${color}66)` }}
      />
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <p
            className="font-mono text-xs font-semibold uppercase tracking-widest"
            style={{ color }}
          >
            {category}
          </p>
          <h3 className="mt-1 text-base font-bold text-[#dce8f5]">{title}</h3>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-sm font-semibold text-[#dce8f5]">{issuer}</span>
          <span
            className="rounded-md px-2.5 py-1 font-mono text-xs"
            style={{ backgroundColor: `${color}15`, color }}
          >
            {issued}
          </span>
        </div>
        <div
          className="rounded-lg border p-3"
          style={{ backgroundColor: `${color}0d`, borderColor: `${color}22` }}
        >
          <p
            className="mb-1 font-mono text-xs"
            style={{ color }}
          >
            Details
          </p>
          <p className="text-xs leading-relaxed text-[#6a85a0]">{details}</p>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-[#22d355]" />
          <span className="font-mono text-xs text-[#6a85a0]">{expiry}</span>
        </div>
        <button
          type="button"
          onClick={onView}
          className="focus-ring mt-auto w-fit rounded-md px-4 py-2 text-xs font-semibold text-white transition hover:opacity-85"
          style={{ backgroundColor: color }}
        >
          View Certificate →
        </button>
      </div>
    </article>
  )
}
