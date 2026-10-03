import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { IMAGES } from '../../../data';

gsap.registerPlugin(ScrollTrigger);

const ROWS = [
  { a: 'STYLE', b: 'SELECTIONS', img: IMAGES.thumb1 },
  { a: 'BEST STYLE', b: 'COLLECTION', img: IMAGES.thumb2 },
  { a: 'TOP', b: 'FASHION PICKS', img: IMAGES.thumb3 },
  { a: 'SIGNATURE', b: 'COLLECTION', img: IMAGES.thumb4 },
];

export default function StyleList() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 90%' },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-white pb-14">
      <div className="px-3 md:px-6">
        <div className="flex justify-between text-[11px] uppercase tracking-widest opacity-50 md:text-xs">
          <span>Curated fashion picks</span>
          <span>Handpicked style guide</span>
        </div>
        <div className="mt-3 divide-y-2 divide-black/10 border-y-2 border-black/10">
          {ROWS.map((r, i) => (
            <Link
              key={i}
              data-reveal
              to="/shop"
              className="group flex items-center justify-between gap-2 py-4 font-display leading-[1.05] text-[7.5vw] xs:gap-3 xs:text-[8.5vw] sm:text-[7vw] md:py-6 md:text-[5.2vw]"
            >
              <span className="flex flex-wrap items-center gap-[1.5vw]">
                {r.a}
                <img
                  src={r.img}
                  alt=""
                  className="h-[7vw] w-[18vw] rounded-full object-cover transition-all duration-500 group-hover:w-[26vw] md:h-[3.8vw] md:w-[9vw] md:group-hover:w-[13vw]"
                />
                {r.b}
              </span>
              <span className="shrink-0 text-[7vw] transition duration-300 group-hover:translate-x-3 xs:text-[9vw] md:text-[5vw]">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
