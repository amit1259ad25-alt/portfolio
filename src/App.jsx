import React, { useState } from 'react';
import { PROJECTS, LAB_LOGS, TECH_STACK } from './data';

export default function App() {
  const [activeProject, setActiveProject] = useState(PROJECTS[0]);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('amit.dev@example.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#07080c] text-zinc-100 font-sans relative overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-purple-600/15 blur-[130px]" />
        <div className="absolute top-1/2 right-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-10">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-sm tracking-wider text-zinc-400">
              AMIT_SHAH // <span className="text-zinc-200">BUILD_IN___PUBLIC</span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm font-mono">
            <a href="#projects" className="text-zinc-400 hover:text-white">01.WORK</a>
            <a href="#lab" className="text-zinc-400 hover:text-white">02.LAB_NOTES</a>
            <button onClick={handleCopyEmail} className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1.5 text-emerald-300 hover:bg-emerald-500/20 cursor-pointer">
              {copied ? '✓ COPIED' : 'COPY EMAIL'}
            </button>
          </div>
        </header>

        <section className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10 flex flex-col justify-between">
            <div>
              <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs font-mono text-purple-300">
                FULL-STACK WEB DEVELOPER
              </span>
              <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                Crafting fast web apps by{' '}
                <span className="bg-linear-to-r from-emerald-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                  breaking things apart
                </span>{' '}
                first.
              </h1>
              <p className="mt-5 max-w-2xl text-zinc-400 text-lg">
                Full-stack developer building responsive interfaces and scalable REST APIs—currently exploring interactive 3D web experiences with Three.js.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 pt-6 border-t border-white/10 font-mono text-xs">
              {TECH_STACK.map((tech) => (
                <span key={tech.name} className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/40 px-3 py-1.5 text-zinc-300">
                  <img src={tech.icon} alt={tech.name} className={`h-4 w-4 ${tech.invert ? 'invert' : ''}`} />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 rounded-3xl border border-white/10 bg-linear-to-b from-white/[0.05] to-transparent p-8 flex flex-col justify-between">
            <div>
              <p className="font-mono text-xs text-emerald-400">// CURRENTLY SHARPENING</p>
              <h2 className="mt-3 text-2xl font-semibold">3D Web & Fluid Responsive Design</h2>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                Experimenting with interactive 3D scenes using Three.js while crafting adaptive, mobile-first layouts that feel smooth across every screen size.
              </p>
            </div>
            <div className="mt-8 space-y-3 rounded-2xl border border-white/10 bg-black/50 p-4 font-mono text-xs">
              <div className="flex justify-between"><span className="text-zinc-500">STATUS</span><span className="text-emerald-400">Open to Opportunities</span></div>
              <div className="flex justify-between"><span className="text-zinc-500">FOCUS</span><span>MERN + Three.js</span></div>
              <div className="flex justify-between"><span className="text-zinc-500">NEXT</span><span className="text-purple-300">3D Portfolio Scenes</span></div>
            </div>
          </div>
        </section>

        <section id="projects" className="mt-16">
          <p className="font-mono text-xs text-emerald-400">01 // SELECTED BUILDS</p>
          <h2 className="text-2xl md:text-3xl font-bold mt-1 mb-6">Interactive Architecture Lab</h2>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="lg:col-span-5 space-y-4">
              {PROJECTS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActiveProject(p)}
                  className={`w-full text-left rounded-2xl border p-5 transition cursor-pointer ${
                    activeProject.id === p.id ? 'border-emerald-400/60 bg-white/[0.07]' : 'border-white/10 bg-white/[0.02] hover:border-white/25'
                  }`}
                >
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-emerald-400">{p.tag}</span>
                    <span className="text-zinc-500">{p.year}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold">{p.title}</h3>
                  <p className="mt-1 text-sm text-zinc-400">{p.summary}</p>
                </button>
              ))}
            </div>

            <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-[#0c0e14] p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="font-mono text-sm font-semibold">{activeProject.title}</span>
                  <span className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-xs text-cyan-300">{activeProject.metrics}</span>
                </div>
                <p className="mt-4 text-zinc-300">{activeProject.summary}</p>
                <div className="mt-6 rounded-xl border border-white/10 bg-black/70 p-4 font-mono text-xs overflow-x-auto">
                  <pre className="text-emerald-300/90"><code>{activeProject.codeSnippet}</code></pre>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {activeProject.stack.map((item) => (
                  <span key={item} className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-xs text-zinc-400">#{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="lab" className="mt-16 rounded-3xl border border-white/10 bg-white/[0.02] p-8">
          <p className="font-mono text-xs text-purple-400">02 // ENGINEERING LOGS</p>
          <h2 className="mt-1 text-2xl font-bold">What I’m Currently Exploring</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {LAB_LOGS.map((log) => (
              <div key={log.date} className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <span className="font-mono text-xs text-zinc-500">{log.date}</span>
                <p className="mt-2 text-sm text-zinc-200">{log.note}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
