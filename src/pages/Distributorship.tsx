import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { partners } from '@/data/novellaData';

gsap.registerPlugin(ScrollTrigger);

export default function Distributorship() {
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

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="relative bg-navy flex items-center justify-center" style={{ height: '60vh', minHeight: '400px' }}>
        <img
          src="/images/distribution-warehouse.jpg"
          alt="Distribution warehouse"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.3 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, #0A1628, transparent)' }}
        />
        <div className="relative z-10 text-center px-6">
          <span className="label-style text-amber block mb-4">DISTRIBUTORSHIP</span>
          <h1
            className="font-display text-white max-w-[800px] mx-auto"
            style={{ fontSize: 'max(28px, 5.5vw)', lineHeight: 1.05 }}
          >
            Partner With India's Leading Chemical Distributor
          </h1>
        </div>
      </section>

      {/* Partnership Details */}
      <section className="bg-cream" style={{ padding: '8vw 6vw' }}>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="animate-in label-style text-copper block mb-4">WHY PARTNER WITH NOVELLA</span>
            <h2
              className="animate-in font-display text-navy mb-6"
              style={{ fontSize: 'max(24px, 4vw)', lineHeight: 1.1 }}
            >
              Join Our Distribution Network
            </h2>
            <p className="animate-in mb-4" style={{ color: '#1E293B' }}>
              The growth of the company was well planned and judiciously managed. The group is also involved in International Trade and has substantial dealings with several organizations.
            </p>
            <p className="animate-in mb-8" style={{ color: 'rgba(30, 41, 59, 0.7)' }}>
              We offer competitive margins, marketing support, and timely delivery to our distribution partners across India.
            </p>
            <Link to="/contact" className="animate-in btn-primary">
              Become a Distributor
            </Link>
          </div>
          <div className="animate-in">
            <img
              src="/images/distribution-warehouse.jpg"
              alt="Distribution operations"
              className="w-full rounded-lg"
              style={{ aspectRatio: '4/3', objectFit: 'cover' }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Partner Companies */}
      <section className="bg-navy" style={{ padding: '8vw 6vw' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <span className="label-style text-amber block mb-4">OUR PRINCIPAL COMPANIES</span>
            <h2
              className="font-display text-white"
              style={{ fontSize: 'max(24px, 4vw)', lineHeight: 1.1 }}
            >
              Representing Industry Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="animate-in p-10 rounded-lg"
                style={{
                  backgroundColor: '#1E293B',
                  border: '1px solid rgba(212, 165, 116, 0.2)',
                }}
              >
                <h3
                  className="font-display text-white mb-4"
                  style={{ fontSize: 'max(20px, 2vw)' }}
                >
                  {partner.name}
                </h3>
                <p style={{ color: '#F5F0EB' }}>{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
