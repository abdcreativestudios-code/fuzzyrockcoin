'use client';

import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const faqs = [
  {
    question: 'Is this an investment?',
    answer: 'No. Fuzzy Rock is a community-driven memecoin for participation and culture, not an investment. There are no guarantees of profit or returns. Participation is voluntary and speculative.',
  },
  {
    question: 'How is this different from other memecoins?',
    answer: 'Fuzzy Rock is backed by a real consumer brand with actual TikTok traction and customers. We prioritize transparency with public wallets, locked liquidity, and clear disclosures.',
  },
  {
    question: 'Can I lose money?',
    answer: 'Yes. Token participation is highly volatile and speculative. You may lose your entire participation value. Never participate with funds you cannot afford to lose.',
  },
  {
    question: 'What are the utility benefits?',
    answer: 'Holders can participate in meme missions, access limited product drops, vote on community initiatives, and join TikTok brand challenges. Perks are subject to availability and do not guarantee value.',
  },
  {
    question: 'How do I verify this is legitimate?',
    answer: 'Check our transparency page for public wallet addresses, liquidity lock proof, and allocation details. Always verify contract addresses from official sources and beware of scams.',
  },
];

export function MiniFAQSection() {
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
            Quick Answers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Common questions about Fuzzy Rock
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gradient-to-r from-cyan-50 to-white border-cyan-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-bold text-gray-900 hover:text-cyan-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-8">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-cyan-300 text-cyan-700 hover:bg-cyan-50"
            >
              <Link href="/faq">View Full FAQ</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
