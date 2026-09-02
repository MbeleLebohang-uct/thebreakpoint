import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon, Calendar } from 'lucide-react';
import { getIcon } from '@/lib/villa-icons';

interface AmenityData {
  icon: string;
  label: string;
}

interface Amenity {
  icon: LucideIcon;
  label: string;
}

interface GalleryImage {
  src: string;
  alt: string;
}

interface VillaDataRaw {
  name: string;
  subtitle: string;
  description: string;
  amenities: AmenityData[];
  galleryImages: GalleryImage[];
  otherVilla: {
    name: string;
    slug: string;
  };
}

interface VillaData {
  name: string;
  subtitle: string;
  description: string;
  amenities: Amenity[];
  galleryImages: GalleryImage[];
  otherVilla: {
    name: string;
    slug: string;
  };
}

interface VillaPageProps {
  villaData: VillaDataRaw;
  villaSlug: string;
}

export const VillaPage = ({ villaData, villaSlug }: VillaPageProps) => {
  // Transform the raw amenities data to include actual icon components
  const processedVillaData: VillaData = {
    ...villaData,
    amenities: villaData.amenities.map((amenity) => ({
      ...amenity,
      icon: getIcon(amenity.icon),
    })),
  };

  return (
    <div className='flex flex-col'>
      {/* Hero Section */}
      <section className='mx-4 my-6 md:mx-8 md:my-6'>
        <div className='relative mx-auto w-full max-w-7xl overflow-hidden rounded-4xl'>
          {/* Hero Image */}
          <div className='relative h-[60vh] md:h-[70vh] lg:h-[80vh]'>
            <Image
              src={
                processedVillaData.galleryImages[0]?.src || '/blackbox/bedroom.jpg'
              }
              alt={
                processedVillaData.galleryImages[0]?.alt ||
                `${processedVillaData.name} - Comfortable room`
              }
              fill
              className='object-cover'
              priority
            />

            {/* Overlay gradient for text readability */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent' />

            {/* Content overlay with blur effect */}
            <div className='absolute inset-0 flex items-end'>
              <div className='container mx-auto px-6 pb-12 md:px-8 md:pb-8'>
                <div className='max-w-2xl rounded-2xl bg-black/20 p-6 backdrop-blur-xs md:p-8'>
                  {/* Price Badge */}
                  <Badge className='bg-brand-pop-gold text-background border-none px-4 py-2 text-sm font-semibold mb-6'>
                    From 800/night
                  </Badge>

                  <h1 className='mb-4 text-4xl font-light text-white md:text-5xl lg:text-6xl'>
                    {processedVillaData.name}
                  </h1>
                  <p className='mb-6 text-xl font-light text-white/90 md:text-2xl'>
                    {processedVillaData.subtitle}
                  </p>

                  <Button asChild size='lg' className='md:min-w-[200px] px-8 py-6 text-lg'>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className='bg-background py-16 md:py-24'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-4xl'>
            <div className='mb-8 inline-flex items-center gap-2'>
              <div className='bg-brand-pop-gold h-px w-8'></div>
              <span className='text-brand-pop-gold text-sm font-medium tracking-wider uppercase'>
                Beaufort West, Karoo
              </span>
              <div className='bg-brand-pop-gold h-px w-8'></div>
            </div>

            <h2 className='text-brand-font mb-8 text-3xl font-light md:text-4xl'>
              About {processedVillaData.name}
            </h2>

            <div className='text-brand-font prose prose-lg max-w-none'>
              <p className='text-xl leading-relaxed font-light'>
                {processedVillaData.description}
              </p>
            </div>

            {/* Key highlights */}
            <div className='mt-12 grid grid-cols-1 gap-6 md:grid-cols-3'>
              <div className='flex items-center gap-3'>
                <div className='bg-brand-pop-burgundy h-2 w-2 rounded-full flex-shrink-0'></div>
                <p className='text-brand-font text-sm font-medium'>
                  6km to Karoo National Park
                </p>
              </div>
              <div className='flex items-center gap-3'>
                <div className='bg-brand-pop-burgundy h-2 w-2 rounded-full flex-shrink-0'></div>
                <p className='text-brand-font text-sm font-medium'>
                  Close to all amenities
                </p>
              </div>
              <div className='flex items-center gap-3'>
                <div className='bg-brand-pop-burgundy h-2 w-2 rounded-full flex-shrink-0'></div>
                <p className='text-brand-font text-sm font-medium'>
                  Midtown
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className='bg-brand-accent-bg/50 rounded-4xl py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-brand-font mb-12 text-3xl font-light md:text-4xl'>
            Amenities & Features
          </h2>
          <div className='grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5'>
            {processedVillaData.amenities.map((amenity, index) => (
              <Card
                key={index}
                className='bg-background transition-shadow hover:shadow-md'
              >
                <CardContent className='p-6 flex flex-col items-center'>
                  <amenity.icon className='text-brand-pop-burgundy mb-3 h-8 w-8' />
                  <p className='text-brand-font text-sm font-medium text-center'>
                    {amenity.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Full Photo Gallery Section */}
      <section className='bg-background py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-brand-font mb-12 text-3xl font-light md:text-4xl'>
            Photo Gallery
          </h2>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {processedVillaData.galleryImages.map((image, index) => (
              <div key={index} className='group relative h-64 md:h-80'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  sizes='100vw'
                  fill
                  className='rounded-lg object-cover transition-transform duration-300 group-hover:scale-105'
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className='py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-brand-font mb-6 text-3xl font-light md:text-4xl'>
            Ready to Experience {processedVillaData.name}?
          </h2>
          <p className='text-brand-font mx-auto mb-8 max-w-2xl text-lg'>
            Book your stay at {processedVillaData.name} and discover{' '}
            {villaSlug === 'mignon'
              ? 'an intimate sanctuary where luxury meets tranquility'
              : 'the perfect blend of luxury, comfort, and natural beauty'}{' '}
            in the heart of Beaufort West.
          </p>
          <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <Button asChild size='lg' className='md:min-w-[200px] px-8 py-6 text-lg'>
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
          </div>
        </div>
      </section>
    </div>
  );
};
