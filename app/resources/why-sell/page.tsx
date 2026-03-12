import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Sell Your Business? | Benefits, Timing & Exit Strategies | India",
  description:
    "Thinking about selling your business? Discover the benefits of a well-planned exit, signs it's the right time, and how to maximize your life's work.",
};

export default function WhySellPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Why Sell Your Business? A Guide to Your Biggest Decision
          </h1>
          <p className="text-xl text-gray-600">
            Selling isn't giving up—it's graduating. Learn when, why, and how to exit on your terms.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed">
            You've poured years—maybe decades—into building your business. Late nights, early mornings, missed family events, and countless sacrifices. The thought of selling can feel like betrayal.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            But here's what successful entrepreneurs know: <strong>selling your business isn't the end of your story. It's the beginning of your next chapter.</strong>
          </p>
          <p className="text-gray-700">
            Every year, thousands of Indian business owners choose to sell. Some because they're ready for retirement. Others because they see an opportunity to cash out at peak value. Many because life circumstances change.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            The Real Benefits of Selling Your Business
          </h2>

          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Financial Freedom</h3>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Unlock Your Wealth</h4>
              <p className="text-gray-700 mb-4">
                Most business owners have 70-90% of their net worth tied up in their company. Your business is an illiquid asset—valuable on paper, but you can't spend it.
              </p>
              <p className="text-gray-700 mb-4">Selling converts that paper wealth into real, spendable money. You can:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Diversify your investments</li>
                <li>Eliminate business debt</li>
                <li>Fund your retirement</li>
                <li>Support your family</li>
                <li>Pursue new ventures</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Personal Freedom</h3>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Get Your Time Back</h4>
              <p className="text-gray-700 mb-4">
                Running a business is all-consuming. When did you last take a real vacation? Spend uninterrupted time with family? Pursue a hobby without checking your phone?
              </p>
              <p className="text-gray-700">
                Sellers consistently report that the greatest benefit isn't the money—it's the freedom. Freedom to travel, spend time with aging parents, watch your children grow up, focus on your health, or simply... relax.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Strategic Benefits</h3>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Exit at Peak Value</h4>
              <p className="text-gray-700">
                Businesses don't appreciate forever. Markets cycle, industries shift, competition intensifies. The best time to sell is when your business is growing, your industry is hot, buyers are actively acquiring, and you still have energy to negotiate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signs It's Time */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Signs It Might Be Time to Sell
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Signs</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• You're burned out</li>
                <li>• Life circumstances changed</li>
                <li>• Health concerns</li>
                <li>• Partnership conflicts</li>
                <li>• No succession plan</li>
              </ul>
            </div>

            <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Signs</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Peak performance</li>
                <li>• Hot acquisition market</li>
                <li>• Industry consolidation</li>
                <li>• Competition intensifying</li>
                <li>• Technology disruption coming</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-600">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Explore Your Options?
          </h2>
          <p className="text-lg text-emerald-100 mb-8">
            Start with a free, confidential valuation. Know what your business is worth before making any decisions.
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
