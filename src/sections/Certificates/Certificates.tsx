import { Section } from '../../components/layout/Section'
import { SectionHeading } from '../../components/layout/SectionHeading'
import { certificates } from '../../data/certificates'
import type { Certificate } from '../../types/portfolio'
import { CertificateCard } from './CertificateCard'
export function Certificates() {
  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const dialog = dialogRef.current
    if (activeCertificate && dialog && !dialog.open) dialog.showModal()
  }, [activeCertificate])
  const closeDialog = () => dialogRef.current?.close()
  return (
    <>
      <Section
        id="certificates"
        labelledBy="certificates-heading"
      >
        <SectionHeading
          id="certificates-heading"
          eyebrow="06 — Certificates"
          title="Certifications & Learning"
          description="Focused learning that strengthens modern frontend, backend, infrastructure, and AI engineering practice."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              onView={() => setActiveCertificate(certificate)}
            />
          ))}
        </div>
      </Section>
      <dialog
        ref={dialogRef}
        aria-labelledby="certificate-title"
        onClose={() => setActiveCertificate(null)}
        onClick={(event) => event.target === event.currentTarget && closeDialog()}
        className="modal-shell m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-3xl overflow-hidden rounded-2xl border border-[#162840] bg-[#0d1b2e] p-0 text-[#dce8f5] backdrop:bg-black/80 backdrop:backdrop-blur-sm"
      >
        {activeCertificate && (
          <div className="flex max-h-[calc(100dvh-2rem)] flex-col">
            <header className="flex items-center justify-between border-b border-[#162840] px-6 py-4">
              <div>
                <p
                  className="font-mono text-xs font-semibold uppercase tracking-widest"
                  style={{ color: activeCertificate.color }}
                >
                  {activeCertificate.category}
                </p>
                <h2
                  id="certificate-title"
                  className="mt-0.5 text-lg font-extrabold"
                >
                  {activeCertificate.title}
                </h2>
                <p className="mt-0.5 font-mono text-xs text-[#6a85a0]">
                  {activeCertificate.issuer} · Issued {activeCertificate.issued}
                </p>
              </div>
              <button
                type="button"
                autoFocus
                onClick={closeDialog}
                className="focus-ring ml-4 grid size-9 shrink-0 place-items-center rounded-full border border-[#162840] bg-white/5 text-[#6a85a0] transition hover:bg-white/10 hover:text-[#dce8f5]"
                aria-label="Close certificate"
              >
                ×
              </button>
            </header>
            <div className="grid min-h-80 place-items-center overflow-auto p-8 sm:p-12">
              <div className="max-w-md text-center">
                <div
                  className="mx-auto grid size-20 place-items-center rounded-2xl border text-4xl"
                  style={{
                    backgroundColor: `${activeCertificate.color}18`,
                    borderColor: `${activeCertificate.color}35`,
                    color: activeCertificate.color,
                  }}
                  aria-hidden="true"
                >
                  ◇
                </div>
                <h3 className="mt-6 font-bold">{activeCertificate.title}</h3>
                <p className="mt-1 text-sm text-[#6a85a0]">
                  {activeCertificate.issuer} · {activeCertificate.issued}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#6a85a0]">
                  {activeCertificate.details}
                </p>
                {!activeCertificate.pdfUrl && (
                  <p className="mt-6 rounded-lg border border-[#162840] bg-white/[.04] px-4 py-2 font-mono text-xs text-[#6a85a0]">
                    PDF not yet linked
                  </p>
                )}
              </div>
            </div>
            <footer className="flex items-center justify-between border-t border-[#162840] px-6 py-4">
              <span className="font-mono text-xs text-[#6a85a0]">
                Expiry: {activeCertificate.expiry}
              </span>
              {activeCertificate.pdfUrl && (
                <a
                  href={activeCertificate.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring rounded-md px-4 py-2 text-xs font-semibold text-white"
                  style={{ backgroundColor: activeCertificate.color }}
                >
                  Open PDF ↗
                </a>
              )}
            </footer>
          </div>
        )}
      </dialog>
    </>
  )
}
import { useEffect, useRef, useState } from 'react'
