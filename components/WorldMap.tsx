'use client';

import { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { motion, AnimatePresence } from 'framer-motion';
import { geoCentroid } from 'd3-geo';
import worldData from '@/data/world-110m.json';

const NEON = '#00FFA3';

function formatTikTokUsers(value?: number): string {
  if (value === undefined || value === 0) return '(updating)';
  return value % 1 === 0 ? `${value}M` : `${value}M`;
}

interface WorldMapProps {
  activatedCountries: Array<{ a2: string; a3: string; name: string; tiktokUsersM?: number }>;
  onCountryHover?: (countryCode: string | null) => void;
  hoveredChip?: string | null;
}

function isMainlandFrance(geo: any): boolean {
  try {
    const [lon, lat] = geoCentroid(geo);
    return lon >= -8 && lon <= 12 && lat >= 41 && lat <= 52;
  } catch {
    return false;
  }
}

export function WorldMap({ activatedCountries, onCountryHover, hoveredChip }: WorldMapProps) {
  const [tooltip, setTooltip] = useState<{ visible: boolean; x: number; y: number; name: string; tiktokUsersM?: number }>({
    visible: false,
    x: 0,
    y: 0,
    name: '',
    tiktokUsersM: undefined
  });

  const activeA3Set = new Set(activatedCountries.map(c => c.a3));
  const a3ToCountry = new Map(activatedCountries.map(c => [c.a3, c]));
  const a2ToA3 = new Map(activatedCountries.map(c => [c.a2, c.a3]));

  const currentHoveredA3 = hoveredChip ? a2ToA3.get(hoveredChip) : null;

  const shouldActivateGeo = (geo: any, isoA3: string): boolean => {
    if (!activeA3Set.has(isoA3)) return false;
    if (isoA3 === 'FRA') {
      return isMainlandFrance(geo);
    }
    return true;
  };

  const handleMouseEnter = (geo: any, event: React.MouseEvent) => {
    const isoA3 = geo.properties.ISO_A3 !== '-99' && geo.properties.ISO_A3
      ? geo.properties.ISO_A3
      : (geo.properties.ADM0_A3 || geo.properties.id || geo.id);

    if (shouldActivateGeo(geo, isoA3)) {
      const country = a3ToCountry.get(isoA3);
      if (country) {
        setTooltip({
          visible: true,
          x: event.clientX,
          y: event.clientY,
          name: country.name,
          tiktokUsersM: country.tiktokUsersM
        });
        onCountryHover?.(country.a2);
      }
    }
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (tooltip.visible) {
      setTooltip(prev => ({
        ...prev,
        x: event.clientX,
        y: event.clientY
      }));
    }
  };

  const handleMouseLeave = () => {
    setTooltip({ visible: false, x: 0, y: 0, name: '', tiktokUsersM: undefined });
    onCountryHover?.(null);
  };

  return (
    <div className="relative w-full" onMouseMove={handleMouseMove}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 135,
          center: [10, 15]
        }}
        className="w-full h-auto"
        style={{ maxHeight: '600px' }}
      >
        <Geographies geography={worldData}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isoA3 = geo.properties.ISO_A3 !== '-99' && geo.properties.ISO_A3
                ? geo.properties.ISO_A3
                : (geo.properties.ADM0_A3 || geo.properties.id || geo.id);
              const isActivated = shouldActivateGeo(geo, isoA3);
              const isHighlighted = currentHoveredA3 === isoA3 && isActivated;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={(event) => handleMouseEnter(geo, event)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    default: {
                      fill: isActivated ? NEON : '#070b10',
                      stroke: isActivated ? '#5CFFD1' : '#1b2634',
                      strokeWidth: isActivated ? 0.9 : 0.6,
                      outline: 'none',
                      opacity: isActivated ? 1 : 0.85,
                      cursor: isActivated ? 'pointer' : 'default',
                      filter: isActivated || isHighlighted
                        ? isHighlighted
                          ? 'drop-shadow(0 0 8px rgba(0,255,163,0.5)) drop-shadow(0 0 16px rgba(0,255,163,0.25))'
                          : 'drop-shadow(0 0 6px rgba(0,255,163,0.35)) drop-shadow(0 0 14px rgba(0,255,163,0.18))'
                        : 'none',
                      transition: 'all 0.3s ease'
                    },
                    hover: {
                      fill: isActivated ? NEON : '#070b10',
                      stroke: isActivated ? '#5CFFD1' : '#1b2634',
                      strokeWidth: isActivated ? 1 : 0.6,
                      outline: 'none',
                      opacity: 1,
                      cursor: isActivated ? 'pointer' : 'default',
                      filter: isActivated
                        ? 'drop-shadow(0 0 8px rgba(0,255,163,0.5)) drop-shadow(0 0 16px rgba(0,255,163,0.25))'
                        : 'none'
                    },
                    pressed: {
                      fill: isActivated ? NEON : '#070b10',
                      stroke: isActivated ? '#5CFFD1' : '#1b2634',
                      strokeWidth: isActivated ? 0.9 : 0.6,
                      outline: 'none'
                    }
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      <AnimatePresence>
        {tooltip.visible && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed z-[9999] pointer-events-none"
            style={{
              left: `${tooltip.x}px`,
              top: `${tooltip.y}px`,
              transform: 'translateX(-50%) translateY(-100%) translateY(-12px)'
            }}
          >
            <div
              className="bg-[#0A0E1A] border-2 border-[#00FFA3] rounded-lg px-4 py-2 shadow-xl"
              style={{
                boxShadow: '0 0 20px rgba(0, 255, 163, 0.5), 0 4px 6px rgba(0, 0, 0, 0.6)'
              }}
            >
              <p className="text-white font-bold text-sm whitespace-nowrap">{tooltip.name}</p>
              <p className="text-[#00FFA3] text-xs whitespace-nowrap">Activated via TikTok</p>
              <p className="text-gray-300 text-xs whitespace-nowrap mt-1">
                TikTok users: ~{formatTikTokUsers(tooltip.tiktokUsersM)}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
