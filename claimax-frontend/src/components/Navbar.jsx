import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { name: 'Services', href: '#services' },
  { name: 'Benefits', href: '#benefits' },
  { name: 'Technology', href: '#technology' },
  { name: 'Specialties', href: '#specialties' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 will-change-transform ${
          scrolled ? 'bg-background/90 backdrop-blur-md border-b border-royal-900/10 py-4 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Brand - Elegant Serif */}
          <a href="#" className="flex items-center gap-2 group no-underline">
            <span className="font-display font-bold text-2xl tracking-tight text-royal-900 group-hover:text-secondary transition-colors duration-300">
              Claimax Solutions
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1" />
          </a>

          {/* Desktop Links - Inter */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-sm font-medium text-royal-900/70 hover:text-royal-900 transition-colors uppercase tracking-widest no-underline relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-secondary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#contact" className="btn-primary font-sans text-xs font-bold uppercase tracking-widest rounded-none px-6 py-3 no-underline">
              Request Audit
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-royal-900 hover:text-secondary transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={28} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-royal-900/60 backdrop-blur-sm z-[90] md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-background shadow-2xl z-[100] md:hidden flex flex-col pt-24 px-8 pb-8 border-l border-royal-900/10"
            >
              <button
                className="absolute top-6 right-6 text-royal-900 hover:text-secondary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Menu"
              >
                <X size={28} strokeWidth={1.5} />
              </button>
              
              <div className="flex flex-col gap-6 mb-12">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-display font-medium text-3xl text-royal-900 hover:text-secondary transition-colors no-underline"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-4">
                <a href="#contact" className="btn-primary w-full text-center font-sans text-xs font-bold uppercase tracking-widest rounded-none px-6 py-4 no-underline">
                  Request Audit
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
