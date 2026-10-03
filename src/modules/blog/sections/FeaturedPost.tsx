import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { BlogPost } from '../data';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  post: BlogPost;
  onOpen: (slug: string) => void;
}

export default function FeaturedPost({ post, onOpen }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-featured]', {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 88%' },
      });
      gsap.fromTo(
        '[data-featured-img] img',
        { scale: 1.25 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '[data-featured-img]',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, [post.slug]);

  return (
    <section ref={ref} className="px-3 py-8 sm:py-10 md:px-6">
      <article
        data-featured
        onClick={() => onOpen(post.slug)}
        className="group grid cursor-pointer overflow-hidden bg-[#1d0a5f] text-white md:grid-cols-2"
      >
        <div data-featured-img className="relative overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="h-[62vw] w-full object-cover transition duration-700 group-hover:scale-105 xs:h-[54vw] sm:h-[40vh] md:h-[52vh]"
          />
          <span className="absolute left-4 top-4 rounded-full bg-[#3dff9e] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-black">
            Featured
          </span>
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#3dff9e]">
            {post.tag} — {post.date}
          </p>
          <h2 className="mt-3 font-display uppercase leading-[0.95] text-[9vw] xs:text-[8vw] sm:text-[5vw] md:text-[3vw]">
            {post.title}
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/70">{post.excerpt}</p>
          <p className="mt-6 flex items-center gap-3 text-sm font-bold">
            <span className="rounded-full bg-white px-6 py-2.5 text-black transition group-hover:bg-[#3dff9e]">
              Read story →
            </span>
            <span className="opacity-60">{post.readTime}</span>
          </p>
        </div>
      </article>
    </section>
  );
}
