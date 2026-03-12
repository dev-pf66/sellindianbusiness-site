import { notFound } from "next/navigation";
import { getMDXContent, extractFAQs } from "@/lib/mdx";
import { MDXContent } from "@/components/MDXContent";
import { ArticleSchema } from "@/components/schema/ArticleSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import type { Metadata } from "next";

const guidePages = ["why-sell", "valuation", "preparing", "sale-process", "what-buyers-want"];

export async function generateStaticParams() {
  return guidePages.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  
  if (!guidePages.includes(slug)) {
    return {};
  }

  try {
    const { frontmatter } = getMDXContent(`guide/${slug}.md`);
    return {
      title: frontmatter.title,
      description: frontmatter.description,
    };
  } catch {
    return {};
  }
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  if (!guidePages.includes(slug)) {
    notFound();
  }

  let mdxContent;
  try {
    mdxContent = getMDXContent(`guide/${slug}.md`);
  } catch {
    notFound();
  }

  const { frontmatter, content } = mdxContent;
  const faqs = extractFAQs(content);
  
  const breadcrumbs = [
    { name: "Home", url: "https://sellindianbusiness.com" },
    { name: "Guide", url: "https://sellindianbusiness.com/guide" },
    { name: frontmatter.title, url: `https://sellindianbusiness.com/guide/${slug}` },
  ];

  const lastUpdated = frontmatter.lastUpdated || new Date().toISOString();

  return (
    <>
      <ArticleSchema
        title={frontmatter.title}
        description={frontmatter.description}
        url={`https://sellindianbusiness.com/guide/${slug}`}
        datePublished={lastUpdated}
        dateModified={lastUpdated}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      {faqs.length > 0 && <FAQSchema faqs={faqs} />}

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-gray-700">
            Home
          </a>
          {" > "}
          <a href="/guide" className="hover:text-gray-700">
            Guide
          </a>
          {" > "}
          <span className="text-gray-900">{frontmatter.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{frontmatter.title}</h1>
          <p className="text-xl text-gray-600">{frontmatter.description}</p>
          {frontmatter.lastUpdated && (
            <p className="text-sm text-gray-500 mt-4">
              Last updated: {new Date(frontmatter.lastUpdated).toLocaleDateString()}
            </p>
          )}
        </header>

        {/* Content */}
        <MDXContent content={content} />

        {/* CTA */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Sell Your Business?</h3>
          <p className="text-gray-600 mb-6">
            Get a free, confidential valuation and connect with serious buyers.
          </p>
          <a
            href="/free-valuation"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Get Your Free Valuation →
          </a>
        </div>
      </article>
    </>
  );
}
