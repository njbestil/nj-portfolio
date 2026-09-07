import { useEffect, useState } from 'react'
import { FiDownload } from 'react-icons/fi'
import logo from '../../assets/images/nj-logo.png'
import { clsx } from '../../lib/cn'
import { navigationItems } from '../../lib/constants'

export function Header({
  activeSection,
  onNavigate,
}: {
  activeSection: string
  onNavigate: (id: string) => void
}) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const navigate = (id: string) => {
    onNavigate(id)
    setOpen(false)
  }
  return (
    <header
      className={clsx(
        'animate__animated animate__fadeInDown animate__faster fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-colors',
        scrolled ? 'border-[#162840] bg-[#07111f]/95' : 'border-transparent bg-[#07111f]/55',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <button
          type="button"
          aria-label="Go to home"
          onClick={() => navigate('home')}
          className="focus-ring flex items-center gap-3 rounded-md font-mono text-xs font-semibold tracking-[0.16em] text-[#2dd4f7]"
        >
          <img
            src={logo}
            alt="NJ"
            className="size-8 object-contain [filter:brightness(0)_invert(.55)_sepia(1)_saturate(4)_hue-rotate(190deg)_brightness(1.3)]"
          />
          NJ.DEV
        </button>
        <nav
          aria-label="Primary"
          id="primary-links"
          className={clsx(
            'absolute left-0 right-0 top-16 border-t border-[#162840] bg-[#07111f]/[.97] px-6 py-4 lg:static lg:block lg:border-0 lg:bg-transparent lg:p-0',
            !open && 'hidden lg:block',
          )}
        >
          <ul className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-1">
            {navigationItems.map(({ id, label }) => (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => navigate(id)}
                  aria-current={activeSection === id ? 'page' : undefined}
                  className={clsx(
                    'focus-ring rounded-md px-4 py-2 text-sm font-medium transition',
                    activeSection === id
                      ? 'bg-[#4b8ef0]/10 text-[#dce8f5]'
                      : 'text-[#6a85a0] hover:bg-[#4b8ef0]/[.08] hover:text-[#dce8f5]',
                  )}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="/Bestil_CV.pdf"
            download
            className="focus-ring hidden items-center gap-2 rounded-md border border-[#4b8ef0] px-4 py-2 font-mono text-xs font-semibold text-[#4b8ef0] transition hover:bg-[#4b8ef0] hover:text-white sm:inline-flex"
          >
            <FiDownload aria-hidden="true" />
            Download CV
          </a>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="primary-links"
            onClick={() => setOpen(!open)}
            className="focus-ring rounded-md p-2 text-[#a0b8d0] lg:hidden"
          >
            <span aria-hidden="true">{open ? '×' : '☰'}</span>
          </button>
        </div>
      </div>
    </header>
  )
}
