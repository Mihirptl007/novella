import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router';
import { industries } from '@/data/novellaData';


gsap.registerPlugin(ScrollTrigger);

export default function Industries() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const ctx = gsap.context(() => {
      // Animate elements inside the industries page when they enter viewport.
      // This keeps CTA + content animations working.
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

      // Animate the CTA heading/text.
      gsap.from(page.querySelectorAll('.animate-cta'), {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: page,
          start: 'top 80%',
        },
      });

      // Ensure the CTA button also animates (Get In Touch).
      const button = page.querySelector<HTMLAnchorElement>('.industries-cta-button');
      if (button) {
        gsap.from(button, {
          y: 20,
          opacity: 0,
          scale: 0.98,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: button,
            start: 'top 85%',
          },
        });
      }
    }, page);

    return () => ctx.revert();
  }, []);



  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="relative bg-navy flex items-center justify-center" style={{ height: '60vh', minHeight: '400px' }}>
        <img
          src="/images/industry-chemical.jpg"
          alt="Chemical processing plant"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.3 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, #0A1628, transparent)' }}
        />
        <div className="relative z-10 text-center px-6">
          <span className="label-style text-amber block mb-4">INDUSTRIES SERVED</span>
          <h1
            className="font-display text-white"
            style={{ fontSize: 'max(28px, 5.5vw)', lineHeight: 1.05 }}
          >
            Chemical Solutions Across Sectors
          </h1>
          <p className="mt-4 max-w-[700px] mx-auto" style={{ color: '#F5F0EB' }}>
            We supply chemicals to diverse industries, ensuring quality and reliability for every application.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="bg-cream" style={{ padding: '8vw 6vw' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="animate-in group relative overflow-hidden rounded-lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                  <div className="relative overflow-hidden h-[280px] md:h-[320px] w-full">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 will-change-transform group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>



                  {/* Ensure vertical alignment stays consistent across all cards */}

                  <div className="flex flex-col justify-center p-8 bg-white h-full min-h-[280px]">

                    <h3
                      className="font-display text-navy mb-3"
                      style={{ fontSize: 'max(20px, 2vw)' }}
                    >
                      {industry.name}
                    </h3>
                    <p style={{ color: '#64748B' }}>{industry.description}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy" style={{ padding: '6vw' }}>
        <div className="max-w-[800px] mx-auto text-center relative z-10">
          <h2
            className="font-display text-white mb-4 animate-cta"
            style={{ fontSize: 'max(24px, 4vw)', lineHeight: 1.1 }}
          >
            Serving Your Industry?
          </h2>
          <p className="mb-8 animate-cta" style={{ color: '#F5F0EB' }}>
            Whether you are in textiles, paper, healthcare, or any other sector, we have the right chemical solutions for your needs.
          </p>
          <Link
            to="/contact"
            className="btn-primary inline-flex industries-cta-button"
            style={{ position: 'relative', zIndex: 9999 }}
          >
            Get In Touch
          </Link>

        </div>
      </section>
    </div>
  );
}
