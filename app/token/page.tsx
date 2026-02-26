'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Check, ExternalLink, AlertTriangle } from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '@/lib/siteConfig';
import { TokenStatCard } from '@/components/TokenStatCard';
import { TrendingUp, Users, DollarSign, Activity } from 'lucide-react';
import { mockTokenData, securityChecklist } from '@/lib/tokenData';
import { LegalModal } from '@/components/layout/LegalModal';
import Link from 'next/link';

export default function TokenPage() {
  const [copied, setCopied] = useState(false);
  const [showLegalModal, setShowLegalModal] = useState(false);
  const [pendingLink, setPendingLink] = useState('');

  const handleCopy = async () => {
    await navigator.clipboard.writeText(siteConfig.token.contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExternalLink = (url: string) => {
    setPendingLink(url);
    setShowLegalModal(true);
  };

  const handleAcceptLegal = () => {
    if (pendingLink) {
      window.open(pendingLink, '_blank');
      setShowLegalModal(false);
      setPendingLink('');
    }
  };

  return (
    <main className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
              Token Details
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              All the information you need in one place
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-8">
            <Card className="p-8 bg-white border-cyan-200 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contract Information</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Token Name</p>
                  <p className="text-2xl font-bold text-gray-900">{siteConfig.token.name}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Ticker</p>
                  <p className="text-2xl font-bold text-cyan-600">{siteConfig.token.ticker}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Blockchain</p>
                  <p className="text-xl font-semibold text-gray-900">{siteConfig.token.chain}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Decimals</p>
                  <p className="text-xl font-semibold text-gray-900">{siteConfig.token.decimals}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Total Supply</p>
                  <p className="text-xl font-semibold text-gray-900">{siteConfig.token.totalSupply}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Taxes</p>
                  <p className="text-xl font-semibold text-green-600">{siteConfig.token.taxes}</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-gray-600 text-sm mb-2">Contract Address</p>
                <div className="flex gap-2 flex-wrap">
                  <code className="flex-1 bg-gray-100 px-4 py-3 rounded-lg font-mono text-sm break-all border border-gray-200">
                    {siteConfig.token.contractAddress}
                  </code>
                  <Button
                    onClick={handleCopy}
                    variant="outline"
                    className="border-cyan-500 text-cyan-600 hover:bg-cyan-50"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 mr-2" />
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
              </div>

              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800">
                  Always verify the contract address from official sources. Beware of scams and impersonators.
                </p>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <TokenStatCard
                icon={DollarSign}
                label="Price"
                value={mockTokenData.price}
                delay={0}
              />
              <TokenStatCard
                icon={TrendingUp}
                label="Market Cap"
                value={mockTokenData.marketCap}
                delay={0.1}
              />
              <TokenStatCard
                icon={Users}
                label="Holders"
                value={mockTokenData.holders}
                delay={0.2}
              />
              <TokenStatCard
                icon={Activity}
                label="24h Volume"
                value={mockTokenData.volume24h}
                delay={0.3}
              />
            </div>

            <Card className="p-8 bg-white border-green-200 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Security Checklist</h2>
              <div className="space-y-3">
                {securityChecklist.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${item.status === 'verified' ? 'bg-green-500' : 'bg-blue-500'}`}></div>
                      <span className="font-semibold text-gray-900">{item.item}</span>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                      item.status === 'verified'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-gray-50 to-white border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to Trade</h2>
              <p className="text-gray-600 mb-6">
                Access Fuzzy Rock through these official decentralized exchanges
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => handleExternalLink(siteConfig.dex.raydium)}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                >
                  Trade on Raydium
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  onClick={() => handleExternalLink(siteConfig.dex.jupiter)}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                >
                  Trade on Jupiter
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-800">
                  <span className="font-bold">Risk Warning:</span> Trading is highly speculative. You may lose your
                  entire participation value. Always verify contract addresses and use official links only.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-blue-50 border-blue-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Need More Information?</h2>
              <p className="text-gray-600 mb-6">
                Explore transparency reports, community guidelines, and legal disclosures
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="outline" className="border-blue-300 hover:bg-blue-100">
                  <Link href="/transparency">View Transparency</Link>
                </Button>
                <Button asChild variant="outline" className="border-blue-300 hover:bg-blue-100">
                  <Link href="/legal">Read Legal Disclosures</Link>
                </Button>
                <Button asChild variant="outline" className="border-blue-300 hover:bg-blue-100">
                  <Link href="/faq">Browse FAQ</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <LegalModal
        open={showLegalModal}
        onOpenChange={setShowLegalModal}
        onAccept={handleAcceptLegal}
        title="Trading Disclosure"
      />
    </main>
  );
}
