import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import KPIMetrics from './components/KPIMetrics';
import HowItWorks from './components/HowItWorks';
import AIFeatures from './components/AIFeatures';
import Specialties from './components/Specialties';
import Testimonials from './components/Testimonials';
import CTABlock from './components/CTABlock';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <AnimatePresence>
      <motion.div
        key="app"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <main>
          <section id="home"><Hero /></section>
          <TrustBar />
          <section id="services"><Services /></section>
          <KPIMetrics />
          <section id="how-it-works"><HowItWorks /></section>
          <section id="ai-features"><AIFeatures /></section>
          <section id="specialties"><Specialties /></section>
          <Testimonials />
          <CTABlock />
          <section id="contact"><ContactForm /></section>
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
