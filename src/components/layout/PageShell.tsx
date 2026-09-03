import type { PropsWithChildren } from 'react'
export function PageShell({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#07111f] text-[#dce8f5] selection:bg-[#4b8ef0] selection:text-white">
      {children}
    </div>
  )
}
