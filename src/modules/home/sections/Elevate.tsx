import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IMAGES } from '../../../data';
import { Link } from 'react-router-dom';
import { Arrow } from '../../../shared/components/ui';

gsap.registerPlugin(ScrollTrigger);

const CARDS = [IMAGES.elevate1, IMAGES.elevate2, IMAGES.elevate3, IMAGES.elevate4];
const LABELS = ['EXPRESS YOUR STYLE', 'DEFINE YOUR LOOK', 'MODERN FASHION', 'MODERN FASHION'];

export default function Elevate() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          y: 70,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-white py-16 md:py-24">
      <div className="px-3 md:px-6">
        <h2
          data-reveal
          className="w-full font-display leading-[1.35] tracking-wide text-[9vw] [word-spacing:0.22em] md:text-[4.2vw]"
        >
          ELEVATE YOUR WARDROBE WITH A FASHION{' '}
          <span className="opacity-40">
            STYLE THAT SPEAKS TO WHO YOU ARE— EFFORTLESSLY STYLISH, STYLE MODERN
          </span>
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 md:grid-cols-4">
          {CARDS.map((src, i) => (
            <Link
              key={i}
              to="/shop"
              data-reveal
              className="group relative cursor-pointer overflow-hidden rounded-xl sm:rounded-none"
            >
              <span className="absolute left-2 top-2 z-10 inline-block max-w-[calc(100%-1rem)] truncate rounded-full border border-white bg-white/10 px-3 py-1 text-[10px] font-semibold text-white backdrop-blur xs:left-3 xs:top-3 sm:left-4 sm:top-4 sm:px-6 sm:py-2 sm:text-sm">
                {LABELS[i]}
              </span>
              <img
                src={src}
                alt=""
                className="h-[68vw] w-full object-cover transition duration-700 group-hover:scale-110 xs:h-[62vw] sm:h-[42vw] md:h-[58vh]"
              />
              <span className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white sm:h-16 sm:w-16">
                  <Arrow />
                </span>
                <span className="mt-2 px-4 py-1.5 text-[10px] text-white sm:mt-3 sm:text-[11px]">
                  SEE MORE
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
