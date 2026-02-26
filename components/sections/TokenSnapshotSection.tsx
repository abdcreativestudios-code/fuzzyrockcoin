'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Check, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '@/lib/siteConfig';
import Link from 'next/link';

export function TokenSnapshotSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(siteConfig.token.contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-primary text-auto mb-4">
            Token Snapshot
          </h2>
          <p className="text-xl text-auto-secondary max-w-2xl mx-auto">
            All the details in one place
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 border-cyan-500/30">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <div>
                  <p className="text-auto-muted text-sm mb-1">Token Name</p>
                  <p className="text-2xl font-bold text-auto">{siteConfig.token.name}</p>
                </div>
                <div>
                  <p className="text-auto-muted text-sm mb-1">Ticker</p>
                  <p className="text-2xl font-bold text-cyan-400">{siteConfig.token.ticker}</p>
                </div>
                <div>
                  <p className="text-auto-muted text-sm mb-1">Chain</p>
                  <p className="text-xl font-semibold text-auto">{siteConfig.token.chain}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-auto-muted text-sm mb-1">Total Supply</p>
                  <p className="text-2xl font-bold text-auto">{siteConfig.token.totalSupply}</p>
                </div>
                <div>
                  <p className="text-auto-muted text-sm mb-1">Taxes</p>
                  <p className="text-xl font-semibold text-green-400">{siteConfig.token.taxes}</p>
                </div>
                <div>
                  <p className="text-auto-muted text-sm mb-1">Liquidity</p>
                  <p className="text-xl font-semibold text-green-400">Locked</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-6">
              <p className="text-auto-muted text-sm mb-2">Contract Address</p>
              <div className="flex gap-2 flex-wrap">
                <code className="flex-1 bg-gray-900 px-4 py-3 rounded-lg font-mono text-sm break-all text-auto-secondary">
                  {siteConfig.token.contractAddress}
                </code>
                <Button
                  onClick={handleCopy}
                  variant="outline"
                  className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white"
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

            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
              >
                <Link href="/token">
                  View Full Details
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white"
              >
                <Link href="/transparency">
                  See Transparency
                </Link>
              </Button>
            </div>

            <div className="mt-6 p-4 bg-amber-900/20 border border-amber-500/30 rounded-lg">
              <p className="text-xs text-amber-200">
                <span className="font-bold">Disclaimer:</span> Always verify contract addresses from official sources.
                Token participation is voluntary and speculative. No guarantee of value or returns.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
