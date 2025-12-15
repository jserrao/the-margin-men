const tickerItems = [
  { icon: 'lucide:database', text: 'DATA GOVERNANCE' },
  { icon: 'lucide:sliders', text: 'LLM FINE-TUNING' },
  { icon: 'lucide:trending-up', text: 'PREDICTIVE ANALYTICS' },
  { icon: 'lucide:shield-check', text: 'ETHICAL COMPLIANCE' },
  { icon: 'lucide:zap', text: 'PROCESS AUTOMATION' },
  { icon: 'lucide:server', text: 'CLOUD INFRASTRUCTURE' },
];

function TickerItem({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-3 text-white/40 text-[11px] tracking-[0.2em] uppercase font-semibold font-sans">
      <iconify-icon icon={icon} className="w-4 h-4 text-white/30" width="16" stroke-width="2" />
      {text}
    </div>
  );
}

export function ScrollingTicker() {
  return (
    <section className="border-white/[0.03] overflow-hidden bg-[#050505]/50 border-y py-6 backdrop-blur-sm relative z-20 w-full mb-32">
      {/* Mask to fade edges */}
      <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-[#050505] to-transparent z-10" />
      <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-[#050505] to-transparent z-10" />
      
      <div className="animate-scroll">
        {/* Group 1 */}
        <div className="flex items-center gap-16 px-8 whitespace-nowrap">
          {tickerItems.map((item, idx) => (
            <TickerItem key={`group1-${idx}`} icon={item.icon} text={item.text} />
          ))}
        </div>

        {/* Group 2 (Duplicate) */}
        <div className="flex items-center gap-16 px-8 whitespace-nowrap">
          {tickerItems.map((item, idx) => (
            <TickerItem key={`group2-${idx}`} icon={item.icon} text={item.text} />
          ))}
        </div>
      </div>
    </section>
  );
}

