import portrait from '../assets/images/modern-fullstack-developer-portrait.png'
import { Container } from '../components/layout/Container'
import { Button } from '../components/ui/Button'
import { profile } from '../data/profile'

const heroDots = [
  { size: 4, top: '10%', left: '5%', delay: '0s', color: '#2dd4f7' },
  { size: 3, top: '30%', left: '2%', delay: '.8s', color: '#4b8ef0' },
  { size: 5, top: '60%', left: '7%', delay: '1.4s', color: 'rgba(255,255,255,.18)' },
  { size: 3, top: '80%', left: '12%', delay: '.3s', color: '#2dd4f7' },
  { size: 4, top: '15%', left: '94%', delay: '.6s', color: '#4b8ef0' },
  { size: 6, top: '45%', left: '91%', delay: '1.1s', color: '#2dd4f7' },
  { size: 3, top: '70%', left: '96%', delay: '.5s', color: 'rgba(255,255,255,.18)' },
]

const profileDots = [
  { size: 5, top: '-6%', right: '5%', delay: '.4s', color: '#2dd4f7' },
  { size: 4, top: '8%', right: '-4%', delay: '1s', color: '#4b8ef0' },
  { size: 6, bottom: '5%', right: '-2%', delay: '.7s', color: '#2dd4f7' },
  { size: 3, bottom: '12%', left: '2%', delay: '1.5s', color: 'rgba(255,255,255,.22)' },
  { size: 4, top: '40%', right: '-6%', delay: '.2s', color: '#4b8ef0' },
  { size: 3, top: '22%', left: '0%', delay: '1.8s', color: '#2dd4f7' },
]

