import { AnimatePresence, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Phone, MessageCircle, ArrowUpRight } from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company';
import { buildGeneralWhatsAppUrl } from '../../utils/whatsapp';
import Button from '../common/Button';

export default function MobileMenu({ isOpen, onClose, links }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 top-20 z-40 bg-[#F6F4EF] border-t border-[#DFDBD2] lg:hidden overflow-y-auto"
        >
          <div className="px-6 py-8 flex flex-col justify-between min-h-[calc(100vh-5rem)]">
            <nav className="flex flex-col divide-y divide-[#DFDBD2]" aria-label="Mobile navigation">
              {links.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `py-4 flex items-center justify-between font-serif text-2xl transition-colors ${
                      isActive ? 'text-[#111210] font-medium' : 'text-[#77756F]'
                    }`
                  }
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#A58A64]" aria-hidden="true" />
                </NavLink>
              ))}
            </nav>

            <div className="pt-8 space-y-4 border-t border-[#DFDBD2] mt-8">
              <Button to="/wholesale" variant="primary" size="lg" className="w-full">
                Enquire Now
              </Button>

              <a
                href={buildGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 border border-[#20211F]/30 px-6 py-3.5 text-xs uppercase tracking-[0.16em] font-medium text-[#20211F] hover:bg-[#20211F]/5 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#A58A64]" aria-hidden="true" />
                <span>Chat on WhatsApp</span>
              </a>

              <div className="pt-3 flex items-center justify-between text-xs text-[#77756F]">
                <span>{COMPANY_CONFIG.location.display}</span>
                <a
                  href={COMPANY_CONFIG.contact.phoneHref}
                  className="inline-flex items-center gap-1.5 text-[#20211F] font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-[#A58A64]" aria-hidden="true" />
                  <span>{COMPANY_CONFIG.contact.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
