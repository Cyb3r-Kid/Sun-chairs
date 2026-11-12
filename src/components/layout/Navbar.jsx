import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import Logo from '../common/Logo';
import Button from '../common/Button';
import MobileMenu from './MobileMenu';
import { buildGeneralWhatsAppUrl } from '../../utils/whatsapp';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Collections', to: '/collections' },
  { label: 'About', to: '/about' },
  { label: 'Wholesale', to: '/wholesale' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const useTransparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          useTransparent
            ? 'bg-transparent text-[#F6F4EF]'
            : 'bg-[#F6F4EF]/95 backdrop-blur-md text-[#20211F] border-b border-[#DFDBD2]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Logo variant={useTransparent ? 'light' : 'dark'} />

            <nav className="hidden lg:flex items-center gap-9" aria-label="Main navigation">
              {NAV_LINKS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `text-xs uppercase tracking-[0.18em] font-medium transition-colors duration-200 py-1 border-b ${
                      isActive
                        ? useTransparent
                          ? 'text-[#F6F4EF] border-[#A58A64]'
                          : 'text-[#111210] border-[#A58A64]'
                        : useTransparent
                        ? 'text-[#F6F4EF]/80 border-transparent hover:text-[#F6F4EF]'
                        : 'text-[#77756F] border-transparent hover:text-[#111210]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href={buildGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Enquiry"
                className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-medium px-3 py-2 transition-colors ${
                  useTransparent
                    ? 'text-[#F6F4EF]/85 hover:text-[#A58A64]'
                    : 'text-[#20211F] hover:text-[#A58A64]'
                }`}
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>

              <Button
                to="/wholesale"
                variant={useTransparent ? 'light' : 'primary'}
                size="sm"
              >
                Enquire Now
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className={`lg:hidden p-2 -mr-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A58A64] ${
                useTransparent ? 'text-[#F6F4EF]' : 'text-[#20211F]'
              }`}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={NAV_LINKS}
      />
    </>
  );
}
