import Link from "next/link";
import { HowToSchema } from "@/components/schema/HowToSchema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Sell Your Business | Simple 4-Step Process | SellIndianBusiness",
  description:
    "Selling your business doesn't have to be complicated. Our simple 4-step process: Valuation → Preparation → Marketing → Closing. Get started with a free assessment.",
};

export default function HowItWorksPage() {
  const steps = [
    {
      name: "Share Basic Details",
      text: "Submit your business basics (industry, revenue, profit, location). This is confidential. You get confirmation and next steps within 24 hours.",
    },
    {
      name: "Free Valuation",
      text: "We analyze your business using standard valuation methods (EBITDA/SDE multiples, comparables, asset considerations). You get a detailed valuation report within 48 hours.",
    },
    {
      name: "Exit Readiness & Preparation",
      text: "We help you identify improvements that increase price and reduce deal risk. You get a personalized preparation checklist covering financial, operational, and legal aspects.",
    },
    {
      name: "Confidential Buyer Matching",
      text: "We create a blind profile and introduce your business only to qualified buyers. Buyers sign NDAs before receiving identifying details. You control who gets details, when meetings happen, and the pace.",
    },
    {
      name: "Offers, LOI, and Negotiation",
      text: "We help evaluate offers not just on price, but on payment terms (cash vs earnout vs seller financing), transition expectations, and buyer credibility and funding.",
    },
    {
      name: "Due Diligence and Closing",
      text: "Buyers verify your financials and operations. We support data room preparation, Q&A, and coordination with your CA/lawyer. Outcome: A closed transaction and a smooth handover.",
    },
  ];

  return (
    <>
      <HowToSchema
        name="How Selling Your Business Works"
        description="Complete guide to selling your business in India through our proven 6-step process"
        steps={steps}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          How Selling Your Business Works
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Selling your business can feel overwhelming—valuation, buyers, legal steps, due diligence.
          We break it down into a clear, seller-friendly process designed to protect confidentiality
          and maximize value.
        </p>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl">
                {index + 1}
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{step.name}</h2>
                <p className="text-gray-700 leading-relaxed">{step.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Timeline Expectations</h3>
          <p className="text-gray-700">
            Most SMB exits take <strong>6–12 months</strong> end-to-end. Well-prepared businesses
            with realistic valuations move faster.
          </p>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/free-valuation"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Start with a Free Valuation →
          </Link>
        </div>
      </div>
    </>
  );
}
