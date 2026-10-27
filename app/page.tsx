'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Layers3,
  Menu,
  Minus,
  MoveRight,
  Sparkles,
  X,
} from 'lucide-react'

const services = [
  {
    number: '01',
    icon: Code2,
    title: 'Web development',
    text: 'Fast, accessible websites and web apps that feel as good as they perform.',
    tags: ['Next.js', 'TypeScript', 'React'],
  },
  {
    number: '02',
    icon: Layers3,
    title: 'Product design',
    text: 'Thoughtful product experiences that turn complex ideas into simple workflows.',
    tags: ['UX strategy', 'Prototyping', 'Design systems'],
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'AI & automation',
    text: 'Practical AI tools that remove busywork and create a sharper competitive edge.',
    tags: ['AI products', 'Integrations', 'Workflows'],
  },
]

const work = [
  { name: 'Northstar', type: 'Fintech platform', color: 'from-blue-500 to-cyan-300', stat: '+42% activation' },
  { name: 'Lumen Health', type: 'Digital health', color: 'from-lime-300 to-emerald-400', stat: '2.4× faster' },
  { name: 'Arc Studio', type: 'Creative tools', color: 'from-violet-500 to-fuchsia-400', stat: '10k+ creators' },
]

const steps = [
  ['01', 'Discover', 'We get clear on the opportunity, your users, and the outcome that matters.'],
  ['02', 'Build', 'Our small senior team turns the direction into a sharp, working product.'],
  ['03', 'Launch', 'We ship with confidence, then stay close to help you learn and grow.'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-[#08111f] text-[#f6f8fb]">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#08111f]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#top" className="flex items-center gap-2 text-lg font-bold tracking-tight">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#b7ff5a] text-[#08111f]"><Code2 size={18} strokeWidth={2.5} /></span>
            bright<span className="text-[#b7ff5a]">/</span>code
          </a>
          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#work" className="transition hover:text-white">Work</a>
            <a href="#process" className="transition hover:text-white">Our programs</a>
          </div>
          <a href="#contact" className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#08111f] transition hover:bg-[#b7ff5a] md:block">Start a project <ArrowUpRight className="ml-1 inline" size={15} /></a>
          <button aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg p-2 md:hidden">{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <div className="border-t border-white/10 px-6 py-5 md:hidden"><div className="flex flex-col gap-5 text-sm text-slate-200"><a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#work" onClick={() => setMenuOpen(false)}>Work</a><a href="#process" onClick={() => setMenuOpen(false)}>Process</a><a href="#contact" onClick={() => setMenuOpen(false)} className="font-semibold text-[#b7ff5a]">Start a project <ArrowUpRight className="ml-1 inline" size={15} /></a></div></div>}
      </nav>

      <section id="top" className="relative mx-auto max-w-7xl px-6 pb-24 pt-40 lg:px-10 lg:pb-32 lg:pt-52">
        <div className="pointer-events-none absolute right-[-12%] top-28 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[110px]" />
        <div className="relative max-w-4xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#b7ff5a]/30 bg-[#b7ff5a]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#b7ff5a]"><span className="h-2 w-2 animate-pulse rounded-full bg-[#b7ff5a]" /> Independent digital studio</div>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-7xl lg:text-[7.5rem]">We build the <span className="text-[#b7ff5a]">future</span> of digital.</h1>
          <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-lg leading-8 text-slate-400">Bright ideas deserve brilliant execution. We design and develop digital products that make ambitious businesses impossible to ignore.</p>
            <a href="#work" className="group flex w-fit items-center gap-3 text-sm font-bold uppercase tracking-[0.15em] text-white">See our work <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2457ff] transition group-hover:rotate-45"><MoveRight size={20} /></span></a>
          </div>
        </div>
        <div className="mt-24 grid grid-cols-2 gap-6 border-t border-white/15 pt-6 text-sm sm:grid-cols-4"><div><p className="text-3xl font-semibold">12+</p><p className="mt-1 text-slate-500">years building</p></div><div><p className="text-3xl font-semibold">48</p><p className="mt-1 text-slate-500">products shipped</p></div><div><p className="text-3xl font-semibold">8</p><p className="mt-1 text-slate-500">countries reached</p></div><div><p className="text-3xl font-semibold text-[#b7ff5a]">100%</p><p className="mt-1 text-slate-500">senior team</p></div></div>
      </section>

      <section id="services" className="bg-[#f1f5f8] px-6 py-24 text-[#08111f] lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#2457ff]">What we do</p><h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">From first sketch to <span className="text-[#2457ff]">final pixel.</span></h2></div><p className="max-w-xs leading-7 text-slate-500">One focused team for the strategy, design, and technology behind your next move.</p></div><div className="grid gap-4 lg:grid-cols-3">{services.map((service) => <article key={service.number} className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#2457ff]/40 hover:shadow-xl"><div className="mb-20 flex items-start justify-between"><span className="text-sm font-semibold text-slate-400">{service.number}</span><service.icon className="text-[#2457ff]" size={30} /></div><h3 className="text-2xl font-semibold">{service.title}</h3><p className="mt-4 min-h-20 leading-7 text-slate-500">{service.text}</p><div className="mt-8 flex flex-wrap gap-2">{service.tags.map(tag => <span key={tag} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs text-slate-600">{tag}</span>)}</div></article>)}</div></div></section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"><div className="mb-14 flex items-end justify-between"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#b7ff5a]">Selected work</p><h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">Good work, <span className="text-slate-500">speaks.</span></h2></div><a href="#contact" className="hidden items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white sm:flex">View all work <ArrowUpRight size={16} /></a></div><div className="grid gap-6 lg:grid-cols-3">{work.map((item, i) => <a href="#contact" key={item.name} className="group"><div className={`relative flex aspect-[1.1] items-end overflow-hidden rounded-2xl bg-gradient-to-br ${item.color} p-6`}><div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, white 0, transparent 1px)', backgroundSize: '20px 20px' }} /><div className="relative w-full rounded-xl border border-white/30 bg-black/15 p-5 backdrop-blur-sm transition group-hover:scale-[1.02]"><p className="text-xs font-medium uppercase tracking-widest text-white/70">{item.type}</p><div className="mt-2 flex items-center justify-between"><span className="text-2xl font-semibold">{item.name}</span><ArrowUpRight size={22} /></div></div></div><div className="mt-4 flex items-center justify-between text-sm"><span className="text-slate-400">Case study {String(i + 1).padStart(2, '0')}</span><span className="font-semibold text-[#b7ff5a]">{item.stat}</span></div></a>)}</div></section>

      <section id="process" className="border-y border-white/10 bg-[#0d1b2e] px-6 py-24 lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#b7ff5a]">How we work</p><h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">Clear thinking.<br /><span className="text-slate-500">Real momentum.</span></h2></div><div className="divide-y divide-white/10">{steps.map(([num, title, text]) => <div key={num} className="grid gap-4 py-7 sm:grid-cols-[80px_180px_1fr]"><span className="text-sm text-[#b7ff5a]">{num}</span><h3 className="text-xl font-semibold">{title}</h3><p className="leading-7 text-slate-400">{text}</p></div>)}</div></div></div></section>

      <section id="contact" className="bg-[#b7ff5a] px-6 py-24 text-[#08111f] lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><div className="grid gap-14 lg:grid-cols-2"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#2457ff]">Have a project in mind?</p><h2 className="max-w-xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-7xl">Let&apos;s make it <span className="text-[#2457ff]">bright.</span></h2><p className="mt-8 max-w-sm leading-7 text-[#254029]">Tell us a little about what you&apos;re building. We&apos;ll get back to you within two business days.</p></div><div>{sent ? <div className="flex h-full min-h-72 flex-col items-center justify-center rounded-2xl bg-[#08111f] p-8 text-center text-white"><div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#b7ff5a] text-[#08111f]"><Check /></div><h3 className="text-2xl font-semibold">Message received.</h3><p className="mt-2 text-slate-400">We&apos;ll be in touch soon.</p></div> : <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="space-y-4 rounded-2xl bg-white/40 p-6 sm:p-8"><input required aria-label="Your name" placeholder="Your name" className="w-full border-b border-[#08111f]/25 bg-transparent px-0 py-4 outline-none placeholder:text-[#254029]/70 focus:border-[#2457ff]" /><input required type="email" aria-label="Email address" placeholder="Email address" className="w-full border-b border-[#08111f]/25 bg-transparent px-0 py-4 outline-none placeholder:text-[#254029]/70 focus:border-[#2457ff]" /><textarea required aria-label="Project details" placeholder="Tell us about your project" rows={3} className="w-full resize-none border-b border-[#08111f]/25 bg-transparent px-0 py-4 outline-none placeholder:text-[#254029]/70 focus:border-[#2457ff]" /><button className="mt-4 flex w-full items-center justify-between rounded-xl bg-[#08111f] px-5 py-4 font-semibold text-white transition hover:bg-[#2457ff]">Send inquiry <MoveRight size={19} /></button></form>}</div></div></div></section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-10"><a href="#top" className="flex items-center gap-2 font-bold text-white"><span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#b7ff5a] text-[#08111f]"><Code2 size={15} /></span> bright/code</a><div className="flex gap-6"><a href="#services" className="hover:text-white">Services</a><a href="#work" className="hover:text-white">Work</a><a href="mailto:hello@brightcode.dev" className="hover:text-white">hello@brightcode.dev</a></div><p>© 2026 bright/code</p></footer>
    </main>
  )
}
