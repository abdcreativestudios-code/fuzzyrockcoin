"use client";

import { useState, useEffect } from "react";
import { Play, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface TikTokData {
  videoId: string;
  canonicalUrl: string;
  thumbnail_url?: string;
  title?: string;
  author_name?: string;
}

interface TikTokCardProps {
  url: string;
  videoId: string;
  onPlay: (data: TikTokData) => void;
}

export default function TikTokCard({ url, videoId, onPlay }: TikTokCardProps) {
  const [data, setData] = useState<TikTokData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTikTokData = async () => {
      try {
        const resolveResponse = await fetch(`/api/tiktok/resolve?url=${encodeURIComponent(url)}`);

        if (!resolveResponse.ok) {
          throw new Error('Failed to resolve TikTok URL');
        }

        const resolveData = await resolveResponse.json();
        const { videoId, canonicalUrl } = resolveData;

        const oembedResponse = await fetch(`/api/tiktok/oembed?url=${encodeURIComponent(canonicalUrl)}`);

        let oembedData: any = {};
        if (oembedResponse.ok) {
          oembedData = await oembedResponse.json();
        }

        setData({
          videoId: videoId,
          canonicalUrl,
          thumbnail_url: oembedData.thumbnail_url,
          title: oembedData.title,
          author_name: oembedData.author_name,
        });
        setError(false);
      } catch (err) {
        console.error('Error fetching TikTok data:', err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTikTokData();
  }, [url]);

  const handleClick = () => {
    if (data) {
      onPlay(data);
    }
  };

  if (isLoading) {
    return (
      <div className="relative overflow-hidden rounded-2xl bg-gray-900/50 border border-gray-800 aspect-[9/16] max-h-[600px]">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/50 via-gray-700/50 to-gray-800/50 animate-pulse" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border-4 border-[#00FFA3]/20 border-t-[#00FFA3] animate-spin" />
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[9/16] max-h-[600px]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-800 group-hover:border-[#00FFA3]/50 transition-all duration-300">
          <div className="absolute inset-0 flex items-center justify-center">
            <Play className="w-20 h-20 text-gray-600" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
            <p className="text-gray-400 text-sm">Tap to play on TikTok</p>
          </div>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10"
        />
      </motion.div>
    );
  }

  const thumbnailUrl = data.thumbnail_url;
  const author = data.author_name || "";

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[9/16] max-h-[600px]"
      onClick={handleClick}
    >
      <div className="absolute inset-0 bg-gray-900/80 border border-gray-800 group-hover:border-[#00FFA3]/50 group-hover:shadow-[0_0_30px_rgba(0,255,163,0.3)] transition-all duration-300">
        {thumbnailUrl ? (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${thumbnailUrl})` }}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <Play className="w-20 h-20 text-gray-600" />
          </div>
        )}

        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-[#00FFA3]/10 via-transparent to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-20 h-20 rounded-full bg-[#00FFA3] flex items-center justify-center shadow-[0_0_30px_rgba(0,255,163,0.5)] group-hover:shadow-[0_0_50px_rgba(0,255,163,0.8)] transition-all duration-300"
          >
            <Play className="w-10 h-10 text-black fill-black ml-1" />
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
          <h3 className="text-white font-bold text-lg mb-1 line-clamp-2">
            Watch the reaction
          </h3>
          <p className="text-gray-300 text-sm line-clamp-1">
            {author && `${author} • `}Tap to play
          </p>
        </div>
      </div>

      <a
        href={data.canonicalUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
        <ExternalLink className="w-4 h-4 text-white" />
      </a>
    </motion.div>
  );
}
