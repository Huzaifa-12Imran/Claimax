import { motion } from 'framer-motion';
import { TrendingUp, Wallet, Clock, UserPlus, Expand } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Increase Revenue',
    desc: 'Experience fewer claim denials and significantly faster reimbursements by relying on our expert coders.',
  },
  {
    icon: Wallet,
    title: 'Reduce Costs',
    desc: 'Eliminate the need for in-house billing staff, saving thousands on software, training, and overhead.',
  },
  {
    icon: Clock,
    title: 'Improve Efficiency',
    desc: 'Benefit from automated processes and fewer manual errors, speeding up your entire revenue cycle.',
  },
  {
    icon: UserPlus,
    title: 'Focus on Patient Care',
    desc: 'Let your doctors and clinical staff focus entirely on treatment while our experts handle your revenue.',
  },
  {
    icon: Expand,
    title: 'Scalability',
    desc: 'Our cloud-based RCM operations scale perfectly, making us suitable for small clinics to large hospitals.',
  },
];

export default function HowItWorks() {
  return (
    <div className="section-pad bg-white relative border-y border-royal-900/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Editorial Photo */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80" 
                alt="Smiling doctor in clinic" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-royal-900/10 mix-blend-multiply" />
            </div>
            {/* Cinematic overlay card */}
            <div className="absolute -bottom-8 -right-8 bg-background p-6 lg:p-10 shadow-soft border border-royal-900/5 max-w-[280px] hidden md:block">
              <h4 className="font-display font-medium text-2xl text-royal-900 mb-2">Patient First</h4>
              <div className="w-12 h-[1px] bg-secondary mb-4" />
              <p className="font-sans text-sm text-royal-900/70 leading-relaxed font-light">
                When you entrust your billing to Claimax, your entire practice is free to focus on what matters most.
              </p>
            </div>
          </motion.div>

          {/* Right: Benefits Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <p className="font-sans font-semibold text-xs text-secondary uppercase tracking-[0.2em]">Why Us</p>
              <span className="w-12 h-[1px] bg-secondary" />
            </div>
            
            <h2 className="font-display font-medium text-4xl lg:text-5xl text-royal-900 mb-6 leading-tight">
              Benefits of Outsourcing to Claimax
            </h2>
            
            <p className="font-sans text-lg text-royal-900/70 mb-12 font-light leading-relaxed">
              We act as an extension of your practice, removing the friction from healthcare IT and billing to unlock your true revenue potential.
            </p>

            <div className="space-y-8">
              {benefits.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-full border border-royal-900/10 flex items-center justify-center flex-shrink-0 text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-xl text-royal-900 mb-2">{step.title}</h3>
                      <p className="font-sans text-sm text-royal-900/60 leading-relaxed font-light">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}
