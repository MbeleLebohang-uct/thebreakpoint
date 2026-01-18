import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-brand-pop-gold rounded-t-4xl border-t text-center'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          {/* Quick Links */}
          <div>
            <h3 className='text-background mb-4 text-lg font-semibold underline'>
              Quick Links
            </h3>
            <nav className='space-y-2'>
              <Link
                href='/'
                className='text-background hover:text-f block transition-colors'
              >
                Home
              </Link>
              <Link
                href='/villas/blackbox'
                className='text-background hover:text-f block transition-colors'
              >
                The Blackbox
              </Link>
              <Link
                href='/book'
                className='text-background hover:text-f block transition-colors'
              >
                Book Now
              </Link>
            </nav>
          </div>

          {/* Brand & Description */}
          <div className='flex items-center justify-center'>
            <Image
              src='/breakpoint-logo-text-light.png'
              alt='The Breakpoint'
              width={240}
              height={240}
              className='object-cover'
            />
          </div>

          {/* Contact Information */}
          <div>
            <h3 className='text-background mb-4 text-lg font-semibold underline'>
              Contact Information
            </h3>
            <div className='space-y-3'>
              <div className='flex items-center justify-center space-x-2'>
                <MapPin className='text-f h-4 w-4' />
                <span className='text-background'>
                  Beaufort West, Western Cape, South Africa
                </span>
              </div>
              <div className='flex items-center justify-center space-x-2'>
                <Mail className='text-f h-4 w-4' />
                <a
                  href='mailto:info@thebreakpointguesthouse.com'
                  className='text-background hover:text-f transition-colors'
                >
                  info@thebreakpointguesthouse.com
                </a>
              </div>
              <div className='flex items-center justify-center space-x-2'>
                <Phone className='text-f h-4 w-4' />
                <a
                  href='tel:+27643226458'
                  className='text-background hover:text-f transition-colors'
                >
                  +27 64 322 6458
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='border-background/20 mt-8 border-t pt-8 text-center'>
          <p className='text-background text-sm'>
            © {currentYear} The Breakpoint. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
