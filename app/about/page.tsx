import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Pocket Fund - Helping Indian Entrepreneurs Exit Successfully",
  description:
    "Pocket Fund helps Indian SMB owners sell their businesses to the right buyers. Learn about our mission, process, and commitment to confidential, fair transactions.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
        About SellIndianBusiness.com
      </h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          SellIndianBusiness.com is built for one purpose: <strong>help Indian business owners sell
          their businesses confidentially and for a fair price.</strong> Whether you're planning
          retirement, exploring a new venture, or simply want clarity on your options, we provide
          education, valuation support, and access to serious buyers.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-6">
          Indian SMB owners are the backbone of the economy—but selling a business is still
          confusing, opaque, and often stressful. Our mission is to make exits{" "}
          <strong>simpler, more transparent, and more founder-friendly</strong>.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Who We Are (Pocket Fund)</h2>
        <p className="text-gray-700 mb-6">
          SellIndianBusiness.com is an initiative supported by <strong>Pocket Fund</strong>, a micro
          private equity firm focused on acquiring and growing profitable small businesses.
        </p>
        <p className="text-gray-700 mb-4">Pocket Fund typically looks for:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li className="text-gray-700">Established businesses with consistent cash flows</li>
          <li className="text-gray-700">
            Owner-operated companies that can benefit from operational support
          </li>
          <li className="text-gray-700">
            Long-term, ethical transitions that protect teams and customers
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          <strong>Important:</strong> We are not here to pressure you into selling to Pocket Fund.
          Our goal is to help you understand your options and connect you with the right buyer—whether
          that's Pocket Fund, a strategic buyer, or an individual entrepreneur.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">What We Believe</h2>
        <ul className="list-disc pl-6 mb-6 space-y-3">
          <li className="text-gray-700">
            <strong>Confidentiality is non-negotiable.</strong> Your employees, customers, and
            competitors shouldn't find out prematurely.
          </li>
          <li className="text-gray-700">
            <strong>Good businesses deserve fair valuations.</strong> Clean numbers and the right
            positioning change outcomes.
          </li>
          <li className="text-gray-700">
            <strong>A great exit is a process.</strong> Preparation and guidance matter as much as
            the buyer.
          </li>
        </ul>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">How We Help</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li className="text-gray-700">Free confidential valuation (48 hours)</li>
          <li className="text-gray-700">Seller education (guides, templates, checklists)</li>
          <li className="text-gray-700">Buyer screening and introductions</li>
          <li className="text-gray-700">Support through LOI, due diligence, and closing</li>
        </ul>

        <div className="bg-blue-50 rounded-xl p-8 my-12">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Trust Indicators</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-700">Confidential</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">Verified</div>
              <div className="text-gray-700">Buyers Only</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">No</div>
              <div className="text-gray-700">Listing Fees</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/free-valuation"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Get Your Free Valuation →
          </Link>
        </div>
      </div>
    </div>
  );
}
