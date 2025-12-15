export function CTASection() {
  return (
    <section className="max-w-4xl mx-auto px-6 mt-32 mb-20 relative z-10">
      <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white p-12 md:p-20 text-center">
        {/* Background decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-linear-to-b from-blue-500/10 to-transparent pointer-events-none" />

        <h2 className="font-baskerville relative z-10 text-4xl md:text-5xl font-medium text-black tracking-tighter mb-6">
          Talk to the Experts
        </h2>
        <img
          src="/images/the-margin-men.jpg"
          alt="The Margin Men"
          className="h-24 md:h-48 w-auto mx-auto mb-6"
        />
        <p className="relative z-10 text-lg text-black mb-10 max-w-lg mx-auto font-light">
          John Serrao and Jeffrey Hoffman have been working with enterprise
          clients for a combined 40 years. Let us help you defend your margins.
        </p>

        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-neutral-200 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
