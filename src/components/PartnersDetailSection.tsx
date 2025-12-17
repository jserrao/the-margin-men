export function PartnersDetailSection() {
  return (
    <>
      <section id="bios" className="max-w-7xl mx-auto px-6 mt-32 relative z-10">
        <div className="mb-16">
          <h2 className="font-baskerville text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">
            Meet the Margin Men
          </h2>
          <p className="text-neutral-400 text-lg max-w-xl font-light">
            Jeffrey Hoffman and John Serrao offer a wealth of experience in
            consulting clients.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="col-span-1 relative group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 hover:border-white/20 transition-all duration-500">
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="p-8 h-full flex flex-col justify-between relative z-10">
              <div className="mb-8">
                <div className="w-[50%] border-white/10 flex items-center justify-center bg-neutral-800/50 mb-6 text-white">
                  <img
                    src="/images/john.webp"
                    alt="John Serrao"
                    className="w-full"
                  />
                </div>
                <div className="font-baskerville text-3xl font-medium text-white tracking-tight mb-2">
                  John Serrao
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed max-w-sm mb-5">
                  Industry veteran with 15 years of experience building
                  enterprise web applications.
                </p>
                <ul className="text-sm text-neutral-400 leading-relaxed  list-disc list-outside ml-5 space-y-2">
                  <li>
                    Current co-owns and operates{' '}
                    <a
                      href="https://www.thor-studio.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      THOR Studio
                    </a>
                    , a leading web development studio on the cutting edge of AI
                    implementations.
                  </li>
                  <li>
                    Previously CTO at a health-focused startup, founder of a
                    Jolly Green Designs studio and author of Nutrition for Your
                    Fat Toxic Ass.
                  </li>
                  <li>
                    Holds a BS in Economics, BA in Communications and BA in
                    Humanities from the University of Texas at Austin.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2: Interactive UI Elements */}
          <div className="col-span-1 relative group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 hover:border-white/20 transition-all duration-500">
            <div className="p-8 h-full relative z-10">
              <div className="w-[50%] border-white/10 flex items-center justify-center bg-neutral-800/50 mb-6 text-white">
                <img
                  src="/images/jeff.webp"
                  alt="Jeffrey Hoffman"
                  className="w-full"
                />
              </div>
              <div className="font-baskerville text-3xl font-medium text-white tracking-tight mb-2">
                Jeffrey Hoffman
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed max-w-sm mb-5">
                A businessman with 25 years of experience starting, operating,
                advising, and selling businesses.
              </p>
              <ul className="text-sm text-neutral-400 leading-relaxed list-disc list-outside ml-5 space-y-2">
                <li>
                  Owns and operates a{' '}
                  <a
                    href="https://www.420jurist.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    legal practice
                  </a>{' '}
                  focused entirely on cannabis, including licensees in the
                  adult-use cannabis market, patients and practitioners in the
                  medical cannabis space, and cannabis adjacent product and
                  service providers.
                </li>
                <li>
                  Previously a founder of a mobile vending startup, an executive
                  at two sustainability startups which were acquired, a founding
                  partner at a law firm which was acquired, and the founder of a
                  web development studio.
                </li>
                <li>
                  Holds a JD from the University of North Carolina School of Law
                  and a BA in Russian and East European Studies from the
                  University of North Carolina. He is admitted to the bar in New
                  York and North Carolina.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="stats"
        className="max-w-7xl mx-auto px-6 mt-32 relative z-10"
      >
        <div className="mb-16">
          <h2 className="font-baskerville text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">
            You're in Good Company
          </h2>
          <p className="text-neutral-400 text-lg max-w-xl font-light">
            We've worked and consulted with some of the biggest firms in the
            world.
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
