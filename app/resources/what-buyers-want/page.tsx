import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Buyers Look For When Buying a Business | Seller's Guide",
  description:
    "Know exactly what buyers want. From clean financials to growth potential—learn how to position your business to attract premium offers.",
};

export default function WhatBuyersWantPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            What Buyers Look For in a Business
          </h1>
          <p className="text-xl text-gray-600">
            Understanding buyer priorities helps you position your business for maximum value and faster sale.
          </p>
        </div>
      </section>

      {/* Top Priorities */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Top Buyer Priorities
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-8 border-2 border-emerald-300">
              <div className="flex items-start gap-4">
                <span className="text-4xl">💰</span>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    1. Consistent Cash Flow
                  </h3>
                  <p className="text-gray-700 mb-3">
                    <strong>What they want:</strong> Predictable, growing revenue and profits. Ideally 3+ years of positive cash flow.
                  </p>
                  <p className="text-gray-700">
                    <strong>How to show it:</strong> Clean financial statements, monthly revenue tracking, customer retention data, recurring contracts.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="flex items-start gap-4">
                <span className="text-4xl">📊</span>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    2. Growth Potential
                  </h3>
                  <p className="text-gray-700 mb-3">
                    <strong>What they want:</strong> Untapped opportunities they can exploit. New markets, product lines, or efficiency gains.
                  </p>
                  <p className="text-gray-700">
                    <strong>How to show it:</strong> Market analysis, expansion plans, underutilized capacity, technology upgrade opportunities.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="flex items-start gap-4">
                <span className="text-4xl">👥</span>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    3. Strong Team & Systems
                  </h3>
                  <p className="text-gray-700 mb-3">
                    <strong>What they want:</strong> A business that runs without the owner. Documented processes, trained staff, clear roles.
                  </p>
                  <p className="text-gray-700">
                    <strong>How to show it:</strong> Org chart, SOPs, employee retention rates, key person documentation, management team bios.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="flex items-start gap-4">
                <span className="text-4xl">🤝</span>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    4. Diversified Customer Base
                  </h3>
                  <p className="text-gray-700 mb-3">
                    <strong>What they want:</strong> No single customer represents more than 15-20% of revenue. Reduced risk.
                  </p>
                  <p className="text-gray-700">
                    <strong>How to show it:</strong> Customer concentration report, customer retention stats, new customer acquisition data.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="flex items-start gap-4">
                <span className="text-4xl">✅</span>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    5. Clean Legal & Financial Records
                  </h3>
                  <p className="text-gray-700 mb-3">
                    <strong>What they want:</strong> No surprises in due diligence. All taxes paid, licenses current, contracts valid.
                  </p>
                  <p className="text-gray-700">
                    <strong>How to show it:</strong> Organized data room, audited financials, compliance certificates, updated contracts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Red Flags */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Red Flags That Scare Buyers Away
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-lg p-6 border border-red-200">
              <h3 className="font-semibold text-red-800 mb-3">🚩 Financial Red Flags</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Declining revenue or profits</li>
                <li>• Large cash transactions (undocumented)</li>
                <li>• Personal expenses mixed with business</li>
                <li>• Tax inconsistencies</li>
                <li>• High debt levels</li>
                <li>• Unpaid liabilities</li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-lg p-6 border border-red-200">
              <h3 className="font-semibold text-red-800 mb-3">🚩 Operational Red Flags</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Owner does everything</li>
                <li>• No documented processes</li>
                <li>• High employee turnover</li>
                <li>• Customer concentration (1 = 30%+)</li>
                <li>• Outdated technology</li>
                <li>• Pending litigation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Buyer Types */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Different Buyers Want Different Things
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Individual Buyers (First-Time Business Owners)
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Priority:</strong> Cashflow to pay back loans + owner salary
              </p>
              <p className="text-gray-700">
                <strong>They love:</strong> Simple businesses, training/transition support, owner financing options
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Strategic Buyers (Competitors/Industry Players)
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Priority:</strong> Synergies, market share, customer acquisition
              </p>
              <p className="text-gray-700">
                <strong>They love:</strong> Complementary products, geographic expansion, economies of scale
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Financial Buyers (Private Equity, Search Funds)
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Priority:</strong> ROI, growth potential, exit opportunities
              </p>
              <p className="text-gray-700">
                <strong>They love:</strong> Scalable models, strong management, add-on acquisition opportunities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-600">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Position Your Business for Maximum Value
          </h2>
          <p className="text-lg text-emerald-100 mb-8">
            Get a free valuation and learn exactly what buyers will look for in your business.
          </p>
          <Link
            href="/free-valuation"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-semibold text-emerald-600 hover:bg-emerald-50 transition-colors"
          >
            Get Your Free Valuation
          </Link>
        </div>
      </section>
    </div>
  );
}
