import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SHOP_PRODUCTS, type ShopProduct } from '../data';
import ProductCard from '../components/ProductCard';

gsap.registerPlugin(ScrollTrigger);

export default function RelatedProducts({ product }: { product: ShopProduct }) {
  const ref = useRef<HTMLElement>(null);

  const related = [
    ...SHOP_PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id),
    ...SHOP_PRODUCTS.filter((p) => p.category !== product.category),
  ].slice(0, 4);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-related]', {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 88%' },
      });
    }, ref);
    return () => ctx.revert();
  }, [product.id]);

  return (
    <section ref={ref} className="mt-16">
      <h2 className="font-display text-[8vw] leading-[1.05] xs:text-[9vw] sm:text-[6vw] md:text-[3vw] md:leading-none">YOU MAY ALSO LIKE</h2>
      <div className="mt-6 grid grid-cols-1 gap-3 xs:grid-cols-2 xs:gap-4 sm:grid-cols-2 md:grid-cols-4">
        {related.map((p) => (
          <div key={p.id} data-related>
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
