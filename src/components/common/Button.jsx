import { Link } from 'react-router-dom';

const variants = {
  primary:
    'bg-[#20211F] text-[#F6F4EF] hover:bg-[#111210] border border-[#20211F]',
  secondary:
    'bg-transparent text-[#20211F] border border-[#20211F]/30 hover:border-[#20211F] hover:bg-[#20211F]/5',
  bronze:
    'bg-[#A58A64] text-[#FFFFFF] hover:bg-[#8E7450] border border-[#A58A64]',
  light:
    'bg-[#F6F4EF] text-[#111210] hover:bg-[#FFFFFF] border border-[#F6F4EF]',
  lightOutline:
    'bg-transparent text-[#F6F4EF] border border-[#F6F4EF]/45 hover:border-[#F6F4EF] hover:bg-[#F6F4EF]/10',
};

const sizes = {
  sm: 'px-4 py-2.5 text-xs tracking-[0.14em]',
  md: 'px-6 py-3.5 text-xs tracking-[0.16em]',
  lg: 'px-8 py-4 text-xs sm:text-sm tracking-[0.18em]',
};

export default function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2.5 uppercase font-medium transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A58A64]';

  const classes = `${baseClasses} ${variants[variant] || variants.primary} ${
    sizes[size] || sizes.md
  } ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}
