import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#150748] px-4 py-10 text-white xs:px-5 sm:px-6 sm:py-12 md:px-6">
      <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
        <div>
          <p className="text-xs uppercase opacity-60">Menu</p>
          <ul className="mt-3 space-y-2 text-base">
            <li><Link to="/shop" className="opacity-80 transition hover:opacity-100 hover:underline">Our Product</Link></li>
            <li><Link to="/blog" className="opacity-80 transition hover:opacity-100 hover:underline">Testimonials</Link></li>
            <li><Link to="/blog" className="opacity-80 transition hover:opacity-100 hover:underline">Insight</Link></li>
            <li><Link to="/" className="opacity-80 transition hover:opacity-100 hover:underline">About Us</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="text-xs uppercase opacity-60">Contact</p>
          <p className="mt-3 text-base">
            3691 Mainland Dr. Ricardo,
            <br />
            Arizona 85666
            <br />
            +1 578 473 7781
          </p>
        </div>
        <div>
          <p className="text-xs uppercase opacity-60">Follow us</p>
          <div className="mt-3 flex gap-4 text-2xl">
            <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X" className="opacity-80 transition hover:opacity-100">ⓧ</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="opacity-80 transition hover:opacity-100">◉</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-base font-bold opacity-80 transition hover:opacity-100">in</a>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-2 border-t border-white/15 pt-5 text-xs opacity-60 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
        <span>All Rights Reserved. ©2025</span>
        <span className="flex gap-4">
          <span>Privacy</span>
          <span>Terms & condition</span>
        </span>
      </div>
    </footer>
  );
}
