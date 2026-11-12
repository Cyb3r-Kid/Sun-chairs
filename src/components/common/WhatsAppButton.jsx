import { MessageCircle } from 'lucide-react';
import { buildGeneralWhatsAppUrl } from '../../utils/whatsapp';

export default function WhatsAppButton({
  href,
  label = 'Enquire on WhatsApp',
  variant = 'primary',
  size = 'md',
  className = '',
}) {
  const targetUrl = href || buildGeneralWhatsAppUrl();

  const variantStyles = {
    primary: 'bg-[#20211F] text-[#F6F4EF] hover:bg-[#111210] border border-[#20211F]',
    bronze: 'bg-[#A58A64] text-[#FFFFFF] hover:bg-[#8E7450] border border-[#A58A64]',
    outline:
      'bg-transparent text-[#20211F] border border-[#20211F]/30 hover:border-[#20211F] hover:bg-[#20211F]/5',
    lightOutline:
      'bg-transparent text-[#F6F4EF] border border-[#F6F4EF]/40 hover:border-[#F6F4EF] hover:bg-[#F6F4EF]/10',
  };

  const sizeStyles = {
    sm: 'px-4 py-2.5 text-[11px] tracking-[0.14em]',
    md: 'px-6 py-3.5 text-xs tracking-[0.16em]',
    lg: 'px-8 py-4 text-xs sm:text-sm tracking-[0.18em]',
  };

  return (
    <a
      href={targetUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 uppercase font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A58A64] ${
        variantStyles[variant] || variantStyles.primary
      } ${sizeStyles[size] || sizeStyles.md} ${className}`}
    >
      <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}
