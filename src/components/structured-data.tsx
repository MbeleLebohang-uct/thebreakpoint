import Script from 'next/script';

interface ImageData {
  src: string;
  alt?: string;
}

interface AmenityData {
  label: string;
}

interface LodgingBusinessData {
  name?: string;
  description?: string;
  url?: string;
  images?: ImageData[];
  amenities?: AmenityData[];
}

interface StructuredDataProps {
  type: 'Organization' | 'LodgingBusiness' | 'WebSite';
  data?: LodgingBusinessData;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || 'https://thebreakpointguesthouse.com';

    switch (type) {
      case 'Organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'The Breakpoint',
          url: baseUrl,
          logo: `${baseUrl}/logo.png`,
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+27-12-345-6789',
            contactType: 'customer service',
            email: 'info@thebreakpointguesthouse.com',
          },
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Beaufort West',
            addressRegion: 'Western Cape',
            addressCountry: 'ZA',
          },
          sameAs: [
            'https://www.facebook.com/thebreakpointguesthouse',
            'https://www.instagram.com/thebreakpointguesthouse',
          ],
        };

      case 'LodgingBusiness':
        return {
          '@context': 'https://schema.org',
          '@type': 'LodgingBusiness',
          name: data?.name || 'The Breakpoint',
          description: data?.description,
          url: `${baseUrl}${data?.url || ''}`,
          image:
            data?.images?.map((img: ImageData) => `${baseUrl}${img.src}`) || [],
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Beaufort West',
            addressRegion: 'Western Cape',
            addressCountry: 'ZA',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: -32.341928,
            longitude: 22.423437,
          },
          telephone: '+27-64-322-6458',
          email: 'info@thebreakpointguesthouse.com',
          priceRange: '$$$',
          amenityFeature:
            data?.amenities?.map((amenity: AmenityData) => ({
              '@type': 'LocationFeatureSpecification',
              name: amenity.label,
            })) || [],
          checkinTime: '15:00',
          checkoutTime: '10:00',
        };

      case 'WebSite':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'The Breakpoint',
          url: baseUrl,
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${baseUrl}/search?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
          },
        };

      default:
        return {};
    }
  };

  const structuredData = getStructuredData();

  return (
    <Script
      id={`structured-data-${type}`}
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
