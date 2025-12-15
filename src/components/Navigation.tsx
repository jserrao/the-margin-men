export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 glass-panel">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-white text-lg font-medium tracking-tighter flex items-center gap-2">
          <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-black rounded-full" />
          </div>
          NEXUS
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-normal text-neutral-400">
          <a href="#services" className="hover:text-white transition-colors duration-200">Services</a>
          <a href="#solutions" className="hover:text-white transition-colors duration-200">Solutions</a>
          <a href="#process" className="hover:text-white transition-colors duration-200">Methodology</a>
          <a href="#pricing" className="hover:text-white transition-colors duration-200">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors hidden sm:block">Log in</a>
          <button className="bg-white text-black text-xs font-medium px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors">
            Book Consultation
          </button>
        </div>
      </div>
    </nav>
  );
}

