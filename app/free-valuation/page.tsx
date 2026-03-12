import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free, Confidential Business Valuation (India)",
  description:
    "Know what your business is worth—based on financial performance, industry multiples, and buyer demand. Results in 48 hours.",
};

export default function FreeValuationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Get a Free, Confidential Business Valuation
        </h1>
        <p className="text-xl text-gray-600">
          Know what your business is worth—based on financial performance, industry multiples, and
          buyer demand. Results in <strong>48 hours</strong>.
        </p>
      </header>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Receive</h2>
        <ul className="space-y-3 mb-8">
          {[
            "Valuation range (low/base/high)",
            "EBITDA/SDE normalization notes",
            "Multiple drivers and improvement ideas",
            "Recommended next steps",
          ].map((item) => (
            <li key={item} className="flex items-start">
              <svg
                className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone/WhatsApp *
              </label>
              <input
                type="tel"
                id="phone"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="business-name" className="block text-sm font-medium text-gray-700 mb-2">
                Business Name (optional)
              </label>
              <input
                type="text"
                id="business-name"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                Industry *
              </label>
              <select
                id="industry"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select industry</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="retail">Retail & Wholesale</option>
                <option value="ecommerce">E-commerce</option>
                <option value="services">Services</option>
                <option value="restaurant">Restaurant & Hospitality</option>
                <option value="distribution">Distribution</option>
                <option value="it">IT & Software</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                Location (City) *
              </label>
              <input
                type="text"
                id="location"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="revenue" className="block text-sm font-medium text-gray-700 mb-2">
                Annual Revenue (Last 12 months) *
              </label>
              <select
                id="revenue"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select range</option>
                <option value="0-25">₹0 - ₹25 Lakhs</option>
                <option value="25-50">₹25L - ₹50L</option>
                <option value="50-100">₹50L - ₹1 Cr</option>
                <option value="100-200">₹1 Cr - ₹2 Cr</option>
                <option value="200-500">₹2 Cr - ₹5 Cr</option>
                <option value="500+">₹5 Cr+</option>
              </select>
            </div>
            <div>
              <label htmlFor="profit" className="block text-sm font-medium text-gray-700 mb-2">
                EBITDA / Net Profit *
              </label>
              <select
                id="profit"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select range</option>
                <option value="0-5">₹0 - ₹5 Lakhs</option>
                <option value="5-10">₹5L - ₹10L</option>
                <option value="10-25">₹10L - ₹25L</option>
                <option value="25-50">₹25L - ₹50L</option>
                <option value="50-100">₹50L - ₹1 Cr</option>
                <option value="100+">₹1 Cr+</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
              Additional Notes (optional)
            </label>
            <textarea
              id="notes"
              rows={4}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Anything else we should know?"
            />
          </div>

          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              🔒 <strong>100% Confidential:</strong> We do not share your details without permission.
              We can start with a blind profile.
            </p>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Get My Free Valuation
          </button>
        </form>
      </div>
    </div>
  );
}
