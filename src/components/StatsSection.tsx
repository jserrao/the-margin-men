export function StatsSection() {
  return (
    <section className="border-y border-white/5 bg-white/[0.02] mt-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-2">99.9%</div>
            <div className="text-sm text-neutral-500 font-medium uppercase tracking-wide">Uptime SLA</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-2">2ms</div>
            <div className="text-sm text-neutral-500 font-medium uppercase tracking-wide">Global Latency</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-2">500+</div>
            <div className="text-sm text-neutral-500 font-medium uppercase tracking-wide">Enterprise Nodes</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-2">$2B+</div>
            <div className="text-sm text-neutral-500 font-medium uppercase tracking-wide">Data Processed</div>
          </div>
        </div>
      </div>
    </section>
  );
}

