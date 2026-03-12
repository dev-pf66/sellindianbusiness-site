import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OrganizationSchema } from "@/components/schema/OrganizationSchema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Sell Your Business in India | Free Valuation | SellIndianBusiness.com",
    template: "%s | SellIndianBusiness.com",
  },
  description:
    "Ready to sell your business? Get a free confidential valuation and connect with serious buyers. Trusted by 500+ Indian business owners. Start your exit journey today.",
  keywords: [
    "sell business india",
    "sell my business",
    "business valuation india",
    "exit strategy",
    "business broker india",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sellindianbusiness.com",
    siteName: "SellIndianBusiness.com",
    title: "Sell Your Business in India | Free Valuation",
    description:
      "Get a free confidential valuation and connect with serious buyers. Trusted by 500+ Indian business owners.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sell Your Business in India | Free Valuation",
    description:
      "Get a free confidential valuation and connect with serious buyers. Trusted by 500+ Indian business owners.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
