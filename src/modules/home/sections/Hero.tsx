import { useEffect, useRef } from 'react';
import gsap from 'gsap';
// import { IMAGES } from '../../../data';
// import { Pill } from '../../../shared/components/ui';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: 'power4.out' } })
        .from('[data-hero-line]', { yPercent: 115, duration: 1.2, stagger: 0.12 })
        // images commented out for text-fix phase
        // .from(
        //   '[data-hero-img]',
        //   {
        //     scale: 0.5,
        //     opacity: 0,
        //     rotation: -14,
        //     duration: 1.1,
        //     stagger: 0.1,
        //     ease: 'back.out(1.5)',
        //   },
        //   '-=0.7',
        // )
        .from('[data-hero-fade]', { y: 24, opacity: 0, duration: 0.7, stagger: 0.08 }, '-=0.6');

      const isMobile = window.matchMedia('(max-width: 767px)').matches;
      gsap.utils.toArray<HTMLElement>('[data-bar]').forEach((el, i) => {
        gsap.to(el, {
          height: () => gsap.utils.random(isMobile ? 10 : 24, isMobile ? 36 : 104),
          duration: () => gsap.utils.random(0.7, 1.6),
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          repeatRefresh: true,
          delay: i * 0.12,
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#1d0a5f] pt-28 text-white md:pt-32">
      <div className="relative px-3 md:px-6">
        <div
          data-hero-fade
          className="flex justify-between px-1 text-[11px] uppercase tracking-[0.2em] opacity-70 md:text-xs"
        >
          <span>Make your appearance cooler</span>
          <span>Fashion style</span>
        </div>

        <div className="relative mt-2 font-display uppercase leading-[0.88] tracking-[-0.02em]">
          <div className="overflow-hidden pb-[0.06em] leading-[0.88]">
            <h1
              data-hero-line
              className="block whitespace-nowrap text-[13.5vw] leading-[0.88] text-white md:text-[18.5vw]"
            >
              Fashion
            </h1>
          </div>
          <div className="relative mt-[0.08em] overflow-hidden pb-[0.06em] leading-[0.88]">
            <h1
              data-hero-line
              className="flex w-full items-baseline justify-center gap-[2vw] whitespace-nowrap text-[15.5vw] leading-[0.88] sm:gap-[4vw] md:text-[18.5vw]"
            >
              <span className="block leading-[0.88] text-[#3dff9e]">Outfit</span>
              {/* <div
                data-hero-img
                className="relative hidden w-[18vw] shrink-0 rotate-3 overflow-hidden rounded-2xl md:block"
              >
                <img src={IMAGES.heroSide} alt="outfit" className="h-[20vw] w-full object-cover" />
                <div className="absolute left-3 top-3">
                  <Pill>Product</Pill>
                </div>
              </div> */}
              <span className="block leading-[0.88] text-[#3dff9e]">Style</span>
            </h1>
            <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
              <div className="absolute inset-x-0 bg-[#1d0a5f]" style={{ top: '60%', height: '6%' }} />
              <div className="absolute inset-x-0 bg-[#1d0a5f]" style={{ top: '69%', height: '3%' }} />
              <div className="absolute inset-x-0 bg-[#1d0a5f]" style={{ top: '76%', height: '7%' }} />
              <div className="absolute inset-x-0 bg-[#1d0a5f]" style={{ top: '84%', height: '4%' }} />
              <div className="absolute inset-x-0 bg-[#1d0a5f]" style={{ top: '90%', height: '6%' }} />
              <div className="absolute inset-x-0 bg-[#1d0a5f]" style={{ top: '97%', height: '3%' }} />
            </div>
          </div>
        </div>

        <div className="mt-[0.1em] flex flex-col-reverse gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="w-full shrink-0 sm:w-[58vw] sm:pt-[2.5em] md:w-[40vw]">
            <div className="grid grid-cols-1 gap-3 xs:grid-cols-2 sm:gap-4 md:gap-6">
              <p data-hero-fade className="text-[12px] font-medium leading-[1.9] tracking-wide opacity-80 [word-spacing:0.32em] xs:text-[13px] md:text-[15px]">
                YOUR ULTIMATE GUIDE TO FINDING FASHION STYLES THAT MATCH YOUR CONFIDENCE AND
                CREATIVITY
              </p>
              <p data-hero-fade className="text-[12px] font-medium leading-[1.9] tracking-wide opacity-80 [word-spacing:0.32em] xs:text-[13px] md:text-[15px]">
                UNCOVER THE FASHION STYLE THAT MATCHES YOUR LIFESTYLE AND UNIQUE IDENTITY
              </p>
            </div>
          </div>
          <div className="overflow-hidden pb-[0.06em] font-display uppercase leading-[0.88] tracking-[-0.02em]">
            <h1
              data-hero-line
              className="block whitespace-nowrap text-left text-[13.5vw] leading-[0.88] text-white sm:text-right md:text-[18.5vw]"
            >
              Choice
            </h1>
          </div>
        </div>
      </div>
      <div className="flex h-10 items-end gap-1 px-3 sm:h-14 md:h-28 md:gap-1.5 md:px-6">
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={i}
            data-bar
            className="flex-1 rounded-t-md bg-[#2b7fff] md:rounded-t-lg"
            style={{ height: `${14 + (i % 5) * 6}px` }}
          />
        ))}
      </div>
    </section>
  );
}
