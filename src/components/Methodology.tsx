export function Methodology() {
  return (
    <section
      id="process"
      className="max-w-7xl mx-auto px-6 mt-32 relative z-10"
    >
      <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
        <div>
          <h2 className="font-baskerville text-3xl md:text-4xl font-medium text-white tracking-tight mb-4 leading-normal">
            How we write software is changing quickly. <br />
            Is your organization prepared?
          </h2>
          <p className="text-neutral-400 text-lg font-light">
            Many SaaS businesses reporting 70–80% gross margins are structurally
            unprepared for a world where real margins normalize closer to
            30–40%. We help companies redesign their financial and operating
            models before the compression happens. Watch famous investor Gavin
            Baker, Managing Partner at Atreides Management, explain the margin
            trap we help you avoid.
          </p>
        </div>
      </div>

      <div className="relative border-l border-white/10 ml-4 md:ml-0 md:border-l-0 md:flex md:justify-between gap-8 space-y-12 md:space-y-0">
        <div className="w-full aspect-video rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/cmUo4841KQw?si=eRJ40nLnKE1Osu91&amp;start=4295"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <p className="text-neutral-400 text-lg font-light mt-4 md:px-0 px-6">
        Clip from{' '}
        <a
          href="https://open.spotify.com/show/22fi0RqfoBACCuQDv97wFO?si=0cbd8a9b7fa74050"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Invest Like The Best, hosted by Patrick O'Shaughnessy
        </a>
        , great podcast - watch the whole thing!
      </p>
    </section>
  );
}
