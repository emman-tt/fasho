import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { IMAGES } from '../../../data';

gsap.registerPlugin(ScrollTrigger);

const PRODUCTS = [
  { img: IMAGES.product1, price: '$270.00' },
  { img: IMAGES.product2, price: '$270.00' },
  { img: IMAGES.product3, price: '$370.00' },
];

export default function BestSellers() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      });
      gsap.utils.toArray<HTMLElement>('[data-zoom] img').forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 1.3 },
          {
            scale: 1,
            ease: 'none',
            scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 1 },
          },
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="best" className="bg-[#f6f4ef] py-16 md:py-24">
      <div className="flex flex-col gap-8 px-3 md:flex-row md:px-6">
        <div className="flex-1">
          <div className="flex items-start justify-between gap-6">
            <h3 data-reveal className="font-display leading-[0.95] text-[10vw] xs:text-[11vw] sm:text-[7vw] md:text-[3.5vw] md:leading-[0.9]">
              The Best
              <br />
              We Have
            </h3>
            <div data-reveal data-zoom className="relative 
            w-[34vw] shrink-0 sm:w-[22vw] md:w-[14vw]">
              <img
                src={PRODUCTS[0].img}
                alt="product"
                className="h-[30vw] w-full object-cover sm:h-[18vh] md:h-[29vh]"
              />
              <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 bg-white px-4 py-3 text-sm shadow-lg xs:inset-x-4 xs:bottom-4 sm:px-5 sm:py-4 sm:text-base">
                <div className="min-w-0">
                  <p className="truncate font-semibold">Warm Cloth</p>
                  <p className="truncate text-orange-500">
                    ★★★★★ <span className="text-black">5.0</span>
                  </p>
                </div>
                <p className="shrink-0 font-black">{PRODUCTS[0].price}</p>
              </div>
              <Link to="/shop" aria-label="Shop Warm Cloth" className="absolute inset-0" />
            </div>
          </div>
          <div data-reveal className="mt-6 w-full">
            <p className="text-xl font-bold">Discover Our Top Picks, Hand-Selected</p>
            <p className="mt-3 w-full text-base opacity-60">
              Discover Our Top Picks, Hand-Selected Just For You. Each Item Is Crafted With Care,
              Quality Materials, And Personality.
            </p>
            <Link to="/shop" className="mt-5 inline-block rounded-full bg-black px-7 py-3 text-sm font-bold text-white transition hover:opacity-85">
              Shop all →
            </Link>
          </div>
        </div>

        <div className="flex flex-[2] flex-col gap-5 sm:flex-row sm:justify-end">
          {PRODUCTS.slice(1).map((p, i) => (
            <div key={i} data-reveal className="relative w-full 
             flex-1 sm:max-w-120">
              <div data-zoom className="relative overflow-hidden">
                <img
                  src={p.img}
                  alt="product"
                  className="h-[60vw] w-full object-cover sm:h-[36vh] md:h-[64vh]"
                />
              </div>
              <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 bg-white px-4 py-3 text-sm shadow-lg xs:inset-x-4 xs:bottom-4 sm:px-5 sm:py-4 sm:text-base">
                <div className="min-w-0">
                  <p className="truncate font-semibold">Warm Cloth</p>
                  <p className="truncate text-orange-500">
                    ★★★★★ <span className="text-black">5.0</span>
                  </p>
                </div>
                <p className="shrink-0 font-black">{p.price}</p>
              </div>
              <Link to="/shop" aria-label="Shop Warm Cloth" className="absolute inset-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
