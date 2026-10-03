import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface Props {
  image: string;
  name: string;
}

export default function ProductGallery({ image, name }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const views = [
    image,
    `${image}&crop=top`,
    `${image}&crop=bottom`,
    `${image}&crop=entropy`,
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-gallery-main]', { opacity: 0, scale: 0.97, duration: 0.7, ease: 'power3.out' });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref}>
      <div data-gallery-main className="overflow-hidden border border-black/10 bg-white">
        <img
          key={active}
          src={views[active]}
          alt={name}
          className="h-[70vw] w-full object-cover sm:h-[52vh] md:h-[62vh]"
        />
      </div>
      <div className="mt-3 grid grid-cols-4 gap-3">
        {views.map((v, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`overflow-hidden border bg-white transition ${
              active === i ? 'border-[#1d0a5f] ring-2 ring-[#1d0a5f]' : 'border-black/10 hover:border-black/40'
            }`}
          >
            <img src={v} alt="" className="h-20 w-full object-cover md:h-24" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}
