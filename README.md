# BBQ Pioneer 🔥

A premium high-ticket grill ecommerce store built with **React + Vite + Tailwind CSS v4**. Fully optimized for Google Merchant Center and scalable deployment.

![BBQ Pioneer Homepage](https://github.com/user-attachments/assets/d4e7df21-f93a-4058-b043-fe701b2790ab)

## Features

- **Fire-themed design** — black/coal backgrounds, orange fire accents, white typography
- **Full ecommerce flow** — Home → Shop → Product Detail → Cart → Checkout
- **6 premium grill products** — Offset Smokers, Kamado, Pellet, Gas & Charcoal Grills
- **Shopping cart drawer** — slide-out cart with quantity controls & free shipping qualifier
- **Category filtering & sorting** — filter by grill type, sort by price/rating
- **High-converting elements** — urgency badges, social proof, testimonials, promo sections
- **Fully responsive** — optimized for mobile and desktop
- **SEO & Merchant Ready** — structured data, policy pages, contact form, product feeds
- **Google Merchant Center Compliant** — complete product data with GTIN, MPN, condition fields

## Tech Stack

- React 19 + Vite 7
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- React Router DOM v7
- React Helmet Async (SEO)
- React Icons (Feather Icons)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Pages

| Page | Route |
|------|-------|
| Homepage | `/` |
| Shop | `/shop` |
| Product Detail | `/product/:slug` |
| Cart | `/cart` |
| Checkout | `/checkout` |
| About | `/about` |
| Contact | `/contact` |
| Privacy Policy | `/privacy-policy` |
| Terms of Service | `/terms-of-service` |
| Shipping Policy | `/shipping-policy` |
| Refund Policy | `/refund-policy` |

## SEO & Google Merchant Center

### Structured Data (JSON-LD)
- ✅ Organization schema (sitewide)
- ✅ WebSite schema with search action
- ✅ Store schema on homepage
- ✅ Product schema on product pages (with GTIN, MPN, offers, ratings)
- ✅ BreadcrumbList on product pages
- ✅ Enhanced shipping and availability data

### Product Feeds
- **XML Feed**: `/product-feed.xml` (Google Merchant Center format)
- **JSON Feed**: `/product-feed.json` (alternative format)

### Required Pages (Google Merchant)
- ✅ Contact page with form and business hours
- ✅ Privacy Policy
- ✅ Terms of Service
- ✅ Shipping Policy (rates, delivery times, freight info)
- ✅ Refund & Return Policy (30-day guarantee)

### Product Data Structure
Each product includes:
- SKU, MPN, GTIN (UPC/EAN)
- Condition (new)
- Shipping weight
- Availability status
- Pricing with currency
- High-quality images
- Detailed descriptions
- Brand information

## Deployment to Vercel

### Initial Setup

1. **Install Vercel CLI** (if not already installed):
```bash
npm install -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy to Preview**:
```bash
vercel
```

4. **Deploy to Production**:
```bash
vercel --prod
```

### Automatic Deployments

Connect your GitHub repository to Vercel for automatic deployments:

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Vite settings
5. Click "Deploy"

Every push to `main` branch will automatically deploy to production.

### Environment Variables (if needed)

Set environment variables in Vercel dashboard:
- Go to Project Settings → Environment Variables
- Add any API keys or configuration needed

### Custom Domain

1. Go to Project Settings → Domains
2. Add your custom domain (e.g., `bbqpioneer.com`)
3. Update DNS records as instructed
4. SSL certificate is automatically provisioned

## Google Merchant Center Setup

### Step 1: Create Account
1. Go to [merchants.google.com](https://merchants.google.com)
2. Create a Google Merchant Center account
3. Verify and claim your website

### Step 2: Submit Product Feed
1. In Merchant Center, go to **Products → Feeds**
2. Click "+" to create a new feed
3. Choose "Products" as feed type
4. Select "Scheduled fetch" as input method
5. Enter feed URL: `https://yourdomain.com/product-feed.xml`
6. Set fetch schedule (recommended: daily)
7. Save and process feed

### Step 3: Verify Requirements
Ensure these are accessible:
- ✅ Contact page: `https://yourdomain.com/contact`
- ✅ Privacy Policy: `https://yourdomain.com/privacy-policy`
- ✅ Terms of Service: `https://yourdomain.com/terms-of-service`
- ✅ Refund Policy: `https://yourdomain.com/refund-policy`
- ✅ Shipping Policy: `https://yourdomain.com/shipping-policy`

### Step 4: Set Up Shipping & Tax
1. Go to **Tools → Shipping and Returns**
2. Configure shipping rates and delivery times
3. Set up return policy details
4. Configure tax settings if applicable

### Step 5: Review & Approval
- Google will review your products (usually 3-5 business days)
- Fix any issues flagged in diagnostics
- Once approved, products will appear in Google Shopping

## Performance Optimization

### Image Optimization
- Lazy loading enabled on all product images
- Responsive images with appropriate sizing
- CDN delivery via Vite build optimization

### Code Splitting
- React.lazy() for route-based code splitting
- Dynamic imports for large components
- Optimized bundle size

### Caching Strategy
- Static assets cached for 1 year (immutable)
- Product feed updated daily
- Service worker for offline support (optional)

### Security Headers
Configured in `vercel.json`:
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer-Policy

## Scalability Considerations

### Current Architecture
- Static site generation (SSG) via Vite
- No server-side rendering needed for current scale
- Product data in JSON (easily migrated to API/CMS)

### Scaling Options

**For 10-100 products:**
- Current setup is perfect
- Consider adding search functionality
- Implement client-side filtering

**For 100-1000 products:**
- Move product data to headless CMS (Contentful, Sanity)
- Implement server-side API
- Add full-text search (Algolia, Elasticsearch)

**For 1000+ products:**
- Migrate to Next.js with ISR (Incremental Static Regeneration)
- Implement database (PostgreSQL + Prisma)
- Add CDN for images (Cloudinary, imgix)
- Consider microservices architecture

### Database Migration Path
When ready to scale, products.js can easily migrate to:
- PostgreSQL/MySQL
- MongoDB
- Supabase
- Firebase
- Contentful/Strapi

## Monitoring & Analytics

### Recommended Tools
- **Google Analytics 4** - user behavior tracking
- **Google Search Console** - SEO monitoring
- **Vercel Analytics** - performance metrics
- **Sentry** - error tracking
- **Hotjar** - user recordings & heatmaps

## Support & Maintenance

### Regular Updates
- Update product feed weekly or when inventory changes
- Monitor Google Merchant Center for issues
- Review analytics for conversion optimization
- Update policy pages as needed

### SEO Maintenance
- Submit new products to sitemap
- Monitor Core Web Vitals
- Optimize images and content regularly
- Build backlinks and content marketing

## License

This project is proprietary. All rights reserved.
