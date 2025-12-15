export function Methodology() {
  return (
    <section id="process" className="max-w-7xl mx-auto px-6 mt-32 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">From data to decision.</h2>
          <p className="text-neutral-400 text-lg font-light">Our proven methodology ensures value realization in weeks, not months.</p>
        </div>
        <a href="#" className="text-sm text-white border-b border-white/30 pb-0.5 hover:border-white transition-colors">Read full case study</a>
      </div>

      <div className="relative border-l border-white/10 ml-4 md:ml-0 md:border-l-0 md:flex md:justify-between gap-8 space-y-12 md:space-y-0">
        {/* Step 1 */}
        <div className="pl-8 md:pl-0 relative md:w-1/3 group">
          <div className="absolute -left-[5px] top-0 md:relative md:left-0 w-2.5 h-2.5 bg-neutral-800 border border-white/20 rounded-full md:mb-6 group-hover:bg-blue-500 group-hover:border-blue-500 transition-colors" />
          <div className="text-xs font-mono text-blue-400 mb-2">01</div>
          <h4 className="text-lg font-medium text-white mb-3">Audit &amp; Ingestion</h4>
          <p className="text-sm text-neutral-400 leading-relaxed">We map your data topography and establish secure pipelines for ingestion using our proprietary connectors.</p>
        </div>

        {/* Step 2 */}
        <div className="pl-8 md:pl-0 relative md:w-1/3 group">
          <div className="absolute -left-[5px] top-0 md:relative md:left-0 w-2.5 h-2.5 bg-neutral-800 border border-white/20 rounded-full md:mb-6 group-hover:bg-blue-500 group-hover:border-blue-500 transition-colors" />
          <div className="text-xs font-mono text-blue-400 mb-2">02</div>
          <h4 className="text-lg font-medium text-white mb-3">Model Tuning</h4>
          <p className="text-sm text-neutral-400 leading-relaxed">Specialized training on your specific vertical data. We employ RAG architectures to ensure factual accuracy.</p>
        </div>

        {/* Step 3 */}
        <div className="pl-8 md:pl-0 relative md:w-1/3 group">
          <div className="absolute -left-[5px] top-0 md:relative md:left-0 w-2.5 h-2.5 bg-neutral-800 border border-white/20 rounded-full md:mb-6 group-hover:bg-blue-500 group-hover:border-blue-500 transition-colors" />
          <div className="text-xs font-mono text-blue-400 mb-2">03</div>
          <h4 className="text-lg font-medium text-white mb-3">Deployment</h4>
          <p className="text-sm text-neutral-400 leading-relaxed">Scalable API endpoints delivered to your product teams. Includes comprehensive monitoring dashboard.</p>
        </div>
      </div>
    </section>
  );
}

