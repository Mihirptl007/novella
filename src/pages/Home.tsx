import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { products, industries, testimonials, stats, partners } from '@/data/novellaData';
import WhatsAppButton from '@/components/WhatsAppButton';

gsap.registerPlugin(ScrollTrigger);

/* ─── Hero Section ─── */
function HeroSection() {

  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const video = videoRef.current;
    if (!section || !content || !video) return;

    const ctx = gsap.context(() => {
      // Parallax effect on scroll
      gsap.to(video, {
        y: 150,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(content, {
        y: -100,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '50% top',
          scrub: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-fallback.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 1 }}
      >
        <source src="/videos/hero-vd.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 2,
          background: 'linear-gradient(to bottom, rgba(10,22,40,0.3) 0%, rgba(10,22,40,0.5) 60%, rgba(10,22,40,0.95) 100%)',
        }}
      />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative flex flex-col items-center justify-center h-full px-6 text-center"
        style={{ zIndex: 10 }}
      >
        <span className="label-style text-amber mb-6" style={{ letterSpacing: '0.15em' }}>
          INDIA'S LEADING CHEMICAL DISTRIBUTOR
        </span>
        <h1
          className="font-display text-white max-w-[900px]"
          style={{ fontSize: 'max(28px, 5.5vw)', lineHeight: 1.05, letterSpacing: '-0.02em' }}
        >
          Innovating Chemistry, Delivering Excellence
        </h1>
        <p
          className="mt-6 max-w-[600px] mx-auto"
          style={{ color: 'rgba(245, 240, 235, 0.7)' }}
        >
          25+ years of trusted chemical distribution across textiles, paper, healthcare, ceramic, glass, and construction industries.
        </p>
        <Link to="/products" className="btn-primary mt-10">
          Explore Our Products
        </Link>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 w-full h-[150px]"
        style={{
          zIndex: 5,
          background: 'linear-gradient(to top, #0A1628, transparent)',
        }}
      />
    </section>
  );
}

/* ─── About Overview Section ─── */
function AboutOverviewSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(section.querySelectorAll('.animate-in'), {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-navy" style={{ padding: '8vw 6vw' }}>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center">
        <div>
          <span className="animate-in label-style text-amber block mb-4">ABOUT NOVELLA</span>
          <h2
            className="animate-in font-display text-white mb-6"
            style={{ fontSize: 'max(24px, 4vw)', lineHeight: 1.1, letterSpacing: '-0.01em' }}
          >
            Distributor Of Chemicals In India
          </h2>
          <p className="animate-in mb-4" style={{ color: '#F5F0EB' }}>
            Novella Corporation keeps a wide array of products that are directly or indirectly finding multipurpose use in many applications such as textiles, laundry, paper, chemical, healthcare, construction, and more.
          </p>
          <p className="animate-in mb-8" style={{ color: 'rgba(245, 240, 235, 0.7)' }}>
            Having a sharp business structure, we are following our passion to reign market. We maintain core competency for keeping our competitors far below our position.
          </p>
          <Link to="/about" className="animate-in btn-secondary">
            More About Us
          </Link>
        </div>
        <div className="animate-in relative">
          <img
            src="/images/about-facility.jpg"
            alt="Novella Corporation chemical facility"
            className="w-full rounded"
            style={{ aspectRatio: '3/4', objectFit: 'cover' }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

/* ─── 3D Text Carousel Section ─── */
function CarouselSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleMouseEnter = () => {
      carousel.style.animationPlayState = 'paused';
    };
    const handleMouseLeave = () => {
      carousel.style.animationPlayState = 'running';
    };

    carousel.addEventListener('mouseenter', handleMouseEnter);
    carousel.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      carousel.removeEventListener('mouseenter', handleMouseEnter);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const partnerNames = partners.map((p) => p.name);

  return (
    <section className="relative bg-navy overflow-hidden" style={{ height: '100vh' }}>
      <div className="absolute top-[8vw] left-[6vw] z-10">
        <span className="label-style text-amber block mb-4">TRUSTED PARTNERS</span>
        <h2
          className="font-display text-white"
          style={{ fontSize: 'max(24px, 4vw)', lineHeight: 1.1 }}
        >
          Authorized Distributors For
        </h2>
      </div>

      <div className="scene">
        <div ref={carouselRef} className="carousel">
          {partnerNames.map((name, i) => (
            <div key={i} className="carousel__cell">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Industries Section ─── */
function IndustriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(section.querySelectorAll('.industry-card'), {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-cream" style={{ padding: '8vw 6vw' }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <span className="label-style text-copper block mb-4">INDUSTRIES WE SERVE</span>
          <h2
            className="font-display text-navy"
            style={{ fontSize: 'max(24px, 4vw)', lineHeight: 1.1 }}
          >
            Chemical Solutions Across Sectors
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <Link
              key={industry.id}
              to="/industries"
              className="industry-card group relative overflow-hidden rounded-lg block"
              style={{ aspectRatio: '4/5' }}
            >
              <img
                src={industry.image}
                alt={industry.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(10,22,40,0.8), transparent)' }}
              />
              <h3
                className="absolute bottom-6 left-6 font-display text-white"
                style={{ fontSize: 'max(20px, 2vw)' }}
              >
                {industry.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Statistics Section ─── */
function StatisticsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const hasAnimated = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 80%',
        onEnter: () => {
          if (hasAnimated.current) return;
          hasAnimated.current = true;

          stats.forEach((stat, index) => {
            const numericValue = parseInt(stat.value.replace(/\D/g, ''));
            const obj = { val: 0 };
            gsap.to(obj, {
              val: numericValue,
              duration: 2,
              ease: 'power2.out',
              onUpdate: () => {
                setCounts((prev) => {
                  const next = [...prev];
                  next[index] = Math.round(obj.val);
                  return next;
                });
              },
            });
          });
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-navy" style={{ padding: '6vw' }}>
      <div className="max-w-[1400px] mx-auto grid grid-cols-3 gap-x-10 gap-y-6 text-center">
        {/* Force symmetric 2-line layout: 3 items in row 1, 3 items in row 2 */}
        {stats.map((stat, index) => (
          <div key={stat.label}>
            <div
              className="font-display text-amber"
              style={{ fontSize: 'max(36px, 4.8vw)', lineHeight: 1 }}
            >
              {counts[index]}{stat.value.includes('+') ? '+' : ''}
            </div>
            <div
              className="mt-2 text-xs uppercase tracking-widest"
              style={{ color: '#64748B' }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Products Preview Section ─── */
function ProductsPreviewSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.set(section.querySelectorAll('.product-card-home'), { opacity: 1, y: 0 });

      gsap.from(section.querySelectorAll('.product-card-home'), {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      // Ensure ScrollTrigger recalculates after layout settles
      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, []);

  const featuredProducts = products.slice(0, 6);

  return (
    <section ref={sectionRef} className="bg-cream" style={{ padding: '8vw 6vw' }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <span className="label-style text-copper block mb-4">OUR PRODUCTS</span>
          <h2
            className="font-display text-navy"
            style={{ fontSize: 'max(24px, 4vw)', lineHeight: 1.1 }}
          >
            Comprehensive Chemical Portfolio
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              to="/products"
              className="product-card-home group bg-white rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: '0 2px 8px rgba(10,22,40,0.06)' }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  aspectRatio: '4/3',
                  background: 'linear-gradient(135deg, #1E293B 0%, #0A1628 100%)',
                }}
              >
                <span className="font-display text-amber text-lg text-center px-4">
                  {product.shortName}
                </span>
              </div>
              <div className="p-6">
                <span className="text-sm" style={{ color: '#64748B', fontSize: 14 }}>
                  {String(product.id).padStart(2, '0')}
                </span>
                <h4 className="font-body font-medium text-navy mt-1 mb-2" style={{ fontSize: 18 }}>
                  {product.name}
                </h4>
                <p className="text-base line-clamp-2" style={{ color: '#64748B' }}>
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products" className="btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials Section ─── */
function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-navy" style={{ padding: '8vw 6vw' }}>
      <div className="max-w-[1000px] mx-auto text-center">
        <span className="label-style text-amber block mb-8">WHAT OUR CLIENTS SAY</span>

        <div className="relative min-h-[200px]">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="transition-all duration-700 absolute inset-0 flex flex-col items-center justify-center"
              style={{
                opacity: i === current ? 1 : 0,
                transform: i === current ? 'translateY(0)' : 'translateY(20px)',
                pointerEvents: i === current ? 'auto' : 'none',
              }}
            >
              <p
                className="font-display italic text-white max-w-[800px]"
                style={{ fontSize: 'max(18px, 2vw)', lineHeight: 1.4 }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-6 text-xs uppercase tracking-widest" style={{ color: '#64748B' }}>
                &mdash; {t.author}, {t.company}
              </p>
            </div>
          ))}
        </div>

        {/* Dots (show only 5) + arrows */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            type="button"
            onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            aria-label="Previous testimonial"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300"
            style={{
              backgroundColor: '#0A1628',
              border: '1px solid #D4A574',
              color: '#D4A574',
            }}
          >
            <span style={{ fontSize: 18, lineHeight: 1 }}>‹</span>
          </button>

          <div className="flex justify-center gap-2">
            {Array.from({ length: Math.min(5, testimonials.length) }).map((_, i) => {
              // Keep the *3rd dot* always active.
              // i: 0 1 [2] 3 4
              // current moves behind the scenes.
              const windowIndex = current + (i - 2);
              const index = ((windowIndex % testimonials.length) + testimonials.length) % testimonials.length;

              const isActiveCenter = i === 2;


              return (
                <button
                  key={`${index}-${i}`}
                  type="button"
                  onClick={() => setCurrent(index)}
                  className="w-2 h-2 rounded-full transition-colors duration-300"
                  style={{
                    backgroundColor: isActiveCenter ? '#D4A574' : 'rgba(212, 165, 116, 0.35)',
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
            aria-label="Next testimonial"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300"
            style={{
              backgroundColor: '#0A1628',
              border: '1px solid #D4A574',
              color: '#D4A574',
            }}
          >
            <span style={{ fontSize: 18, lineHeight: 1 }}>›</span>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─── Careers Preview Section ─── */
function CareersPreviewSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const rupeeIcon = (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#D4A574"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 3h8M8 7h8M8 3v4a4 4 0 0 0 4 4h2l-6 10" transform="scale(-1,1) translate(-16,0)" />
    </svg>
  );


  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(section.querySelectorAll('.animate-career'), {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-cream" style={{ padding: '8vw 6vw' }}>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="animate-career label-style text-copper block mb-4">JOIN OUR TEAM</span>
          <h2
            className="animate-career font-display text-navy mb-6"
            style={{ fontSize: 'max(24px, 4vw)', lineHeight: 1.1 }}
          >
            Build Your Career With Novella
          </h2>
          <p className="animate-career mb-8" style={{ color: '#1E293B' }}>
            We are always looking for talented individuals who share our passion for excellence in chemical distribution. Explore opportunities in domestic marketing and import-export operations.
          </p>
          <Link to="/careers" className="animate-career btn-primary" style={{ backgroundColor: '#0A1628', color: '#F5F0EB' }}>
            View Open Positions
          </Link>
        </div>

        <div className="space-y-4">
          {[
            { title: 'Domestic Marketing', positions: '03 Candidates', exp: '2-3 Years', salary: '15k - 30k' },
            { title: 'Import-Export', positions: '01 Candidate', exp: '2-3 Years', salary: '20k - 40k' },
          ].map((job) => (
            <div
              key={job.title}
              className="animate-career bg-white rounded-lg p-8"
              style={{ border: '1px solid rgba(184, 115, 51, 0.5)' }}
            >
              <h4 className="font-body font-medium text-navy text-lg mb-3">{job.title}</h4>
              <div className="flex flex-wrap gap-4 text-sm" style={{ color: '#64748B' }}>
                <span>{job.positions}</span>
                <span>|</span>
                <span>{job.exp}</span>
                <span>|</span>
                <span className="inline-flex items-center gap-1">
                  {rupeeIcon}
                  {job.salary.replace(/₹/g, '')}
                </span>


              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Banner Section ─── */
function CTABannerSection() {
  return (
    <section
      className="relative overflow-hidden flex items-center justify-center"
      style={{ height: '50vh', minHeight: '400px' }}
    >
      <img
        src="/images/cta-background.jpg"
        alt="Industrial chemical facility"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(10, 22, 40, 0.75)' }}
      />
      <div className="relative z-10 text-center px-6">
        <h2
          className="font-display text-white mb-4"
          style={{ fontSize: 'max(24px, 4vw)', lineHeight: 1.1 }}
        >
          Ready to Power Your Industry?
        </h2>
        <p className="max-w-[600px] mx-auto mb-8" style={{ color: '#F5F0EB' }}>
          Partner with Novella Corporation for reliable chemical supply, competitive pricing, and unmatched customer service.
        </p>
        <Link to="/contact" className="btn-primary">
          Contact Us Today
        </Link>
      </div>
    </section>
  );
}

/* ─── Home Page ─── */
export default function Home() {
  return (
    <>
      <WhatsAppButton />
      <HeroSection />
      <AboutOverviewSection />
      <CarouselSection />
      <IndustriesSection />
      <StatisticsSection />
      <ProductsPreviewSection />
      <TestimonialsSection />
      <CareersPreviewSection />
      <CTABannerSection />
    </>
  );
}
