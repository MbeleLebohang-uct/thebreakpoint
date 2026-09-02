'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  MapPin,
  ArrowRight,
  Bed,
  AirVent,
  Wifi,
} from 'lucide-react';

const rooms = [
  {
    id: 1,
    name: 'The Blackbox',
    subtitle: 'Spacious Karoo Living',
    image: '/blackbox/bedroom.jpeg',
    description:
      'Thoughtfully designed for those who appreciate space and tranquility. This spacious room offers a sanctuary just moments from the Karoo National Park.',
    features: [
      { icon: Wifi, label: 'Reliable wifi' },
      { icon: Bed, label: 'Queen size bed' },
      { icon: AirVent, label: 'Air conditioning' },
    ],
    distance: '6km to Karoo National Park',
    href: '/villas/blackbox',
  }
];

export const RoomListings = () => {
  return (
    <section id='rooms' className='bg-background py-16 md:py-24'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='mx-auto mb-16 max-w-3xl text-center'>
          <div className='mb-6 inline-flex items-center gap-2'>
            <div className='bg-brand-pop-gold h-px w-8'></div>
            <span className='text-brand-pop-gold text-sm font-medium tracking-wider uppercase'>
              Beaufort West, Karoo
            </span>
            <div className='bg-brand-pop-gold h-px w-8'></div>
          </div>
          <h2 className='text-brand-font mb-6 text-5xl font-light tracking-tight md:text-6xl'>
            Our Rooms
          </h2>
          <p className='text-brand-font text-xl leading-relaxed font-light'>
            Each room offers a unique experience with essential amenities and
            ease of access to Beaufort West, Karoo.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className='mx-auto max-w-6xl'>
          <div className='grid gap-12'>
            {rooms.map((room) => (
              <Card
                key={room.id}
                className='group bg-brand-pop-gold/20 overflow-hidden border-0 shadow-sm transition-all duration-700 hover:shadow-lg'
              >
                {/* Image */}
                <div className='relative overflow-hidden'>
                  <Image
                    src={room.image}
                    alt={`Room ${room.name} - ${room.subtitle} in Beaufort West, Karoo`}
                    width={700}
                    height={500}
                    className='h-200 w-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]'
                  />
                  <div className='absolute top-6 left-6'>
                    <Badge className='text-brand-font bg-background border-0 shadow-sm backdrop-blur-sm'>
                      <MapPin className='mr-1.5 h-3 w-3' />
                      {room.distance}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className='p-8'>
                  <div className='mb-6'>
                    <div className='mb-3 flex items-center gap-3'>
                      <h3 className='text-brand-font text-3xl font-light tracking-tight'>
                        Room {room.name}
                      </h3>
                      <div className='bg-brand-pop-burgundy h-px w-6'></div>
                    </div>
                    <p className='text-brand-pop-burgundy mb-4 text-sm font-medium tracking-wide uppercase'>
                      {room.subtitle}
                    </p>
                    <p className='text-brand-font text-lg leading-relaxed font-light'>
                      {room.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className='mb-8 flex flex-wrap gap-3'>
                    {room.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className='bg-brand-pop-gold border-background flex items-center gap-2 rounded-full border px-4 py-2'
                      >
                        <feature.icon className='text-background h-4 w-4' />
                        <span className='text-background text-sm font-medium'>
                          {feature.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    asChild
                    className='group/btn h-12 w-full text-base font-medium tracking-wide transition-all duration-300'
                  >
                    <Link href={room.href}>
                      <span>Explore Room {room.name}</span>
                      <ArrowRight className='ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1' />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
