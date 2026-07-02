import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { products } from '@/data/novellaData';
import { productDetails } from '@/data/productDetails';


gsap.registerPlugin(ScrollTrigger);

const categories = ['Basic Chemicals', 'Boron Compounds', 'Polymers & Resins', 'Specialty Chemicals'];

function getProductSlugByProductName(name: string) {
  const detail = productDetails.find((p) => p.name === name)
  return detail?.slug
}


export default function Products() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [expandedCategory, setExpandedCategory] = useState('Basic Chemicals');

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

  const getProductsByCategory = (category: string) =>
    products.filter((p) => p.category === category);

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="relative bg-navy flex items-center justify-center" style={{ height: '60vh', minHeight: '400px' }}>
        <img
          src="/images/hero-fallback.jpg"
          alt="Chemical processing equipment"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.3 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, #0A1628, transparent)' }}
        />
        <div className="relative z-10 text-center px-6">
          <span className="label-style text-amber block mb-4">OUR PRODUCTS</span>
          <h1
            className="font-display text-white"
            style={{ fontSize: 'max(28px, 5.5vw)', lineHeight: 1.05 }}
          >
            Comprehensive Chemical Portfolio
          </h1>
          <p className="mt-4 max-w-[700px] mx-auto" style={{ color: '#F5F0EB' }}>
            We maintain extensive stock of industrial chemicals sourced from India's leading manufacturers, ensuring timely delivery and consistent quality.
          </p>
        </div>
      </section>

      {/* Accordion Gallery */}
      <section className="bg-navy" style={{ padding: '6vw' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="accordion-gallery">
            {categories.map((category) => {
              const isExpanded = expandedCategory === category;
              const categoryProducts = getProductsByCategory(category);

              return (
                <div
                  key={category}
                  className="accordion-section"
                  data-expanded={isExpanded}
                >
                  <div
                    className="accordion-header"
                    onClick={() => setExpandedCategory(isExpanded ? '' : category)}
                  >
                    <h3 className="accordion-title">{category}</h3>
                    <span className="accordion-indicator">+</span>
                  </div>
                  <div className="accordion-content">
                    <div className="product-grid">
                      {categoryProducts.map((product) => {
                        const slug = getProductSlugByProductName(product.name)
                        const href = slug ? `/products/${slug}` : undefined

                        return (
                          <a
                            key={product.id}
                            className="product-card product-card--link"
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ pointerEvents: href ? 'auto' : 'none' }}

                            onClick={(e) => {
                              if (!href) e.preventDefault()
                            }}
                          >
                            <div className="product-card__image">
                              <span className="product-card__short">{product.shortName}</span>
                            </div>
                            <h4 className="product-card__title">{product.name}</h4>
                            <div className="product-card__corner">
                              <span className="product-card__corner-icon">↗</span>
                              <span className="product-card__corner-label">View</span>
                            </div>
                          </a>
                        )
                      })}

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Inquiry CTA */}
      <section className="bg-navy" style={{ padding: '6vw' }}>
        <div className="max-w-[800px] mx-auto text-center">
          <h2
            className="animate-in font-display text-white mb-4"
            style={{ fontSize: 'max(24px, 4vw)', lineHeight: 1.1 }}
          >
            Need a Specific Chemical?
          </h2>
          <p className="animate-in mb-8" style={{ color: '#F5F0EB' }}>
            Contact us for bulk orders, custom specifications, or technical datasheets. Our team is ready to assist.
          </p>
          <a
            href={(() => {
              const phoneNumber = '919513131375'; // without '+'
              const message = encodeURIComponent(
                "Hi Novella! I’d like request special chemical. Please share details.\nChemical Name : "
              );
              return `https://wa.me/${phoneNumber}?text=${message}`;
            })()}
            target="_blank"
            rel="noreferrer"
            className="animate-in"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px 28px',
              backgroundColor: '#D4A574',
              color: '#0A1628',
              borderRadius: 4,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            Request a Quote
          </a>


        </div>
      </section>
    </div>
  );
}
