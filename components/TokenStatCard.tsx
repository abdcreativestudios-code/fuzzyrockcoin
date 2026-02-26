'use client';

import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface TokenStatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  trend?: string;
  delay?: number;
}

export function TokenStatCard({ icon: Icon, label, value, trend, delay = 0 }: TokenStatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <Card className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-cyan-50 border-cyan-200">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Icon className="h-5 w-5 text-cyan-600" />
              <p className="text-sm font-medium text-gray-600">{label}</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            {trend && (
              <p className="text-xs text-green-600 mt-1 font-medium">{trend}</p>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
