export function CTASection() {
  return (
    <section className="max-w-4xl mx-auto px-6 mt-32 mb-20 relative z-10">
      <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-neutral-900/40 p-12 md:p-20 text-center">
        {/* Background decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
        
        <h2 className="relative z-10 text-4xl md:text-5xl font-medium text-white tracking-tighter mb-6">Ready to accelerate?</h2>
        <p className="relative z-10 text-lg text-neutral-400 mb-10 max-w-lg mx-auto font-light">Join the leading enterprises building their future on Nexus infrastructure today.</p>
        
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-colors">
            Get Started
          </button>
          <button className="w-full sm:w-auto px-8 py-3 bg-transparent border border-white/10 text-white rounded-full font-medium hover:bg-white/5 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}

