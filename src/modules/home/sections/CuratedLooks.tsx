import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IMAGES } from '../../../data';

gsap.registerPlugin(ScrollTrigger);

export default function CuratedLooks() {
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
    <section ref={ref} id="curated" className="bg-[#f6f4ef] py-16 md:py-24">
      <div className="grid gap-10 px-3 md:grid-cols-2 md:px-6">
        <div data-reveal>
          <h2 className="font-display leading-[0.95] text-[11vw] xs:text-[13vw] sm:text-[9vw] md:text-[6.5vw] md:leading-[0.9]">
            CURATED LOOKS
            <br />
            FOR SEASONS
          </h2>
          <p className="mt-5 max-w-md text-base opacity-60 md:text-lg">
            Handpicked fashion pieces tailored to match the mood, colors, and trends of every
            season
          </p>
          <div data-zoom className="relative mt-10 overflow-hidden ">
            <img
              src={IMAGES.seasonPortrait}
              alt="season"
              className="h-[70vw] w-full object-cover xs:h-[62vw] sm:h-[44vh] md:h-[32vh]"
            />
            <div className="absolute left-4 top-4">
              <span className="inline-block whitespace-nowrap rounded-full border border-white bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur sm:px-6 sm:py-2 sm:text-sm">
                Fashionista
              </span>
            </div>
          </div>
        </div>
        <div data-reveal>
          <div data-zoom className="overflow-hidden ">
            <img
              src={IMAGES.seasonLarge}
              alt="curated"
              className="h-[62vw] w-full object-cover xs:h-[56vw] sm:h-[40vh] md:h-[38vh]"
            />
          </div>
          <div className="mt-5 grid grid-cols-1 gap-4 xs:grid-cols-2 xs:gap-5">
            <div className="relative overflow-hidden rounded-3xl gradient-to-br from-blue-200 to-orange-100 p-3 text-center">
              <img
                src={IMAGES.fabric}
                alt="fabrics"
                className="mx-auto h-[22vw] w-[50%] object-cover md:h-[18vh]"
              />
              <p className="mx-auto ml-[-8%] mt-4 w-[116%] text-base font-black leading-tight md:text-lg">FABRICS THAT FEEL LIKE AIR</p>
              <p className="mx-auto ml-[-8%] w-[116%] text-sm opacity-60 md:text-base">Available Now</p>
            </div>
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={IMAGES.hairFlow}
                alt="flow"
                className="h-[52vw] w-full object-cover md:h-[40vh]"
              />
              <div className="absolute left-4 top-4">
                <span className="inline-block whitespace-nowrap rounded-full border border-white bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur sm:px-6 sm:py-2 sm:text-sm">
                  Fashionista
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
