import { profile } from '../../data/profile'
import logo from '../../assets/images/nj-logo.png'
export function Footer() {
  return (
    <footer className="border-t border-[#162840] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt=""
            className="h-7 w-auto [filter:brightness(0)_invert(.55)_sepia(1)_saturate(4)_hue-rotate(190deg)_brightness(1.3)]"
          />
          <div>
            <p className="text-sm font-bold text-[#dce8f5]">{profile.name}</p>
            <p className="font-mono text-xs text-[#6a85a0]">Full-Stack Developer</p>
          </div>
        </div>
        <p className="font-mono text-xs text-[#6a85a0]">
          React · Laravel · Java · APIs · AI Development
        </p>
        <p className="font-mono text-xs text-[#6a85a0]">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  )
}
