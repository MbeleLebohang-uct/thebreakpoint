import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book Your Stay - Comfortable Karoo Rooms in Beaufort West, Karoo',
  description:
    'Book your comfortable accommodation at The Breakpoint in Beaufort West, Karoo. Choose from The Blackbox, both featuring Karoo views and easy access to the Karoo National Park. Secure booking with best price guarantee.',
  keywords: [
    'book accommodation Beaufort West, Karoo',
    'reserve room Beaufort West, Karoo',
    'Beaufort West, Karoo booking',
    'comfortable accommodation booking',
    'Karoo National Park reservations',
    'Karoo accommodation booking',
    'The Breakpoint booking',
    'Karoo holiday rental',
  ],
  alternates: {
    canonical: '/book',
  },
  openGraph: {
    title: 'Book Your Stay at The Breakpoint - Beaufort West, Karoo',
    description:
      'Reserve your comfortable room with Karoo views in Beaufort West, Karoo. Direct booking with best rates guaranteed.',
    url: '/book',
    siteName: 'The Breakpoint',
    images: [
      {
        url: '/breakpoint-logo-circle.png',
        width: 1200,
        height: 630,
        alt: 'The Breakpoint comfortable Karoo rooms booking',
      },
    ],
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Your Stay at The Breakpoint',
    description:
      'Reserve your comfortable room with Karoo views in Beaufort West, Karoo.',
    images: ['/breakpoint-logo-circle.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
