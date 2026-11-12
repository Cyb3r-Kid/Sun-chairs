import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Info } from 'lucide-react';
import Seo from '../components/common/Seo';
import Button from '../components/common/Button';
import WhatsAppButton from '../components/common/WhatsAppButton';
import ProductGallery from '../components/products/ProductGallery';
import RelatedProducts from '../components/products/RelatedProducts';
import { PRODUCTS } from '../data/products';
import { buildProductWhatsAppUrl } from '../utils/whatsapp';

export default function ProductDetails() {
  const { id } = useParams();

  const product = useMemo(
    () => PRODUCTS.find((item) => item.id === id),
    [id]
  );

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    const sameCategory = PRODUCTS.filter(
      (item) => item.id !== product.id && item.category === product.category
    );
    const others = PRODUCTS.filter(
      (item) => item.id !== product.id && item.category !== product.category
    );
    return [...sameCategory, ...others].slice(0, 3);
  }, [product]);

  if (!product) {
    return (
      <div className="pt-36 pb-24 px-5 text-center bg-[#F6F4EF] min-h-[70vh] flex flex-col items-center justify-center">
        <Seo title="Model Not Found" path={`/collections/${id}`} />
        <p className="text-[11px] uppercase tracking-[0.26em] text-[#A58A64] mb-3">
          Catalogue
        </p>
        <h1 className="font-serif text-4xl text-[#111210]">
          Product Model Not Found
        </h1>
        <p className="mt-3 text-sm text-[#77756F] max-w-md">
          The chair model you are looking for could not be found in the current
          catalogue.
        </p>
        <div className="mt-8">
          <Button to="/collections" variant="primary" size="md">
            Back to Collections
          </Button>
        </div>
      </div>
    );
  }

  const specEntries = product.specifications
    ? Object.entries(product.specifications).filter(([, value]) => Boolean(value))
    : [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="pt-28 sm:pt-36 pb-20 bg-[#F6F4EF]"
    >
      <Seo
        title={product.name}
        description={product.description}
        path={`/collections/${product.id}`}
        image={product.image}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Link
          to="/collections"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#77756F] hover:text-[#111210] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Back to Collections</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Product Image */}
          <div className="lg:col-span-6">
            <ProductGallery image={product.image} name={product.name} />
          </div>

          {/* Right: Product Info */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="inline-block text-[11px] font-medium uppercase tracking-[0.26em] text-[#A58A64]">
                {product.category}
              </span>
              <h1 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#111210] leading-[1.12]">
                {product.name}
              </h1>
              <p className="mt-4 text-sm sm:text-base text-[#77756F] leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Pricing / Availability Row */}
            <div className="py-5 border-y border-[#DFDBD2] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#77756F]">
                  Wholesale &amp; Bulk Pricing
                </p>
                <p className="mt-1 font-serif text-xl text-[#111210]">
                  Request a Quote
                </p>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#77756F]">
                  Availability
                </p>
                <p className="mt-1 text-sm font-medium text-[#20211F]">
                  Confirmed Upon Enquiry
                </p>
              </div>
            </div>

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div>
                <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#111210] mb-4">
                  Key Highlights
                </h2>
                <ul className="space-y-2.5">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-[#20211F]"
                    >
                      <Check
                        className="w-4 h-4 text-[#A58A64] mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technical Specifications */}
            <div>
              <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#111210] mb-4">
                Technical Specifications
              </h2>
              {specEntries.length > 0 ? (
                <dl className="divide-y divide-[#DFDBD2] border-y border-[#DFDBD2]">
                  {specEntries.map(([key, value]) => (
                    <div
                      key={key}
                      className="py-3 flex items-center justify-between gap-4 text-sm"
                    >
                      <dt className="text-[#77756F] capitalize">{key}</dt>
                      <dd className="text-[#111210] font-medium text-right">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <div className="bg-[#FFFFFF] border border-[#DFDBD2] p-5 flex items-start gap-3">
                  <Info
                    className="w-4 h-4 text-[#A58A64] mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-sm text-[#77756F] leading-relaxed">
                    Detailed dimensions, upholstery options, mechanism
                    specifications, and bulk lead times are confirmed directly
                    by SUN CHAIRS upon enquiry.
                  </p>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3.5">
              <Button
                to={`/wholesale?product=${encodeURIComponent(product.name)}`}
                variant="primary"
                size="lg"
                className="flex-1"
              >
                Request a Quote
              </Button>
              <WhatsAppButton
                href={buildProductWhatsAppUrl(product.name)}
                label="WhatsApp Enquiry"
                variant="bronze"
                size="lg"
                className="flex-1"
              />
            </div>
          </div>
        </div>

        <RelatedProducts products={relatedProducts} />
      </div>
    </motion.div>
  );
}
