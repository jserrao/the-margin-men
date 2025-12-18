export function SocialProofSection() {
  return (
    <>
      <section
        id="stats"
        className="max-w-7xl mx-auto px-6 mt-32 relative z-10"
      >
        <div className="mb-16">
          <h2 className="font-baskerville text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">
            You're in Good Company
          </h2>
          <p className="text-neutral-400 text-lg max-w-3xl font-light">
            We've worked and consulted with some of the biggest firms in the
            world. We know how to speak to high powered executives about pricing
            strategies.
          </p>
        </div>
      </section>

      <section className="border-y border-white/5 bg-white/[0.02] mt-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="flex items-center justify-center mb-2">
              <img
                src="/images/eop.png"
                alt="Executive Office of the President"
                className="w-50"
              />
            </div>
            <div className="flex items-center justify-center mb-2">
              <img src="/images/ibm.png" alt="IBM" className="w-[75%]" />
            </div>
            <div className="flex items-center justify-center mb-2">
              <img src="/images/bbt.png" alt="BB&T Bank" className="w-50" />
            </div>
            <div className="flex items-center justify-center mb-2">
              <img
                src="/images/unc.png"
                alt="University of North Carolina, Chapel Hill"
                className="w-50"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
