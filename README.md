# SellIndianBusiness.com

Complete website for helping Indian business owners sell their businesses confidentially and for fair prices.

## 🚀 Built With

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React Markdown** for MDX content
- Full SEO implementation with schema markup

## 📁 Site Structure

### Core Pages
- **Homepage** (`/`) - Hero, process overview, testimonials, FAQ
- **How It Works** (`/how-it-works`) - 6-step process explanation
- **Free Valuation** (`/free-valuation`) - Lead capture form
- **Resources** (`/resources`) - Hub linking to all guides
- **Newsletter** (`/newsletter`) - Newsletter signup
- **About** (`/about`) - About Pocket Fund
- **Contact** (`/contact`) - Contact form
- **Privacy** (`/privacy`) - Privacy policy

### Guide Pages (5 comprehensive guides)
- `/guide/why-sell` - Why Sell Your Business
- `/guide/valuation` - How to Value Your Business
- `/guide/preparing` - Preparing for Sale
- `/guide/sale-process` - The Sale Process Explained
- `/guide/what-buyers-want` - What Buyers Look For

### Blog (21 posts)
All content from `/content/blog/` covering:
- Valuation methods and multiples
- Exit strategies and timing
- Tax implications
- Legal considerations
- Industry-specific guides (manufacturing, retail, restaurant, ecommerce, IT)
- Common mistakes
- Due diligence preparation

## 🎯 SEO Features

### Schema Markup
- ✅ Organization schema (site-wide)
- ✅ Article schema (all blog posts & guides)
- ✅ FAQ schema (FAQ sections)
- ✅ HowTo schema (process pages)
- ✅ Breadcrumb schema (all content pages)

### Technical SEO
- ✅ Sitemap.xml (auto-generated, 42 pages)
- ✅ Robots.txt
- ✅ Open Graph meta tags
- ✅ Proper heading hierarchy
- ✅ Mobile responsive
- ✅ Fast page load (static generation)

## 📊 Stats

- **Total Pages**: 42
- **Blog Posts**: 21
- **Guide Pages**: 5
- **Static Pages**: 10+
- **Build Time**: ~19s
- **All pages**: Static HTML (pre-rendered)

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📝 Content Management

All content lives in `/content/`:
- `/content/blog/*.md` - Blog posts
- `/content/guide/*.md` - Guide pages

Content is loaded via:
- `lib/blog.ts` - Blog post utilities
- `lib/mdx.ts` - MDX content loading

## 🎨 Components

### Core Components
- `components/Navbar.tsx` - Site navigation
- `components/Footer.tsx` - Site footer
- `components/NewsletterSignup.tsx` - Email capture
- `components/MDXContent.tsx` - Markdown renderer

### Schema Components
- `components/schema/OrganizationSchema.tsx`
- `components/schema/ArticleSchema.tsx`
- `components/schema/FAQSchema.tsx`
- `components/schema/BreadcrumbSchema.tsx`
- `components/schema/HowToSchema.tsx`

## 🔗 Related

Sister site: [BuyIndianBusiness.com](https://github.com/dev-pf66/buyabusiness-india-site)

## 📄 License

Private - Pocket Fund Initiative

---

**Built by**: Pocket Fund  
**Purpose**: Educational content and lead generation for business sellers in India  
**Target Audience**: Indian SMB owners considering an exit
