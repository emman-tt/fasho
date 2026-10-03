import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Newsletter() {
  const ref = useRef<HTMLElement>(null);
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-news]', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 88%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="px-3 pb-16 sm:pb-20 md:px-6">
      <div
        data-news
        className="bg-[#ff4d00] p-6 text-white sm:p-10 md:flex md:items-center md:justify-between md:gap-10 md:p-12"
      >
        <div className="md:max-w-lg">
          <h2 className="font-display uppercase leading-[0.95] text-[10vw] xs:text-[9vw] sm:text-[5vw] md:text-[3vw]">
            Never miss a story
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-white/80">
            One style note per week. No spam, unsubscribe anytime.
          </p>
        </div>
        {done ? (
          <p className="mt-6 rounded-full bg-white px-6 py-4 text-sm font-bold text-black md:mt-0">
            You are in ✓ — check your inbox.
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email.trim()) setDone(true);
            }}
            className="mt-6 flex w-full flex-col gap-2 xs:flex-row md:mt-0 md:max-w-md"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="w-full flex-1 rounded-full bg-white px-5 py-3.5 text-sm text-black placeholder:text-black/40 focus:outline-none"
            />
            <button
              type="submit"
              className="whitespace-nowrap rounded-full bg-black px-7 py-3.5 text-sm font-bold text-white transition hover:opacity-85"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
