'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Check, Shield, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '@/lib/siteConfig';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function TransparencyPage() {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const handleCopy = async (address: string, key: string) => {
    await navigator.clipboard.writeText(address);
    setCopiedAddress(key);
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  return (
    <main className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-cyan-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="h-12 w-12 text-green-600" />
              <h1 className="text-5xl md:text-6xl font-black text-gray-900">
                Transparency
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trust through radical transparency. All disclosures in one place.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-8">
            <Card className="p-8 bg-white border-green-200 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Token Allocation</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold">Category</TableHead>
                    <TableHead className="font-bold">Percentage</TableHead>
                    <TableHead className="font-bold">Purpose</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-semibold">Liquidity Pool</TableCell>
                    <TableCell className="text-green-600 font-bold">{siteConfig.transparency.allocation.liquidity}</TableCell>
                    <TableCell>DEX liquidity for trading</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Marketing</TableCell>
                    <TableCell className="text-blue-600 font-bold">{siteConfig.transparency.allocation.marketing}</TableCell>
                    <TableCell>Community growth and brand awareness</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Team</TableCell>
                    <TableCell className="text-purple-600 font-bold">{siteConfig.transparency.allocation.team}</TableCell>
                    <TableCell>Development and operations</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>

            <Card className="p-8 bg-white border-cyan-200 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Public Wallet Addresses</h2>
              <p className="text-gray-600 mb-6">
                All treasury and allocation wallets are publicly viewable on the blockchain
              </p>
              <div className="space-y-4">
                {Object.entries(siteConfig.transparency.wallets).map(([key, address]) => (
                  <div key={key} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold text-gray-900 capitalize">{key} Wallet</p>
                      <Button
                        onClick={() => handleCopy(address, key)}
                        variant="ghost"
                        size="sm"
                      >
                        {copiedAddress === key ? (
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
                    <code className="text-xs text-gray-600 break-all block">{address}</code>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-white border-blue-200 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Liquidity Lock Details</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Lock Provider</p>
                  <p className="text-xl font-semibold text-gray-900">{siteConfig.transparency.liquidityLock.provider}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Lock Duration</p>
                  <p className="text-xl font-semibold text-gray-900">{siteConfig.transparency.liquidityLock.duration}</p>
                </div>
              </div>
              <div className="mt-6">
                <Button
                  asChild
                  variant="outline"
                  className="border-blue-300 text-blue-700 hover:bg-blue-50"
                >
                  <a href={siteConfig.transparency.liquidityLock.proof} target="_blank" rel="noopener noreferrer">
                    View Lock Proof
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>

            <Card className="p-8 bg-white border-purple-200 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Governance Overview</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Multi-Signature Treasury</h3>
                  <p className="text-gray-600">
                    Treasury operations require multiple signatures to prevent unilateral actions.
                    This ensures community oversight and prevents rug pulls.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Community Voting</h3>
                  <p className="text-gray-600">
                    Major decisions regarding merch, partnerships, and community initiatives are
                    subject to community input through governance polls.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Public Updates</h3>
                  <p className="text-gray-600">
                    Regular updates on treasury usage, marketing spend, and development progress
                    are shared with the community through official channels.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white border-gray-200 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Security Practices</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Locked Liquidity</p>
                    <p className="text-sm text-gray-600">
                      Liquidity is locked to prevent team from removing funds and ensure trading stability
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Contract Verification</p>
                    <p className="text-sm text-gray-600">
                      Smart contract code is verified on blockchain explorers for public audit
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Public Treasury Wallets</p>
                    <p className="text-sm text-gray-600">
                      All team and marketing wallets are publicly disclosed for community monitoring
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Optional Security Audit</p>
                    <p className="text-sm text-gray-600">
                      Third-party security audit planned to verify contract safety
                    </p>
                  </div>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-amber-50 to-red-50 border-red-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Anti-Scam Warnings</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-red-900 mb-1">Always Verify Contract Addresses</p>
                    <p className="text-sm text-red-800">
                      Only use contract addresses from official website and verified social media accounts.
                      Beware of impersonators and fake tokens.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-red-900 mb-1">Never Share Private Keys</p>
                    <p className="text-sm text-red-800">
                      No team member will ever ask for your private keys or seed phrases. Anyone asking
                      for these is a scammer.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-red-900 mb-1">Use Official Links Only</p>
                    <p className="text-sm text-red-800">
                      Only use DEX links provided on our official website. Phishing sites may look
                      identical to real platforms.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-blue-50 border-blue-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Change Log</h2>
              <p className="text-gray-600 mb-4">
                All significant changes to allocations, policies, or treasury operations will be
                documented here with timestamps.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p><span className="font-semibold">2024-01-01:</span> Initial transparency page published</p>
                <p className="text-xs text-gray-500 mt-4">
                  Updates will be added as they occur. Check back regularly for the latest information.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
