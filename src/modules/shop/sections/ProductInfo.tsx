import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { SHOP_COLORS, type ShopProduct } from '../data';

interface Props {
  product: ShopProduct;
}

const BLURBS: Record<ShopProduct['category'], string> = {
  men: 'Cut for everyday rotation — structured where it counts, easy everywhere else. Heavyweight feel, clean finish, made to be worn on repeat.',
  women: 'Draped to move with you — soft hand-feel, flattering lines and a finish that dresses up or down without trying.',
  children: 'Built for playground duty — soft, sturdy and machine-washable, with room to grow and colours that survive the wash.',
};

export default function ProductInfo({ product }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(product.sizes.includes('M') ? 'M' : product.sizes[0]);
  const [color, setColor] = useState(product.colors[0]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setSize(product.sizes.includes('M') ? 'M' : product.sizes[0]);
    setColor(product.colors[0]);
    setQty(1);
    setAdded(false);
  }, [product]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-info-fade]', { y: 24, opacity: 0, duration: 0.7, stagger: 0.07, ease: 'power3.out' });
    }, ref);
    return () => ctx.revert();
  }, [product.id]);

  const swatch = (name: string) => SHOP_COLORS.find((c) => c.name === name)?.hex ?? '#ccc';

  return (
    <div ref={ref}>
      <nav data-info-fade className="text-xs font-bold uppercase tracking-[0.2em]">
        <Link to="/" className="opacity-50 hover:opacity-100">Home</Link>
        <span className="mx-2 opacity-30">/</span>
        <Link to="/shop" className="opacity-50 hover:opacity-100">Shop</Link>
        <span className="mx-2 opacity-30">/</span>
        <span className="opacity-100">{product.name}</span>
      </nav>

      <h1 data-info-fade className="mt-3 break-words font-display text-[9vw] leading-[0.95] xs:text-[10vw] sm:text-[7vw] md:text-[3.8vw] md:leading-[0.9]">
        {product.name.toUpperCase()}
      </h1>

      <div data-info-fade className="mt-3 flex items-center gap-3">
        <p className="font-display text-3xl md:text-4xl">{product.price}</p>
        <p className="text-sm text-orange-500">★★★★★ <span className="font-bold text-black">5.0</span></p>
      </div>

      <p data-info-fade className="mt-4 max-w-xl text-[15px] leading-[1.8] opacity-70">
        {BLURBS[product.category]}
      </p>

      <div data-info-fade className="mt-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] opacity-60">Size — {size}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {product.sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`rounded-lg border px-4 py-2 text-sm font-bold transition ${
                size === s ? 'border-[#1d0a5f] bg-[#1d0a5f] text-white' : 'border-black/15 bg-white hover:border-black/40'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div data-info-fade className="mt-5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] opacity-60">Colour — {color}</p>
        <div className="mt-2 flex gap-2">
          {product.colors.map((c) => (
            <button
              key={c}
              title={c}
              onClick={() => setColor(c)}
              className={`h-9 w-9 rounded-full border transition ${
                color === c ? 'border-[#1d0a5f] ring-2 ring-[#1d0a5f] ring-offset-2' : 'border-black/20 hover:border-black/50'
              }`}
              style={{ backgroundColor: swatch(c) }}
            />
          ))}
        </div>
      </div>

      <div data-info-fade className="mt-6 flex flex-wrap items-center gap-3">
        <div className="flex items-center rounded-full border border-black/15">
          <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-4 py-3 text-lg font-bold">−</button>
          <span className="w-8 text-center font-bold">{qty}</span>
          <button onClick={() => setQty((q) => Math.min(product.stock, q + 1))} className="px-4 py-3 text-lg font-bold">+</button>
        </div>
        <button
          onClick={() => {
            setAdded(true);
            setTimeout(() => setAdded(false), 1800);
          }}
          className={`rounded-full px-8 py-3.5 text-sm font-bold transition ${added ? 'bg-[#3dff9e] text-black' : 'bg-[#1d0a5f] text-white hover:opacity-90'}`}
        >
          {added ? 'Added ✓' : 'Add to cart'}
        </button>
        <button className="rounded-full border border-black px-8 py-3.5 text-sm font-bold hover:bg-black hover:text-white">
          Buy now
        </button>
      </div>

      <div data-info-fade className="mt-6 space-y-1 text-sm">
        <p className="opacity-60">Stock: <span className="font-bold text-black">{product.stock}</span></p>
        <p className="opacity-60">Sold: <span className="font-bold text-black">{product.sold}</span></p>
        <p className="opacity-60">Views: <span className="font-bold text-black">{product.views.toLocaleString()}</span></p>
        <p className="opacity-60">Category: <span className="font-bold capitalize text-black">{product.category}</span></p>
      </div>

      <div data-info-fade className="mt-6 grid grid-cols-1 gap-2 text-center text-[11px] font-bold uppercase tracking-widest xs:grid-cols-3">
        {['Free shipping', 'Secure payment', 'Free returns'].map((t) => (
          <div key={t} className="border border-black/10 bg-white px-2 py-3">{t}</div>
        ))}
      </div>
    </div>
  );
}
