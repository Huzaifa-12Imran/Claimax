import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cloud, Zap, BarChart3, ShieldCheck, ChevronRight } from 'lucide-react';

const features = [
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud-Based System',
    desc: 'Access your critical data anytime, anywhere securely. We maintain robust data backups to ensure your practice never experiences downtime.',
  },
  {
    id: 'automation',
    icon: Zap,
    title: 'Automation & Integration',
    desc: 'Seamlessly automate your revenue workflows. We provide out-of-the-box integration directly with major insurance provider systems.',
  },
  {
    id: 'reporting',
    icon: BarChart3,
    title: 'Real-Time Reporting',
    desc: 'Empower your decisions with intelligent financial dashboards. Track revenue, identify trends, and easily monitor claim statuses in real-time.',
  },
  {
    id: 'compliance',
    icon: ShieldCheck,
    title: 'Regulatory Compliance',
    desc: 'We operate at the highest standards of healthcare data security, maintaining rigorous HIPAA-compliant infrastructure and protocols.',
  },
];

export default function AIFeatures() {
  const [active, setActive] = useState('cloud');

  return (
    <div id="technology" className="section-pad bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-[100px] opacity-60 pointer-events-none translate-x-1/2 -translate-y-1/2" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-secondary" />
            <p className="font-sans font-semibold text-xs text-secondary uppercase tracking-[0.2em]">Enterprise Infrastructure</p>
            <span className="w-12 h-[1px] bg-secondary" />
          </div>
          <h2 className="font-display font-medium text-4xl lg:text-5xl text-royal-900 mb-6 leading-tight">
            Key Features of Claimax Solutions
          </h2>
          <p className="font-sans text-lg text-royal-900/70 max-w-2xl mx-auto font-light leading-relaxed">
            A secure, automated environment built to accelerate your revenue cycle and protect patient data.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Interactive Feature Accordion */}
          <div className="space-y-4">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              const isActive = active === feat.id;
              return (
                <motion.button
                  key={feat.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  onClick={() => setActive(feat.id)}
                  className={`w-full text-left p-6 transition-all duration-500 border-l-[3px] ${
                    isActive
                      ? 'bg-white border-secondary shadow-soft'
                      : 'bg-transparent border-transparent hover:bg-white/50'
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <div className={`mt-1 transition-all duration-300 ${
                      isActive ? 'text-secondary' : 'text-royal-900/40'
                    }`}>
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className={`font-display font-semibold text-xl tracking-tight transition-colors duration-300 ${isActive ? 'text-royal-900' : 'text-royal-900/60'}`}>
                          {feat.title}
                        </h4>
                        <ChevronRight size={18} className={`transition-all duration-500 ${isActive ? 'text-secondary rotate-90' : 'text-royal-900/20'}`} />
                      </div>
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0, mt: 0 }}
                            animate={{ opacity: 1, height: 'auto', mt: 12 }}
                            exit={{ opacity: 0, height: 0, mt: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="font-sans text-sm text-royal-900/60 leading-relaxed font-light overflow-hidden"
                          >
                            {feat.desc}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right: Architecture Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-square relative rounded-full overflow-hidden p-2 group">
              {/* Outer rotating gold ring */}
              <div className="absolute inset-0 rounded-full border-[1px] border-secondary/30 group-hover:rotate-180 transition-transform duration-[3s]" />
              <div className="absolute inset-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80" 
                  alt="Modern clinical facility" 
                  className="w-full h-full object-cover grayscale-[30%]"
                />
                <div className="absolute inset-0 bg-royal-900/20 mix-blend-multiply" />
              </div>
            </div>
            
            {/* Status Float */}
            <div className="absolute top-12 -right-8 bg-white px-6 py-4 shadow-xl border border-royal-900/5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-cream-200 flex items-center justify-center">
                <Cloud size={18} className="text-secondary" />
              </div>
              <div>
                <p className="font-sans text-[10px] font-bold text-royal-900/50 uppercase tracking-widest mb-0.5">System Status</p>
                <p className="font-display font-bold text-royal-900 leading-none">Operational</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
