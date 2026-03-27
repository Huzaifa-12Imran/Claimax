import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { useCounterAnimation } from '../hooks/useCounterAnimation';

function StatCard({ value, decimals, suffix, prefix, label, sublabel, trend, trendUp, delay }) {
  const { ref, displayValue } = useCounterAnimation(value, 2000);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="bg-white rounded-2xl p-8 border border-slate-200 shadow-soft flex flex-col items-center text-center"
    >
      <div className="font-display font-bold text-4xl lg:text-5xl text-primary mb-3 whitespace-nowrap break-normal">
        {prefix}{decimals ? displayValue.toFixed(decimals) : Math.floor(displayValue)}{suffix}
      </div>

      <div className="h-1 w-12 bg-secondary rounded-full mb-5" />

      <p className="font-sans font-bold text-lg text-slate-800 mb-2">{label}</p>

      <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-100 rounded-full px-3 py-1">
        {trendUp
          ? <TrendingUp size={14} className="text-secondary" />
          : <TrendingDown size={14} className="text-secondary" />
        }
        <p className="font-sans text-xs font-medium text-slate-600">{sublabel}</p>
      </div>
    </motion.div>
  );
}

const stats = [
    {
    value: 98.5, suffix: '%', prefix: '',
    label: 'Clean Claims Rate',
    sublabel: '↑ Top Tier Performer',
    trendUp: true, delay: 0,
    decimals: 1,
  },
  {
    value: 30, suffix: '%', prefix: '',
    label: 'Average Revenue Increase',
    sublabel: '↑ within 90 days',
    trendUp: true, delay: 0.1,
  },
  {
    value: 24, suffix: 'hr', prefix: '<\u00A0',
    label: 'Claim Turnaround',
    sublabel: '↓ Faster processing',
    trendUp: false, delay: 0.2,
  },
  {
    value: 40, suffix: '%', prefix: '',
    label: 'Reduction in A/R Days',
    sublabel: '↓ Faster cash flow',
    trendUp: false, delay: 0.3,
  },
];

export default function KPIMetrics() {
  return (
    <div className="section-pad bg-background relative border-y border-slate-200">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="font-sans font-semibold text-sm text-primary uppercase tracking-wide mb-3">Proven Results</p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-slate-900">
            Metrics That Matter
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <StatCard key={i} {...s} delay={s.delay} />
          ))}
        </div>
      </div>
    </div>
  );
}
