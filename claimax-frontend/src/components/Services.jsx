import { motion } from 'framer-motion';
import { RefreshCcw, FileSignature, Send, ShieldAlert, BadgeDollarSign, PhoneForwarded, Laptop, UserCheck } from 'lucide-react';

const services = [
  {
    icon: RefreshCcw,
    title: 'Complete Revenue Cycle Management',
    desc: 'End-to-end handling of the billing process from patient registration to final payment. Improves cash flow and reduces your workload.',
  },
  {
    icon: FileSignature,
    title: 'Medical Billing & Coding',
    desc: 'Accurate CPT and ICD-10 coding. Error-free claim creation and submission to drastically reduce denials.',
  },
  {
    icon: Send,
    title: 'Claims Submission & Processing',
    desc: 'Electronic claims submission with seamless integration into insurance systems for faster processing and reimbursements.',
  },
  {
    icon: ShieldAlert,
    title: 'Denial Management',
    desc: 'We identify reasons for claim rejections, quickly correct errors, and resubmit claims to recover lost revenue.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Payment Posting & Reconciliation',
    desc: 'Accurate posting of ERA/EOB payments, detailed tracking of outstanding balances, and clear financial reporting.',
  },
  {
    icon: PhoneForwarded,
    title: 'AR Follow-ups',
    desc: 'Relentless insurance follow-ups and aging report management to ensure faster collections on accounts receivable.',
  },
  {
    icon: Laptop,
    title: 'EMR & Practice Management Software',
    desc: 'Our cloud-based EMR system handles patient records management with perfect billing and clinical integration.',
  },
  {
    icon: UserCheck,
    title: 'Credentialing & Compliance',
    desc: 'Full provider enrollment with insurance panels, tracking every deadline to keep you in-network without the headache.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Services() {
  return (
    <div id="services" className="section-pad bg-background relative z-10 border-t border-royal-900/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-secondary" />
            <p className="font-sans font-semibold text-xs text-secondary uppercase tracking-[0.2em]">What We Offer</p>
            <span className="w-12 h-[1px] bg-secondary" />
          </div>
          <h2 className="font-display font-medium text-4xl lg:text-5xl text-royal-900 mb-6 leading-tight">
            Services Offered by Claimax Solutions
          </h2>
          <p className="font-sans text-lg text-royal-900/70 max-w-2xl mx-auto font-light leading-relaxed">
            From patient registration to final payment, our end-to-end solutions reduce administrative burden and increase revenue.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={i} 
                variants={item}
                className="group relative"
              >
                {/* Decorative architectural line */}
                <div className="absolute top-0 left-0 w-8 h-[1px] bg-secondary transition-all duration-500 group-hover:w-full" />
                
                <div className="pt-8">
                  <div className="w-12 h-12 rounded-full border border-royal-900/10 flex items-center justify-center text-royal-900 mb-6 group-hover:bg-secondary group-hover:text-white group-hover:border-transparent transition-all duration-500">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="font-display font-semibold text-xl text-royal-900 mb-4 tracking-tight leading-snug">
                    {service.title}
                  </h3>
                  
                  <p className="font-sans text-royal-900/60 leading-relaxed text-sm font-light">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
