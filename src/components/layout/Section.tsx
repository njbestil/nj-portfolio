import type { PropsWithChildren } from 'react'
import { clsx } from '../../lib/cn'
import { Container } from './Container'
type SectionProps = PropsWithChildren<{ id: string; className?: string; labelledBy?: string }>
export function Section({ id, children, className, labelledBy }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={clsx('relative scroll-mt-16 py-20 sm:py-28', className)}
    >
      <Container>{children}</Container>
    </section>
  )
}
