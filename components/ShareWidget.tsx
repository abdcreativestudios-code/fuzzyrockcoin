'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Twitter, MessageCircle, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '@/lib/siteConfig';

export function ShareWidget() {
  const [copied, setCopied] = useState(false);

  const shareText = `Check out ${siteConfig.name} - ${siteConfig.tagline} 🚀 ${siteConfig.ticker}`;
  const shareUrl = typeof window !== 'undefined' ? window.location.origin : '';

  const handleCopy = async () => {
    await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTwitterShare = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank');
  };

  const handleTelegramShare = () => {
    const url = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-cyan-50 to-white border-cyan-200">
      <h3 className="text-xl font-bold mb-4 text-gray-900">Share the Crunch</h3>
      <p className="text-gray-600 mb-4 text-sm">
        Help spread the word and grow the community
      </p>
      <div className="flex gap-3 flex-wrap">
        <Button
          onClick={handleTwitterShare}
          className="bg-black hover:bg-gray-800 text-white flex-1 min-w-[120px]"
        >
          <Twitter className="mr-2 h-4 w-4" />
          Twitter
        </Button>
        <Button
          onClick={handleTelegramShare}
          className="bg-blue-500 hover:bg-blue-600 text-white flex-1 min-w-[120px]"
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Telegram
        </Button>
        <Button
          onClick={handleCopy}
          variant="outline"
          className="flex-1 min-w-[120px] border-cyan-300 hover:bg-cyan-50"
        >
          {copied ? (
            <>
              <Check className="mr-2 h-4 w-4 text-green-600" />
              Copied
            </>
          ) : (
            <>
              <Copy className="mr-2 h-4 w-4" />
              Copy Link
            </>
          )}
        </Button>
      </div>
    </Card>
  );
}
