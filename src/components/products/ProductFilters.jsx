import { Search, X } from 'lucide-react';
import { CATEGORIES } from '../../data/categories';

export default function ProductFilters({
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}) {
  const categoryOptions = ['All', ...CATEGORIES.map((c) => c.name)];

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pb-6 border-b border-[#DFDBD2]">
        {/* Category Pills */}
        <div
          className="flex flex-wrap items-center gap-2"
          role="group"
          aria-label="Filter by category"
        >
          {categoryOptions.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryChange(category)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.14em] font-medium border transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#20211F] text-[#F6F4EF] border-[#20211F]'
                    : 'bg-[#FFFFFF] text-[#77756F] border-[#DFDBD2] hover:border-[#20211F] hover:text-[#111210]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full lg:w-72 shrink-0">
          <Search
            className="w-4 h-4 text-[#77756F] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
            aria-hidden="true"
          />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search chair models..."
            aria-label="Search chair models by name"
            className="w-full bg-[#FFFFFF] border border-[#DFDBD2] pl-10 pr-9 py-2.5 text-sm text-[#111210] placeholder:text-[#77756F]/70 focus:outline-none focus:border-[#A58A64]"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#77756F] hover:text-[#111210]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
