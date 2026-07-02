import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { teamMembers, partners } from '@/data/novellaData';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const ctx = gsap.context(() => {
      gsap.from(page.querySelectorAll('.animate-in'), {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: page,
          start: 'top 80%',
        },
      });
    }, page);

    return () => ctx.revert();
  }, []);

  const values = [
    {
      title: 'Quality First',
      description: 'Huge quality focus is implemented in every place. Our team actively indulges in procurement for annihilating all sorts of errors.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4A574" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      ),
    },
    {
      title: 'Legal Compliance',
      description: 'We assure about making contracts in the most legal manner for sourcing products such as Zinc Oxide, Magnesium Carbonate, Liquid Caustic Soda, etc.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4A574" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
    {
      title: 'Market Leadership',
      description: 'Having a sharp business structure, we are following our passion to reign market. We maintain core competency for keeping competitors below our position.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4A574" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
  ];

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="relative bg-navy" style={{ height: '70vh', minHeight: '500px' }}>
        <img
          src="/images/hero-fallback.jpg"
          alt="Chemical facility"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.4 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, #0A1628, transparent)' }}
        />
        <div className="relative z-10 flex flex-col justify-end h-full px-6 lg:px-12 pb-16">
          <span className="label-style text-amber block mb-4">ABOUT US</span>
          <h1
            className="font-display text-white max-w-[600px]"
            style={{ fontSize: 'max(28px, 5.5vw)', lineHeight: 1.05 }}
          >
            Why Novella?
          </h1>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-cream" style={{ padding: '8vw 6vw' }}>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="animate-in label-style text-copper block mb-4">OUR STORY</span>
            <h2
              className="animate-in font-display text-navy mb-6"
              style={{ fontSize: 'max(24px, 4vw)', lineHeight: 1.1 }}
            >
              25 Years of Chemical Distribution Excellence
            </h2>
            <p className="animate-in mb-4" style={{ color: '#1E293B' }}>
              Starting with a small operation, the company has grown to establish sales and distribution arrangements countrywide. The growth of the company was well planned and judiciously managed. The group is also involved in International Trade and has substantial dealings with several organizations.
            </p>
            <p className="animate-in" style={{ color: 'rgba(30, 41, 59, 0.7)' }}>
              We make sure our vendor partnerships are legitimate in the industry. Our trader based company strikes relations with vendors in a lawful manner. We assure about making contracts in the most legal manner for sourcing products.
            </p>
          </div>
          <div className="animate-in">
            <img
              src="/images/distribution-warehouse.jpg"
              alt="Novella distribution warehouse"
              className="w-full rounded-lg"
              style={{ aspectRatio: '4/3', objectFit: 'cover' }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-navy" style={{ padding: '8vw 6vw' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <span className="label-style text-amber block mb-4">OUR VALUES</span>
            <h2
              className="font-display text-white"
              style={{ fontSize: 'max(24px, 4vw)', lineHeight: 1.1 }}
            >
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="animate-in p-10 rounded-lg"
                style={{
                  backgroundColor: '#1E293B',
                  border: '1px solid rgba(212, 165, 116, 0.2)',
                }}
              >
                <div className="mb-6">{value.icon}</div>
                <h3
                  className="font-display text-white mb-4"
                  style={{ fontSize: 'max(20px, 2vw)' }}
                >
                  {value.title}
                </h3>
                <p style={{ color: '#F5F0EB' }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-cream" style={{ padding: '8vw 6vw' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <span className="label-style text-copper block mb-4">OUR TEAM</span>
            <h2
              className="font-display text-navy"
              style={{ fontSize: 'max(24px, 4vw)', lineHeight: 1.1 }}
            >
              Meet The People Behind Novella
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => {
              const imageByName: Record<string, string> = {
                'Anand Patel': '/images/AnandPatel.jpg',
                'Divyesh Borsaniya': '/images/DivyeshBorsaniya.jpg',
                'Satish Patel': '/images/SatishPatel.jpg',
                'Vikas Patel': '/images/vikas_patel.jpg',
              };

              const imgSrc = imageByName[member.name];

              return (
                <div
                  key={member.id}
                  className="animate-in bg-white rounded-lg overflow-hidden"
                >
                  <div
                    className="relative"
                    style={{
                      aspectRatio: '3/4',
                      background: 'linear-gradient(135deg, #E8E0D8 0%, #D4C4B0 100%)',
                    }}
                  >
                    {imgSrc ? (
                      <img
                        src={imgSrc}
                        alt={member.name}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <span className="font-display text-4xl" style={{ color: 'rgba(10, 22, 40, 0.2)' }}>
                        {member.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <h4 className="font-body font-medium text-navy">{member.name}</h4>
                    <p className="text-sm mt-1" style={{ color: '#64748B' }}>{member.role}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="bg-navy" style={{ padding: '6vw' }}>
        <div className="max-w-[1400px] mx-auto text-center">
          <span className="label-style text-amber block mb-8">AUTHORIZED DISTRIBUTORS FOR</span>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="animate-in font-display text-white text-lg md:text-xl transition-opacity duration-300 hover:opacity-100"
                style={{ opacity: 0.7, letterSpacing: '0.05em' }}
              >
                {partner.name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
