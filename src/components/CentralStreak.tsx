export function CentralStreak() {
  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 h-screen w-full max-w-[1px] z-0 pointer-events-none">
      {/* Static Guide Line */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent w-full h-full" />
      
      {/* Animated Falling Beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[50vh] bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-beam shadow-[0_0_20px_2px_rgba(59,130,246,0.5)]" />
      
      {/* Pulsating Core Glow (Behind) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1px] h-[40vh] bg-blue-500/50 blur-xl animate-pulse-glow" />
    </div>
  );
}

