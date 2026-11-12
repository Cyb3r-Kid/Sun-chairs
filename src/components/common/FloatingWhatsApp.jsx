import { MessageCircle } from 'lucide-react';
import { buildGeneralWhatsAppUrl } from '../../utils/whatsapp';

export default function FloatingWhatsApp() {
  return (
    <a
      href={buildGeneralWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire with SUN CHAIRS on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 bg-[#20211F] text-[#F6F4EF] border border-[#A58A64]/40 px-4 py-3 shadow-lg hover:bg-[#111210] hover:border-[#A58A64] transition-all duration-300 md:hidden"
    >
      <MessageCircle className="w-4 h-4 text-[#A58A64]" aria-hidden="true" />
      <span className="text-[11px] font-medium uppercase tracking-[0.16em]">
        WhatsApp
      </span>
    </a>
  );
}
