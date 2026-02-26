'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Video, Eye, MessageSquare, Globe } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';
import TikTokCard from '@/components/TikTokCard';
import TikTokModal from '@/components/TikTokModal';

interface TikTokData {
  videoId: string;
  canonicalUrl: string;
  thumbnail_url?: string;
  title?: string;
  author_name?: string;
}

export function TikTokEngineSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentData, setCurrentData] = useState<TikTokData | null>(null);

  const tiktokVideos = [
    { id: 'vid1', url: 'https://vm.tiktok.com/ZNRyT1m9U/' },
    { id: 'vid2', url: 'https://vm.tiktok.com/ZNRyT8UoQ/' },
    { id: 'vid3', url: 'https://vm.tiktok.com/ZNRyTjanT/' },
  ];

  const handlePlay = (data: TikTokData) => {
    setCurrentData(data);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const metrics = [
    {
      icon: Eye,
      label: 'Total TikTok Views',
      value: siteConfig.tiktokEngine.metrics.totalViews,
      gradient: 'from-emerald-500 to-cyan-500',
    },
    {
      icon: Video,
      label: 'Viral Videos Created',
      value: siteConfig.tiktokEngine.metrics.viralVideos,
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: MessageSquare,
      label: 'Community Posts',
      value: siteConfig.tiktokEngine.metrics.communityPosts,
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      icon: Globe,
      label: 'Countries Reached',
      value: siteConfig.tiktokEngine.metrics.countriesReached,
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-primary text-auto mb-4">
            See Fuzzy Rock In Action
          </h2>
          <p className="text-xl text-auto-secondary max-w-2xl mx-auto">
            Real reactions. Real crunch. Real customers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-emerald-500/50 transition-all duration-300 crystal-shimmer">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${metric.gradient} flex items-center justify-center mb-4`}>
                  <metric.icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-sm text-auto-muted mb-2">{metric.label}</p>
                <p className="text-3xl font-black text-auto">{metric.value}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiktokVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TikTokCard url={video.url} videoId={video.id} onPlay={handlePlay} />
            </motion.div>
          ))}
        </div>
      </div>

      <TikTokModal
        isOpen={modalOpen}
        onClose={handleClose}
        data={currentData}
      />
    </section>
  );
}
