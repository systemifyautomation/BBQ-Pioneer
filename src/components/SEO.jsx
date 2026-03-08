import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  canonical,
  image,
  type = "website",
  structuredData,
}) {
  const siteName = "BBQ Pioneer";
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} — Premium High-Ticket Grills & Smokers`;
  const metaDescription =
    description ||
    "BBQ Pioneer offers the world's finest high-ticket grills and smokers. Premium craftsmanship for the serious pitmaster.";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {canonical && <link rel="canonical" href={`https://bbqpioneer.com${canonical}`} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      {canonical && (
        <meta property="og:url" content={`https://bbqpioneer.com${canonical}`} />
      )}
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
