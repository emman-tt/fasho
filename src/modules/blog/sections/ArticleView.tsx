import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import type { BlogPost } from '../data';

interface Props {
  post: BlogPost;
  related: BlogPost[];
  onBack: () => void;
  onOpen: (slug: string) => void;
}

export default function ArticleView({ post, related, onBack, onOpen }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.from('[data-article-fade]', {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, [post.slug]);

  return (
    <article ref={ref} className="px-3 pb-16 pt-28 sm:pt-32 md:px-6 md:pt-36">
      <button
        data-article-fade
        onClick={onBack}
        className="rounded-full border border-black/15 bg-white px-5 py-2.5 text-sm font-bold transition hover:border-black/40"
      >
        ← All stories
      </button>

      <p
        data-article-fade
        className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-orange-500"
      >
        {post.tag} — {post.date} · {post.readTime}
      </p>
      <h1
        data-article-fade
        className="mt-3 max-w-4xl font-display uppercase leading-[0.95] text-[11vw] xs:text-[10vw] sm:text-[7vw] md:text-[4.5vw]"
      >
        {post.title}
      </h1>
      <p data-article-fade className="mt-4 max-w-2xl text-base leading-relaxed opacity-70 sm:text-lg">
        {post.excerpt}
      </p>

      <div data-article-fade className="mt-8 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="max-h-[70vh] w-full object-cover sm:h-[52vh] md:h-[60vh]"
        />
      </div>

      <div className="mt-8 grid gap-10 md:grid-cols-[1fr_220px] lg:grid-cols-[1fr_280px]">
        <div className="max-w-2xl">
          {post.content.map((para, i) => (
            <div key={i} data-article-fade>
              <p className="text-[15px] leading-[1.9] opacity-80 sm:text-base">{para}</p>
              {post.quote && i === 0 && (
                <blockquote className="my-8 border-l-4 border-[#3dff9e] bg-white p-6 font-display text-2xl uppercase leading-tight sm:text-3xl">
                  “{post.quote}”
                </blockquote>
              )}
              {i < post.content.length - 1 && <br />}
            </div>
          ))}
          <div data-article-fade className="mt-10 flex flex-wrap gap-3 border-t border-black/10 pt-6">
            <span className="rounded-full bg-[#1d0a5f] px-5 py-2.5 text-sm font-bold text-white">
              {post.tag}
            </span>
            <button
              onClick={onBack}
              className="rounded-full border border-black/15 px-5 py-2.5 text-sm font-bold transition hover:bg-black hover:text-white"
            >
              ← Back to journal
            </button>
          </div>
        </div>

        <aside data-article-fade className="h-fit md:sticky md:top-24">
          <p className="text-xs font-bold uppercase tracking-[0.18em] opacity-60">Keep reading</p>
          <div className="mt-4 space-y-4">
            {related.map((r) => (
              <button
                key={r.slug}
                onClick={() => onOpen(r.slug)}
                className="group flex w-full items-center gap-3 text-left"
              >
                <img
                  src={r.image}
                  alt=""
                  className="h-16 w-16 shrink-0 object-cover"
                  loading="lazy"
                />
                <span>
                  <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-orange-500">
                    {r.tag}
                  </span>
                  <span className="block text-sm font-bold leading-snug group-hover:underline">
                    {r.title}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </aside>
      </div>
    </article>
  );
}
