import Link from "next/link";
import { FAQSchema } from "@/components/schema/FAQSchema";

export default function HomePage() {
  const faqs = [
    {
      question: "How much does it cost to list my business?",
      answer: "Nothing upfront. We charge a success fee only when your business sells. No listing fees, no monthly charges. We're incentivized to get you the best price.",
    },
    {
      question: "How long does it take to sell a business?",
      answer: "Most businesses sell within 4-8 months. Timeline depends on preparation, pricing, and market conditions. Well-prepared businesses with realistic valuations sell faster.",
    },
    {
      question: "Will my employees find out I'm selling?",
      answer: "Not unless you tell them. We maintain strict confidentiality with blind profiles and signed NDAs. Buyer identities are revealed only when you approve.",
    },
    {
      question: "What's my business worth?",
      answer: "It depends on your financials, industry, growth potential, and market conditions. Get a free valuation to find out—it takes just 10 minutes to submit your details.",
    },
  ];

  return (
    <>
      <FAQSchema faqs={faqs} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            You Built Something Valuable.
            <span className="block text-blue-600 mt-2">Let's Find the Right Buyer.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a free, confidential valuation of your business in 48 hours. Join 500+ Indian
            entrepreneurs who trusted us with their exit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/free-valuation"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              Get Your Free Valuation →
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 px-8 py-4 text-lg font-semibold text-gray-700 hover:border-gray-400 transition-colors"
            >
              Learn How It Works
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-600">
            <span className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              100% Confidential
            </span>
            <span className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              No Listing Fees
            </span>
            <span className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Verified Buyers Only
            </span>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Your Exit Journey in 4 Simple Steps
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Free Valuation",
                description:
                  "Share basic details about your business. Get a confidential valuation within 48 hours. No strings attached.",
              },
              {
                step: "2",
                title: "Prepare Your Business",
                description:
                  "We help you organize financials and documentation. Better preparation means higher prices.",
              },
              {
                step: "3",
                title: "Connect with Buyers",
                description:
                  "We introduce your business to pre-qualified buyers only. You control who gets details.",
              },
              {
                step: "4",
                title: "Close the Deal",
                description:
                  "We guide you through negotiations, due diligence, and closing. You walk away with peace of mind.",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/free-valuation"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              Start with Free Valuation →
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            We Work with Businesses Like Yours
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Manufacturing Units",
                revenue: "₹50L - ₹5Cr",
                multiple: "2-4x EBITDA",
                tagline: "From factory floor to freedom",
              },
              {
                title: "Retail & Wholesale",
                revenue: "₹30L - ₹3Cr",
                multiple: "1.5-3x EBITDA",
                tagline: "Your location, their opportunity",
              },
              {
                title: "E-commerce Businesses",
                revenue: "₹20L - ₹2Cr",
                multiple: "2-5x EBITDA",
                tagline: "Digital assets, real value",
              },
              {
                title: "Service Companies",
                revenue: "₹25L - ₹4Cr",
                multiple: "1-3x EBITDA",
                tagline: "Your expertise, transferable",
              },
              {
                title: "Restaurants & Hospitality",
                revenue: "₹40L - ₹3Cr",
                multiple: "1.5-2.5x EBITDA",
                tagline: "Serving up a successful exit",
              },
              {
                title: "Distribution Businesses",
                revenue: "₹50L - ₹5Cr",
                multiple: "2-3x EBITDA",
                tagline: "Supply chains in demand",
              },
            ].map((business) => (
              <div
                key={business.title}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{business.title}</h3>
                <p className="text-sm text-gray-600 mb-1">Revenue: {business.revenue}</p>
                <p className="text-sm text-gray-600 mb-3">Typical: {business.multiple}</p>
                <p className="text-sm italic text-blue-600">"{business.tagline}"</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            Not sure if your business qualifies?{" "}
            <Link href="/free-valuation" className="text-blue-600 hover:text-blue-700 font-medium">
              Get a free assessment—we'll let you know.
            </Link>
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Hear from Business Owners Who've Exited Successfully
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "I spent 15 years building my manufacturing unit. When I decided to sell, I was terrified of the unknown. SellIndianBusiness made the process seamless. They found a buyer who valued my team and customers as much as I did. I walked away with 30% more than I expected.",
                author: "Rajesh M.",
                business: "Manufacturing, Pune",
                timeline: "Sold in 5 months",
              },
              {
                quote:
                  "Confidentiality was my biggest concern. I couldn't have my employees panicking or competitors circling. The team understood this completely. Not a single leak throughout the process. Professional doesn't begin to describe it.",
                author: "Anita S.",
                business: "Retail Chain, Mumbai",
                timeline: "Sold in 7 months",
              },
              {
                quote:
                  "As a first-time seller, I had no idea where to start. The free valuation opened my eyes to what my business was actually worth. Their guidance through due diligence saved me from several potential disasters. Worth every bit of their success fee.",
                author: "Vikram P.",
                business: "IT Services, Bangalore",
                timeline: "Sold in 4 months",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.business}</p>
                  <p className="text-sm text-blue-600 mt-1">{testimonial.timeline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Free Resources for Business Sellers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Why Sell Your Business?",
                description: "Explore the benefits of a planned exit and discover if now is the right time for you.",
                href: "/guide/why-sell",
              },
              {
                title: "How to Value Your Business",
                description: "Learn valuation methods, industry multiples, and what drives your business worth.",
                href: "/guide/valuation",
              },
              {
                title: "Preparing for Sale",
                description: "12-month preparation checklist to maximize your sale price.",
                href: "/guide/preparing",
              },
            ].map((resource) => (
              <div
                key={resource.title}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 transition-colors"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <Link
                  href={resource.href}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Read Guide →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/resources"
              className="text-blue-600 hover:text-blue-700 font-medium text-lg"
            >
              Browse All Resources →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Common Questions from Sellers
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Explore Your Exit?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Take the first step with a free, confidential valuation. No obligation. No pressure.
            Just clarity on what your business is worth.
          </p>
          <Link
            href="/free-valuation"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-600 hover:bg-gray-100 transition-colors"
          >
            Get My Free Valuation →
          </Link>
          <p className="text-sm text-blue-100 mt-4">
            🔒 Your information is 100% confidential. We never share your details without permission.
          </p>
        </div>
      </section>
    </>
  );
}
