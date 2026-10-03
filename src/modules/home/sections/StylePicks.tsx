import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IMAGES } from '../../../data';
import { Link } from 'react-router-dom';
import { Arrow } from '../../../shared/components/ui';

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  { img: IMAGES.motionOrange, label: 'Style Girl' },
  { img: IMAGES.motionBlue, label: 'Style Girl' },
];

export default function StylePicks() {
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
          { scale: 1.25 },
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
    <section ref={ref} id="picks" className="bg-white py-16 md:py-24">
      <div className="px-3 md:px-6">
        <div
          data-reveal
          className="grid items-start gap-4 text-[11px] uppercase tracking-widest sm:grid-cols-[1fr_auto] sm:items-center md:grid-cols-[1fr_auto_1fr] md:text-xs"
        >
          <span className="text-black/50">
            Discover outfits
            <br />
            curated by our style
          </span>
          <h2 className="relative overflow-hidden text-left font-display leading-[0.9] tracking-normal text-black text-[10vw] sm:col-span-2 sm:text-center sm:text-[7vw] md:col-auto md:text-[4.5vw]">
            OUR CURATED
            <br />
            STYLE PICKS
            <span className="pointer-events-none absolute inset-0">
              <span className="absolute inset-x-0 bg-white" style={{ top: '62%', height: 8 }} />
              <span className="absolute inset-x-0 bg-white" style={{ top: '70%', height: 4 }} />
              <span className="absolute inset-x-0 bg-white" style={{ top: '77%', height: 10 }} />
              <span className="absolute inset-x-0 bg-white" style={{ top: '85%', height: 5 }} />
              <span className="absolute inset-x-0 bg-white" style={{ top: '91%', height: 8 }} />
              <span className="absolute inset-x-0 bg-white" style={{ top: '97%', height: 3 }} />
            </span>
          </h2>
          <span className="text-left text-sm font-medium uppercase leading-loose tracking-[0.18em] text-black sm:text-right md:text-base">
            Hand-selected outfits and
            <br />
            fashion pieces for looking
            <br />
            stylish and confident every day
          </span>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {CARDS.map((c, i) => (
            <Link
              key={i}
              to="/shop"
              data-reveal
              data-zoom
              className="group relative overflow-hidden"
            >
              <img
                src={c.img}
                alt={c.label}
                className="h-[90vw] w-full object-cover transition duration-700 group-hover:scale-105 xs:h-[80vw] sm:h-[52vh] md:h-[62vh]"
              />
              <span className="absolute left-3 top-3 inline-block whitespace-nowrap rounded-full border border-white bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur sm:left-4 sm:top-4 sm:px-6 sm:py-2 sm:text-sm">
                {c.label}
              </span>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/70 backdrop-blur sm:h-20 sm:w-20">
                  <Arrow />
                </span>
                <span className="mt-2 rounded-full bg-white/20 px-4 py-1.5 text-[11px] backdrop-blur sm:mt-3 sm:text-xs">
                  SEE MORE
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
