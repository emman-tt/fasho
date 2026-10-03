import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { BlogPost } from '../data';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  posts: BlogPost[];
  onOpen: (slug: string) => void;
}

export default function BlogList({ posts, onOpen }: Props) {
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
  }, [posts.length]);

  if (posts.length === 0) {
    return (
      <section className="px-3 py-10 md:px-6">
        <p className="pb-10 text-sm opacity-60">No stories in this lane yet — try another tag.</p>
      </section>
    );
  }

  return (
    <section ref={ref} className="px-3 py-6 sm:py-8 md:px-6">
      <div className="grid grid-cols-1 gap-4 xs:gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <article
            key={p.slug}
            data-reveal
            onClick={() => onOpen(p.slug)}
            className="group cursor-pointer overflow-hidden border border-black/10 bg-white shadow-sm transition hover:shadow-md"
          >
            <div className="relative overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="h-[56vw] w-full object-cover transition duration-700 group-hover:scale-105 xs:h-[50vw] sm:h-[30vh] md:h-[32vh]"
              />
              <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-black/30 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur">
                {p.tag}
              </span>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-xs opacity-50">
                {p.date} · {p.readTime}
              </p>
              <h3 className="mt-2 font-display text-[6.5vw] uppercase leading-[1.02] xs:text-2xl sm:text-2xl">
                {p.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed opacity-60">{p.excerpt}</p>
              <p className="mt-3 text-sm font-bold transition group-hover:translate-x-1">
                Read story →
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
