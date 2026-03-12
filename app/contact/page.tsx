import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Sell Your Business Confidentially | SellIndianBusiness",
  description:
    "Ready to explore selling your business? Contact our team for a confidential discussion. No pressure, no obligation. Your information stays private.",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
        Talk to Our Team (Confidential)
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        Have questions about valuation, timing, confidentiality, or the process? Share a few details
        and we'll respond within 1 business day.
      </p>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
              <a
                href="mailto:hello@sellindianbusiness.com"
                className="text-blue-600 hover:text-blue-700"
              >
                hello@sellindianbusiness.com
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Phone/WhatsApp</h3>
              <p className="text-gray-600">+91-XXXX-XXXXXX</p>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Frequently Asked</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• We can sign an NDA before sharing sensitive details</li>
              <li>• You control what gets shared with buyers</li>
              <li>• Free valuation available even if you're not ready to sell now</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="business-type" className="block text-sm font-medium text-gray-700 mb-2">
                Company / Business Type
              </label>
              <input
                type="text"
                id="business-type"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="revenue" className="block text-sm font-medium text-gray-700 mb-2">
                Revenue Range
              </label>
              <select
                id="revenue"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select range</option>
                <option value="0-50">₹0 - ₹50 Lakhs</option>
                <option value="50-100">₹50L - ₹1 Cr</option>
                <option value="100-200">₹1 Cr - ₹2 Cr</option>
                <option value="200-500">₹2 Cr - ₹5 Cr</option>
                <option value="500+">₹5 Cr+</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="text-center">
        <p className="text-gray-600 mb-4">Or get started with a free valuation:</p>
        <a
          href="/free-valuation"
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white hover:bg-blue-700 transition-colors"
        >
          Get Your Free Valuation →
        </a>
      </div>
    </div>
  );
}
