import Link from "next/link";

const footerLinks = {
  guide: [
    { name: "Why Sell Your Business", href: "/guide/why-sell" },
    { name: "How to Value", href: "/guide/valuation" },
    { name: "Preparing for Sale", href: "/guide/preparing" },
    { name: "Sale Process", href: "/guide/sale-process" },
    { name: "What Buyers Want", href: "/guide/what-buyers-want" },
  ],
  resources: [
    { name: "All Resources", href: "/resources" },
    { name: "Blog", href: "/blog" },
    { name: "Free Valuation", href: "/free-valuation" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy", href: "/privacy" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Guide */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Guide</h3>
            <ul className="space-y-3">
              {footerLinks.guide.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} SellIndianBusiness.com — A Pocket Fund Initiative
          </p>
          <p className="text-sm text-gray-400 text-center mt-2">
            Looking to buy a business?{" "}
            <a href="https://buyindianbusiness.com" className="text-blue-600 hover:text-blue-700">
              Visit BuyIndianBusiness.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
