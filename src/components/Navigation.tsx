import { Link } from 'waku';

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-white/95 glass-panel">
      <div className="max-w-7xl mx-auto px-6 h-26 flex items-center justify-between">
        <Link
          to="/"
          className="text-black text-lg font-medium tracking-tighter flex items-center gap-2"
        >
          <img
            src="/images/the-margin-men.png"
            alt="The Margin Men"
            className="h-6 md:h-24 w-auto"
          />
          <span className="text-2xl font-baskerville">The Margin Men</span>
        </Link>

        <div className="flex items-center gap-4">
          <button className="cursor-pointer bg-black text-white text-md font-medium px-4 py-2 rounded-full hover:bg-black/80 transition-colors">
            Book Consultation
          </button>
        </div>
      </div>
    </nav>
  );
}
