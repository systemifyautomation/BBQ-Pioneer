import SEO from "../components/SEO";
import OrganizationSchema from "../components/OrganizationSchema";
import Hero from "../components/Hero";
import TrustBadges from "../components/TrustBadges";
import FeaturedProducts from "../components/FeaturedProducts";
import CategoryShowcase from "../components/CategoryShowcase";
import TestimonialsSection from "../components/TestimonialsSection";
import PromoSection from "../components/PromoSection";

const homeStructuredData = {
  "@context": "https://schema.org",
  "@type": "Store",
  "name": "BBQ Pioneer",
  "image": "https://bbqpioneer.com/og-image.jpg",
  "description":
    "Premium high-ticket grills and smokers. Competition-grade craftsmanship for the serious pitmaster.",
  "url": "https://bbqpioneer.com",
  "telephone": "+1-888-BBQ-FIRE",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Austin",
    "addressRegion": "TX",
    "addressCountry": "US",
  },
  "openingHours": "Mo-Sa 08:00-20:00",
  "priceRange": "$$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Credit Card, PayPal",
};

export default function HomePage() {
  return (
    <>
      <SEO
        canonical="/"
        type="website"
        structuredData={homeStructuredData}
      />
      <OrganizationSchema />
      <main id="main-content">
        <Hero />
        <TrustBadges />
        <FeaturedProducts />
        <CategoryShowcase />
        <PromoSection />
        <TestimonialsSection />
      </main>
    </>
  );
}
