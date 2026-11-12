import ProductCard from './ProductCard';
import Button from '../common/Button';

export default function ProductGrid({ products, onResetFilters }) {
  if (!products.length) {
    return (
      <div className="bg-[#FFFFFF] border border-[#DFDBD2] py-16 px-6 text-center">
        <p className="font-serif text-2xl text-[#111210]">
          No chair models matched your selection.
        </p>
        <p className="mt-2 text-sm text-[#77756F]">
          Try clearing your search term or selecting another category.
        </p>
        {onResetFilters && (
          <div className="mt-6">
            <Button onClick={onResetFilters} variant="secondary" size="sm">
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}
