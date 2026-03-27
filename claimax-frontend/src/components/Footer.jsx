import { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Facebook, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

const serviceLinks  = ['Revenue Cycle Management', 'Medical Billing', 'A/R Recovery', 'Prior Authorization', 'Credentialing'];
const companyLinks  = ['About Us', 'Careers', 'Blog', 'Privacy Policy', 'Terms of Service'];

export default function Footer() {
  const [email,   setEmail]   = useState('');
  const [subbed,  setSubbed]  = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.includes('@')) { setSubbed(true); setEmail(''); }
  };

  return (
    <footer className="bg-royal-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-10 relative z-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

          {/* Col 1: Brand */}
          <div className="pr-4 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-display font-medium text-3xl text-white tracking-tight">Claimax</span>
              <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1" />
            </div>
            <p className="font-sans text-sm text-white/60 leading-relaxed font-light mb-8">
              Premier Medical Billing and Revenue Cycle Management solutions designed exclusively for modern healthcare providers.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Linkedin },
                { icon: Twitter },
                { icon: Facebook },
              ].map(({ icon: Icon }, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-secondary transition-colors duration-300">
                  <Icon size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 & 3: Links */}
          <div>
            <h4 className="font-display font-medium text-lg text-white mb-6">Services</h4>
            <ul className="flex flex-col gap-4">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a href="#services" className="font-sans text-sm text-white/60 hover:text-secondary font-light transition-colors duration-300 no-underline inline-flex items-center gap-2 group">
                    <span className="w-1 h-px bg-secondary opacity-0 group-hover:opacity-100 group-hover:w-3 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-medium text-lg text-white mb-6">Company</h4>
            <ul className="flex flex-col gap-4">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="font-sans text-sm text-white/60 hover:text-secondary font-light transition-colors duration-300 no-underline inline-flex items-center gap-2 group">
                    <span className="w-1 h-px bg-secondary opacity-0 group-hover:opacity-100 group-hover:w-3 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="font-display font-medium text-lg text-white mb-6">Stay Updated</h4>
            <p className="font-sans text-sm text-white/60 font-light leading-relaxed mb-6">
              Receive exclusive regulatory insights and revenue cycle strategies monthly.
            </p>
            {subbed ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-secondary" />
                <p className="font-sans text-sm text-white font-medium">Subscription confirmed.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  placeholder="Professional Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-white/20 text-white px-0 py-3 font-sans text-sm font-light outline-none focus:border-secondary transition-colors placeholder-white/30"
                  required
                />
                <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-secondary hover:text-white transition-colors">
                  <ArrowRight size={20} className="font-light" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/50 tracking-wider uppercase">
            © 2026 Claimax FZC. Reserved.
          </p>
          <div className="flex items-center gap-2 font-sans text-xs text-secondary tracking-widest uppercase font-semibold">
            <ShieldCheck size={16} /> Data Secured
          </div>
        </div>
      </div>
    </footer>
  );
}
