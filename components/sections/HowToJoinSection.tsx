'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, FileText, Wallet, Shield } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';

const steps = [
  {
    icon: Users,
    title: 'Follow Socials',
    description: 'Join our community on Twitter, Telegram, and TikTok to stay updated.',
  },
  {
    icon: FileText,
    title: 'Read Disclosures',
    description: 'Review our transparency page and legal disclosures before participating.',
  },
  {
    icon: Wallet,
    title: 'Set Up Wallet',
    description: 'Get a Solana wallet like Phantom or Solflare to hold the token.',
  },
  {
    icon: Shield,
    title: 'Use Official Links Only',
    description: 'Always verify contract addresses and links from official sources.',
  },
];

export function HowToJoinSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            How to Join
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four simple steps to get started
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full bg-white border-cyan-200 hover:shadow-lg transition-shadow relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
                <div className="mt-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-100 to-blue-100 flex items-center justify-center mb-4">
                    <step.icon className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Card className="p-6 bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
            <div className="flex items-start gap-3">
              <Shield className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-red-900 mb-2">Scam Warning</h3>
                <p className="text-sm text-red-800 mb-3">
                  Beware of impersonators and fake contracts. Always verify links from our official website
                  and social media channels. Never share your private keys or seed phrases with anyone.
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-red-300 text-red-700 hover:bg-red-100"
                >
                  <Link href="/legal">Read Safety Guidelines</Link>
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
          >
            <Link href={siteConfig.social.telegram}>
              Join the Community Now
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
