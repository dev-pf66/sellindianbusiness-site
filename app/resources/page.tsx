import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources for Selling Your Business | SellIndianBusiness",
  description:
    "Free guides, checklists, and resources to help you prepare and sell your business successfully in India.",
};

const resources = [
  {
    title: "Why Sell Your Business?",
    description:
      "Explore the benefits of a planned exit and discover if now is the right time for you.",
    href: "/resources/why-sell",
    icon: "🎯",
  },
  {
    title: "How to Value Your Business",
    description:
      "Learn valuation methods, industry multiples, and what drives your business worth.",
    href: "/resources/valuation-guide",
    icon: "💰",
  },
  {
    title: "Preparing for Sale",
    description:
      "12-month preparation checklist to maximize your sale price and attract buyers.",
    href: "/resources/prepare-for-sale",
    icon: "📋",
  },
  {
    title: "What Buyers Look For",
    description:
      "Understand buyer priorities and how to position your business effectively.",
    href: "/resources/what-buyers-want",
    icon: "🔍",
  },
  {
    title: "The Sale Process",
    description:
      "Step-by-step guide through valuation, negotiation, due diligence, and closing.",
    href: "/resources/sale-process",
    icon: "📊",
  },
];

export default function ResourcesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Free Resources for Business Sellers
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Everything you need to know about preparing, valuing, and selling your business in India. 
            Start with the guides below or explore our blog for detailed articles.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {resources.map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="group bg-white rounded-xl p-8 border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-start space-x-4">
                  <span className="text-4xl">{resource.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600">{resource.description}</p>
                    <span className="inline-flex items-center text-emerald-600 font-medium mt-3 group-hover:gap-2 transition-all">
                      Read guide
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Blog CTA */}
          <div className="bg-emerald-50 rounded-xl p-8 text-center border border-emerald-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Looking for more specific guidance?
            </h2>
            <p className="text-gray-600 mb-6">
              Check out our blog for detailed articles on valuation, tax implications, industry-specific advice, and more.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-base font-semibold text-white hover:bg-emerald-700 transition-colors"
            >
              Browse Blog Articles →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Your Business Valued?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Understanding your business value is the first step. Get a free, confidential valuation in 48 hours.
          </p>
          <Link
            href="/free-valuation"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-8 py-4 text-lg font-semibold text-white hover:bg-emerald-700 transition-colors"
          >
            Get Free Valuation
          </Link>
        </div>
      </section>
    </div>
  );
}
