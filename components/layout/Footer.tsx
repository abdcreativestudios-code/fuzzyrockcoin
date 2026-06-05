import Link from 'next/link';
import { Send, Video } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';
import { CoinIcon } from '@/components/assets/CoinIcon';

// Custom SVG for the official X logo
const XIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <CoinIcon className="h-10 w-10" />
              <div>
                <span className="font-bold text-xl text-auto">{siteConfig.name}</span>
                <p className="text-cyan-400 text-sm font-bold">{siteConfig.ticker}</p>
              </div>
            </div>
            <p className="text-auto-secondary text-sm">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-auto">Navigate</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-auto-secondary hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><Link href="/token" className="text-auto-secondary hover:text-cyan-400 transition-colors">Token</Link></li>
              <li><Link href="/community" className="text-auto-secondary hover:text-cyan-400 transition-colors">Community</Link></li>
              <li><Link href="/transparency" className="text-auto-secondary hover:text-cyan-400 transition-colors">Transparency</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-auto">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/brand" className="text-auto-secondary hover:text-cyan-400 transition-colors">Brand</Link></li>
              <li><Link href="/faq" className="text-auto-secondary hover:text-cyan-400 transition-colors">FAQ</Link></li>
              <li><Link href="/legal" className="text-auto-secondary hover:text-cyan-400 transition-colors">Legal</Link></li>
              <li><Link href="/press" className="text-auto-secondary hover:text-cyan-400 transition-colors">Press Kit</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-auto">Community</h3>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-cyan-600 flex items-center justify-center transition-colors"
              >
                <XIcon className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-cyan-600 flex items-center justify-center transition-colors"
              >
                <Send className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-cyan-600 flex items-center justify-center transition-colors"
              >
                <Video className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-auto-secondary">
            <p>&copy; 2026 {siteConfig.name}. Built for culture.</p>
            <p className="text-xs max-w-md text-center md:text-right">
              Not financial advice. Participation is voluntary. Token may lose value. Always verify using official links.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
