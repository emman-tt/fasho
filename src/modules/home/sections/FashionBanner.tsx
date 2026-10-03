import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FashionBanner() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-banner-title]', {
        yPercent: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 85%' },
      });
      gsap.fromTo(
        '[data-banner-img] img',
        { scale: 1.3 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '[data-banner-img]',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="overflow-hidden bg-[#ff4d00] px-2">
      <h2
        data-banner-title
        className="text-center font-display leading-[0.85] text-[#ffc400] text-[16.5vw] tracking-tight xs:text-[17vw] sm:text-[19vw] md:text-[24vw]"
      >
        FASHION
      </h2>
  
    </section>
  );
}
