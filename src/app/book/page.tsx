'use client';

import { Suspense } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MessageCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ReserveStay } from '@/components/reserve-stay';

function ContactContent() {
  return (
    <div className='flex flex-col'>
      {/* Hero Section */}
      <section className='mx-4 my-6 md:mx-8 md:my-6'>
        <div className='mx-auto w-full max-w-7xl'>
          <div className='grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12'>
            {/* Image on the left */}
            <div className='relative flex justify-center items-center'>
              <div className='overflow-hidden rounded-4xl'>
                <Image
                  src='/breakpoint-logo-text.png'
                  alt='The Breakpoint - Comfortable Karoo rooms in Beaufort West, Karoo'
                  width={240}
                  height={240}
                  className='object-cover py-40'
                  priority
                />
              </div>
            </div>

            {/* Content on the right */}
            <div>
              <div className='mb-8 inline-flex items-center gap-2'>
                <div className='bg-brand-pop-gold h-px w-8'></div>
                <span className='text-brand-pop-gold text-sm font-medium tracking-wider uppercase'>
                  Get In Touch
                </span>
                <div className='bg-brand-pop-gold h-px w-8'></div>
              </div>
              <h1 className='text-brand-font mb-6 text-5xl font-light md:text-6xl'>
                Book Now
              </h1>
              <p className='text-brand-font max-w-2xl text-xl leading-relaxed font-light'>
                Ready to experience the comfort of The Breakpoint? Book your stay
                directly or get in touch with us for any questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Book Now Section */}
      <ReserveStay />

      {/* Contact Section */}
      <section id='rooms' className='bg-background py-8 md:py-12'>
        <div className='container mx-auto px-4'>
          {/* Header */}
          <div className='mx-auto mb-16 max-w-3xl text-center'>
            <div className='mb-6 inline-flex items-center gap-2'>
              <div className='bg-brand-pop-gold h-px w-8'></div>
              <span className='text-brand-pop-gold text-sm font-medium tracking-wider uppercase'>
                Contact Us
              </span>
              <div className='bg-brand-pop-gold h-px w-8'></div>
            </div>
            <h2 className='text-brand-font mb-6 text-5xl font-light tracking-tight md:text-6xl'>
              Get In Touch
            </h2>
            <p className='text-brand-font text-xl leading-relaxed font-light'>
              Have questions? We&apos;re here to help you plan your perfect
              road trip through the Karoo.
            </p>
          </div>

          <div className='mx-auto max-w-5xl'>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
              {/* WhatsApp Card */}
              <Card className='bg-background group border-0 shadow-md transition-all duration-300 hover:shadow-xl'>
                <CardContent className='p-10 md:p-12'>
                  <div className='mb-6 flex items-center gap-3'>
                    <div className='bg-brand-pop-burgundy/10 group-hover:bg-brand-pop-burgundy/20 flex h-14 w-14 items-center justify-center rounded-full transition-colors duration-300'>
                      <MessageCircle className='text-brand-pop-burgundy h-7 w-7' />
                    </div>
                    <h3 className='text-brand-font text-2xl font-semibold'>
                      WhatsApp
                    </h3>
                  </div>
                  <Button
                    asChild
                    variant='outline'
                    className='mb-2 w-full hover:bg-primary hover:text-white hover:border-primary transition-colors duration-300'
                  >
                    <Link
                      href='https://wa.me/27643226458'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Message Us
                    </Link>
                  </Button>
                  <p className='text-brand-font mt-2 text-sm font-light'>
                    Quick responses during business hours
                  </p>
                </CardContent>
              </Card>

              {/* Email Card */}
              <Card className='bg-background group border-0 shadow-md transition-all duration-300 hover:shadow-xl'>
                <CardContent className='p-10 md:p-12'>
                  <div className='mb-6 flex items-center gap-3'>
                    <div className='bg-brand-pop-burgundy/10 group-hover:bg-brand-pop-burgundy/20 flex h-14 w-14 items-center justify-center rounded-full transition-colors duration-300'>
                      <Mail className='text-brand-pop-burgundy h-7 w-7' />
                    </div>
                    <h3 className='text-brand-font text-2xl font-semibold'>
                      Email
                    </h3>
                  </div>
                  <Button
                    asChild
                    variant='outline'
                    className='mb-2 w-full hover:bg-primary hover:text-white hover:border-primary transition-colors duration-300'
                  >
                    <Link href='mailto:info@thebreakpointguesthouse.com'>Send Email</Link>
                  </Button>
                  <p className='text-brand-font mt-2 text-sm font-light'>
                    We&apos;ll respond within 24 hours
                  </p>
                </CardContent>
              </Card>

              {/* Location Card */}
              <Card className='bg-background group border-0 shadow-md transition-all duration-300 hover:shadow-xl'>
                <CardContent className='p-10 md:p-12'>
                  <div className='mb-6 flex items-center gap-3'>
                    <div className='bg-brand-pop-burgundy/10 group-hover:bg-brand-pop-burgundy/20 flex h-14 w-14 items-center justify-center rounded-full transition-colors duration-300'>
                      <MapPin className='text-brand-pop-burgundy h-7 w-7' />
                    </div>
                    <h3 className='text-brand-font text-2xl font-semibold'>
                      Location
                    </h3>
                  </div>
                  <Button
                    asChild
                    variant='outline'
                    className='mb-2 w-full hover:bg-primary hover:text-white hover:border-primary transition-colors duration-300'
                  >
                    <Link
                      href='https://www.google.com/maps/place/Beaufort+West,+6970'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Beaufort West, Karoo, South Africa
                    </Link>
                  </Button>
                  <p className='text-brand-font mt-2 text-sm font-light'>
                    6km from the Karoo National Park
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location Highlights Section */}
      <section className='bg-background py-16 md:py-24'>
        <div className='container mx-auto px-4'>
          {/* Header */}
          <div className='mx-auto mb-16 max-w-3xl text-center'>
            <div className='mb-6 inline-flex items-center gap-2'>
              <div className='bg-brand-pop-gold h-px w-8'></div>
              <span className='text-brand-pop-gold text-sm font-medium tracking-wider uppercase'>
                The Area
              </span>
              <div className='bg-brand-pop-gold h-px w-8'></div>
            </div>
            <h2 className='text-brand-font mb-6 text-5xl font-light tracking-tight md:text-6xl'>
              Why Choose Beaufort West?
            </h2>
            <p className='text-brand-font text-xl leading-relaxed font-light'>
              Discover the perfect blend of Karoo beauty, wildlife encounters,
              and unique experiences.
            </p>
          </div>

          <div className='mx-auto max-w-5xl'>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
              <div>
                <div className='flex items-center gap-3 mb-2'>
                  <div className='bg-brand-pop-burgundy h-2 w-2 rounded-full flex-shrink-0'></div>
                  <h3 className='text-brand-font font-semibold'>
                    Perfect Distance
                  </h3>
                </div>
                <p className='text-brand-font text-sm font-light'>
                  Beaufort West is the perfect base for your journey through the Karoo.
                </p>
              </div>
              <div>
                <div className='flex items-center gap-3 mb-2'>
                  <div className='bg-brand-pop-burgundy h-2 w-2 rounded-full flex-shrink-0'></div>
                  <h3 className='text-brand-font font-semibold'>
                    Basic Amenities
                  </h3>
                </div>
                <p className='text-brand-font text-sm font-light'>
                  Beaufort West is the capital city of the Karoo with all the basic amenities you need.
                </p>
              </div>
              <div>
                <div className='flex items-center gap-3 mb-2'>
                  <div className='bg-brand-pop-burgundy h-2 w-2 rounded-full flex-shrink-0'></div>
                  <h3 className='text-brand-font font-semibold'>
                    Nature Reserves
                  </h3>
                </div>
                <p className='text-brand-font text-sm font-light'>
                  Explore nearby Karoo National Park with hiking trails and
                  indigenous flora and fauna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense>
      <ContactContent />
    </Suspense>
  );
}
