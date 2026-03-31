import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Claimax Solutions reduced our claim denials by 68% in the first 60 days. Our revenue cycle has never been this clean. The coding team catches patterns our clinical staff never would have spotted manually.",
    author: 'Dr. Sarah Mitchell',
    title: 'Cardiologist',
    practice: 'HeartCare Associates',
    initials: 'SM',
    color: 'bg-blue-600',
  },
  {
    quote: "We recovered $340,000 in outstanding A/R within 90 days of going live. The team is genuinely remarkable — they don't just identify the problem, they actively resolve it with the payers.",
    author: 'James Patel, MBA',
    title: 'Practice Manager',
    practice: 'OrthoPlex Group',
    initials: 'JP',
    color: 'bg-green-600',
  },
  {
    quote: "Setup took 48 hours. The Claimax Solutions team handled everything seamlessly with our EHR. Our clean claim rate jumped from 74% to 98% and we've cut our billing staff overtime in half.",
    author: 'Dr. Aisha Thompson',
    title: 'OB/GYN',
    practice: "Women's Health Partners",
    initials: 'AT',
    color: 'bg-indigo-600',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const iv = setInterval(() => go(1), 7000);
    return () => clearInterval(iv);
  }, []);

  const variants = {
    enter:  (d) => ({ opacity: 0, x: d > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit:   (d) => ({ opacity: 0, x: d > 0 ? -40 : 40 }),
  };

  const t = testimonials[index];

  return (
    <div className="section-pad bg-slate-50 relative overflow-hidden border-y border-slate-200">
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="font-sans font-semibold text-sm text-primary uppercase tracking-wide mb-3">Client Success</p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-slate-900">
            Trusted by Practices Nationwide
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-8 lg:p-12 shadow-soft border border-slate-200 relative"
            >
              <div className="font-display font-black text-6xl text-slate-200 absolute top-8 left-8 select-none leading-none">
                "
              </div>

              <p className="font-sans text-xl lg:text-2xl text-slate-800 leading-relaxed italic mb-8 relative z-10 font-medium">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 font-sans font-bold text-lg text-white ${t.color}`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-display font-bold text-slate-900">{t.author}</p>
                  <p className="font-sans text-sm text-slate-500">{t.title} · {t.practice}</p>
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button onClick={() => go(-1)} className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center text-slate-500 hover:text-primary transition-colors border border-slate-200">
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                  className={`rounded-full transition-all duration-300 ${i === index ? 'w-8 h-2 bg-primary' : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={() => go(1)} className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center text-slate-500 hover:text-primary transition-colors border border-slate-200">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
