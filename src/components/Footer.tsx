import { Link } from 'react-router';
import { contactInfo } from '@/data/novellaData';

export default function Footer() {
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Industries', path: '/industries' },
    { label: 'Distributorship', path: '/distributorship' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' },
  ];

  const productLinks = [
    'Soda Ash',
    'Caustic Soda',
    'Borax',
    'STPP',
    'Acetic Acid',
    'Bleaching Powder',
  ];

  return (
    <footer className="bg-navy" style={{ borderTop: '1px solid rgba(212, 165, 116, 0.2)' }}>
      {/* Marquee */}
      <div className="overflow-hidden py-6" style={{ borderBottom: '1px solid rgba(212, 165, 116, 0.1)' }}>
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="font-display text-4xl md:text-6xl mx-8"
              style={{ color: 'rgba(245, 240, 235, 0.06)' }}
            >
              THE ART OF CHEMICAL DISTRIBUTION &middot; NOVELLA CORPORATION &middot; THE BEST YOU CAN GET &middot;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="px-6 lg:px-12 py-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <Link to="/" aria-label="Novella Home" className="relative z-[1100]">
                <img
                  src="/images/novellalogo.png"
                  alt="Novella"
                  className="h-[55px] w-auto object-contain p-1 rounded-md"
                  style={{ background: '#D4A574', mixBlendMode: 'multiply' }}

                />
            </Link>

            <p className="mt-2 text-xs tracking-wider" style={{ color: '#64748B' }}>
              The best you can get
            </p>
            <p className="mt-6 text-sm leading-relaxed" style={{ color: 'rgba(245, 240, 235, 0.6)' }}>
              India's leading chemical distributor with 25+ years of excellence in supplying industrial chemicals across textiles, paper, healthcare, and construction industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="label-style text-amber mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors duration-300 hover:text-amber"
                    style={{ color: 'rgba(245, 240, 235, 0.7)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="label-style text-amber mb-6">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((product) => (
                <li key={product}>
                  <Link
                    to="/products"
                    className="text-sm transition-colors duration-300 hover:text-amber"
                    style={{ color: 'rgba(245, 240, 235, 0.7)' }}
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="label-style text-amber mb-6">Contact</h4>
            <div className="space-y-4">
              {contactInfo.addresses.map((addr, i) => (
                <p key={i} className="text-sm leading-relaxed" style={{ color: 'rgba(245, 240, 235, 0.7)' }}>
                  {addr}
                </p>
              ))}
              <div className="pt-2">
                {contactInfo.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="block text-sm transition-colors duration-300 hover:text-amber mb-1"
                    style={{ color: 'rgba(245, 240, 235, 0.7)' }}
                  >
                    {phone}
                  </a>
                ))}
              </div>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-sm transition-colors duration-300 hover:text-amber"
                style={{ color: 'rgba(245, 240, 235, 0.7)' }}
              >
                {contactInfo.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="px-6 lg:px-12 py-6"
        style={{ borderTop: '1px solid rgba(212, 165, 116, 0.2)' }}
      >
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: '#64748B' }}>
            &copy; 2025 Novella Corporation. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {Object.entries(contactInfo.social).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:text-amber"
                style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                aria-label={platform}
              >
                <SocialIcon platform={platform} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ platform }: { platform: string }) {
  const icons: Record<string, React.ReactNode> = {
    facebook: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    twitter: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
    linkedin: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    youtube: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.46z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    ),
    instagram: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  };

  return icons[platform] || null;
}
