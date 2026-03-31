import { motion } from 'framer-motion';
import { ArrowRight, Play, ShieldCheck, HeartPulse } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
      {/* Subtle texture/gradient for creamy elegance */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-royal-gold/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 text-center lg:text-left z-10"
          >
            <div className="inline-flex items-center gap-3 border border-royal-900/10 rounded-full px-5 py-2 mb-10 bg-white/50 backdrop-blur-sm shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              <span className="font-sans text-xs text-royal-900 font-bold uppercase tracking-[0.2em]">
                Healthcare IT & Billing Solutions
              </span>
            </div>
            
            <h1 className="font-display font-bold text-5xl lg:text-7xl text-royal-900 leading-[1.05] tracking-tight mb-8">
              Outsource your medical billing to <span className="text-secondary italic">Claimax Solutions.</span>
            </h1>
            
            <p className="font-sans text-lg lg:text-xl text-royal-900/70 leading-relaxed mb-12 max-w-2xl mx-auto lg:mx-0 font-light">
              Experience faster payments, reduced denials, and complete financial transparency—so you can focus on patient care while we handle your revenue cycle.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start mb-16">
              <a href="#contact" className="btn-primary font-sans text-xs font-bold uppercase tracking-widest w-full sm:w-auto px-10 py-5 no-underline flex items-center justify-center gap-2">
                Request Consultation <ArrowRight size={16} />
              </a>
              <a href="#services" className="font-sans font-medium text-sm text-royal-900 hover:text-secondary flex items-center gap-3 w-full sm:w-auto px-8 py-4 justify-center transition-colors no-underline group uppercase tracking-widest">
                <span className="w-12 h-12 rounded-full border border-royal-900/20 flex items-center justify-center group-hover:border-secondary transition-colors">
                  <Play size={14} fill="currentColor" className="ml-1" />
                </span>
                Our Services
              </a>
            </div>

            <div className="flex items-center gap-8 justify-center lg:justify-start text-xs text-royal-900/60 font-sans font-medium uppercase tracking-widest border-t border-royal-900/10 pt-8">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-secondary" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartPulse size={16} className="text-royal-800" />
                <span>For Clinics & Hospitals</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual - Photography */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 w-full max-w-lg lg:max-w-none relative"
          >
            {/* Elegant Image Frame */}
            <div className="relative aspect-[4/5] rounded-t-full overflow-hidden border-[8px] border-white shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80" 
                alt="Professional healthcare team consulting" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-royal-900/10 mix-blend-multiply" />
            </div>

            {/* Overlapping Trust Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute bottom-12 -left-12 bg-white p-6 shadow-xl border border-royal-900/5 max-w-[240px]"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-cream-200 flex items-center justify-center text-secondary">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-royal-900 text-lg leading-none mb-1">98.7%</h4>
                  <p className="font-sans text-xs text-royal-900/60 uppercase tracking-wider">Clean Claim Rate</p>
                </div>
              </div>
              <p className="font-sans text-xs text-royal-900/70 leading-relaxed font-medium">
                Industry-leading accuracy handled entirely by certified RCM experts.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
