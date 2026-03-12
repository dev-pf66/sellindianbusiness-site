import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Business Sale Process Explained | Step-by-Step Guide India",
  description:
    "Understand every stage of selling your business—from initial valuation to final closing. Timeline, documents, negotiations, and what to expect.",
};

export default function SaleProcessPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            The Business Sale Process: Step by Step
          </h1>
          <p className="text-xl text-gray-600">
            From initial valuation to final handover—here's exactly what happens when you sell your business.
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50 rounded-lg p-8 border border-emerald-200 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Typical Timeline: 6-12 Months
            </h2>
            <p className="text-gray-700">
              Every business sale is unique, but most SMB transactions follow this timeline. Well-prepared businesses with realistic pricing sell faster.
            </p>
          </div>

          <div className="space-y-12">
            {/* Phase 1 */}
            <div className="relative pl-12 md:pl-16">
              <div className="absolute left-0 top-0 flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-xl">
                1
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Preparation & Valuation (Months 1-2)
                </h3>
                <p className="text-gray-700 mb-4">
                  Before going to market, you need to understand your business value and prepare essential documents.
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Activities:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Get professional business valuation</li>
                    <li>✓ Organize financial records (3 years)</li>
                    <li>✓ Prepare confidential information memorandum</li>
                    <li>✓ Set asking price and deal terms</li>
                    <li>✓ Assemble advisory team (CA, lawyer, broker)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative pl-12 md:pl-16">
              <div className="absolute left-0 top-0 flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-xl">
                2
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Marketing & Buyer Outreach (Months 2-4)
                </h3>
                <p className="text-gray-700 mb-4">
                  Your business is discreetly marketed to qualified buyers through blind profiles and NDAs.
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Activities:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Create blind business profile</li>
                    <li>✓ Identify and approach qualified buyers</li>
                    <li>✓ Screen inquiries (financial capability + intent)</li>
                    <li>✓ Sign NDAs before sharing details</li>
                    <li>✓ Conduct initial buyer meetings</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="relative pl-12 md:pl-16">
              <div className="absolute left-0 top-0 flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-xl">
                3
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Offers & Negotiation (Months 4-6)
                </h3>
                <p className="text-gray-700 mb-4">
                  Interested buyers submit offers. You negotiate terms including price, payment structure, and transition support.
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Activities:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Review offers (price, terms, buyer quality)</li>
                    <li>✓ Negotiate deal structure</li>
                    <li>✓ Agree on payment terms (cash, earnout, seller financing)</li>
                    <li>✓ Sign Letter of Intent (LOI)</li>
                    <li>✓ Exclusivity period begins</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="relative pl-12 md:pl-16">
              <div className="absolute left-0 top-0 flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-xl">
                4
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Due Diligence (Months 6-9)
                </h3>
                <p className="text-gray-700 mb-4">
                  The buyer verifies everything you've claimed. Be prepared for deep investigation into finances, operations, legal, and customers.
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Activities:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Set up secure data room</li>
                    <li>✓ Provide requested documents (financial, legal, operational)</li>
                    <li>✓ Answer buyer questions</li>
                    <li>✓ Buyer may interview key employees/customers</li>
                    <li>✓ Address any issues that arise</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 5 */}
            <div className="relative pl-12 md:pl-16">
              <div className="absolute left-0 top-0 flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-xl">
                5
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Closing & Transition (Months 9-12)
                </h3>
                <p className="text-gray-700 mb-4">
                  Final agreements are signed, funds transfer, and you begin transitioning the business to the new owner.
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Activities:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Finalize purchase agreement</li>
                    <li>✓ Complete legal documentation</li>
                    <li>✓ Funds transfer (escrow or direct)</li>
                    <li>✓ Announce transition to employees/customers</li>
                    <li>✓ Begin training/transition period (typically 30-90 days)</li>
                    <li>✓ Hand over keys, accounts, and relationships</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Common Process Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How confidential is the process?
              </h3>
              <p className="text-gray-700">
                Extremely. We use blind profiles initially and only share identifying details after signed NDAs. You control who knows what and when.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I continue running the business during the sale?
              </h3>
              <p className="text-gray-700">
                Yes—and you should! Letting performance slip during the sale process can kill deals or reduce your price. Keep the business strong.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What if due diligence reveals issues?
              </h3>
              <p className="text-gray-700">
                Minor issues can usually be addressed. Major issues may lead to price renegotiation or deal termination. This is why preparation matters.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do I need to stay after the sale?
              </h3>
              <p className="text-gray-700">
                Most buyers want 30-90 days of transition support. Some deals include earnouts requiring longer involvement. This is negotiable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-600">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start the Process?
          </h2>
          <p className="text-lg text-emerald-100 mb-8">
            Begin with a free, confidential valuation. We'll guide you through every step.
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
