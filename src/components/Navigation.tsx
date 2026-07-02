import { useState, useEffect } from 'react';

import { Link, useLocation } from 'react-router';
import { navLinks } from '@/data/novellaData';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close menu when route changes.
    setMenuOpen(false);
    // NOTE: eslint warning about syncing setState in effects is raised by tooling;
    // this is a legitimate state sync based on route changes.
  }, [location]);

  useEffect(() => {
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;

    const lockScroll = () => {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    };

    const unlockScroll = () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
    };

    if (menuOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }

    // Always restore on cleanup (prevents “stuck” scroll on fast transitions)
    return () => {
      unlockScroll();
    };
  }, [menuOpen]);


    return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-[1000] transition-all duration-300 isolate"
        style={{
          backgroundColor: scrolled ? 'rgba(10, 22, 40, 0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <div className="flex items-center justify-between px-6 lg:px-12 h-[72px] lg:h-[72px]">
          {/* Logo */}
          <Link to="/" aria-label="Novella Home" className="flex items-center relative z-[1000]">
              <img
                src="/images/novellalogo.png"
                alt="Novella"
                className="h-[55px] w-auto object-contain p-1 rounded-md"
                style={{ background: '#D4A574', mixBlendMode: 'multiply' }}

              />
          </Link>



          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-display text-sm tracking-wide transition-opacity duration-300 hover:opacity-100"
                style={{
                  color: '#F5F0EB',
                  opacity: location.pathname === link.path ? 1 : 0.8,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>


          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-medium tracking-widest uppercase transition-all duration-300 hover:opacity-90"
              style={{
                backgroundColor: '#D4A574',
                color: '#0A1628',
                borderRadius: '24px',
                whiteSpace: 'nowrap',
                width: '110px',
              }}
            >
              Contact Us
            </Link>

            <a
              href="/Brochure-folder/novella-Brochure.pdf"
              download
              className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-medium tracking-widest uppercase transition-all duration-300 hover:opacity-90"

              style={{
                backgroundColor: '#D4A574',
                color: '#0A1628',
                borderRadius: '24px',
                whiteSpace: 'nowrap',
                width: '125px',
              }}
            >
              GET BROCHURE
            </a>
          </div>



          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-6 h-0.5 bg-white transition-transform duration-300"
              style={{
                transform: menuOpen ? 'rotate(45deg) translateY(4px)' : 'none',
              }}
            />
            <span
              className="block w-6 h-0.5 bg-white transition-opacity duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-6 h-0.5 bg-white transition-transform duration-300"
              style={{
                transform: menuOpen ? 'rotate(-45deg) translateY(-4px)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className="fixed left-0 right-0 top-[72px] bottom-0 z-40 lg:hidden transition-all duration-500"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          backgroundColor: 'rgba(10, 22, 40, 0.98)',
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              className="font-display text-2xl text-white transition-all duration-300 hover:text-amber"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${index * 50}ms`,
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex w-full flex-col gap-3 items-center">
            <Link
              to="/contact"
              className="btn-primary"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${navLinks.length * 50}ms`,
              }}
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>

            <a
              href="/Brochure-folder/novella-Brochure.pdf"
              download
              className="btn-primary"

              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${(navLinks.length + 1) * 50}ms`,
              }}
              onClick={() => setMenuOpen(false)}
            >
              GET BROCHURE
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
