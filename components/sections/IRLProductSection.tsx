'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingBag, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

export function IRLProductSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Want the Real Crunch?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Try the physical Fuzzy Rock product that started it all
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-white to-purple-50 border-purple-200 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative w-64 h-64 mx-auto">
                  <Image
                    src="/image.png"
                    alt="Captain Fuzz - The Fuzzy Coin Mascot"
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
              </motion.div>

              <div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    The OG Fuzzy Rock Experience
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Discover the mint-flavored crystal candy that went viral on TikTok.
                    Real product, real customers, real culture.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                      Viral TikTok sensation
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                      Thousands of happy customers
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                      Available on major platforms
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                  >
                    <a href={siteConfig.ecommerce.tiktokShop} target="_blank" rel="noopener noreferrer">
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      TikTok Shop
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-purple-300 text-purple-700 hover:bg-purple-50"
                  >
                    <a href={siteConfig.ecommerce.amazon} target="_blank" rel="noopener noreferrer">
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      Amazon
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </div>

                <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-xs text-amber-800">
                    <span className="font-bold">Note:</span> Product purchase is separate from token participation.
                    The physical brand and token are distinct entities in the Fuzzy Rock ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
