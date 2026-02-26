'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Star, Video, Package, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';
import { brandTraction } from '@/lib/tokenData';

export default function BrandPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
              The Fuzzy Rock Brand
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The viral mint crystal candy that started it all
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="p-8 bg-white">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Fuzzy Rock?</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Fuzzy Rock is a unique mint-flavored crystal candy that took TikTok by storm.
                    With its eye-catching appearance and intense minty crunch, it became an instant
                    viral sensation.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The product delivers a premium sensory experience combining visual appeal,
                    satisfying texture, and bold flavor that keeps customers coming back.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                      <p className="text-gray-700">Intense mint crystal candy</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                      <p className="text-gray-700">Visually stunning appearance</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                      <p className="text-gray-700">Satisfying crunch texture</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                      <p className="text-gray-700">TikTok viral sensation</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex justify-center"
              >
                <div className="relative w-80 h-80">
                  <Image
                    src="/image.png"
                    alt="Captain Fuzz - The Fuzzy Coin Mascot"
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
              </motion.div>
            </div>

            <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">The TikTok Phenomenon</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-purple-500 flex items-center justify-center mb-3">
                    <Video className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-3xl font-black text-purple-600 mb-2">10M+</p>
                  <p className="text-gray-700 font-medium">Video Views</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-pink-500 flex items-center justify-center mb-3">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-3xl font-black text-pink-600 mb-2">4.8/5</p>
                  <p className="text-gray-700 font-medium">Average Rating</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-cyan-500 flex items-center justify-center mb-3">
                    <Package className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-3xl font-black text-cyan-600 mb-2">{brandTraction.monthlyCustomers}</p>
                  <p className="text-gray-700 font-medium">Monthly Customers</p>
                </div>
              </div>
            </Card>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Customer Reviews</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-white border-cyan-200">
                  <div className="flex items-center gap-2 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-3">
                    "The mint flavor is INTENSE! Love the crunch and the way it looks. Definitely living
                    up to the TikTok hype."
                  </p>
                  <p className="text-sm text-gray-600">- Sarah M. (Verified Purchase)</p>
                </Card>

                <Card className="p-6 bg-white border-cyan-200">
                  <div className="flex items-center gap-2 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-3">
                    "These crystals are so cool looking and taste amazing. I keep reordering them.
                    Great conversation starter!"
                  </p>
                  <p className="text-sm text-gray-600">- Mike R. (Verified Purchase)</p>
                </Card>

                <Card className="p-6 bg-white border-cyan-200">
                  <div className="flex items-center gap-2 mb-3">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                    <Star className="h-5 w-5 text-gray-300" />
                  </div>
                  <p className="text-gray-700 italic mb-3">
                    "Really unique product. The mint is strong but in a good way. Shipping was fast
                    and packaging was perfect."
                  </p>
                  <p className="text-sm text-gray-600">- Jessica L. (Verified Purchase)</p>
                </Card>

                <Card className="p-6 bg-white border-cyan-200">
                  <div className="flex items-center gap-2 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-3">
                    "Bought these after seeing them on TikTok. Not disappointed! The crunch is so satisfying
                    and they look incredible."
                  </p>
                  <p className="text-sm text-gray-600">- David K. (Verified Purchase)</p>
                </Card>
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Captain Fuzz Recommends
                </h2>
                <p className="text-gray-700 text-lg">
                  Want to experience the real crunch? Get your Fuzzy Rock crystals today!
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                >
                  <a href={siteConfig.ecommerce.tiktokShop} target="_blank" rel="noopener noreferrer">
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Shop TikTok
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50"
                >
                  <a href={siteConfig.ecommerce.amazon} target="_blank" rel="noopener noreferrer">
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Shop Amazon
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-amber-50 border-amber-200">
              <p className="text-sm text-amber-800">
                <span className="font-bold">Important Note:</span> The physical Fuzzy Rock product and
                the Fuzzy Rock token are separate entities. Product purchases do not grant token benefits,
                and token participation does not grant product discounts or guarantees. These are
                independent operations within the Fuzzy Rock ecosystem.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
