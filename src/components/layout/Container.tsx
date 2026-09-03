import type { PropsWithChildren } from 'react'
import { clsx } from '../../lib/cn'
export function Container({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <div className={clsx('mx-auto w-full max-w-7xl px-6', className)}>{children}</div>
}
