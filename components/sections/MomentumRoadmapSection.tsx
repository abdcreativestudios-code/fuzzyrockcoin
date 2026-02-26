'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Rocket, Users, TrendingUp, Sparkles, Star } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

const phaseIcons = [Rocket, Users, TrendingUp, Sparkles, Star];

export function MomentumRoadmapSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-primary text-auto mb-4">
            {siteConfig.momentumRoadmap.title}
          </h2>
          <p className="text-xl text-auto-secondary max-w-2xl mx-auto">
            Our vision for expansion and momentum
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-blue-500 to-purple-500 opacity-30 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {siteConfig.momentumRoadmap.phases.map((phase, index) => {
              const Icon = phaseIcons[index];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  <div className="flex-1">
                    <Card className="p-6 bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-emerald-500/50 transition-all crystal-shimmer">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm font-bold text-emerald-400">
                              PHASE {phase.phase}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-auto mb-2">
                            {phase.title}
                          </h3>
                          <p className="text-auto-secondary text-sm leading-relaxed">
                            {phase.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>

                  <div className="relative flex-shrink-0 hidden md:block">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                      className="w-4 h-4 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500"
                    />
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <Card className="p-6 bg-amber-900/20 border-amber-500/30 max-w-4xl mx-auto">
            <p className="text-sm text-amber-200 text-center">
              <span className="font-bold">Important:</span> {siteConfig.momentumRoadmap.disclaimer}
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
