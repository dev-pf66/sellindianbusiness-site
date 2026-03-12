# SellIndianBusiness.com

A Next.js website helping Indian business owners sell their businesses confidentially and for a fair price. A Pocket Fund initiative.

## 🎯 Purpose

SellIndianBusiness.com provides:
- Free business valuations
- Educational resources on selling businesses
- Buyer matching services
- Exit planning guidance
- M&A support for Indian SMBs

## 🛠 Tech Stack

- **Framework:** Next.js 16 with App Router
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Content:** MDX for blog posts
- **Deployment:** Vercel-ready
- **Analytics:** Vercel Analytics

## 📁 Project Structure

```
sellindianbusiness-site/
├── app/
│   ├── page.tsx              # Homepage
│   ├── about/                # About page
│   ├── how-it-works/         # Process explanation
│   ├── free-valuation/       # Lead capture form
│   ├── contact/              # Contact page
│   ├── resources/            # Resource hub
│   │   ├── why-sell/
│   │   ├── valuation-guide/
│   │   ├── prepare-for-sale/
│   │   ├── what-buyers-want/
│   │   └── sale-process/
│   ├── blog/                 # Blog listing and posts
│   │   └── [slug]/
│   └── api/
│       └── subscribe/        # Newsletter API
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── NewsletterSignup.tsx
│   └── schema/               # SEO schema components
├── lib/
│   ├── blog.ts              # Blog utilities
│   └── mdx.ts               # MDX utilities
└── content/
    └── blog/                # Blog post markdown files
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/dev-pf66/sellindianbusiness-site.git
cd sellindianbusiness-site

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm run start
```

## 📝 Content Management

### Blog Posts

Blog posts are stored as Markdown files in `content/blog/`. Each post requires frontmatter:

```markdown
---
title: "Your Post Title"
description: "Brief description for SEO"
date: "2024-03-12"
author: "Author Name"
tags: ["valuation", "exit-planning"]
---

Your content here...
```

### Resource Pages

Resource pages are React components in `app/resources/`. To add a new resource:

1. Create a folder: `app/resources/your-topic/`
2. Add `page.tsx` with metadata and content
3. Update `app/resources/page.tsx` to include it in the listing

## 🎨 Styling

The site uses Tailwind CSS 4 with custom configurations:

- **Primary Color:** Emerald (#059669)
- **Font:** Inter (Google Fonts)
- **Responsive:** Mobile-first design
- **Dark Mode:** Not implemented (future enhancement)

## 📊 SEO & Analytics

### Schema Markup

- Organization schema (site-wide)
- Article schema (blog posts)
- FAQ schema (resource pages)
- Breadcrumb schema

### Sitemap

Auto-generated at `/sitemap.xml` using Next.js sitemap function.

### Analytics

Vercel Analytics integrated. Update with Google Analytics ID in `app/layout.tsx`.

## 🔐 Environment Variables

Create `.env.local` for:

```env
# Email Service (ConvertKit, Mailchimp, etc.)
NEXT_PUBLIC_NEWSLETTER_API_KEY=your_key_here

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Custom Domain

Point your domain to Vercel:
- A Record: `76.76.21.21`
- CNAME: `cname.vercel-dns.com`

## 📧 Newsletter Integration

The newsletter signup form (`/api/subscribe/route.ts`) needs integration with an email service:

- ConvertKit
- Mailchimp  
- SendGrid
- Custom solution

Update `app/api/subscribe/route.ts` with your provider's API.

## 🤝 Contributing

This is a private project for Pocket Fund. External contributions are not currently accepted.

## 📄 License

Proprietary - © 2024 Pocket Fund

## 🔗 Related Projects

- [BuyABusiness-India.com](https://github.com/dev-pf66/buyabusiness-india-site) - Sister site for buyers

## 📞 Contact

For questions about the site or selling your business:
- Email: hello@sellindianbusiness.com
- Website: [sellindianbusiness.com](https://sellindianbusiness.com)

---

Built with ❤️ by Pocket Fund
