'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

export default function LegalPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <AlertTriangle className="h-12 w-12 text-amber-600" />
              <h1 className="text-5xl md:text-6xl font-black text-gray-900">
                Legal Disclosures
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Important information you must read before participating
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="p-8 bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
              <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6" />
                Critical Risk Warning
              </h2>
              <div className="space-y-3 text-gray-800">
                <p className="font-semibold">
                  Token participation is highly speculative and volatile. You may lose your entire participation value.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>No guarantee of profit or returns</li>
                  <li>Value may decrease to zero</li>
                  <li>Not suitable for risk-averse individuals</li>
                  <li>Only participate with funds you can afford to lose completely</li>
                </ul>
              </div>
            </Card>

            <Card className="p-8 bg-white border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Not Financial Advice</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nothing on this website or in any communications from Fuzzy Rock constitutes financial,
                legal, tax, or investment advice. We do not recommend or advise any person to participate
                in the token.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You are solely responsible for conducting your own research and making your own decisions.
                Consult with qualified professionals before making any financial decisions.
              </p>
            </Card>

            <Card className="p-8 bg-white border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Not an Investment</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Fuzzy Rock token is not an investment product, security, or financial instrument. It is
                a community participation token for meme culture and brand engagement.
              </p>
              <p className="text-gray-700 leading-relaxed">
                There are no promises of profits, returns, dividends, or appreciation. The token has
                no inherent value and may become worthless at any time.
              </p>
            </Card>

            <Card className="p-8 bg-white border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Volatility & Risk</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cryptocurrency tokens are extremely volatile. Price can fluctuate dramatically within
                short periods. Market manipulation, whale activity, and speculative trading can cause
                sudden and severe price changes.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Price may drop 50% or more in a single day</li>
                <li>Liquidity may disappear suddenly</li>
                <li>You may not be able to sell when you want to</li>
                <li>External market conditions can impact value</li>
              </ul>
            </Card>

            <Card className="p-8 bg-white border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No Guarantee of Liquidity</h2>
              <p className="text-gray-700 leading-relaxed">
                While liquidity may be provided on decentralized exchanges, there is no guarantee that
                you will be able to sell your tokens or that there will be buyers. Liquidity can dry
                up at any time, leaving you unable to exit your position.
              </p>
            </Card>

            <Card className="p-8 bg-white border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No Promise of Development or Utility</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While we may announce plans for community perks, product drops, or other initiatives,
                these are subject to change or cancellation at any time without notice.
              </p>
              <p className="text-gray-700 leading-relaxed">
                There is no binding obligation to deliver any specific feature, utility, or benefit.
                Do not participate based on expectations of future development.
              </p>
            </Card>

            <Card className="p-8 bg-white border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Not an Offer of Securities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Fuzzy Rock token is not registered with any securities regulator and is not an offer
                or solicitation to buy or sell securities. This token does not grant ownership rights,
                profit sharing, or any legal claim to the brand or its assets.
              </p>
            </Card>

            <Card className="p-8 bg-white border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Jurisdictional Limitations</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Token participation may not be legal in your jurisdiction. You are responsible for
                compliance with local laws and regulations.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Participation is prohibited in jurisdictions where it would be illegal. By participating,
                you represent that you are acting in compliance with applicable laws.
              </p>
            </Card>

            <Card className="p-8 bg-white border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Brand and Token Separation</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Fuzzy Rock physical product brand and the Fuzzy Rock token are separate entities.
                Participation in the token does not grant rights to the brand, products, or any revenue
                from physical product sales.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The success or failure of the physical brand does not guarantee anything about the token.
                These are independent operations.
              </p>
            </Card>

            <Card className="p-8 bg-white border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Smart Contract Risks</h2>
              <p className="text-gray-700 leading-relaxed">
                Smart contracts may contain bugs, vulnerabilities, or exploits. While efforts are made
                to ensure security, no contract is completely safe. You accept all risks associated with
                smart contract interaction, including potential loss of funds due to technical issues.
              </p>
            </Card>

            <Card className="p-8 bg-white border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                Fuzzy Rock, its team members, and affiliates are not liable for any losses, damages,
                or negative outcomes resulting from token participation. This includes but is not limited
                to financial losses, missed opportunities, technical failures, or regulatory actions.
              </p>
            </Card>

            <Card className="p-8 bg-white border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Voluntary Participation</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All token participation is completely voluntary. No one is obligated to participate.
                By choosing to participate, you acknowledge that you have read and understood all
                disclosures and accept all associated risks.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You confirm that you are participating of your own free will, without coercion, and
                based on your own independent research and judgment.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to Disclosures</h2>
              <p className="text-gray-700 leading-relaxed">
                These disclosures may be updated at any time. Continued participation after updates
                constitutes acceptance of the new terms. Check this page regularly for the latest
                information.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Last updated: January 2024
              </p>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
