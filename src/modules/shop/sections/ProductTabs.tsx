import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ShopProduct } from '../data';

gsap.registerPlugin(ScrollTrigger);

const FIT: Record<ShopProduct['category'], string[]> = {
  men: ['Relaxed through the body', 'True to size — take your usual', 'Model is 188cm and wears M'],
  women: ['Draped, easy fit', 'True to size — take your usual', 'Model is 175cm and wears S'],
  children: ['Room-to-grow fit', 'Reinforced knees and seams', 'Machine wash cold, tumble low'],
};

export default function ProductTabs({ product }: { product: ShopProduct }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState<'details' | 'shipping' | 'reviews'>('details');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-tab-fade]', {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 88%' },
      });
    }, ref);
    return () => ctx.revert();
  }, [product.id]);

  const tabs = [
    { id: 'details' as const, label: 'Details & fit' },
    { id: 'shipping' as const, label: 'Shipping & returns' },
    { id: 'reviews' as const, label: 'Reviews (0)' },
  ];

  return (
    <div ref={ref} data-tab-fade className="mt-14 border-t border-black/10 pt-6">
      <div className="no-scrollbar -mx-3 flex gap-2 overflow-x-auto px-3 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-bold transition sm:px-5 sm:py-2.5 sm:text-sm ${
              tab === t.id ? 'bg-[#1d0a5f] text-white' : 'border border-black/15 hover:border-black/40'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-6 max-w-3xl text-[15px] leading-[1.8]">
        {tab === 'details' && (
          <ul className="list-disc space-y-2 pl-5 opacity-80">
            {FIT[product.category].map((f) => (
              <li key={f}>{f}</li>
            ))}
            <li>Premium fabric, pre-shrunk and colourfast</li>
          </ul>
        )}
        {tab === 'shipping' && (
          <div className="space-y-3 opacity-80">
            <p>Orders placed today ship within 24 hours. Delivery in 2–4 working days.</p>
            <p>Free shipping on orders over $150. Free returns within 14 days — no questions asked.</p>
          </div>
        )}
        {tab === 'reviews' && (
          <div className="opacity-80">
            <p className="font-display text-5xl">0.0</p>
            <p className="mt-1 text-sm">No reviews yet — be the first to review this piece.</p>
          </div>
        )}
      </div>
    </div>
  );
}
