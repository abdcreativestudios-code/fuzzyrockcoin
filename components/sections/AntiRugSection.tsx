'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { CheckCircle2, Shield, Info } from 'lucide-react';
import Link from 'next/link';
import { technicalTrustIndicators } from '@/lib/tokenData';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function AntiRugSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-gray-900 to-cyan-900/20" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="h-12 w-12 text-emerald-400" />
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Technical Trust Layer
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Verified on-chain security measures that protect the community
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gray-900/50 backdrop-blur-sm border-gray-800 shadow-lg">
            <div className="grid md:grid-cols-2 gap-4">
              <TooltipProvider>
                {technicalTrustIndicators.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="p-4 rounded-lg bg-gradient-to-r from-emerald-900/20 to-gray-900/50 border border-emerald-500/20 hover:border-emerald-500/40 transition-all crystal-shimmer"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-white text-sm">{item.item}</h3>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="h-3 w-3 text-gray-400 hover:text-emerald-400 transition-colors" />
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs bg-gray-800 border-gray-700">
                              <p className="text-xs text-gray-300">{item.tooltip}</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                            item.status === 'verified'
                              ? 'bg-emerald-500/20 text-emerald-400'
                              : 'bg-blue-500/20 text-blue-400'
                          }`}>
                            {item.status}
                          </span>
                          {item.proof && (
                            <Link
                              href={item.proof}
                              className="text-xs text-cyan-400 hover:text-cyan-300 underline"
                            >
                              Proof
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </TooltipProvider>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-6 p-4 bg-blue-900/20 rounded-lg border border-blue-500/30"
            >
              <p className="text-sm text-blue-200">
                <span className="font-bold">Note:</span> All security measures are verifiable on-chain.
                Always verify using official blockchain explorers and links from the official website.
              </p>
            </motion.div>
          </Card>
        </div>
      </div>
    </section>
  );
}
