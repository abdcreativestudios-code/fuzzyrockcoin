'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/siteConfig';
import { OrbitingCoins } from '@/components/assets/OrbitingCoins';
import { Sparkles, FloatingParticles } from '@/components/assets/Sparkles';
import { Shield, Lock, TrendingUp, Zap } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-30" />
      <FloatingParticles count={30} />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                {siteConfig.ticker} • TikTok Powered
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-7xl font-black text-auto text-readable mb-6 leading-tight"
            >
              {siteConfig.hero.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-auto-secondary text-readable-soft mb-8 leading-relaxed"
            >
              {siteConfig.hero.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button
                asChild
                size="lg"
                className="glow-button bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white text-lg px-8 py-6 h-auto shadow-lg"
              >
                <Link href={siteConfig.social.telegram}>
                  {siteConfig.hero.primaryCTA}
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-emerald-500/50 hover:border-emerald-500 text-white hover:bg-emerald-500/10 text-lg px-8 py-6 h-auto"
              >
                <Link href="#global-spread">
                  {siteConfig.hero.secondaryCTA}
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {siteConfig.trustSignals.map((signal, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-auto-secondary"
                >
                  {index === 0 && <Shield className="h-4 w-4 text-emerald-400" />}
                  {index === 1 && <Lock className="h-4 w-4 text-emerald-400" />}
                  {index === 2 && <TrendingUp className="h-4 w-4 text-emerald-400" />}
                  {index === 3 && <Zap className="h-4 w-4 text-emerald-400" />}
                  <span className="font-medium text-readable-soft">{signal}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative flex items-center justify-center min-h-[500px] md:min-h-[600px]">
              <div
                className="absolute inset-0 -z-10"
                style={{
                  background: 'radial-gradient(circle, rgba(0,255,163,0.15) 0%, rgba(0,255,163,0.05) 40%, transparent 70%)',
                  filter: 'blur(40px)',
                  transform: 'scale(1.2)'
                }}
              />

              <div className="relative w-80 h-80 md:w-[480px] md:h-[480px]">
                <div className="absolute inset-0 z-0 hidden md:block">
                  <OrbitingCoins count={4} />
                </div>

                <div className="absolute inset-0 z-0 block md:hidden">
                  <OrbitingCoins count={3} />
                </div>

                <motion.div
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative z-10 flex items-center justify-center"
                  style={{
                    width: 'clamp(280px, 50vw, 500px)',
                    margin: '0 auto'
                  }}
                >
                  <div className="relative inline-block w-full">
                    <Image
                      src="/b9ff28fc-313c-4761-99fd-42ad922fe87e.png"
                      alt="Captain Fuzz - The Fuzzy Coin Mascot"
                      width={500}
                      height={500}
                      priority
                      className="w-full h-auto"
                      style={{
                        display: 'block'
                      }}
                    />
                  </div>
                </motion.div>
              </div>

              <Sparkles />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
