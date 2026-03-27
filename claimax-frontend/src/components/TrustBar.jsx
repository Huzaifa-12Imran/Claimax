import { motion } from 'framer-motion';

const stats = [
  { value: '500+', label: 'Practices Served' },
  { value: '98.7%', label: 'Clean Claim Rate' },
  { value: '$180M+', label: 'Revenue Recovered' },
  { value: 'HIPAA', label: 'Certified & Compliant' },
  { value: '< 24hr', label: 'Claim Turnaround' }
];

const brands = ['MedGroup', 'HeartFirst', 'CarePlus', 'OrthoCare', 'PT Health', 'MedCore', 'VisionAge', 'WellSpring', 'ApexHealth', 'ClearClaim'];

export default function TrustBar() {
  return (
    <div className="bg-royal-900 text-white relative z-20 border-y border-royal-800">
      
      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-x divide-y md:divide-y-0 divide-royal-800/50">
          {stats.map((stat, i) => (
            <div key={i} className="py-10 px-4 text-center">
              <motion.h4 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="font-display font-bold text-3xl lg:text-4xl text-secondary mb-2"
              >
                {stat.value}
              </motion.h4>
              <p className="font-sans text-xs font-semibold text-white/70 uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling Logos */}
      <div className="border-t border-royal-800/50 bg-royal-900/50 overflow-hidden py-8">
        <div className="flex animate-marquee items-center space-x-12 px-6">
          {[...brands, ...brands].map((brand, i) => (
            <span 
              key={i} 
              className="font-display font-medium text-xl text-white/30 whitespace-nowrap select-none hover:text-secondary transition-colors duration-300"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
