"use client";

import { useEffect } from "react";
import { X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TikTokData {
  videoId: string;
  canonicalUrl: string;
  thumbnail_url?: string;
  title?: string;
  author_name?: string;
}

interface TikTokModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: TikTokData | null;
}

export default function TikTokModal({ isOpen, onClose, data }: TikTokModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!data) return null;

  const embedUrl = `https://www.tiktok.com/embed/v2/${data.videoId}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-[500px] max-h-[90vh] bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-4 right-4 z-10 flex gap-2">
              <a
                href={data.canonicalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-sm transition-all duration-200 group"
                title="Open on TikTok"
              >
                <ExternalLink className="w-5 h-5 text-white group-hover:text-[#00FFA3] transition-colors" />
              </a>
              <button
                onClick={onClose}
                className="p-3 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-sm transition-all duration-200 group"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-white group-hover:text-[#00FFA3] transition-colors" />
              </button>
            </div>

            <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
              <iframe
                key={data.videoId}
                src={`${embedUrl}?autoplay=1&t=${Date.now()}`}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
                style={{ border: "none" }}
              />
            </div>

            {data.author_name && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none">
                <p className="text-white text-sm font-medium">
                  {data.author_name}
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
