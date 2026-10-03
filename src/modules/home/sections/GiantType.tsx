import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GiantType() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('[data-parallax]', {
        xPercent: -14,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="overflow-hidden bg-[#f6f4ef] py-8">
      <div
        data-parallax
        className="whitespace-nowrap font-display leading-[0.85] text-[#1d0a5f] text-[26vw] sm:text-[23vw] md:text-[20vw]"
      >
        <span className="text-outline">FASHION STYLE</span> FASHION STYLE{' '}
        <span className="text-outline">FASHION STYLE</span>
      </div>
     
    </section>
  );
}
