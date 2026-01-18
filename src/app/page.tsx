import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Shield, Star, Check, Calendar } from 'lucide-react';
import type { Metadata } from 'next';
import { RoomListings } from '@/components/room-listings';

export const metadata: Metadata = {
  title: 'The Breakpoint - Accommodation in Beaufort West, Karoo',
  description:
    'Discover comfortable accommodation at The Breakpoint Guest House in Beaufort West, Karoo, Western Cape, South Africa. Just 6km from the Karoo National Park.',
  keywords: [
    'The Breakpoint',
    'luxury accommodation Hermanus',
    'Beaufort West accommodation',
    'Karoo National Park',
    'Western Cape accommodation',
    'Karoo holiday rental',
    'Karoo accommodation South Africa',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'The Breakpoint - Accommodation in Beaufort West, Karoo',
    description:
      'Experience comfortable accommodation at The Breakpoint Guest House in Beaufort West, Karoo, Western Cape, South Africa. Just 6km from the Karoo National Park.',
    url: '/',
    images: [
      {
        url: '/breakpoint-logo-circle.png',
        width: 1200,
        height: 800,
        alt: 'The Breakpoint - Accommodation in Beaufort West, Karoo',
      },
    ],
  },
};

export default function Home() {
  return (
    <div className='flex flex-col'>
      {/* Hero Section */}
      <section className='mx-4 my-6 md:mx-8 md:my-6'>
        <div className='mx-auto flex w-full max-w-5xl overflow-hidden rounded-lg'>
          {/* Mobile Image */}
          <div className='flex w-full md:hidden'>
            <Image
              src='/breakpoint-logo-circle.png'
              alt='The Breakpoint - Accommodation in Beaufort West, Karoo'
              width={800}
              height={600}
              className='h-auto w-full object-cover'
              priority
            />
          </div>

          {/* Desktop Image */}
          <div className='hidden w-full md:flex justify-center py-20'>
            <Image
              src='/breakpoint-logo-circle.png'
              alt='The Breakpoint - Accommodation in Beaufort West, Karoo'
              width={200}
              height={200}
              className='object-cover'
              priority
            />
          </div>
        </div>
      </section>

      {/* Mobile Title Section */}
      <section className='mx-4 mb-12 md:hidden'>
        <div className='text-center'>
          <div className='mb-4 inline-flex items-center gap-2'>
            <div className='bg-brand-pop-gold h-px w-8'></div>
            <span className='text-brand-pop-gold text-sm font-medium tracking-wider uppercase'>
              Beaufort West, Karoo
            </span>
            <div className='bg-brand-pop-gold h-px w-8'></div>
          </div>
          <h1 className='text-brand-font text-5xl font-light'>The Breakpoint</h1>
          <p className='text-brand-font mt-4 text-lg font-light'>
            Comfortable Karoo Rooms
          </p>
        </div>
      </section>

      {/* Location Section */}
      <section className='bg-brand-accent-bg/50 mb-20 overflow-hidden rounded-4xl'>
        <div className='grid min-h-[600px] grid-cols-1 lg:grid-cols-2'>
          <div className='relative min-h-[400px] lg:min-h-full'>
            <Image
              src='/area/location-pin.jpg'
              alt='Beautiful Beaufort West, Karoo location with stunning Karoo views'
              fill
              className='object-cover'
            />
          </div>
          <div className='flex items-center px-4 py-16 md:px-8 md:py-24 lg:px-12'>
            <div className='px-4'>
              <h2 className='text-brand-font mb-6 text-5xl font-light md:text-6xl'>
                Perfect Location
              </h2>
              <div className='text-brand-font space-y-4'>
                <p className='text-lg'>
                  Nestled in the heart of Beaufort West, Karoo, our place offers a
                  clean and comfortable stay with easy access to the best of the Karoo.
                  Wake up refreshed and ready to tackle the journey ahead.
                </p>
                <p>
                  Our prime position puts you at the center of it all - from
                  restuarants and petrol stations to the National Park and other attractions. 
                  Everything you need for a comfortable stay is right at your doorstep.
                </p>
                <ul className='mt-6 space-y-2'>
                  <li className='flex items-center'>
                    Safe residential neighborhood
                  </li>
                </ul>
                <div className='mt-8'>
                  <Button asChild size='lg' className='w-full md:w-auto md:min-w-[200px] px-12 py-6 text-lg mb-4'>
                    <Link href='/book' className='flex items-center justify-center gap-2'>
                      <Calendar className='h-5 w-5' />
                      Book Rooms
                    </Link>
                  </Button>
                  {/* Trust Indicators */}
                  <div className='flex flex-wrap items-center gap-6 mt-6 text-sm'>
                    <div className='flex items-center gap-2'>
                      <Shield className='text-brand-pop-burgundy h-4 w-4' />
                      <span className='text-brand-font font-light'>
                        Secure Booking
                      </span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Star className='text-brand-pop-gold h-4 w-4 fill-current' />
                      <span className='text-brand-font font-light'>
                        Highly Rated
                      </span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Check className='text-brand-pop-burgundy h-4 w-4' />
                      <span className='text-brand-font font-light'>
                        Best Price Guarantee
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Villa Previews Section */}
      <RoomListings />


      {/* Book Entire Property Section */}
      <section className='pb-16 md:pb-24'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-brand-font mb-6 text-5xl font-light md:text-6xl'>
            Book A Night Stay
          </h2>
          <p className='text-brand-font mx-auto mb-8 max-w-3xl text-lg'>
            Perfect for travellers driving across South Africa through the
            Karoo. Get a good night's sleep and be ready for the next day's journey.
          </p>
          <div className='mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <div className='text-brand-font flex items-center'>
              <span className='bg-brand-pop-gold mr-3 h-2 w-2 rounded-full'></span>
              Close to Engine Garage
            </div>
            <div className='text-brand-font flex items-center'>
              <span className='bg-brand-pop-gold mr-3 h-2 w-2 rounded-full'></span>
              Close to Karoo National Park
            </div>
            <div className='text-brand-font flex items-center'>
              <span className='bg-brand-pop-gold mr-3 h-2 w-2 rounded-full'></span>
              Close to all amenities
            </div>
          </div>
          <Button asChild size='lg' className='md:min-w-[200px] px-8 py-6 text-lg'>
            <Link href='/book#rooms' className='flex items-center justify-center gap-2'>
              <Calendar className='h-5 w-5' />
              Book Rooms
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
