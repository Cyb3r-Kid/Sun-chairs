import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { CATEGORIES } from '../../data/categories';

export default function FeaturedCollections() {
  return (
    <section className="py-20 sm:py-28 bg-[#F6F4EF]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="Curated Categories"
            title="Executive Chair Collections"
            description="Explore our seating categories tailored for leadership cabins, conference rooms, and commercial workspaces."
          />
          <Link
            to="/collections"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium text-[#20211F] hover:text-[#A58A64] transition-colors shrink-0"
          >
            <span>View All Models</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CATEGORIES.map((category, index) => (
            <motion.article
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="group bg-[#FFFFFF] border border-[#DFDBD2] flex flex-col justify-between transition-colors duration-300 hover:border-[#A58A64]"
            >
              <Link
                to={`/collections?category=${encodeURIComponent(category.name)}`}
                className="block overflow-hidden aspect-[4/3] bg-[#F6F4EF]"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </Link>

              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-medium text-[#111210]">
                    {category.name}
                  </h3>
                  <p className="mt-2.5 text-sm text-[#77756F] leading-relaxed">
                    {category.shortDescription}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DFDBD2]/70">
                  <Link
                    to={`/collections?category=${encodeURIComponent(category.name)}`}
                    className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-medium text-[#20211F] group-hover:text-[#A58A64] transition-colors"
                  >
                    <span>Explore</span>
                    <ArrowRight
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
