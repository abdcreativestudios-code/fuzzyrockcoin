'use client';

import { motion } from 'framer-motion';
import { Video, Users, TrendingUp, Heart } from 'lucide-react';

const steps = [
  {
    icon: Video,
    title: 'Viral TikTok Discovery',
    description: 'Real product gains organic attention',
  },
  {
    icon: Users,
    title: 'Meme Community Growth',
    description: 'Culture-driven token participation',
  },
  {
    icon: TrendingUp,
    title: 'Brand Awareness Expansion',
    description: 'Both ecosystems benefit',
  },
  {
    icon: Heart,
    title: 'Community Support',
    description: 'Optional community initiatives',
  },
];

export function FlywheelInfographic() {
  return (
    <div className="relative max-w-4xl mx-auto py-12">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-4 border-dashed border-cyan-300 opacity-20" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.5,
              }}
              className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center mb-4 shadow-lg"
            >
              <step.icon className="h-10 w-10 text-white" />
            </motion.div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-cyan-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {index + 1}. {step.title}
              </h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-xs text-gray-500 mt-8 max-w-2xl mx-auto">
        Participation in the token does not guarantee any specific outcome. The flywheel represents
        community momentum, not financial performance.
      </p>
    </div>
  );
}
