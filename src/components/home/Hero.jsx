import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-end pb-16 sm:pb-24 pt-28 overflow-hidden bg-[#111210]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-chair.jpg"
          alt="Executive chair in a modern corporate workspace"
          className="w-full h-full object-cover object-center opacity-75"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#111210] via-[#111210]/55 to-[#111210]/40"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.28em] text-[#A58A64] mb-5"
          >
            Madurai, Tamil Nadu &middot; Manufacturer &amp; Wholesale Trader
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-medium text-[#F6F4EF] leading-[1.06] tracking-[-0.015em]"
          >
            Designed for Comfort.
            <br />
            Built for Business.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-base sm:text-lg text-[#F6F4EF]/80 max-w-xl leading-relaxed font-light"
          >
            Discover premium executive seating solutions from SUN CHAIRS. Manufacturing
            and wholesale trading for businesses across Tamil Nadu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <Button to="/collections" variant="light" size="lg">
              <span>Explore Collections</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>

            <Button to="/wholesale" variant="lightOutline" size="lg">
              Request Wholesale Pricing
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
