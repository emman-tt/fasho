import { useMemo, useState } from 'react';
import ShopToolbar, { type GridCols } from '../sections/ShopToolbar';
import FilterSidebar from '../sections/FilterSidebar';
import ProductGrid from '../sections/ProductGrid';
import { SHOP_PRODUCTS, type ShopCategory, type SortKey } from '../data';

const PRICE_CEIL = 160;

const priceOf = (p: { price: string }) => Number(p.price.replace(/[^0-9.]/g, ''));

const toggle = (list: string[], v: string) =>
  list.includes(v) ? list.filter((x) => x !== v) : [...list, v];

export default function ShopPage() {
  const [tab, setTab] = useState<ShopCategory>('all');
  const [query, setQuery] = useState('');
  const [maxPrice, setMaxPrice] = useState(PRICE_CEIL);
  const [sort, setSort] = useState<SortKey>('featured');
  const [sizes, setSizes] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [inStock, setInStock] = useState(false);
  const [cols, setCols] = useState<GridCols>(4);
  const [open, setOpen] = useState(false);

  const counts = useMemo(() => {
    const c: Record<ShopCategory, number> = {
      all: SHOP_PRODUCTS.length,
      men: 0,
      women: 0,
      children: 0,
    };
    for (const p of SHOP_PRODUCTS) c[p.category] += 1;
    return c;
  }, []);

  const products = useMemo(() => {
    const q = query.trim().toLowerCase();
    const out = SHOP_PRODUCTS.filter((p) => {
      const inTab = tab === 'all' || p.category === tab;
      const inPrice = priceOf(p) <= maxPrice;
      const inSize = sizes.length === 0 || sizes.some((s) => p.sizes.includes(s));
      const inColor = colors.length === 0 || colors.some((c) => p.colors.includes(c));
      const inStockOk = !inStock || p.stock > 0;
      const inQuery = !q || p.name.toLowerCase().includes(q);
      return inTab && inPrice && inSize && inColor && inStockOk && inQuery;
    });
    switch (sort) {
      case 'price-asc':
        return [...out].sort((a, b) => priceOf(a) - priceOf(b));
      case 'price-desc':
        return [...out].sort((a, b) => priceOf(b) - priceOf(a));
      case 'sold':
        return [...out].sort((a, b) => b.sold - a.sold);
      default:
        return out;
    }
  }, [tab, query, maxPrice, sort, sizes, colors, inStock]);

  const clear = () => {
    setTab('all');
    setQuery('');
    setMaxPrice(PRICE_CEIL);
    setSort('featured');
    setSizes([]);
    setColors([]);
    setInStock(false);
  };

  const sidebar = (
    <FilterSidebar
      gender={tab}
      onGender={setTab}
      counts={counts}
      maxPrice={maxPrice}
      priceCeil={PRICE_CEIL}
      onMaxPrice={setMaxPrice}
      sort={sort}
      onSort={setSort}
      sizes={sizes}
      onToggleSize={(s) => setSizes((v) => toggle(v, s))}
      colors={colors}
      onToggleColor={(c) => setColors((v) => toggle(v, c))}
      inStock={inStock}
      onInStock={setInStock}
      onClear={clear}
    />
  );

  return (
    <main className="bg-[#f6f4ef]">
      <div className="px-3 py-6 pt-28 md:px-6 md:pt-32">
        <button
          onClick={() => setOpen((v) => !v)}
          className="mb-4 rounded-full border border-black/15 bg-white px-5 py-2.5 text-sm font-semibold lg:hidden"
        >
          {open ? 'Hide filters' : 'Show filters'}
        </button>
        {open && <div className="mb-6 border-y border-black/10 py-6 lg:hidden">{sidebar}</div>}
        <div className="flex items-start gap-8">
          <aside className="sticky top-24 hidden w-64 shrink-0 lg:block">{sidebar}</aside>
          <div className="min-w-0 flex-1">
            <ShopToolbar query={query} onQuery={setQuery} cols={cols} onCols={setCols} />
            <ProductGrid products={products} cols={cols} />
          </div>
        </div>
      </div>
    </main>
  );
}
