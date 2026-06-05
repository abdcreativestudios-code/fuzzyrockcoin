'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Send, Video, Trophy, Heart } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';
import { ShareWidget } from '@/components/ShareWidget';
import { socialMetrics } from '@/lib/tokenData';

// Custom SVG for the official X logo
const XIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialChannels = [
  {
    icon: XIcon,
    name: 'X',
    handle: '@fuzzyonsol',
    link: siteConfig.social.twitter,
    description: 'Latest updates, memes, and community highlights',
    color: 'bg-black hover:bg-gray-800',
  },
  {
    icon: Send,
    name: 'Telegram',
    handle: 't.me/fuzzycoinsol',
    link: siteConfig.social.telegram,
    description: 'Main community hub for real-time chat',
    color: 'bg-blue-500 hover:bg-blue-600',
  },
  {
    icon: Video,
    name: 'TikTok',
    handle: '@fuzzyonsol',
    link: siteConfig.social.tiktok,
    description: 'Viral content and brand challenges',
    color: 'bg-pink-500 hover:bg-pink-600',
  },
];

const memeGallery = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: `Community Meme #${i + 1}`,
  author: `@fuzzfan${i + 1}`,
}));

export default function CommunityPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
              Join the Community
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Where memes are minted and culture is built
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {socialChannels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-shadow bg-white">
                  <div className="flex flex-col h-full">
                    <div className={`w-12 h-12 rounded-full ${channel.color} flex items-center justify-center mb-4`}>
                      <channel.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{channel.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{channel.handle}</p>
                    <p className="text-sm text-gray-600 mb-4 flex-1">{channel.description}</p>
                    <Button
                      asChild
                      className={`w-full ${channel.color} text-white`}
                    >
                      <a href={channel.link} target="_blank" rel="noopener noreferrer">
                        Join {channel.name}
                      </a>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <p className="text-4xl font-black text-purple-600 mb-2">{socialMetrics.tiktok.followers}</p>
                  <p className="text-gray-600 font-medium">TikTok Followers</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-blue-600 mb-2">{socialMetrics.telegram.members}</p>
                  <p className="text-gray-600 font-medium">Telegram Members</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-cyan-600 mb-2">{socialMetrics.twitter.followers}</p>
                  <p className="text-gray-600 font-medium">X Followers</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Meme Mission of the Week
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {siteConfig.memeOfTheWeek.title}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="relative w-40 h-40">
                      <Image
                        src="/image.png"
                        alt="Captain Fuzz - The Fuzzy Coin Mascot"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </motion.div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Trophy className="h-6 w-6 text-amber-500" />
                    <h3 className="text-2xl font-bold text-gray-900">Current Mission</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-4">{siteConfig.memeOfTheWeek.mission}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <Heart className="h-5 w-5 text-pink-500" />
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Prize:</span> {siteConfig.memeOfTheWeek.prize}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">Deadline:</span> {siteConfig.memeOfTheWeek.deadline}
                  </p>
                  <Button
                    asChild
                    className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                  >
                    <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer">
                      Submit Your Meme
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Community Meme Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Best memes from the Fuzzy Rock community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {memeGallery.map((meme, index) => (
              <motion.div
                key={meme.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-gradient-to-br from-cyan-100 via-purple-100 to-pink-100 flex items-center justify-center">
                    <p className="text-gray-400 text-center px-4">
                      Meme Placeholder<br />
                      <span className="text-sm">Community generated content</span>
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-gray-900">{meme.title}</p>
                    <p className="text-sm text-gray-600">By {meme.author}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="max-w-md mx-auto">
            <ShareWidget />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Ready to Join?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Connect with thousands of community members building the future of Fuzzy Rock
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-lg px-8 py-6 h-auto"
            >
              <a href={siteConfig.social.telegram} target="_blank" rel="noopener noreferrer">
                Join Telegram Community
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
