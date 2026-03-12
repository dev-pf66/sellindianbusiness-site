import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Value Your Business in India | Methods, Multiples & Calculator",
  description:
    "Learn how businesses are valued in India. Understand EBITDA multiples, asset-based valuation, and industry benchmarks. Free valuation calculator included.",
};

export default function ValuationGuidePage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            How to Value Your Business in India
          </h1>
          <p className="text-xl text-gray-600">
            Understanding business valuation methods, industry multiples, and what drives your company's worth.
          </p>
        </div>
      </section>

      {/* Common Valuation Methods */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Common Valuation Methods for SMBs
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                1. EBITDA Multiple Method (Most Common)
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Formula:</strong> Business Value = EBITDA × Multiple
              </p>
              <p className="text-gray-700 mb-4">
                EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization) represents your business's operating profit. This is the most common method for valuing profitable, established businesses.
              </p>
              <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
                <h4 className="font-semibold text-gray-900 mb-3">Typical Multiples in India:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Manufacturing:</strong> 2-4x EBITDA</li>
                  <li>• <strong>Retail/Wholesale:</strong> 1.5-3x EBITDA</li>
                  <li>• <strong>Service Businesses:</strong> 1-3x EBITDA</li>
                  <li>• <strong>E-commerce/SaaS:</strong> 2-5x EBITDA</li>
                  <li>• <strong>Restaurants:</strong> 1.5-2.5x EBITDA</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                2. SDE Multiple Method (Owner-Operated Businesses)
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Formula:</strong> Business Value = SDE × Multiple
              </p>
              <p className="text-gray-700">
                SDE (Seller's Discretionary Earnings) includes EBITDA plus owner salary, personal expenses, and one-time costs. This method is better for small, owner-operated businesses where the owner draws salary and benefits.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Asset-Based Valuation
              </h3>
              <p className="text-gray-700">
                For businesses with significant physical assets (manufacturing, real estate), valuation includes the market value of equipment, inventory, property, and goodwill. Useful when profits are low but assets are valuable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Affects Your Multiple */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            What Affects Your Multiple?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border-2 border-emerald-200">
              <h3 className="text-lg font-semibold text-emerald-700 mb-4">Higher Multiples 📈</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Consistent revenue growth</li>
                <li>✓ Diversified customer base</li>
                <li>✓ Recurring revenue model</li>
                <li>✓ Low owner dependency</li>
                <li>✓ Strong management team</li>
                <li>✓ Clean financials</li>
                <li>✓ Scalable systems</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-red-200">
              <h3 className="text-lg font-semibold text-red-700 mb-4">Lower Multiples 📉</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✗ Declining revenue</li>
                <li>✗ Customer concentration (1 customer = 30%+)</li>
                <li>✗ One-time projects</li>
                <li>✗ Owner does everything</li>
                <li>✗ No documentation</li>
                <li>✗ Cash transactions</li>
                <li>✗ Outdated technology</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Example Calculation */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Example Valuation
          </h2>

          <div className="bg-emerald-50 rounded-lg p-8 border border-emerald-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Manufacturing Business in Pune
            </h3>
            <div className="space-y-3 text-gray-700">
              <p><strong>Annual Revenue:</strong> ₹3.5 crore</p>
              <p><strong>EBITDA:</strong> ₹70 lakh</p>
              <p><strong>Industry Multiple:</strong> 3x (strong growth, diversified customers)</p>
              <p className="text-2xl font-bold text-emerald-600 mt-6">
                Estimated Value: ₹2.1 crore
              </p>
              <p className="text-sm text-gray-600 mt-4">
                (This is a simplified example. Actual valuation considers many more factors.)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-600">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want a Professional Valuation?
          </h2>
          <p className="text-lg text-emerald-100 mb-8">
            Get a free, confidential valuation of your business from M&A professionals. Results in 48 hours.
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
