'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Copy, Check, FileText } from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '@/lib/siteConfig';
import { CoinIcon } from '@/components/assets/CoinIcon';

const brandAssets = [
  { name: 'Primary Logo (PNG)', type: 'Logo', size: '2048x2048' },
  { name: 'Logo White Background', type: 'Logo', size: '2048x2048' },
  { name: 'Logo Transparent', type: 'Logo', size: '2048x2048' },
  { name: 'Captain Fuzz Mascot', type: 'Mascot', size: 'Vector SVG' },
  { name: 'Coin Icon', type: 'Icon', size: '512x512' },
  { name: 'Brand Colors', type: 'Palette', size: 'HEX/RGB' },
];

const copySnippets = [
  {
    title: 'One-Line Description',
    text: 'Fuzzy Rock: The crunchiest meme on the internet - a community-first token powered by culture and inspired by a real-world viral brand.'
  },
  {
    title: 'Short Description',
    text: 'Fuzzy Rock is a community-driven memecoin that combines viral meme culture with real-world brand momentum. Backed by a TikTok viral mint crystal candy brand with actual customers and retail presence, Fuzzy Rock prioritizes transparency through public wallets, locked liquidity, and clear disclosures.'
  },
  {
    title: 'Full Description',
    text: 'Fuzzy Rock is a community-first memecoin inspired by a real consumer brand that took TikTok by storm. Unlike typical memecoins, Fuzzy Rock is backed by actual brand traction - a viral mint crystal candy with thousands of customers, verified reviews, and presence on major retail platforms. The token focuses on transparency with public treasury wallets, locked liquidity, and comprehensive disclosures. Community members can participate in meme missions, access limited product drops, and vote on community initiatives. Led by Captain Fuzz, the official mascot, Fuzzy Rock represents where meme culture meets real-world momentum.'
  },
];

export default function PressPage() {
  const [copiedSnippet, setCopiedSnippet] = useState<number | null>(null);

  const handleCopySnippet = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedSnippet(index);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  return (
    <main className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-cyan-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
              Press Kit
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Brand assets, copy snippets, and media resources
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-8">
            <Card className="p-8 bg-white border-cyan-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Brand Assets</h2>
              <p className="text-gray-600 mb-6">
                Download official Fuzzy Rock logos, mascot illustrations, and brand elements
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {brandAssets.map((asset, index) => (
                  <div
                    key={index}
                    className="p-4 border-2 border-gray-200 rounded-lg hover:border-cyan-300 transition-colors"
                  >
                    <FileText className="h-8 w-8 text-cyan-600 mb-2" />
                    <p className="font-semibold text-gray-900 mb-1">{asset.name}</p>
                    <p className="text-sm text-gray-600 mb-3">{asset.type} • {asset.size}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-cyan-300 text-cyan-700 hover:bg-cyan-50"
                      disabled
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4">
                Placeholder assets. Replace with actual downloadable files when available.
              </p>
            </Card>

            <Card className="p-8 bg-white border-purple-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Mascot Preview</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Captain Fuzz</h3>
                  <p className="text-gray-700 mb-4">
                    {siteConfig.mascot.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Personality:</span> {siteConfig.mascot.personality}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Catchphrases:</span>
                    </p>
                    <ul className="list-disc list-inside ml-4 text-sm text-gray-600">
                      {siteConfig.mascot.catchphrases.map((phrase, i) => (
                        <li key={i}>{phrase}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative w-64 h-64">
                    <Image
                      src="/image.png"
                      alt="Captain Fuzz - The Fuzzy Coin Mascot"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white border-green-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Copy Snippets</h2>
              <p className="text-gray-600 mb-6">
                Pre-written descriptions ready to copy and use
              </p>
              <div className="space-y-6">
                {copySnippets.map((snippet, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-gray-900">{snippet.title}</h3>
                      <Button
                        onClick={() => handleCopySnippet(snippet.text, index)}
                        variant="ghost"
                        size="sm"
                      >
                        {copiedSnippet === index ? (
                          <>
                            <Check className="h-4 w-4 mr-2 text-green-600" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4 mr-2" />
                            Copy
                          </>
                        )}
                      </Button>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{snippet.text}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-white border-blue-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Token Details</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><span className="font-semibold">Name:</span> {siteConfig.token.name}</li>
                    <li><span className="font-semibold">Ticker:</span> {siteConfig.token.ticker}</li>
                    <li><span className="font-semibold">Chain:</span> {siteConfig.token.chain}</li>
                    <li><span className="font-semibold">Supply:</span> {siteConfig.token.totalSupply}</li>
                    <li><span className="font-semibold">Taxes:</span> {siteConfig.token.taxes}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Social Channels</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><span className="font-semibold">Twitter:</span> @fuzzyrock</li>
                    <li><span className="font-semibold">Telegram:</span> t.me/fuzzyrock</li>
                    <li><span className="font-semibold">Discord:</span> discord.gg/fuzzyrock</li>
                    <li><span className="font-semibold">TikTok:</span> @fuzzyrock</li>
                    <li><span className="font-semibold">Instagram:</span> @fuzzyrock</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Media Inquiries</h2>
              <p className="text-gray-700 mb-6">
                For press inquiries, interviews, or additional information, please reach out through
                our official channels:
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                >
                  <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer">
                    Contact via Twitter
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-cyan-300 text-cyan-700 hover:bg-cyan-50"
                >
                  <a href={siteConfig.social.telegram} target="_blank" rel="noopener noreferrer">
                    Join Telegram
                  </a>
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-amber-50 border-amber-200">
              <p className="text-sm text-amber-800">
                <span className="font-bold">Media Guidelines:</span> When covering Fuzzy Rock, please
                include appropriate risk disclosures and clarify that token participation is speculative.
                Avoid language suggesting guaranteed returns or investment opportunities. Contact us for
                fact-checking before publication.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
