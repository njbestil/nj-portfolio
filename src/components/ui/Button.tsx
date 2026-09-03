import type { AnchorHTMLAttributes, PropsWithChildren } from 'react'
import { clsx } from '../../lib/cn'
export function Button({
  children,
  className,
  ...props
}: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) {
  return (
    <a
      className={clsx(
        'focus-ring inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition duration-200',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}
