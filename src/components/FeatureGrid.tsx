export function FeatureGrid() {
  return (
    <section
      id="solutions"
      className="max-w-7xl mx-auto px-6 mt-32 relative z-10"
    >
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">
          AI operates at 35-40% margins. Are you prepared?
        </h2>
        <p className="text-neutral-400 text-lg max-w-xl font-light">
          Talk to the Margin Men to learn how to defend your margins from AI.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="col-span-1 md:col-span-2 relative group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 hover:border-white/20 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="p-8 h-full flex flex-col justify-between relative z-10">
            <div className="mb-8">
              <div className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center bg-neutral-800/50 mb-6 text-white">
                <iconify-icon icon="lucide:zap" width="20" stroke-width="1.5" />
              </div>
              <h3 className="text-xl font-medium text-white mb-2 tracking-tight">
                Real-time Analysis
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
                We'll embed with your team and run our analyses on your
                vulnerabilities to disruption.
              </p>
            </div>

            {/* Visualization Mockup */}
            <div className="w-full h-32 border-t border-l border-white/10 rounded-tl-xl bg-neutral-900/80 p-4 relative overflow-hidden">
              <div className="flex gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
              <div className="space-y-2 font-mono text-xs text-blue-300/80">
                <div className="flex justify-between">
                  <span>&gt; init_sequence()</span>
                  <span className="text-green-400">OK</span>
                </div>
                <div className="flex justify-between">
                  <span>&gt; load_weights()</span>
                  <span className="text-green-400">12ms</span>
                </div>
                <div className="flex justify-between">
                  <span>&gt; optimize_tensor</span>
                  <span className="text-blue-400">Running...</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Interactive UI Elements */}
        <div className="col-span-1 relative group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 hover:border-white/20 transition-all duration-500">
          <div className="p-8 h-full relative z-10">
            <div className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center bg-neutral-800/50 mb-6 text-white">
              <iconify-icon
                icon="lucide:sliders"
                width="20"
                stroke-width="1.5"
              />
            </div>
            <h3 className="text-xl font-medium text-white mb-2 tracking-tight">
              Fine-tuning Control
            </h3>
            <p className="text-sm text-neutral-400 mb-8">
              Adjust the operating parameters of your organization just like an
              AI model.
            </p>

            {/* Custom Controls */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-400">Analysis Depth</span>
                <div className="w-24 h-1 bg-white/10 rounded-full relative">
                  <div className="absolute left-0 top-0 h-full w-2/3 bg-white rounded-full" />
                  <div className="absolute right-1/3 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-400">Safety / Risk</span>
                {/* Custom Toggle */}
                <div className="w-8 h-4 bg-blue-600 rounded-full relative cursor-pointer">
                  <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-400">Security</span>
                {/* Custom Toggle Off */}
                <div className="w-8 h-4 bg-white/10 rounded-full relative cursor-pointer">
                  <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-neutral-500 rounded-full shadow-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
