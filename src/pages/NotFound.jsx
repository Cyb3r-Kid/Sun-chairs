import { motion } from 'framer-motion';
import Seo from '../components/common/Seo';
import Button from '../components/common/Button';

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="min-h-[80vh] pt-28 pb-20 px-5 flex flex-col items-center justify-center text-center bg-[#F6F4EF]"
    >
      <Seo title="Page Not Found" path="/404" />

      <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#A58A64]">
        Error 404
      </span>
      <h1 className="mt-4 font-serif text-5xl sm:text-6xl font-medium text-[#111210]">
        Page Not Found
      </h1>
      <p className="mt-4 text-sm sm:text-base text-[#77756F] max-w-md leading-relaxed">
        The page you requested could not be found. Explore our executive chair
        collections or return to the homepage.
      </p>

      <div className="mt-9 flex flex-col sm:flex-row gap-4">
        <Button to="/" variant="primary" size="md">
          Return Home
        </Button>
        <Button to="/collections" variant="secondary" size="md">
          Browse Collections
        </Button>
      </div>
    </motion.div>
  );
}
