import { Link } from 'react-router-dom';

export default function Logo({ variant = 'dark', className = '' }) {
  const isLight = variant === 'light';

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-3 group focus:outline-none ${className}`}
      aria-label="SUN CHAIRS — Home"
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-500 group-hover:rotate-45"
        aria-hidden="true"
      >
        <circle
          cx="20"
          cy="20"
          r="9"
          stroke="#A58A64"
          strokeWidth="1.5"
        />
        <circle
          cx="20"
          cy="20"
          r="3.2"
          fill={isLight ? '#F6F4EF' : '#20211F'}
        />
        <path
          d="M20 4V8M20 32V36M4 20H8M32 20H36M8.69 8.69L11.52 11.52M28.48 28.48L31.31 31.31M31.31 8.69L28.48 11.52M11.52 28.48L8.69 31.31"
          stroke="#A58A64"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      <div className="flex flex-col leading-none">
        <span
          className={`font-sans text-base sm:text-lg font-bold tracking-[0.26em] uppercase ${
            isLight ? 'text-[#F6F4EF]' : 'text-[#111210]'
          }`}
        >
          SUN
        </span>
        <span
          className={`font-serif text-[11px] sm:text-xs font-medium tracking-[0.38em] uppercase mt-0.5 ${
            isLight ? 'text-[#A58A64]' : 'text-[#77756F]'
          }`}
        >
          CHAIRS
        </span>
      </div>
    </Link>
  );
}
