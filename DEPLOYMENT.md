# BBQ Pioneer - Deployment Guide

## Quick Start: Deploy to Vercel

### Option 1: Vercel CLI (Fastest)

1. **Deploy Now** (from project directory):
```bash
vercel --prod
```

2. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? (Select your account)
   - Link to existing project? **N**
   - What's your project's name? **bbq-pioneer** (or your choice)
   - In which directory is your code located? **./**
   - Want to override settings? **N**

3. Your site will be live in ~30 seconds! 🎉

### Option 2: GitHub Integration (Recommended for teams)

1. **Push your code to GitHub**:
```bash
git add .
git commit -m "Add Google Merchant Center compliance"
git push origin main
```

2. **Connect to Vercel**:
   - Go to https://vercel.com/new
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"

3. **Automatic deployments**:
   - Every push to `main` = auto-deploys to production
   - Pull requests = auto-generate preview URLs

## Post-Deployment Checklist

### 1. Verify Core Pages
- [ ] Homepage: `https://your-domain.com/`
- [ ] Shop: `https://your-domain.com/shop`
- [ ] Product pages working
- [ ] Cart functionality
- [ ] All policy pages accessible

### 2. Update Product Feeds
Replace `bbqpioneer.com` with your actual domain:

**In these files:**
- `/public/product-feed.xml`
- `/public/product-feed.json`
- `/public/sitemap.xml`

**In these source files:**
- `/src/components/OrganizationSchema.jsx`
- `/src/pages/ProductDetailPage.jsx` (structured data)

**Search and replace:**
```bash
# Find all instances
grep -r "bbqpioneer.com" src/ public/

# Replace with your domain
# Use your editor's find & replace: bbqpioneer.com → yourdomain.com
```

### 3. Test Product Feed
```bash
# Verify XML feed is valid
curl https://your-domain.com/product-feed.xml

# Verify JSON feed
curl https://your-domain.com/product-feed.json
```

### 4. Google Merchant Center Setup

#### A. Claim Your Website
1. Go to https://merchants.google.com
2. Add your website URL
3. Verify ownership (HTML tag method recommended)

#### B. Add Product Feed
1. Products → Feeds → Create Feed
2. Feed name: **BBQ Pioneer Products**
3. Input method: **Scheduled fetch**
4. File URL: `https://your-domain.com/product-feed.xml`
5. Fetch schedule: **Daily at 2:00 AM**
6. Click **Submit**

#### C. Configure Shipping
1. Tools → Shipping and Returns
2. Add shipping service:
   - **Name:** Standard Freight
   - **Delivery time:** 5-10 business days
   - **Shipping cost:** $0 (free for orders over $3,000)

#### D. Add Business Information
1. Tools → Business Information
2. Complete all required fields:
   - Business name: **BBQ Pioneer LLC**
   - Phone: **1-888-BBQ-FIRE**
   - Email: **hello@bbqpioneer.com**
   - Address: **Austin, Texas**

#### E. Link Policy Pages
Ensure these URLs are accessible and listed:
- Return policy: `https://your-domain.com/refund-policy`
- Privacy policy: `https://your-domain.com/privacy-policy`
- Terms of service: `https://your-domain.com/terms-of-service`
- Contact page: `https://your-domain.com/contact`

### 5. Google Search Console

1. Go to https://search.google.com/search-console
2. Add your property (https://your-domain.com)
3. Verify ownership (DNS or HTML method)
4. Submit sitemap: `https://your-domain.com/sitemap.xml`

### 6. Analytics Setup

**Google Analytics 4:**
```html
<!-- Add to index.html <head> or via Google Tag Manager -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Vercel Analytics** (already included):
- Automatically tracked with Vercel deployment
- View metrics in Vercel dashboard

## Custom Domain Setup

### 1. Add Domain in Vercel

1. Go to your project → Settings → Domains
2. Click "Add"
3. Enter your domain: `yourdomain.com`
4. Add www redirect: `www.yourdomain.com`

### 2. Update DNS Records

Add these records in your domain registrar (e.g., Namecheap, GoDaddy):

**For apex domain (yourdomain.com):**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: Automatic
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: Automatic
```

### 3. SSL Certificate
- Automatically provisioned by Vercel
- Takes 5-10 minutes
- Forced HTTPS enabled by default

## Monitoring & Maintenance

### Weekly Tasks
- [ ] Check Google Merchant Center for feed errors
- [ ] Review Vercel Analytics for traffic/performance
- [ ] Monitor uptime and response times

### Monthly Tasks
- [ ] Update product inventory in `products.js`
- [ ] Regenerate and upload product feed
- [ ] Review Google Search Console for SEO issues
- [ ] Check Core Web Vitals scores

### Quarterly Tasks
- [ ] Update policy pages if needed
- [ ] Review and optimize product descriptions
- [ ] Analyze conversion rates and make improvements
- [ ] Update pricing and promotions

## Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Product Feed Errors
- Validate XML: https://validator.w3.org/feed/
- Check GTIN format (13-14 digits)
- Ensure all required fields present
- Verify image URLs are accessible

### Google Merchant Issues

**"Missing return policy"**
- Ensure `/refund-policy` is accessible
- Add link in footer

**"Missing shipping info"**
- Configure shipping in Merchant Center
- Add shipping policy page

**"Image quality issues"**
- Use high-resolution images (min 800x600)
- Ensure images load properly
- No watermarks on product images

### Contact Verification Failed
1. Ensure `/contact` page has:
   - Phone number
   - Email address
   - Physical address
   - Contact form

## Performance Optimization

### Image Optimization
```bash
# Install Sharp for image processing (optional)
npm install sharp

# Compress images before upload
# Use services like TinyPNG, ImageOptim
```

### Bundle Size Analysis
```bash
npm run build -- --mode analyze
```

### Lighthouse Audit
1. Open DevTools → Lighthouse
2. Run audit
3. Target scores:
   - Performance: 90+
   - Accessibility: 95+
   - Best Practices: 95+
   - SEO: 100

## Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **Google Merchant Center Help:** https://support.google.com/merchants
- **React Router Docs:** https://reactrouter.com
- **Vite Docs:** https://vitejs.dev

## Emergency Rollback

If deployment has issues:

```bash
# Rollback to previous deployment in Vercel dashboard
# Or redeploy previous commit:
vercel --prod
```

## Success Checklist

After deployment, verify:

- [ ] ✅ Site loads correctly on desktop
- [ ] ✅ Site loads correctly on mobile
- [ ] ✅ All product images display
- [ ] ✅ Shopping cart works
- [ ] ✅ Contact form accessible
- [ ] ✅ All policy pages load
- [ ] ✅ Product feed XML accessible
- [ ] ✅ Sitemap.xml accessible
- [ ] ✅ Google Merchant Center feed processed
- [ ] ✅ No console errors in browser
- [ ] ✅ SSL certificate active (https)
- [ ] ✅ Analytics tracking works

🎉 **Congratulations! Your BBQ Pioneer store is live and Google Merchant Center ready!**
