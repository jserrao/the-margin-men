import { Link } from 'waku';

interface NavigationProps {
  onChatOpen?: () => void;
}

export function Navigation({ onChatOpen }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-white/95 glass-panel">
      <div className="max-w-7xl mx-auto px-6 h-50 sm:h-26 flex items-center justify-center sm:justify-between flex-col sm:flex-row">
        <Link
          to="/"
          className="text-black text-lg font-medium tracking-tighter flex items-center flex-row gap-2"
        >
          <img
            src="/images/the-margin-men.jpg"
            alt="The Margin Men"
            className="h-24 w-auto"
          />
          <span className="text-2xl font-baskerville">The Margin Men</span>
        </Link>

        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          <button
            onClick={onChatOpen}
            className="cursor-pointer w-full sm:w-auto h-12 px-8 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-500/80 transition-all flex items-center justify-center gap-2"
          >
            Book Consultation
          </button>
        </div>
      </div>
    </nav>
  );
}
