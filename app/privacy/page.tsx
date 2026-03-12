import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SellIndianBusiness.com",
  description: "Privacy policy for SellIndianBusiness.com - How we handle your data.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="prose prose-lg max-w-none">
        <h2>Information We Collect</h2>
        <p>
          When you request a business valuation or subscribe to our newsletter, we collect:
        </p>
        <ul>
          <li>Name and contact information (email, phone)</li>
          <li>Business details (industry, revenue, location)</li>
          <li>Any additional information you choose to provide</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information you provide to:</p>
        <ul>
          <li>Provide business valuation services</li>
          <li>Connect you with qualified buyers (with your permission)</li>
          <li>Send you educational content and updates (if subscribed)</li>
          <li>Improve our services</li>
        </ul>

        <h2>Information Sharing</h2>
        <p>
          <strong>We do not share your business information with buyers without your explicit
          consent.</strong> We may share aggregated, anonymized data for marketing purposes.
        </p>

        <h2>Data Security</h2>
        <p>
          We implement appropriate security measures to protect your information. All data is
          stored securely and transmitted over encrypted connections.
        </p>

        <h2>Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Request correction or deletion</li>
          <li>Unsubscribe from marketing communications</li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          For privacy-related questions, contact us at:{" "}
          <a href="mailto:privacy@sellindianbusiness.com">privacy@sellindianbusiness.com</a>
        </p>
      </div>
    </div>
  );
}
