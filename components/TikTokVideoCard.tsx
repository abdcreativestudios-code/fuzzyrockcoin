'use client';

import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Play, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface TikTokVideoCardProps {
  url: string;
  index: number;
}

export function TikTokVideoCard({ url, index }: TikTokVideoCardProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [embedFailed, setEmbedFailed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const embedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || typeof window === 'undefined') return;

    let timeoutId: NodeJS.Timeout;
    let scriptLoadAttempted = false;

    const loadTikTokEmbed = () => {
      try {
        const existingScript = document.getElementById('tiktok-embed-script');

        if (!existingScript && !scriptLoadAttempted) {
          scriptLoadAttempted = true;
          const script = document.createElement('script');
          script.id = 'tiktok-embed-script';
          script.src = 'https://www.tiktok.com/embed.js';
          script.async = true;
          script.defer = true;

          script.onload = () => {
            setIsLoading(false);
            if ((window as any).tiktok?.embed) {
              try {
                (window as any).tiktok.embed();
              } catch (e) {
                console.error('TikTok embed error:', e);
                setEmbedFailed(true);
              }
            }
          };

          script.onerror = () => {
            console.error('Failed to load TikTok embed script');
            setEmbedFailed(true);
            setIsLoading(false);
          };

          document.body.appendChild(script);

          timeoutId = setTimeout(() => {
            if (isLoading) {
              setEmbedFailed(true);
              setIsLoading(false);
            }
          }, 5000);
        } else if (existingScript) {
          if ((window as any).tiktok?.embed) {
            try {
              (window as any).tiktok.embed();
              setIsLoading(false);
            } catch (e) {
              console.error('TikTok embed error:', e);
              setEmbedFailed(true);
              setIsLoading(false);
            }
          } else {
            timeoutId = setTimeout(() => {
              if ((window as any).tiktok?.embed) {
                try {
                  (window as any).tiktok.embed();
                  setIsLoading(false);
                } catch (e) {
                  setEmbedFailed(true);
                  setIsLoading(false);
                }
              } else {
                setEmbedFailed(true);
                setIsLoading(false);
              }
            }, 2000);
          }
        }
      } catch (error) {
        console.error('TikTok embed initialization error:', error);
        setEmbedFailed(true);
        setIsLoading(false);
      }
    };

    loadTikTokEmbed();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isMounted, isLoading]);

  const handleCardClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (!isMounted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
      >
        <Card className="aspect-[9/16] bg-gray-900/50 backdrop-blur-sm border-gray-800 overflow-hidden">
          <div className="w-full h-full flex items-center justify-center">
            <div className="animate-pulse">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400/20 to-cyan-400/20" />
            </div>
          </div>
        </Card>
      </motion.div>
    );
  }

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
      >
        <Card className="aspect-[9/16] bg-gray-900/50 backdrop-blur-sm border-gray-800 overflow-hidden">
          <div className="w-full h-full flex flex-col items-center justify-center gap-4">
            <motion.div
              className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400/30 to-cyan-400/30 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Play className="h-8 w-8 text-emerald-400" />
            </motion.div>
            <p className="text-gray-400 text-sm">Loading video...</p>
          </div>
        </Card>
      </motion.div>
    );
  }

  if (embedFailed) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
      >
        <Card
          className="aspect-[9/16] bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer group relative overflow-hidden"
          onClick={handleCardClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />

          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              boxShadow: isHovered
                ? '0 0 40px rgba(16, 185, 129, 0.4), inset 0 0 30px rgba(16, 185, 129, 0.1)'
                : '0 0 0px rgba(16, 185, 129, 0)',
            }}
            transition={{ duration: 0.3 }}
            style={{ borderRadius: '0.5rem' }}
          />

          <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
            <motion.div
              className="w-20 h-20 mb-4 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center"
              animate={{
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <Play className="h-10 w-10 text-gray-900 fill-gray-900" />
            </motion.div>
            <p className="text-white font-bold text-lg mb-2">Watch on TikTok</p>
            <p className="text-gray-400 text-sm">Real reactions. Real crunch.</p>
            <div className="mt-4 flex items-center gap-2 text-emerald-400 text-sm">
              <ExternalLink className="h-4 w-4" />
              <span>Tap to view</span>
            </div>
          </div>
        </Card>
      </motion.div>
    );
  }

  const videoId = url.split('/').pop()?.replace(/[^a-zA-Z0-9]/g, '') || '';

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <Card className="aspect-[9/16] bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden relative">
        <motion.div
          className="absolute inset-0 pointer-events-none z-10"
          animate={{
            boxShadow: isHovered
              ? '0 0 40px rgba(16, 185, 129, 0.6), inset 0 0 30px rgba(16, 185, 129, 0.15)'
              : '0 0 0px rgba(16, 185, 129, 0)',
          }}
          transition={{ duration: 0.3 }}
          style={{ borderRadius: '0.5rem' }}
        />

        <motion.div
          ref={embedRef}
          className="w-full h-full flex items-center justify-center"
          animate={{
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <blockquote
            className="tiktok-embed"
            cite={url}
            data-video-id={videoId}
            style={{
              maxWidth: '100%',
              minWidth: '100%',
              margin: '0',
              padding: '0'
            }}
          >
            <section>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={url}
                className="text-emerald-400 hover:text-emerald-300"
              >
                View on TikTok
              </a>
            </section>
          </blockquote>
        </motion.div>

        <motion.button
          className="absolute bottom-4 right-4 z-30 bg-emerald-500/90 hover:bg-emerald-400 text-gray-900 rounded-full p-3 transition-all duration-200"
          onClick={handleCardClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Open TikTok video in new tab"
        >
          <ExternalLink className="h-5 w-5" />
        </motion.button>
      </Card>
    </motion.div>
  );
}
