export function Badge({ children }: { children: string }) {
  return (
    <span className="rounded-md border border-[#4b8ef0]/20 bg-[#4b8ef0]/[.07] px-2.5 py-1 font-mono text-xs text-[#a0b8d0]">
      {children}
    </span>
  )
}
