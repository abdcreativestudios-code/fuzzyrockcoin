'use client';

import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';

const faqs = [
  {
    category: 'General',
    questions: [
      {
        q: 'What is Fuzzy Rock?',
        a: 'Fuzzy Rock is a community-first memecoin inspired by a real-world viral mint crystal candy brand. It combines meme culture with actual brand momentum from TikTok and retail presence.'
      },
      {
        q: 'Is this an investment?',
        a: 'No. Fuzzy Rock is not an investment, security, or financial product. It is a community participation token for meme culture. There are no guarantees of profit or returns. Participation is voluntary and speculative.'
      },
      {
        q: 'How is this different from other memecoins?',
        a: 'Fuzzy Rock is backed by a real consumer brand with actual TikTok traction, customers, and retail presence. We prioritize transparency with public wallets, locked liquidity, and clear disclosures.'
      },
      {
        q: 'Who is Captain Fuzz?',
        a: 'Captain Fuzz is our official mascot - a mischievous mint crystal creature. He represents the playful, community-driven spirit of Fuzzy Rock and serves as our TikTok and meme identity.'
      },
    ]
  },
  {
    category: 'Token Details',
    questions: [
      {
        q: 'What blockchain is Fuzzy Rock on?',
        a: `Fuzzy Rock is built on ${siteConfig.token.chain}, providing fast transactions and low fees.`
      },
      {
        q: 'What is the total supply?',
        a: `The total supply is ${siteConfig.token.totalSupply} tokens. This is a fixed supply with no minting capability.`
      },
      {
        q: 'Are there any taxes?',
        a: `${siteConfig.token.taxes}. We believe in zero-tax tokens for maximum community benefit.`
      },
      {
        q: 'Where can I buy Fuzzy Rock?',
        a: 'You can buy Fuzzy Rock on decentralized exchanges like Raydium and Jupiter. Always verify the contract address from our official website before trading.'
      },
      {
        q: 'Is the liquidity locked?',
        a: 'Yes. Liquidity is locked to prevent rug pulls and ensure trading stability. Check our transparency page for proof and details.'
      },
    ]
  },
  {
    category: 'Community & Utility',
    questions: [
      {
        q: 'What are the benefits of holding Fuzzy Rock?',
        a: 'Holders can participate in meme missions, access limited product drops, vote on community initiatives, and join TikTok brand challenges. Perks are subject to availability and do not guarantee value.'
      },
      {
        q: 'How do meme missions work?',
        a: 'Each week we announce a new meme challenge. Create and share memes with our hashtag to earn community recognition and digital badges. Top creators get featured on our official channels.'
      },
      {
        q: 'Can I vote on decisions?',
        a: 'Yes! Major community decisions regarding merch, partnerships, and initiatives are subject to community voting through governance polls in our official channels.'
      },
      {
        q: 'How do I join the community?',
        a: 'Follow us on Twitter, join our Telegram, Discord, and TikTok. All official links are on our website. Beware of scammers and impersonators.'
      },
    ]
  },
  {
    category: 'Safety & Security',
    questions: [
      {
        q: 'How do I know this is legitimate?',
        a: 'Check our transparency page for public wallet addresses, liquidity lock proof, and allocation details. Our contract is verified on blockchain explorers. Always verify from official sources.'
      },
      {
        q: 'What if I encounter a scam?',
        a: 'Only use contract addresses and links from our official website. Never share your private keys or seed phrases. Report suspicious activity to our official Telegram moderators.'
      },
      {
        q: 'Is my wallet safe?',
        a: 'Your wallet security is your responsibility. Use hardware wallets when possible, never share private keys, and only interact with verified contract addresses from official sources.'
      },
      {
        q: 'Has the contract been audited?',
        a: 'A third-party security audit is planned. Current security practices include locked liquidity, verified contract code, and public treasury wallets. Check our transparency page for updates.'
      },
    ]
  },
  {
    category: 'Brand Relationship',
    questions: [
      {
        q: 'Is the token related to the physical Fuzzy Rock product?',
        a: 'The token is inspired by the brand but they are separate entities. Token participation does not grant rights to the physical brand or its revenue. Product purchases do not grant token benefits.'
      },
      {
        q: 'Can I buy Fuzzy Rock products with the token?',
        a: 'Currently, the physical products are sold through traditional channels (TikTok Shop, Amazon). Token holders may get access to limited drops, but this is subject to availability.'
      },
      {
        q: 'Does the brand\'s success affect the token?',
        a: 'While brand momentum can create cultural awareness, there are no guarantees. The token and brand are independent operations. Brand success does not guarantee token value.'
      },
    ]
  },
  {
    category: 'Risks & Disclaimers',
    questions: [
      {
        q: 'Can I lose money?',
        a: 'Yes. Token participation is highly speculative and volatile. You may lose your entire participation value. Only participate with funds you can afford to lose completely.'
      },
      {
        q: 'What are the main risks?',
        a: 'Price volatility, loss of liquidity, smart contract risks, regulatory changes, market manipulation, and complete loss of value. Read our full legal disclosures before participating.'
      },
      {
        q: 'Is there a guarantee of returns?',
        a: 'No. There are absolutely no guarantees of profit, returns, or value appreciation. The token may become worthless at any time.'
      },
      {
        q: 'Where can I read full disclosures?',
        a: 'Visit our Legal page for comprehensive risk warnings and disclosures. Reading these is mandatory before participation.'
      },
    ]
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about Fuzzy Rock
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {faqs.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <Card className="p-8 bg-white border-cyan-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`${categoryIndex}-${index}`}
                        className="border-b border-gray-200 last:border-0"
                      >
                        <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-cyan-600">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Card>
              </motion.div>
            ))}

            <Card className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
              <div className="text-center">
                <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-gray-700 mb-6">
                  Join our community channels to get answers from the team and other members
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                  >
                    <a href={siteConfig.social.telegram} target="_blank" rel="noopener noreferrer">
                      Join Telegram
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-blue-300 text-blue-700 hover:bg-blue-100"
                  >
                    <a href={siteConfig.social.discord} target="_blank" rel="noopener noreferrer">
                      Join Discord
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-blue-300 text-blue-700 hover:bg-blue-100"
                  >
                    <Link href="/legal">
                      Read Legal Disclosures
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
