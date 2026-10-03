import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const darkHero = pathname === '/';
  const tone = darkHero ? 'text-white' : 'text-[#1d0a5f]';
  const pill = darkHero
    ? 'border-white/20 bg-white/10 text-white'
    : 'border-black/10 bg-black/5 text-black';

  const link = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'rounded-full bg-black px-4 py-1.5 text-white' : 'opacity-70 hover:opacity-100';

  const mobileLink = ({ isActive }: { isActive: boolean }) =>
    `block rounded-xl px-4 py-3 text-base font-semibold transition ${
      isActive ? 'bg-black text-white' : 'hover:bg-black/5'
    }`;

  return (
    <header className={`absolute inset-x-0 top-0 z-30 ${tone}`}>
      <div className="flex items-center justify-between gap-2 px-3 py-4 sm:py-5 md:px-8">
        <Link to="/" className="font-display text-xl tracking-widest xs:text-2xl md:text-3xl">
          FASHO
        </Link>
        <nav
          className={`hidden items-center gap-6 rounded-full border px-8 py-2.5 text-[14px] font-medium backdrop-blur lg:flex ${pill}`}
        >
          <NavLink to="/" className={link}>
            Home
          </NavLink>
          <NavLink to="/shop" className={link}>
            Shop
          </NavLink>
          <NavLink to="/blog" className={link}>
            Blog
          </NavLink>
        </nav>
        <div className="flex items-center gap-1.5 text-[13px] xs:gap-2 xs:text-[14px]">
          <button className="hidden rounded-full border border-current px-4 py-2 opacity-80 sm:block sm:px-6 sm:py-2.5">
            Sign in
          </button>
          <Link to="/shop" className="whitespace-nowrap rounded-full bg-black px-4 py-2 font-bold text-white xs:px-5 sm:px-6 sm:py-2.5">
            Get Started →
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-current text-lg leading-none lg:hidden"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
      {open && (
        <nav
          className={`mx-3 rounded-2xl border p-2 shadow-xl backdrop-blur-xl lg:hidden ${
            darkHero ? 'border-white/20 bg-[#1d0a5f]/95 text-white' : 'border-black/10 bg-white/95 text-[#1d0a5f]'
          }`}
        >
          <NavLink to="/" onClick={() => setOpen(false)} className={mobileLink}>
            Home
          </NavLink>
          <NavLink to="/shop" onClick={() => setOpen(false)} className={mobileLink}>
            Shop
          </NavLink>
          <NavLink to="/blog" onClick={() => setOpen(false)} className={mobileLink}>
            Blog
          </NavLink>
          <button className="mt-1 block w-full rounded-xl px-4 py-3 text-left text-base font-semibold opacity-70 sm:hidden">
            Sign in
          </button>
        </nav>
      )}
    </header>
  );
}
