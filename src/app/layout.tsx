import type { Metadata } from 'next';
import { Hanken_Grotesk } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { StructuredData } from '@/components/structured-data';

const hankenGrotesk = Hanken_Grotesk({
  variable: '--font-hanken-grotesk',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || 'https://thebreakpointguesthouse.com',
  ),
  title: {
    default: 'The Breakpoint Guest House - Accommodation in Beaufort West, Karoo',
    template: '%s | The Breakpoint',
  },
  description:
    'Experience comfortable accommodation at The Breakpoint Guest House in Beaufort West, Karoo, Western Cape, South Africa. Just 6km from the Karoo National Park.',
  keywords: [
    'The Breakpoint Guest House',
    'accommodation Beaufort West',
    'Karoo National Park',
    'Western Cape accommodation',
    'Karoo holiday rental',
    'Beaufort West accommodation',
    'Karoo accommodation South Africa',
  ],
  authors: [{ name: 'The Breakpoint' }],
  creator: 'The Breakpoint',
  publisher: 'The Breakpoint',
  category: 'Travel & Accommodation',

  // Open Graph
  openGraph: {
    title: 'The Breakpoint - Accommodation in Beaufort West, Karoo',
    description:
      'Experience comfortable accommodation at The Breakpoint Guest House in Beaufort West, Karoo, Western Cape, South Africa. Just 6km from the Karoo National Park.',
    url: '/',
    siteName: 'The Breakpoint',
    images: [
      {
        url: '/area/hermanus-aerial.jpg',
        width: 1200,
        height: 630,
        alt: 'The Breakpoint - Accommodation in Beaufort West, Karoo',
      },
    ],
    locale: 'en_ZA',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'The Breakpoint - Accommodation in Beaufort West, Karoo',
    description:
      'Experience comfortable accommodation at The Breakpoint Guest House in Beaufort West, Karoo, Western Cape, South Africa. Just 6km from the Karoo National Park.',
    images: ['/area/hermanus-aerial.jpg'],
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

  // Verification
  verification: {
    google: 'your-google-verification-code', // Replace with actual code
    // other: {
    //   'facebook-domain-verification': 'your-facebook-verification-code',
    // },
  },

  // Canonical URL
  alternates: {
    canonical: '/',
  },

  // Additional meta tags
  other: {
    'geo.region': 'ZA-WC',
    'geo.placename': 'Beaufort West, Karoo, Western Cape, South Africa',
    'geo.position': '-32.341928;22.423437',
    ICBM: '-32.341928, 22.423437',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${hankenGrotesk.variable} font-sans antialiased`}>
        <StructuredData type='Organization' />
        <StructuredData type='WebSite' />
        <Navbar />
        <main className='min-h-screen'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
