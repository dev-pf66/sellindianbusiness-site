export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SellIndianBusiness.com",
    url: "https://sellindianbusiness.com",
    logo: "https://sellindianbusiness.com/logo.png",
    description:
      "Help Indian business owners sell their businesses confidentially and for a fair price. Free valuation, expert guidance, and verified buyers.",
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
