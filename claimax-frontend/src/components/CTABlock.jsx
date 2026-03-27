import { motion } from 'framer-motion';
import { ArrowRight, Server, ShieldCheck, BriefcaseMedical, HeadphonesIcon, Settings2 } from 'lucide-react';

const reasons = [
  { text: 'Advanced Cloud Software', icon: Server },
  { text: 'Complete RCM & EMR', icon: ShieldCheck },
  { text: 'Industry Expertise', icon: BriefcaseMedical },
  { text: '24/7 Premium Support', icon: HeadphonesIcon },
  { text: 'Custom Solutions', icon: Settings2 }
];

export default function CTABlock() {
  return (
    <div className="bg-royal-900 relative overflow-hidden py-32 border-b border-royal-800">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="w-12 h-[1px] bg-secondary" />
            <span className="font-sans text-xs text-secondary font-semibold uppercase tracking-[0.2em]">
              Why Choose Claimax?
            </span>
            <span className="w-12 h-[1px] bg-secondary" />
          </div>

          <h2 className="font-display font-medium text-4xl lg:text-6xl text-white mb-16 leading-[1.1] tracking-tight">
            Outsource Your Medical Billing <br className="hidden md:block"/>to Claimax Today.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-royal-800/50 border border-royal-800/50 mb-16">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <div key={i} className="bg-royal-900 p-8 flex flex-col items-center justify-center text-center gap-4 hover:bg-royal-800/50 transition-colors duration-300">
                  <Icon size={24} className="text-secondary" strokeWidth={1.5} />
                  <span className="font-sans text-xs font-semibold text-white/80 uppercase tracking-widest leading-relaxed">
                    {reason.text}
                  </span>
                </div>
              );
            })}
          </div>

          <a
            href="#contact"
            className="btn-gold font-sans text-xs font-bold uppercase tracking-[0.2em] px-10 py-5 transition-all duration-300 inline-flex items-center gap-3 no-underline"
          >
            Start Your Free Revenue Audit
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
