import { NewsletterSignup } from "@/components/NewsletterSignup";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter | Expert Tips on Selling Your Business in India",
  description:
    "Join 500+ Indian business owners receiving expert tips on valuation, exit strategies, and successful business sales.",
};

export default function NewsletterPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          The Business Exit Newsletter
        </h1>
        <p className="text-xl text-gray-600">
          Expert insights on selling your business in India. Valuation tips, exit strategies, tax
          optimization, and success stories.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
        <NewsletterSignup
          variant="hero"
          title="Subscribe to Weekly Insights"
          description="Join 500+ Indian business owners preparing for a successful exit."
        />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
          <div className="text-gray-600">Subscribers</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">Weekly</div>
          <div className="text-gray-600">Expert Content</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
          <div className="text-gray-600">Free</div>
        </div>
      </div>

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Get</h2>
        <ul className="space-y-3">
          <li className="text-gray-700">
            <strong>Weekly insights:</strong> Actionable tips on business valuation, preparation, and
            deal-making
          </li>
          <li className="text-gray-700">
            <strong>Success stories:</strong> Real exits from Indian business owners (with numbers)
          </li>
          <li className="text-gray-700">
            <strong>Market updates:</strong> What buyers are looking for right now
          </li>
          <li className="text-gray-700">
            <strong>Expert interviews:</strong> M&A advisors, CAs, and successful sellers
          </li>
          <li className="text-gray-700">
            <strong>Exclusive guides:</strong> Downloads and checklists not available elsewhere
          </li>
        </ul>
      </div>
    </div>
  );
}
