import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Shield, Check, AlertCircle, Loader2 } from 'lucide-react';
import { submitContactForm } from '../lib/api';

const trustBadges = [
  { label: 'HIPAA Compliant', icon: Shield },
  { label: 'SOC2 Ready',      icon: Shield },
];

const initialFields = { name: '', practice: '', email: '', phone: '', revenue: '', message: '' };

function validateClient(fields) {
  const errs = {};
  if (!fields.name.trim())     errs.name     = 'Full name is required.';
  if (!fields.practice.trim()) errs.practice = 'Practice name is required.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errs.email = 'Valid email required.';
  if (!/^[0-9\s\-\+\(\)]{10,20}$/.test(fields.phone))   errs.phone = 'Valid phone required.';
  if (!fields.revenue)         errs.revenue  = 'Revenue range is required.';
  if (!fields.message.trim())  errs.message  = 'Message is required.';
  return errs;
}

export default function ContactForm() {
  const [fields,   setFields]   = useState(initialFields);
  const [errors,   setErrors]   = useState({});
  const [touched,  setTouched]  = useState({});
  const [status,   setStatus]   = useState({ type: 'idle', message: '' });

  const isValid = (key) => touched[key] && !errors[key] && fields[key];

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const errs = validateClient({ ...fields, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: errs[name] }));
    }
  }, [fields, touched]);

  const handleBlur = useCallback((e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errs = validateClient(fields);
    setErrors((prev) => ({ ...prev, [name]: errs[name] }));
  }, [fields]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('[ContactForm] Submitting fields:', fields);
    
    const allTouched = Object.fromEntries(Object.keys(fields).map((k) => [k, true]));
    setTouched(allTouched);
    
    const errs = validateClient(fields);
    setErrors(errs);
    
    if (Object.keys(errs).length > 0) {
      console.warn('[ContactForm] Form has validation errors:', errs);
      return;
    }

    setStatus({ type: 'loading', message: '' });
    console.log('[ContactForm] Calling API...');
    try {
      await submitContactForm(fields);
      console.log('[ContactForm] Submission successful!');
      setStatus({ type: 'success', message: '' });
    } catch (err) {
      console.error('[ContactForm] API Error:', err);
      // Map API errors back to fields if they exist
      if (err.fieldErrors) setErrors(err.fieldErrors);
      setStatus({ type: 'error', message: err.message || 'Submission failed. Please try again later.' });
    }
  };

  const inputClass = (key) =>
    `w-full bg-white text-royal-900 border-b ${
      errors[key] ? 'border-red-400 focus:border-red-600' : 
      isValid(key) ? 'border-secondary focus:border-secondary' : 
      'border-royal-900/20 focus:border-secondary'
    } px-0 py-3 font-sans text-sm transition-all duration-300 outline-none placeholder-royal-900/30 font-light`;

  return (
    <div id="contact" className="section-pad bg-white relative border-y border-royal-900/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-secondary" />
              <p className="font-sans font-semibold text-xs text-secondary uppercase tracking-[0.2em]">Contact Us</p>
            </div>
            
            <h2 className="font-display font-medium text-4xl lg:text-6xl text-royal-900 mb-6 leading-tight">
              Optimize Your Revenue Cycle
            </h2>
            <p className="font-sans text-lg text-royal-900/70 leading-relaxed font-light mb-12">
              Reach out today. Our dedicated analysts will respond within a single business day with a customized revenue opportunity report.
            </p>

            <div className="flex flex-col gap-6 mb-12">
              {[
                { icon: Mail,    text: 'claimaxsolutions@outlook.com', href: 'mailto:claimaxsolutions@outlook.com' },
                { icon: Phone,   text: '+92 334 6371564', href: 'tel:+923346371564' },
                { icon: MapPin,  text: 'New York, NY · National Coverage', href: null },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-royal-900/10 flex items-center justify-center flex-shrink-0 group-hover:border-secondary transition-colors">
                    <Icon size={18} className="text-secondary" />
                  </div>
                  {href
                    ? <a href={href} className="font-sans text-royal-900 hover:text-secondary transition-colors no-underline font-light">{text}</a>
                    : <span className="font-sans text-royal-900 font-light">{text}</span>
                  }
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {trustBadges.map(({ label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-2 bg-background border border-royal-900/5 px-4 py-2">
                  <Icon size={16} className="text-secondary" />
                  <span className="font-sans text-xs text-royal-900 font-semibold tracking-wider uppercase">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <AnimatePresence mode="wait">
              {status.type === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-background p-12 lg:p-16 border border-royal-900/10 text-center"
                >
                  <div className="w-20 h-20 rounded-full border border-secondary flex items-center justify-center mx-auto mb-8 bg-white">
                    <Check size={32} className="text-secondary" />
                  </div>
                  <h3 className="font-display font-medium text-3xl text-royal-900 mb-4 tracking-tight">
                    Thank you, {fields.name.split(' ')[0]}.
                  </h3>
                  <p className="font-sans text-royal-900/70 font-light leading-relaxed">
                    Your request has been securely submitted. An analyst will be in touch shortly to discuss your custom solution.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  className="bg-background p-10 lg:p-14 border border-royal-900/10 flex flex-col gap-8 shadow-2xl relative"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-royal-gold/10 blur-2xl" />
                  
                  {status.type === 'error' && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-red-50 text-red-600 p-4 border border-red-100 flex items-center gap-3">
                      <AlertCircle size={18} />
                      <div>
                        <p className="font-sans text-xs font-semibold uppercase tracking-wider">Submission Failed</p>
                        <p className="font-sans text-[11px] mt-1">{status.message}</p>
                      </div>
                    </motion.div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                      <input id="name" name="name" type="text" placeholder="Full Legal Name" className={inputClass('name')} value={fields.name} onChange={handleChange} onBlur={handleBlur} />
                      {errors.name && <p className="font-sans text-[10px] text-red-500 font-medium absolute -bottom-5 left-0">{errors.name}</p>}
                    </div>
                    <div className="relative">
                      <input id="practice" name="practice" type="text" placeholder="Practice Name" className={inputClass('practice')} value={fields.practice} onChange={handleChange} onBlur={handleBlur} />
                      {errors.practice && <p className="font-sans text-[10px] text-red-500 font-medium absolute -bottom-5 left-0">{errors.practice}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                      <input id="email" name="email" type="email" placeholder="Professional Email" className={inputClass('email')} value={fields.email} onChange={handleChange} onBlur={handleBlur} />
                      {errors.email && <p className="font-sans text-[10px] text-red-500 font-medium absolute -bottom-5 left-0">{errors.email}</p>}
                    </div>
                    <div className="relative">
                      <input id="phone" name="phone" type="tel" placeholder="Direct Phone" className={inputClass('phone')} value={fields.phone} onChange={handleChange} onBlur={handleBlur} />
                      {errors.phone && <p className="font-sans text-[10px] text-red-500 font-medium absolute -bottom-5 left-0">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="relative">
                    <select id="revenue" name="revenue" className={`${inputClass('revenue')} cursor-pointer appearance-none bg-no-repeat bg-[right_0.5rem_center] pr-8`} value={fields.revenue} onChange={handleChange} onBlur={handleBlur}>
                      <option value="" disabled>Monthly Revenue Range</option>
                      <option value="<50K">Less than $50,000/month</option>
                      <option value="50K-150K">$50,000 – $150,000/month</option>
                      <option value="150K-500K">$150,000 – $500,000/month</option>
                      <option value="500K+">$500,000+/month</option>
                    </select>
                    {errors.revenue && <p className="font-sans text-[10px] text-red-500 font-medium absolute -bottom-5 left-0">{errors.revenue}</p>}
                  </div>

                  <div className="relative">
                    <textarea id="message" name="message" rows={4} placeholder="Describe your current billing challenges..." className={`${inputClass('message')} resize-none`} value={fields.message} onChange={handleChange} onBlur={handleBlur} />
                    {errors.message && <p className="font-sans text-[10px] text-red-500 font-medium absolute -bottom-5 left-0">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={status.type === 'loading'}
                    className="btn-primary font-sans text-xs font-bold uppercase tracking-[0.2em] w-full py-5 flex items-center justify-center gap-3 mt-4 disabled:opacity-70"
                  >
                    {status.type === 'loading' ? <><Loader2 size={18} className="animate-spin" /> Processing</> : 'Submit Request'}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
