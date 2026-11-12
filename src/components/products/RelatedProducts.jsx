import ProductCard from './ProductCard';
import SectionHeading from '../common/SectionHeading';

export default function RelatedProducts({ products }) {
  if (!products.length) return null;

  return (
    <section className="pt-16 mt-16 border-t border-[#DFDBD2]">
      <SectionHeading
        eyebrow="Explore More"
        title="Related Chair Models"
        className="mb-10"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  );
}
