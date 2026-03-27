import { motion } from 'framer-motion';
import { Building2, Activity, Microscope, Pill, Video } from 'lucide-react';

const specialties = [
  { name: 'Clinics & Hospitals', icon: Building2 },
  { name: 'Therapy Providers', icon: Activity },
  { name: 'Diagnostic Labs', icon: Microscope },
  { name: 'Retail Pharmacies', icon: Pill },
  { name: 'Telehealth', icon: Video },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Specialties() {
  return (
    <div id="specialties" className="section-pad bg-background relative border-t border-royal-900/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-secondary" />
              <p className="font-sans font-semibold text-xs text-secondary uppercase tracking-[0.2em]">Our Network</p>
            </div>
            <h2 className="font-display font-medium text-4xl lg:text-5xl text-royal-900 mb-4 leading-tight">
              Who Should Use Claimax?
            </h2>
            <p className="font-sans text-lg text-royal-900/70 font-light">
              We provide custom outsourcing solutions tailored specifically to the needs of these diverse healthcare providers.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-px bg-royal-900/5 border border-royal-900/5"
        >
          {specialties.map((spec) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={spec.name}
                variants={item}
                className="group bg-background p-10 flex flex-col items-center justify-center text-center gap-5 hover:bg-white transition-colors duration-500"
              >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-secondary border border-royal-900/10 shadow-sm group-hover:scale-110 group-hover:bg-secondary group-hover:text-white group-hover:border-transparent transition-all duration-500">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <span className="font-display font-semibold text-lg text-royal-900 leading-tight">
                  {spec.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
