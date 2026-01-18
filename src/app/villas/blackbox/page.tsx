import { VillaPage } from '@/components/villa-page';
import { StructuredData } from '@/components/structured-data';
import villaData from './data.json';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || 'https://thebreakpointguesthouse.com';

  return {
    title: `${villaData.name} - ${villaData.subtitle} | The Breakpoint`,
    description: villaData.description,
    keywords: [
      'The Blackbox',
      'accommodation Beaufort West',
      'Karoo National Park',
      'Western Cape accommodation',
      'Karoo holiday rental',
      'Karoo accommodation South Africa',
    ],
    authors: [{ name: 'The Breakpoint' }],
    creator: 'The Breakpoint',
    publisher: 'The Breakpoint',

    // Canonical URL
    alternates: {
      canonical: '/villas/blackbox',
    },

    // Open Graph
    openGraph: {
      title: `${villaData.name} - ${villaData.subtitle}`,
      description: villaData.description,
      url: `${baseUrl}/villas/blackbox`,
      siteName: 'The Breakpoint',
      images: [
        {
          url: `${baseUrl}/blackbox/bedroom.jpg`,
          width: 1200,
          height: 630,
          alt: villaData.galleryImages[0].alt,
        },
        {
          url: `${baseUrl}/blackbox/outside-1.jpg`,
          width: 1200,
          height: 630,
          alt: villaData.galleryImages[2].alt,
        },
      ],
      locale: 'en_ZA',
      type: 'website',
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: `${villaData.name} - ${villaData.subtitle}`,
      description: villaData.description,
      images: [`${baseUrl}/blackbox/bedroom.jpg`],
      creator: '@thebreakpointguesthouse',
    },

    // Additional metadata
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // Geo metadata
    other: {
      'geo.region': 'ZA-WC',
      'geo.placename': 'Beaufort West, Karoo, Western Cape, South Africa',
      'geo.position': '-32.341928;22.423437',
      ICBM: '-32.341928, 22.423437',
    },
  };
}

export default function VillaBlackboxPage() {
  return (
    <>
      <StructuredData
        type='LodgingBusiness'
        data={{
          name: villaData.name,
          description: villaData.description,
          url: '/villas/blackbox',
          images: villaData.galleryImages,
          amenities: villaData.amenities,
        }}
      />
      <VillaPage villaData={villaData} villaSlug='blackbox' />
    </>
  );
}
