import { motion } from 'framer-motion';

export default function ProductGallery({ image, name }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#FFFFFF] border border-[#DFDBD2] aspect-square p-8 sm:p-12 flex items-center justify-center"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-full object-contain object-center"
      />
    </motion.div>
  );
}
