import type { AnchorHTMLAttributes } from 'react'
export function IconLink({ children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className="focus-ring rounded-lg px-3 py-2 text-sm font-medium text-[#a0b8d0] transition hover:bg-[#4b8ef0]/10 hover:text-[#dce8f5]"
      {...props}
    >
      {children}
    </a>
  )
}
