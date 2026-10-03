import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { BLOG_TAGS, type BlogTag } from '../data';

interface Props {
  activeTag: BlogTag;
  onTag: (t: BlogTag) => void;
  counts: Record<BlogTag, number>;
}

export default function BlogHero({ activeTag, onTag, counts }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-blog-hero]', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="px-3 pt-28 sm:pt-32 md:px-6 md:pt-36">
      <p data-blog-hero className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">
        Fasho — Journal
      </p>
      <h1
        data-blog-hero
        className="mt-2 font-display uppercase leading-[0.9] text-[14vw] xs:text-[13vw] sm:text-[10vw] md:text-[7vw]"
      >
        Stories <span className="text-outline">&</span> style notes
      </h1>
      <p data-blog-hero className="mt-4 max-w-xl text-[15px] leading-relaxed opacity-60 sm:text-base">
        Practical guides, fabric explainers, and culture pieces from the Fasho studio — written to
        make getting dressed easier.
      </p>
      <div
        data-blog-hero
        className="no-scrollbar -mx-3 mt-6 flex gap-2 overflow-x-auto px-3 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {BLOG_TAGS.map((t) => {
          const selected = t === activeTag;
          return (
            <button
              key={t}
              onClick={() => onTag(t)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-bold transition sm:px-5 sm:py-2.5 sm:text-sm ${
                selected
                  ? 'bg-[#1d0a5f] text-white'
                  : 'border border-black/15 bg-white hover:border-black/40'
              }`}
            >
              {t}
              <span className={`ml-2 text-xs ${selected ? 'text-white/70' : 'opacity-50'}`}>
                {counts[t]}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
