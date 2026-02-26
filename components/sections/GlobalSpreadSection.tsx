'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Globe2 } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';
import { WorldMap } from '@/components/WorldMap';

function formatTikTokUsers(value?: number): string {
  if (value === undefined || value === 0) return '(updating)';
  return value % 1 === 0 ? `${value}M` : `${value}M`;
}

export function GlobalSpreadSection() {
  const activatedCountries = siteConfig.activatedCountries;
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [chipTooltip, setChipTooltip] = useState<{ visible: boolean; x: number; y: number; country: typeof activatedCountries[0] | null }>({
    visible: false,
    x: 0,
    y: 0,
    country: null
  });

  const totalTikTokUsersM = activatedCountries.reduce((sum, c) => sum + (c.tiktokUsersM || 0), 0);
  const roundedTotal = Math.round(totalTikTokUsersM);

  const handleChipMouseEnter = (country: typeof activatedCountries[0], event: React.MouseEvent) => {
    setHoveredCountry(country.a2);
    setChipTooltip({
      visible: true,
      x: event.clientX,
      y: event.clientY,
      country
    });
  };

  const handleChipMouseMove = (event: React.MouseEvent) => {
    if (chipTooltip.visible) {
      setChipTooltip(prev => ({
        ...prev,
        x: event.clientX,
        y: event.clientY
      }));
    }
  };

  const handleChipMouseLeave = () => {
    setHoveredCountry(null);
    setChipTooltip({
      visible: false,
      x: 0,
      y: 0,
      country: null
    });
  };

  return (
    <section className="py-20 relative overflow-hidden bg-[#0A0E1A]">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-[#0A0E1A] to-gray-900" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {siteConfig.globalSpread.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            {siteConfig.globalSpread.subtitle}
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-[#00FFA3]/10 border-2 border-[#00FFA3]/30 px-8 py-4 rounded-full shadow-lg"
            style={{
              boxShadow: '0 0 30px rgba(0, 255, 163, 0.2)'
            }}
          >
            <Globe2 className="h-6 w-6 text-[#00FFA3]" />
            <span className="text-3xl font-black text-[#00FFA3]">
              {activatedCountries.length}
            </span>
            <span className="text-white font-semibold">Countries Activated</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-7xl mx-auto mb-8"
        >
          <Card className="p-4 md:p-8 bg-[#151923]/80 backdrop-blur-sm border-gray-800/50 shadow-2xl">
            <div className="mb-6 flex items-center justify-center gap-6 text-sm flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-[#00FFA3]"
                     style={{ boxShadow: '0 0 10px rgba(0, 255, 163, 0.5)' }}
                />
                <span className="text-gray-300">Activated</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded border border-gray-700 bg-transparent" />
                <span className="text-gray-300">Not yet activated</span>
              </div>
            </div>

            <div className="relative bg-[#0A0E1A] rounded-lg p-4 md:p-8 border border-gray-800/50">
              <WorldMap
                activatedCountries={activatedCountries}
                onCountryHover={setHoveredCountry}
                hoveredChip={hoveredCountry}
              />
            </div>

            <div className="mt-8" onMouseMove={handleChipMouseMove}>
              <div className="flex flex-wrap justify-center gap-3">
                {activatedCountries.map((country, index) => (
                  <motion.button
                    key={country.a2}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    onMouseEnter={(e) => handleChipMouseEnter(country, e)}
                    onMouseLeave={handleChipMouseLeave}
                    className="px-4 py-2 bg-[#00FFA3]/10 border-2 border-[#00FFA3]/30 rounded-full transition-all duration-300 hover:bg-[#00FFA3]/20 hover:border-[#00FFA3]/50 hover:shadow-lg cursor-pointer"
                    style={{
                      boxShadow: hoveredCountry === country.a2
                        ? '0 0 20px rgba(0, 255, 163, 0.4)'
                        : '0 0 10px rgba(0, 255, 163, 0.1)',
                      transform: hoveredCountry === country.a2 ? 'scale(1.1)' : 'scale(1)'
                    }}
                  >
                    <span className="text-[#00FFA3] font-bold text-sm">
                      {country.a2}
                    </span>
                  </motion.button>
                ))}
              </div>
              <p className="mt-6 text-center text-sm text-gray-400">
                Hover over chips or countries to highlight
              </p>
              <p className="mt-4 text-center text-base text-gray-300">
                Our activated markets represent approximately{' '}
                <span
                  className="font-bold text-[#00FFA3]"
                  style={{
                    textShadow: '0 0 10px rgba(0, 255, 163, 0.4)'
                  }}
                >
                  {roundedTotal}M
                </span>
                {' '}TikTok users worldwide.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>

      <AnimatePresence>
        {chipTooltip.visible && chipTooltip.country && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed z-[9999] pointer-events-none"
            style={{
              left: `${chipTooltip.x}px`,
              top: `${chipTooltip.y}px`,
              transform: 'translateX(-50%) translateY(-100%) translateY(-12px)'
            }}
          >
            <div
              className="bg-[#0A0E1A] border-2 border-[#00FFA3] rounded-lg px-4 py-2 shadow-xl"
              style={{
                boxShadow: '0 0 20px rgba(0, 255, 163, 0.5), 0 4px 6px rgba(0, 0, 0, 0.6)'
              }}
            >
              <p className="text-white font-bold text-sm whitespace-nowrap">{chipTooltip.country.name}</p>
              <p className="text-[#00FFA3] text-xs whitespace-nowrap">Activated via TikTok</p>
              <p className="text-gray-300 text-xs whitespace-nowrap mt-1">
                TikTok users: ~{formatTikTokUsers(chipTooltip.country.tiktokUsersM)}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
