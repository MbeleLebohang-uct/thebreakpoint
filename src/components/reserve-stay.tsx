import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Check, Shield, Star, Calendar } from 'lucide-react';

export function ReserveStay() {
  return (
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
            <div className='mb-4 inline-flex items-center gap-2'>
              <div className='bg-brand-pop-gold h-px w-8'></div>
              <span className='text-brand-pop-gold text-sm font-medium tracking-wider uppercase'>
                Secure Your Spot
              </span>
              <div className='bg-brand-pop-gold h-px w-8'></div>
            </div>
            <h2 className='text-brand-font mb-6 text-5xl font-light md:text-6xl'>
              Book Your Stay
            </h2>
            <div className='text-brand-font space-y-4'>
              <p className='text-lg'>
                Book your accommodation directly through our secure booking system.
              </p>
              <ul className='mt-6 space-y-2'>
                <li className='flex items-center'>
                  <span className='bg-brand-pop-burgundy mr-3 h-2 w-2 rounded-full'></span>
                  Essential Amenities - Close to all amenities
                </li>
                <li className='flex items-center'>
                  <span className='bg-brand-pop-burgundy mr-3 h-2 w-2 rounded-full'></span>
                  Prime Location - 6km from the Karoo National Park
                </li>
                <li className='flex items-center'>
                  <span className='bg-brand-pop-burgundy mr-3 h-2 w-2 rounded-full'></span>
                  Comfortable Stay - Fully equipped modern room
                </li>
              </ul>
              <div className='mt-8'>
                <Button
                  asChild
                  size='lg'
                  className='w-full md:w-auto md:min-w-[200px] px-12 py-6 text-lg mb-4'
                >
                  <Link
                    href='https://www.airbnb.co.za/h/thebreakpoint-guesthouse'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center justify-center gap-2'
                  >
                    <Calendar className='h-5 w-5' />
                    Book Now
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
  );
}
