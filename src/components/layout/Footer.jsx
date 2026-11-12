import { Link } from 'react-router-dom';
import { Phone, MapPin, MessageCircle } from 'lucide-react';
import Logo from '../common/Logo';
import { COMPANY_CONFIG } from '../../config/company';
import { CATEGORIES } from '../../data/categories';
import { buildGeneralWhatsAppUrl } from '../../utils/whatsapp';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111210] text-[#F6F4EF] border-t border-[#20211F]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <Logo variant="light" />
            <p className="text-sm text-[#F6F4EF]/70 leading-relaxed max-w-sm">
              {COMPANY_CONFIG.shortDescription}
            </p>
            <div className="pt-2">
              <a
                href={buildGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 border border-[#A58A64]/60 px-5 py-3 text-xs uppercase tracking-[0.16em] text-[#F6F4EF] hover:bg-[#A58A64] hover:border-[#A58A64] transition-colors duration-300"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A58A64]">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm text-[#F6F4EF]/75">
              <li>
                <Link to="/" className="hover:text-[#F6F4EF] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/collections" className="hover:text-[#F6F4EF] transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#F6F4EF] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/wholesale" className="hover:text-[#F6F4EF] transition-colors">
                  Wholesale / Bulk
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#F6F4EF] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A58A64]">
              Categories
            </h3>
            <ul className="space-y-3 text-sm text-[#F6F4EF]/75">
              {CATEGORIES.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/collections?category=${encodeURIComponent(category.name)}`}
                    className="hover:text-[#F6F4EF] transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A58A64]">
              Direct Contact
            </h3>
            <ul className="space-y-4 text-sm text-[#F6F4EF]/75">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#A58A64] mt-0.5 shrink-0" aria-hidden="true" />
                <span>{COMPANY_CONFIG.location.display}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#A58A64] mt-0.5 shrink-0" aria-hidden="true" />
                <a
                  href={COMPANY_CONFIG.contact.phoneHref}
                  className="hover:text-[#F6F4EF] transition-colors"
                >
                  {COMPANY_CONFIG.contact.phoneDisplay}
                </a>
              </li>
            </ul>
            <p className="text-xs text-[#F6F4EF]/50 leading-relaxed pt-1">
              Wholesale &amp; Bulk Seating Supply Across Tamil Nadu.
            </p>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-[#F6F4EF]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F6F4EF]/55">
          <p>
            &copy; {currentYear} {COMPANY_CONFIG.name}. All rights reserved.
          </p>
          <p>Manufacturer &amp; Wholesale Trader &middot; Madurai, Tamil Nadu</p>
        </div>
      </div>
    </footer>
  );
}
