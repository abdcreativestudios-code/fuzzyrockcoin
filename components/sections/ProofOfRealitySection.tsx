'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Video, ShoppingBag, Star, Users, TrendingUp, Package } from 'lucide-react';
import { socialMetrics, brandTraction } from '@/lib/tokenData';

export function ProofOfRealitySection() {
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
            Proof of Reality
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real brand. Real customers. Real culture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-6 h-full bg-gradient-to-br from-purple-50 to-white border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center">
                  <Video className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">TikTok Momentum</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Followers</span>
                  <span className="text-2xl font-bold text-purple-600">{socialMetrics.tiktok.followers}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Video Views</span>
                  <span className="text-2xl font-bold text-purple-600">{socialMetrics.tiktok.videoViews}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Engagement</span>
                  <span className="text-2xl font-bold text-purple-600">{socialMetrics.tiktok.engagementRate}</span>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-6 h-full bg-gradient-to-br from-amber-50 to-white border-amber-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Real Customer Proof</h3>
              </div>
              <div className="space-y-4">
                {brandTraction.reviews.map((review, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 border border-amber-200">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-gray-700">{review.platform}</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                        <span className="font-bold text-amber-600">{review.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{review.count} reviews</p>
                  </div>
                ))}
                <div className="text-center pt-2">
                  <p className="text-sm text-gray-600">
                    <span className="font-bold text-amber-600">{brandTraction.monthlyCustomers}</span> monthly customers
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-6 h-full bg-gradient-to-br from-green-50 to-white border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                  <ShoppingBag className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Retail Presence</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 bg-white rounded-lg p-3 border border-green-200">
                  <Package className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">TikTok Shop</p>
                    <p className="text-xs text-gray-600">Live storefront</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg p-3 border border-green-200">
                  <Package className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Amazon</p>
                    <p className="text-xs text-gray-600">Active listings</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg p-3 border border-green-200">
                  <Users className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Social Channels</p>
                    <p className="text-xs text-gray-600">Active engagement</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-600 mt-8 font-medium"
        >
          Real brand. Real customers. Real culture.
        </motion.p>
      </div>
    </section>
  );
}
