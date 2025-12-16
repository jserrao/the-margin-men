export function FeatureGrid() {
  return (
    <section
      id="solutions"
      className="max-w-7xl mx-auto px-6 mt-32 relative z-10"
    >
      <div className="mb-16">
        <h2 className="font-baskerville text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">
          How We Help You Defend Your Margins
        </h2>
        <p className="text-neutral-400 text-lg max-w-xl font-light">
          The Margin Men, John Serrao and Jeffrey Hoffman, will walk you through
          our 3-step process to defend your margins from AI.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="col-span-1 relative group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 hover:border-white/20 transition-all duration-500">
          <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="p-8 h-full flex flex-col justify-between relative z-10">
            <div className="mb-8">
              <div className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center bg-neutral-800/50 mb-6 text-white">
                <iconify-icon icon="lucide:zap" width="20" stroke-width="1.5" />
              </div>
              <div className="text-3xl font-medium text-white tracking-tight mb-2">
                Step 1
              </div>
              <h3 className="text-xl font-medium text-white mb-2 tracking-tight">
                Deep Analysis of Your Operations
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed max-w-sm mb-5">
                We'll embed with your team and run our analyses on your
                vulnerabilities to disruption.
              </p>
              <ul className="text-sm text-neutral-400 leading-relaxed max-w-sm list-disc list-outside ml-5 space-y-2">
                <li>Examine your COGS / Gross Profit per unit</li>
                <li>
                  Analyze your pricing strategy, compare to AI-driven cost
                  compression
                </li>
                <li>
                  Outline the price shift required to stay alive in the AI era
                </li>
              </ul>
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
            <div className="text-3xl font-medium text-white tracking-tight mb-2">
              Step 2
            </div>
            <h3 className="text-xl font-medium text-white mb-2 tracking-tight">
              Fine-tuning Your Product Matrix
            </h3>
            <p className="text-sm text-neutral-400 mb-8">
              Adjust the offerings of your organization just like an AI model.
            </p>

            {/* Custom Controls */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-400">
                  Bronze Option Decrease
                </span>
                <div className="w-24 h-1 bg-white/10 rounded-full relative">
                  <div className="absolute left-0 top-0 h-full w-1/3 bg-white rounded-full" />
                  <div className="absolute right-2/3 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-400">
                  Gold Option Increase
                </span>
                <div className="w-24 h-1 bg-white/10 rounded-full relative">
                  <div className="absolute left-0 top-0 h-full w-3/4 bg-white rounded-full" />
                  <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-400">Safety</span>
                {/* Custom Toggle */}
                <div className="w-8 h-4 bg-blue-600 rounded-full relative cursor-pointer">
                  <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-400">
                  Silver Option Steady
                </span>
                <div className="w-24 h-1 bg-white/10 rounded-full relative">
                  <div className="absolute left-0 top-0 h-full w-1/2 bg-white rounded-full" />
                  <div className="absolute right-1/2 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-400">Security</span>
                {/* Custom Toggle Off */}
                <div className="w-8 h-4 bg-blue-600 rounded-full relative cursor-pointer">
                  <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 relative group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 hover:border-white/20 transition-all duration-500">
          <div className="p-8 h-full relative z-10">
            <div className="flex items-baseline gap-4">
              <div className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center bg-neutral-800/50 mb-6 text-white">
                <iconify-icon
                  icon="lucide:shield-check"
                  width="20"
                  stroke-width="1.5"
                />
              </div>
            </div>
            <div className="text-3xl font-medium text-white tracking-tight mb-2">
              Step 3
            </div>
            <h3 className="text-xl font-medium text-white mb-2 tracking-tight">
              Enterprise Training
            </h3>
            <p className="text-sm text-neutral-400">
              We'll get your entire C-Suite to understand the new operating
              environment.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-2">
              <div className="flex items-center gap-2 text-md text-neutral-500">
                <iconify-icon icon="lucide:check" className="text-blue-400" />{' '}
                30 minute establishment meetings with each executive
              </div>
              <div className="flex items-center gap-2 text-md text-neutral-500">
                <iconify-icon icon="lucide:check" className="text-blue-400" />{' '}
                One-day seminar on AI pricing strategy implementation
              </div>
              <div className="flex items-center gap-2 text-md text-neutral-500">
                <iconify-icon icon="lucide:check" className="text-blue-400" />{' '}
                Follow-up meetings as needed with our team
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
