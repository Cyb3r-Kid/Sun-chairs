import { motion } from 'framer-motion';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'dark',
  className = '',
}) {
  const isCentered = align === 'center';
  const isLight = theme === 'light';

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`${isCentered ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'} ${className}`}
    >
      {eyebrow && (
        <span className="inline-block text-[11px] font-medium uppercase tracking-[0.26em] text-[#A58A64] mb-3">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.12] tracking-[-0.01em] ${
          isLight ? 'text-[#F6F4EF]' : 'text-[#111210]'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-sm sm:text-base leading-relaxed ${
            isLight ? 'text-[#F6F4EF]/75' : 'text-[#77756F]'
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
