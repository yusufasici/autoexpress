import { Helmet } from "react-helmet-async";

interface LocalSEOProps {
  city?: string;
  service?: string;
}

export const LocalSEOData: React.FC<LocalSEOProps> = ({ city, service }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://autokeyexpress.ca/#organization",
        "name": "AutoKey Express",
        "url": "https://autokeyexpress.ca",
        "sameAs": [
          "https://www.google.com/maps/place/AutoKey+Express",
          "https://www.facebook.com/autokeyexpress",
          "https://www.instagram.com/autokeyexpress"
        ],
        "logo": {
          "@type": "ImageObject",
          "url": "https://autokeyexpress.ca/logo.png",
          "width": 400,
          "height": 400
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+16479068124",
          "contactType": "customer service",
          "availableLanguage": ["en", "fr"],
          "areaServed": "CA"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://autokeyexpress.ca/#localbusiness",
        "name": city ? `AutoKey Express - Locksmith ${city}` : "AutoKey Express",
        "image": [
          "https://autokeyexpress.ca/logo.png",
          "https://autokeyexpress.ca/og.png"
        ],
        "telephone": "+16479068124",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "28 Eugenia Ct",
          "addressLocality": "Markham",
          "addressRegion": "Ontario",
          "postalCode": "L3R 4Y6",
          "addressCountry": "CA"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 43.869118,
          "longitude": -79.294069
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday", 
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        },
        "priceRange": "$$",
        "currenciesAccepted": "CAD",
        "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
        "servesCuisine": null,
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "150",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://autokeyexpress.ca/#website",
        "url": "https://autokeyexpress.ca",
        "name": "AutoKey Express",
        "description": "Professional 24/7 locksmith services across the Greater Toronto Area",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://autokeyexpress.ca/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://autokeyexpress.ca/#breadcrumbs",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@id": "https://autokeyexpress.ca/",
              "name": "Home"
            }
          },
          ...(city ? [{
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@id": `https://autokeyexpress.ca/locksmith-${city.toLowerCase().replace(/\s/g, "")}`,
              "name": `Locksmith ${city}`
            }
          }] : []),
          ...(service ? [{
            "@type": "ListItem",
            "position": city ? 3 : 2,
            "item": {
              "@id": `https://autokeyexpress.ca/services/${service.toLowerCase().replace(/\s/g, "-")}`,
              "name": service
            }
          }] : [])
        ]
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default LocalSEOData;