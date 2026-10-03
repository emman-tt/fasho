import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IMAGES } from '../../../data';
import { InlineImg } from '../../../shared/components/ui';

gsap.registerPlugin(ScrollTrigger);

export default function CreateOutfit() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-line]', {
        yPercent: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-[#1d0a5f] py-16 text-white md:py-24">
      <div className="break-words px-3 font-display leading-[1.05] text-[11vw] xs:text-[12vw] sm:text-[10vw] sm:leading-[0.95] md:px-6 md:text-[9vw] md:leading-[0.9]">
        <div data-line>
          WE <InlineImg src={IMAGES.inline1} /> <span className="text-[#3dff9e]">CREATE OUTFIT</span>
        </div>
        <div data-line>
          → STYLES THAT <InlineImg src={IMAGES.inline2} />
        </div>
        <div data-line>
          <span className="text-lines text-[#3dff9e]">CURATED</span> →{' '}
          <span className="text-[#3dff9e]">OCCASION</span>
        </div>
        <div data-line>
          <InlineImg src={IMAGES.inline3} /> GLOBAL FASHION <InlineImg src={IMAGES.thumb1} />
        </div>
      </div>
    </section>
  );
}
