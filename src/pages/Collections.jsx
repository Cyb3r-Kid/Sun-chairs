import { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Seo from '../components/common/Seo';
import SectionHeading from '../components/common/SectionHeading';
import ProductFilters from '../components/products/ProductFilters';
import ProductGrid from '../components/products/ProductGrid';
import WholesaleCTA from '../components/home/WholesaleCTA';
import { PRODUCTS } from '../data/products';

export default function Collections() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const paramCategory = searchParams.get('category') || 'All';
    setSelectedCategory(paramCategory);
  }, [searchParams]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      searchParams.delete('category');
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ category }, { replace: true });
    }
  };

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setSearchParams({}, { replace: true });
  };

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="pt-28 sm:pt-36 bg-[#F6F4EF]"
    >
      <Seo
        title="Executive Chair Collections"
        description="Explore executive chairs, high-back chairs, mid-back chairs, ergonomic chairs, and mesh chairs supplied wholesale by SUN CHAIRS across Tamil Nadu."
        path="/collections"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-16">
        <SectionHeading
          eyebrow="Product Catalogue"
          title="Executive Seating Collections"
          description="Browse our seating models available for corporate, institutional, and wholesale dealer enquiries. Pricing and technical specifications are shared directly upon quotation request."
        />

        <div className="mt-12">
          <ProductFilters
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </div>

        <div className="mt-4 mb-8 flex items-center justify-between text-xs text-[#77756F]">
          <span>
            Showing {filteredProducts.length}{' '}
            {filteredProducts.length === 1 ? 'model' : 'models'}
            {selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''}
          </span>
          <span>Wholesale &amp; Bulk Enquiries Welcome</span>
        </div>

        <ProductGrid
          products={filteredProducts}
          onResetFilters={handleResetFilters}
        />
      </div>

      <WholesaleCTA />
    </motion.div>
  );
}
