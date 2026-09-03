import type { HTMLAttributes, PropsWithChildren } from 'react'
import { clsx } from '../../lib/cn'
export function Card({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      className={clsx(
        'rounded-xl border border-[#162840] bg-[#0d1b2e] p-6 shadow-[0_16px_48px_rgba(0,0,0,0.2)]',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
