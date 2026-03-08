import { Helmet } from "react-helmet-async";
import { contactInfo } from "../data/contactInfo";

export default function OrganizationSchema() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": contactInfo.businessName,
    "legalName": contactInfo.legalName,
    "url": contactInfo.website.domain,
    "logo": `${contactInfo.website.domain}/flame.svg`,
    "description": contactInfo.description,
    "email": contactInfo.email.main,
    "telephone": contactInfo.phone.number,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": contactInfo.address.street,
      "addressLocality": contactInfo.address.city,
      "addressRegion": contactInfo.address.stateCode,
      "postalCode": contactInfo.address.zip,
      "addressCountry": contactInfo.address.countryCode
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": contactInfo.phone.number,
        "contactType": "customer service",
        "email": contactInfo.email.support,
        "availableLanguage": ["English"],
        "areaServed": contactInfo.address.countryCode
      },
      {
        "@type": "ContactPoint",
        "telephone": contactInfo.phone.number,
        "contactType": "sales",
        "email": contactInfo.email.sales,
        "availableLanguage": ["English"],
        "areaServed": contactInfo.address.countryCode
      }
    ],
    "sameAs": [
      contactInfo.social.facebook,
      contactInfo.social.instagram,
      contactInfo.social.youtube,
      contactInfo.social.twitter
    ],
    "foundingDate": contactInfo.legal.foundedYear,
    "priceRange": "$$-$$$$"
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": contactInfo.businessName,
    "url": contactInfo.website.domain,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${contactInfo.website.domain}/shop?search={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteData)}
      </script>
    </Helmet>
  );
}
