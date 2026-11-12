import { Helmet } from 'react-helmet-async';
import { COMPANY_CONFIG } from '../../config/company';

export default function Seo({
  title,
  description,
  path = '/',
  image = '/images/hero-chair.jpg',
  includeLocalBusinessSchema = false,
}) {
  const fullTitle = title
    ? `${title} | ${COMPANY_CONFIG.name}`
    : COMPANY_CONFIG.seo.defaultTitle;
  const metaDescription = description || COMPANY_CONFIG.seo.defaultDescription;
  const canonicalUrl = `${COMPANY_CONFIG.seo.siteUrl}${path}`;
  const ogImageUrl = image.startsWith('http')
    ? image
    : `${COMPANY_CONFIG.seo.siteUrl}${image}`;

  const localBusinessSchema = includeLocalBusinessSchema
    ? {
        '@context': 'https://schema.org',
        '@type': 'FurnitureStore',
        name: COMPANY_CONFIG.name,
        description: COMPANY_CONFIG.shortDescription,
        telephone: COMPANY_CONFIG.contact.phoneDisplay,
        address: {
          '@type': 'PostalAddress',
          addressLocality: COMPANY_CONFIG.location.city,
          addressRegion: COMPANY_CONFIG.location.state,
          addressCountry: 'IN',
        },
        areaServed: {
          '@type': 'State',
          name: 'Tamil Nadu',
        },
        url: COMPANY_CONFIG.seo.siteUrl,
      }
    : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:site_name" content={COMPANY_CONFIG.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImageUrl} />

      {localBusinessSchema && (
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      )}
    </Helmet>
  );
}
