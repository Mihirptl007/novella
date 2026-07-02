import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { contactInfo } from '@/data/novellaData';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="relative bg-navy flex items-center justify-center" style={{ height: '50vh', minHeight: '350px' }}>
        <img
          src="/images/cta-background.jpg"
          alt="Chemical warehouse"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.3 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, #0A1628, transparent)' }}
        />
        <div className="relative z-10 text-center px-6">
          <span className="label-style text-amber block mb-4">CONTACT US</span>
          <h1
            className="font-display text-white"
            style={{ fontSize: 'max(28px, 5.5vw)', lineHeight: 1.05 }}
          >
            Get In Touch
          </h1>
        </div>
      </section>

      {/* Contact Form & Details */}
      <section className="bg-cream" style={{ padding: '8vw 6vw' }}>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-in">
            <h3
              className="font-display text-navy mb-8"
              style={{ fontSize: 'max(20px, 2vw)' }}
            >
              Send Us a Message
            </h3>

            {submitted ? (
              <div
                className="p-8 rounded-lg text-center"
                style={{ backgroundColor: 'rgba(212, 165, 116, 0.15)', border: '1px solid #D4A574' }}
              >
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#D4A574" strokeWidth="2" className="mx-auto mb-4">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <h4 className="font-display text-navy text-xl mb-2">Thank You!</h4>
                <p style={{ color: '#64748B' }}>Your message has been sent. We will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="w-full px-4 py-3.5 text-sm rounded border transition-colors duration-300 focus:outline-none"
                    style={{
                      backgroundColor: '#fff',
                      borderColor: 'rgba(184, 115, 51, 0.5)',
                      color: '#1E293B',
                    }}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3.5 text-sm rounded border transition-colors duration-300 focus:outline-none"
                    style={{
                      backgroundColor: '#fff',
                      borderColor: 'rgba(184, 115, 51, 0.5)',
                      color: '#1E293B',
                    }}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 ________"
                    className="w-full px-4 py-3.5 text-sm rounded border transition-colors duration-300 focus:outline-none"
                    style={{
                      backgroundColor: '#fff',
                      borderColor: 'rgba(184, 115, 51, 0.5)',
                      color: '#1E293B',
                    }}
                  />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full px-4 py-3.5 text-sm rounded border transition-colors duration-300 focus:outline-none"
                    style={{
                      backgroundColor: '#fff',
                      borderColor: 'rgba(184, 115, 51, 0.5)',
                      color: '#1E293B',
                    }}
                  />
                </div>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 text-sm rounded border transition-colors duration-300 focus:outline-none appearance-none"
                  style={{
                    backgroundColor: '#fff',
                    borderColor: 'rgba(184, 115, 51, 0.5)',
                    color: formData.subject ? '#1E293B' : '#64748B',
                  }}
                >
                  <option value="">Select Subject</option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="bulk-order">Bulk Order</option>
                  <option value="distributorship">Distributorship</option>
                  <option value="career">Career Opportunity</option>
                  <option value="general">General Inquiry</option>
                </select>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="w-full px-4 py-3.5 text-sm rounded border transition-colors duration-300 focus:outline-none resize-none"
                  style={{
                    backgroundColor: '#fff',
                    borderColor: 'rgba(184, 115, 51, 0.5)',
                    color: '#1E293B',
                  }}
                />
                <button
                  type="submit"
                  className="w-full btn-primary"
                  style={{ backgroundColor: '#0A1628', color: '#F5F0EB' }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            {contactInfo.addresses.map((addr, i) => (
              <div
                key={i}
                className="animate-in bg-white rounded-lg p-8 flex items-start gap-4"
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(212, 165, 116, 0.15)' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4A574" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <span className="label-style block mb-1" style={{ color: '#64748B' }}>
                    {i === 0 ? 'HEAD OFFICE' : 'BRANCH OFFICE'}
                  </span>
                  <p className="text-sm" style={{ color: '#1E293B' }}>{addr}</p>
                </div>
              </div>
            ))}

            <div className="animate-in bg-white rounded-lg p-8 flex items-start gap-4">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'rgba(212, 165, 116, 0.15)' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4A574" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <span className="label-style block mb-1" style={{ color: '#64748B' }}>PHONE</span>
                {contactInfo.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="block text-sm transition-colors duration-300 hover:text-amber"
                    style={{ color: '#1E293B' }}
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            <div className="animate-in bg-white rounded-lg p-8 flex items-start gap-4">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'rgba(212, 165, 116, 0.15)' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4A574" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <span className="label-style block mb-1" style={{ color: '#64748B' }}>EMAIL</span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm transition-colors duration-300 hover:text-amber"
                  style={{ color: '#1E293B' }}
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section
        className="flex items-center justify-center"
        style={{ height: '400px', backgroundColor: '#1E293B' }}
      >
        <a
          href="https://maps.app.goo.gl/rfhPuTuyWwpoQHpa7"
          target="_blank"
          rel="noreferrer"
          className="relative w-full h-full block"
          aria-label="Open Google Maps"
        >
          <div
            className="absolute inset-0 bg-navy/0"
            style={{
              backgroundImage: "url('/images/map-image.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'saturate(0.9)',
            }}
          />
          {/* navy tint */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: 'rgba(10, 22, 40, 0.78)',
            }}
          />

          <div className="relative z-10 text-center flex flex-col items-center justify-center px-6">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#D4A574"
              strokeWidth="1.5"
              className="mx-auto"
              style={{ transform: 'translateY(90px)' }}
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>

            <div style={{ marginTop: 115 }}>
              <p className="font-display text-white text-lg">Morbi, Gujarat, India</p>
              <p className="text-sm mt-2" style={{ color: '#64748B' }}>
                Plot no 7, B/H Iscon Plaza, 8 A N Highway
              </p>
            </div>

            <span className="mt-4 inline-flex items-center text-amber text-xs uppercase tracking-widest" style={{ opacity: 0.9 }}>
              Click to view map
            </span>

          </div>
        </a>
      </section>

    </div>
  );
}
