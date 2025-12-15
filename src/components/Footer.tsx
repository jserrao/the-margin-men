export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-6 gap-10 md:gap-8">
        <div className="col-span-2">
          <a href="#" className="text-white text-lg font-medium tracking-tighter flex items-center gap-2 mb-6">
            <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-black rounded-full" />
            </div>
            NEXUS
          </a>
          <p className="text-xs text-neutral-500 max-w-xs leading-relaxed">
            Designing the cognitive layer for the modern enterprise. Built in San Francisco.
          </p>
        </div>

        <div>
          <h5 className="text-sm font-medium text-white mb-4">Product</h5>
          <ul className="space-y-3 text-xs text-neutral-500">
            <li><a href="#" className="hover:text-white transition-colors">Intelligence</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Connectors</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-sm font-medium text-white mb-4">Company</h5>
          <ul className="space-y-3 text-xs text-neutral-500">
            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-sm font-medium text-white mb-4">Resources</h5>
          <ul className="space-y-3 text-xs text-neutral-500">
            <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-sm font-medium text-white mb-4">Social</h5>
          <div className="flex gap-4">
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">
              <iconify-icon icon="lucide:twitter" width="16" />
            </a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">
              <iconify-icon icon="lucide:github" width="16" />
            </a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">
              <iconify-icon icon="lucide:linkedin" width="16" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-neutral-600">© 2024 Nexus AI Consulting Inc. All rights reserved.</p>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-xs text-neutral-500 font-mono">All systems operational</span>
        </div>
      </div>
    </footer>
  );
}

