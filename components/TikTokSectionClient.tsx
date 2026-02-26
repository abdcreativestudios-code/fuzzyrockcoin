"use client";

import { Component, ReactNode } from "react";
import { TikTokEngineSection } from "./sections/TikTokEngineSection";

class TikTokErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error("TikTok section error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              See Fuzzy Rock In Action
            </h2>
            <p className="text-gray-400 mb-8">
              Visit our TikTok to see real reactions and viral content.
            </p>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#00FFA3] text-black font-bold rounded-full hover:bg-[#00FFA3]/90 transition-colors"
            >
              View on TikTok
            </a>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

export default function TikTokSectionClient() {
  return (
    <TikTokErrorBoundary>
      <TikTokEngineSection />
    </TikTokErrorBoundary>
  );
}
