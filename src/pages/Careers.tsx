import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { jobOpenings } from '@/data/novellaData';

gsap.registerPlugin(ScrollTrigger);

export default function Careers() {
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

  const benefits = [
    {
      title: 'Competitive Salary',
      description: 'Industry-leading compensation packages',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4A574" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      title: 'Growth Opportunities',
      description: 'Career advancement in a rapidly growing company',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4A574" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
    },
    {
      title: 'Professional Development',
      description: 'Training and skill development programs',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4A574" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
    },
  ];

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="relative bg-navy flex items-center justify-center" style={{ height: '60vh', minHeight: '400px' }}>
        <img
          src="/images/hero-fallback.jpg"
          alt="Chemical facility"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.3 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, #0A1628, transparent)' }}
        />
        <div className="relative z-10 text-center px-6">
          <span className="label-style text-amber block mb-4">CAREERS</span>
          <h1
            className="font-display text-white"
            style={{ fontSize: 'max(28px, 5.5vw)', lineHeight: 1.05 }}
          >
            Join Our Growing Team
          </h1>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-cream" style={{ padding: '8vw 6vw' }}>
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-16">
            <span className="label-style text-copper block mb-4">WE ARE HIRING</span>
            <h2
              className="font-display text-navy"
              style={{ fontSize: 'max(24px, 4vw)', lineHeight: 1.1 }}
            >
              Current Openings
            </h2>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="animate-in bg-white rounded-lg p-8 md:p-10"
                style={{ border: '1px solid rgba(184, 115, 51, 0.5)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="label-style px-3 py-1 rounded"
                    style={{ backgroundColor: '#D4A574', color: '#0A1628' }}
                  >
                    We Are Hiring
                  </span>
                </div>
                <h3
                  className="font-display text-navy mb-6"
                  style={{ fontSize: 'max(20px, 2vw)' }}
                >
                  {job.title}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span className="text-sm" style={{ color: '#64748B' }}>Position: {job.positions}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span className="text-sm" style={{ color: '#64748B' }}>Experience: {job.experience}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm inline-flex items-center gap-1" style={{ color: '#64748B' }}>

                      Salary:
                      {/* rupee icon (always show) */}
                      {/* rupee icon */}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#D4A574"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path
                          d="M8 3h8M8 7h8M8 3v4a4 4 0 0 0 4 4h2l-6 10"
                          transform="scale(-1,1) translate(-16,0)"
                        />
                      </svg>
                      {job.salary.replace(/₹/g, '')}
                    </span>

                  </div>
                  <div className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    <span className="text-sm" style={{ color: '#64748B' }}>Gender: {job.gender}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                    <span className="text-sm" style={{ color: '#64748B' }}>Qualification: {job.qualification}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="text-sm font-medium text-navy">Skills Required:</span>
                  <p className="text-sm mt-1" style={{ color: '#64748B' }}>{job.skills}</p>
                </div>

                <a
                  href="mailto:novella.corporation@gmail.com?subject=Job Application"
                  className="btn-primary inline-block"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-navy" style={{ padding: '6vw' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <span className="label-style text-amber block mb-4">WHY WORK WITH US</span>
            <h2
              className="font-display text-white"
              style={{ fontSize: 'max(24px, 4vw)', lineHeight: 1.1 }}
            >
              Benefits & Perks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="animate-in text-center p-10 rounded-lg"
                style={{
                  backgroundColor: '#1E293B',
                  border: '1px solid rgba(212, 165, 116, 0.2)',
                }}
              >
                <div className="flex justify-center mb-6">{benefit.icon}</div>
                <h3
                  className="font-display text-white mb-3"
                  style={{ fontSize: 'max(18px, 1.5vw)' }}
                >
                  {benefit.title}
                </h3>
                <p style={{ color: '#F5F0EB' }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
