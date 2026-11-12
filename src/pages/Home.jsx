import { motion } from 'framer-motion';
import Seo from '../components/common/Seo';
import Hero from '../components/home/Hero';
import Introduction from '../components/home/Introduction';
import FeaturedCollections from '../components/home/FeaturedCollections';
import BrandStory from '../components/home/BrandStory';
import WhySunChairs from '../components/home/WhySunChairs';
import WholesaleCTA from '../components/home/WholesaleCTA';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Seo path="/" includeLocalBusinessSchema />
      <Hero />
      <Introduction />
      <FeaturedCollections />
      <BrandStory />
      <WhySunChairs />
      <WholesaleCTA />
    </motion.div>
  );
}
