import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  serviceName?: string;
  h1?: string;
}

export const SEO = ({ title, description, serviceName, h1 }: SEOProps) => {
  const location = useLocation();
  const defaultTitle = "Траурна Агенция Кипарис - Професионални Траурни Услуги";
  const defaultDescription = "Траурни услуги в София. Денонощно: 02 846 55 24.";
  
  const pageTitle = title || defaultTitle;
  const pageDescription = description || defaultDescription;
  const canonicalUrl = `https://kiparis-sofia.bg${location.pathname}`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Траурна агенция Кипарис",
    "telephone": "+35928465524",
    "email": "kiparis2000@abv.bg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. Професор Асен Златаров №8",
      "addressLocality": "София",
      "addressCountry": "България"
    },
    "areaServed": "София"
  };

  const serviceSchema = serviceName ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Траурна агенция Кипарис",
      "telephone": "+35928465524",
      "email": "kiparis2000@abv.bg"
    },
    "areaServed": "София"
  } : null;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:locale" content="bg_BG" />
      <meta property="og:url" content={canonicalUrl} />
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      )}
    </Helmet>
  );
};
