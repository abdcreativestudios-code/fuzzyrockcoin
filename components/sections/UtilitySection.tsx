'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Trophy, ShoppingBag, Vote, Zap } from 'lucide-react';

const utilities = [
  {
    icon: Trophy,
    title: 'Meme Missions & Badges',
    description: 'Participate in weekly meme challenges and earn digital badges for creativity and engagement.',
  },
  {
    icon: ShoppingBag,
    title: 'Limited Product Drops',
    description: 'Holder access to exclusive Fuzzy Rock merch and limited-edition product releases.',
  },
  {
    icon: Vote,
    title: 'Community Voting',
    description: 'Have a say in future merch designs, memes, and community initiatives.',
  },
  {
    icon: Zap,
    title: 'TikTok Brand Challenges',
    description: 'Join official brand challenges and showcase your creativity to the community.',
  },
];

export function UtilitySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Community Perks
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built for participation, not promises
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {utilities.map((utility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full bg-gradient-to-br from-cyan-50 to-white border-cyan-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <utility.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {utility.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {utility.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-gray-500 mt-8 max-w-2xl mx-auto"
        >
          Perks are subject to availability and community participation. No guaranteed value or returns.
          Participation is voluntary and for community engagement purposes.
        </motion.p>
      </div>
    </section>
  );
}
