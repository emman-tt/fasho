import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ShopProduct } from '../data';
import ProductCard from '../components/ProductCard';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  products: ShopProduct[];
  cols: 3 | 4;
}

export default function ProductGrid({ products, cols }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 92%' },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, [products.length]);

  if (products.length === 0) {
    return (
      <p className="pb-20 text-sm opacity-60">
        No pieces match — try another search or filter.
      </p>
    );
  }

  return (
    <section ref={ref} className="pb-20">
      <div className={`grid grid-cols-1 gap-3 xs:grid-cols-2 xs:gap-4 ${cols === 4 ? 'sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4' : 'sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3'}`}>
        {products.map((p) => (
          <div key={p.id} data-reveal>
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
