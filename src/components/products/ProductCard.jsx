import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { buildProductWhatsAppUrl } from '../../utils/whatsapp';

export default function ProductCard({ product, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.25) }}
      className="group bg-[#FFFFFF] border border-[#DFDBD2] flex flex-col justify-between transition-colors duration-300 hover:border-[#A58A64]"
    >
      <div>
        <Link
          to={`/collections/${product.id}`}
          className="block relative aspect-square bg-[#FFFFFF] p-6 sm:p-8 border-b border-[#DFDBD2]/60 overflow-hidden"
        >
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </Link>

        <div className="p-6">
          <span className="inline-block text-[10px] font-medium uppercase tracking-[0.22em] text-[#A58A64]">
            {product.category}
          </span>

          <h3 className="mt-2 font-serif text-2xl font-medium text-[#111210] leading-snug">
            <Link
              to={`/collections/${product.id}`}
              className="hover:text-[#A58A64] transition-colors"
            >
              {product.name}
            </Link>
          </h3>

          <p className="mt-2.5 text-sm text-[#77756F] leading-relaxed line-clamp-3">
            {product.description}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-4 border-t border-[#DFDBD2]/60 space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="uppercase tracking-[0.14em] text-[#77756F]">Pricing</span>
          <span className="font-medium text-[#111210]">Request a Quote</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          <Link
            to={`/collections/${product.id}`}
            className="inline-flex items-center justify-center gap-1.5 border border-[#20211F]/30 px-3.5 py-2.5 text-[11px] uppercase tracking-[0.14em] font-medium text-[#20211F] hover:border-[#20211F] hover:bg-[#20211F]/5 transition-colors"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>

          <a
            href={buildProductWhatsAppUrl(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 bg-[#20211F] text-[#F6F4EF] px-3.5 py-2.5 text-[11px] uppercase tracking-[0.14em] font-medium hover:bg-[#111210] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#A58A64]" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}
