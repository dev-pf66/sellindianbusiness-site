import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { MDXContent } from "@/components/MDXContent";
import { ArticleSchema } from "@/components/schema/ArticleSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, post.relatedPosts);
  
  const breadcrumbs = [
    { name: "Home", url: "https://sellindianbusiness.com" },
    { name: "Blog", url: "https://sellindianbusiness.com/blog" },
    { name: post.title, url: `https://sellindianbusiness.com/blog/${post.slug}` },
  ];

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.description}
        url={`https://sellindianbusiness.com/blog/${post.slug}`}
        datePublished={post.date}
        dateModified={post.date}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      {post.faqs && post.faqs.length > 0 && <FAQSchema faqs={post.faqs} />}

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-700">
            Home
          </Link>
          {" > "}
          <Link href="/blog" className="hover:text-gray-700">
            Blog
          </Link>
          {" > "}
          <span className="text-gray-900">{post.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-600">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>•</span>
            <span>{post.readingTime} min read</span>
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Content */}
        <MDXContent content={post.content} />

        {/* Newsletter Signup */}
        <NewsletterSignup />

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-16 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="block group"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{relatedPost.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Sell Your Business?</h3>
          <p className="text-gray-600 mb-6">
            Get a free, confidential valuation and connect with serious buyers.
          </p>
          <Link
            href="/free-valuation"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Get Your Free Valuation →
          </Link>
        </div>
      </article>
    </>
  );
}
