export function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center mb-24 relative">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-xs text-blue-200 mb-8 hover:border-blue-500/40 transition-colors cursor-default backdrop-blur-md relative z-20">
        <span className="flex h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)] animate-pulse" />
        <span>Nexus Intelligence Engine v2.0 is live</span>
      </div>

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-500 tracking-tighter mb-6 text-glow leading-[1.1] relative z-20">
        Scale intelligence <br /> without complexity.
      </h1>

      <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed relative z-20">
        We deploy bespoke AI infrastructure for enterprise scalability. 
        Transform your raw data into actionable cognitive models.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center relative z-20">
        <button className="w-full sm:w-auto h-12 px-8 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-all flex items-center justify-center gap-2">
          Start Integration
          <iconify-icon icon="lucide:arrow-right" width="16" stroke-width="1.5" />
        </button>
        <button className="w-full sm:w-auto h-12 px-8 bg-white/5 border border-white/10 text-white rounded-full font-medium hover:bg-white/10 backdrop-blur-sm transition-all flex items-center justify-center gap-2">
          View Documentation
          <iconify-icon icon="lucide:file-text" width="16" stroke-width="1.5" className="text-neutral-400" />
        </button>
      </div>
    </section>
  );
}

