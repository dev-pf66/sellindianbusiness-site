import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Preparing Your Business for Sale | Complete Checklist & Timeline",
  description:
    "Maximize your sale price with proper preparation. 12-month timeline, document checklist, and expert tips to make your business irresistible to buyers.",
};

export default function PrepareForSalePage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Preparing Your Business for Sale
          </h1>
          <p className="text-xl text-gray-600">
            The better you prepare, the higher the price and faster the sale. Here's your 12-month preparation roadmap.
          </p>
        </div>
      </section>

      {/* 12-Month Timeline */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            12-Month Preparation Timeline
          </h2>

          <div className="space-y-8">
            <div className="border-l-4 border-emerald-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Months 12-10: Financial Cleanup
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Get 3 years of financials audited or reviewed</li>
                <li>• Separate personal and business expenses</li>
                <li>• Document all revenue sources</li>
                <li>• Create detailed P&L by product/service line</li>
                <li>• File all tax returns</li>
                <li>• Clear any outstanding liabilities</li>
              </ul>
            </div>

            <div className="border-l-4 border-emerald-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Months 9-7: Operational Excellence
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Document all processes (SOPs)</li>
                <li>• Hire or promote a strong manager</li>
                <li>• Reduce owner dependency</li>
                <li>• Update contracts with customers/suppliers</li>
                <li>• Review and renew key licenses</li>
                <li>• Fix deferred maintenance</li>
              </ul>
            </div>

            <div className="border-l-4 border-emerald-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Months 6-4: Legal & Compliance
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Ensure GST compliance</li>
                <li>• Review all employment contracts</li>
                <li>• Settle any disputes or litigation</li>
                <li>• Organize all IP (trademarks, patents)</li>
                <li>• Update shareholder agreements</li>
                <li>• Get legal review of contracts</li>
              </ul>
            </div>

            <div className="border-l-4 border-emerald-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Months 3-1: Marketing Preparation
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Get professional business valuation</li>
                <li>• Create confidential information memorandum</li>
                <li>• Prepare data room</li>
                <li>• Identify potential buyers</li>
                <li>• Plan transition timeline</li>
                <li>• Engage M&A advisor or broker</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Document Checklist */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Essential Documents Checklist
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Financial Documents</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>☐ 3 years of P&L statements</li>
                <li>☐ 3 years of balance sheets</li>
                <li>☐ 3 years of cash flow statements</li>
                <li>☐ 3 years of tax returns</li>
                <li>☐ Current accounts receivable aging</li>
                <li>☐ Current accounts payable</li>
                <li>☐ Debt schedules</li>
                <li>☐ Equipment/asset list with values</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal Documents</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>☐ Company registration documents</li>
                <li>☐ Articles of association</li>
                <li>☐ Shareholder agreements</li>
                <li>☐ All licenses and permits</li>
                <li>☐ IP registrations</li>
                <li>☐ Lease agreements</li>
                <li>☐ Employment contracts</li>
                <li>☐ Supplier/customer contracts</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Operational Documents</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>☐ Organizational chart</li>
                <li>☐ Standard operating procedures</li>
                <li>☐ Customer list (anonymized)</li>
                <li>☐ Marketing materials</li>
                <li>☐ Product/service descriptions</li>
                <li>☐ Technology stack documentation</li>
                <li>☐ Vendor relationships</li>
                <li>☐ Insurance policies</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Strategic Documents</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>☐ Business plan</li>
                <li>☐ Growth projections</li>
                <li>☐ Competitive analysis</li>
                <li>☐ SWOT analysis</li>
                <li>☐ Market research</li>
                <li>☐ Expansion opportunities</li>
                <li>☐ Historical milestones</li>
                <li>☐ Awards/recognitions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Wins */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Quick Wins That Increase Value
          </h2>

          <div className="space-y-4">
            <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
              <h3 className="font-semibold text-gray-900 mb-2">1. Sign Multi-Year Customer Contracts</h3>
              <p className="text-gray-700">
                Buyers love recurring revenue. Convert month-to-month customers to annual contracts.
              </p>
            </div>

            <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
              <h3 className="font-semibold text-gray-900 mb-2">2. Reduce Customer Concentration</h3>
              <p className="text-gray-700">
                If one customer represents more than 20% of revenue, actively diversify your customer base.
              </p>
            </div>

            <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
              <h3 className="font-semibold text-gray-900 mb-2">3. Document Everything</h3>
              <p className="text-gray-700">
                Written SOPs show that the business can run without you—massively increasing value.
              </p>
            </div>

            <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
              <h3 className="font-semibold text-gray-900 mb-2">4. Clean Up Your Books</h3>
              <p className="text-gray-700">
                Separate all personal expenses. Messy books kill deals or reduce offers by 20-30%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-600">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help Preparing Your Business?
          </h2>
          <p className="text-lg text-emerald-100 mb-8">
            Get a free valuation and a customized preparation plan. We'll identify the highest-impact improvements.
          </p>
          <Link
            href="/free-valuation"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-semibold text-emerald-600 hover:bg-emerald-50 transition-colors"
          >
            Get Your Free Valuation & Plan
          </Link>
        </div>
      </section>
    </div>
  );
}