export function Home() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] scroll-mt-16 items-center overflow-hidden bg-[#07111f] pt-16"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_70%_50%,rgba(75,142,240,.1),transparent_70%),radial-gradient(ellipse_50%_60%_at_10%_60%,rgba(45,212,247,.05),transparent_60%),radial-gradient(circle,rgba(75,142,240,.1)_1px,transparent_1px)] bg-[length:auto,auto,38px_38px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {heroDots.map((dot, index) => (
          <span
            key={`${dot.top}-${dot.left}`}
            className="hero-float absolute rounded-sm"
            style={{
              width: dot.size,
              height: dot.size,
              top: dot.top,
              left: dot.left,
              backgroundColor: dot.color,
              animationDelay: dot.delay,
              animationDuration: `${3.5 + index * 0.3}s`,
              opacity: 0.55,
            }}
          />
        ))}
      </div>
      <Container className="grid min-h-[calc(100svh-4rem)] items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16">
        <div className="relative z-10 order-2 flex flex-col gap-5 lg:order-1">
          <p className="font-mono text-xs tracking-[0.16em] text-[#2dd4f7] sm:text-sm">
            — Hello, I’m
          </p>
          <h1 className="max-w-3xl text-5xl font-extrabold leading-[.96] tracking-[-.04em] text-[#dce8f5] sm:text-6xl xl:text-7xl">
            Neil Joseph
            <br />
            <span className="bg-gradient-to-r from-[#4b8ef0] via-[#2dd4f7] to-[#a78bfa] bg-clip-text text-transparent">
              Bestil.
            </span>
          </h1>
          <p className="inline-flex w-fit rounded-full border border-[#4b8ef0]/25 bg-[#4b8ef0]/10 px-4 py-2 font-mono text-xs font-semibold tracking-[.02em] text-[#4b8ef0] sm:text-sm">
            <span className="mr-2 size-1.5 self-center rounded-full bg-[#4b8ef0]" /> Full-Stack
            Developer · 10+ Years
          </p>
          <p className="max-w-[34rem] text-base leading-7 text-[#6a85a0]">{profile.intro}</p>
          <div className="flex flex-wrap gap-3">
            <Button
              href="#projects"
              className="bg-[#4b8ef0] text-white hover:-translate-y-0.5 hover:bg-[#3a7ae0] hover:shadow-[0_10px_28px_rgba(75,142,240,.38)]"
            >
              View My Work
            </Button>
            <Button
              href={`mailto:${profile.email}`}
              className="border border-[#162840] text-[#dce8f5] hover:border-[#4b8ef0]/45 hover:bg-[#4b8ef0]/[.06]"
            >
              Contact Me
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 font-mono text-xs text-[#6a85a0]">
            <span className="rounded-md border border-[#4b8ef0]/20 bg-[#4b8ef0]/[.07] px-3 py-1.5 hover:border-[#2dd4f7] hover:text-[#2dd4f7]">
              React
            </span>
            <span className="rounded-md border border-[#4b8ef0]/20 bg-[#4b8ef0]/[.07] px-3 py-1.5 hover:border-[#2dd4f7] hover:text-[#2dd4f7]">
              TypeScript
            </span>
            <span className="rounded-md border border-[#4b8ef0]/20 bg-[#4b8ef0]/[.07] px-3 py-1.5 hover:border-[#2dd4f7] hover:text-[#2dd4f7]">
              Laravel
            </span>
            <span className="rounded-md border border-[#4b8ef0]/20 bg-[#4b8ef0]/[.07] px-3 py-1.5 hover:border-[#2dd4f7] hover:text-[#2dd4f7]">
              Java
            </span>
            <span className="rounded-md border border-[#4b8ef0]/20 bg-[#4b8ef0]/[.07] px-3 py-1.5 hover:border-[#2dd4f7] hover:text-[#2dd4f7]">
              PostgreSQL
            </span>
            <span className="rounded-md border border-[#4b8ef0]/20 bg-[#4b8ef0]/[.07] px-3 py-1.5 hover:border-[#2dd4f7] hover:text-[#2dd4f7]">
              Docker
            </span>
          </div>
        </div>
        <div className="relative order-1 mx-auto grid aspect-square w-full max-w-[31rem] place-items-center lg:order-2 lg:justify-self-end">
          <div
            aria-hidden="true"
            className="hero-spin absolute inset-[4%] rounded-full border border-dashed border-[#4b8ef0]/20"
          />
          <div
            aria-hidden="true"
            className="hero-pulse absolute -inset-[3%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(75,142,240,.28),rgba(45,212,247,.1)_50%,transparent_75%)] blur-[30px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10"
          >
            {profileDots.map((dot, index) => (
              <span
                key={`${dot.top ?? dot.bottom}-${dot.left ?? dot.right}`}
                className="hero-float absolute rounded-sm"
                style={{
                  width: dot.size,
                  height: dot.size,
                  top: dot.top,
                  bottom: dot.bottom,
                  right: dot.right,
                  left: dot.left,
                  backgroundColor: dot.color,
                  animationDelay: dot.delay,
                  animationDuration: `${3.8 + index * 0.35}s`,
                  opacity: 0.7,
                }}
              />
            ))}
          </div>
          <div className="relative grid size-[15.5rem] place-items-center overflow-hidden rounded-full border-[3px] border-[#4b8ef0]/35 bg-[#0d2945] shadow-[0_0_0_1px_rgba(75,142,240,.12),0_0_60px_rgba(75,142,240,.2),0_24px_80px_rgba(0,0,0,.6)] sm:size-[26.25rem]">
            <img
              src={portrait}
              alt="Neil Joseph Bestil"
              className="size-full object-cover object-top"
            />
          </div>
          <span className="absolute right-0 top-[7%] rounded-full border border-[#22d355]/30 bg-[#0d1b2e]/90 px-4 py-2 font-mono text-[11px] text-[#22d355] shadow-lg backdrop-blur-md">
            <span className="mr-2 inline-block size-2 rounded-full bg-[#22d355] shadow-[0_0_7px_#22d355]" />
            Available for work
          </span>
          <div className="absolute -left-[8%] bottom-[3%] hidden w-48 rounded-xl border border-[#162840] bg-[#0d1b2e]/95 p-4 font-mono text-[11px] leading-6 text-[#a0b8d0] shadow-[0_12px_40px_rgba(0,0,0,.5)] backdrop-blur-md lg:block">
            <div className="mb-2 flex gap-1.5">
              <i className="size-2.5 rounded-full bg-[#ff625b]" />
              <i className="size-2.5 rounded-full bg-[#ffcc45]" />
              <i className="size-2.5 rounded-full bg-[#35c95b]" />
              <span className="ml-1 text-[#7189a6]">dev.ts</span>
            </div>
            const njb = {'{'}
            <br />
            exp: <span className="text-[#ffd8a8]">"10+ yrs"</span>,<br />
            ai: <span className="text-[#8ec7ff]">true</span>,<br />
            ship: () =&gt; 🚀
            <br />
            {'}'}
          </div>
        </div>
      </Container>
      <p
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 font-mono text-xs text-[#6a85a0] lg:block"
      >
        scroll
        <br />
        <span className="ml-[17px] inline-block h-8 border-l border-[#396898]" />
      </p>
    </section>
  )
}
