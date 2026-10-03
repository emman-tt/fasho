import {
  SHOP_CATEGORIES,
  SHOP_COLORS,
  SORT_OPTIONS,
  type ShopCategory,
  type SortKey,
} from '../data';

interface Props {
  gender: ShopCategory;
  onGender: (c: ShopCategory) => void;
  counts: Record<ShopCategory, number>;
  maxPrice: number;
  priceCeil: number;
  onMaxPrice: (v: number) => void;
  sort: SortKey;
  onSort: (s: SortKey) => void;
  sizes: string[];
  onToggleSize: (s: string) => void;
  colors: string[];
  onToggleColor: (c: string) => void;
  inStock: boolean;
  onInStock: (v: boolean) => void;
  onClear: () => void;
}

const ALL_SIZES = ['XS', 'S', 'M', 'L', 'XL'];

export default function FilterSidebar({
  gender,
  onGender,
  counts,
  maxPrice,
  priceCeil,
  onMaxPrice,
  sort,
  onSort,
  sizes,
  onToggleSize,
  colors,
  onToggleColor,
  inStock,
  onInStock,
  onClear,
}: Props) {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl tracking-wide">FILTERS</h2>
        <button
          onClick={onClear}
          className="text-xs font-semibold uppercase tracking-widest opacity-50 hover:opacity-100"
        >
          Clear
        </button>
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] opacity-60">Gender</p>
        <ul className="mt-3 space-y-1">
          {SHOP_CATEGORIES.map((c) => {
            const selected = c.id === gender;
            return (
              <li key={c.id}>
                <button
                  onClick={() => onGender(c.id)}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold transition ${
                    selected ? 'bg-[#1d0a5f] text-white' : 'hover:bg-black/5'
                  }`}
                >
                  {c.label}
                  <span className={`text-xs ${selected ? 'text-white' : 'opacity-50'}`}>
                    {counts[c.id]}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] opacity-60">Max price</p>
        <p className="mt-3 font-display text-4xl">${maxPrice}</p>
        <input
          type="range"
          min={30}
          max={priceCeil}
          step={5}
          value={maxPrice}
          onChange={(e) => onMaxPrice(Number(e.target.value))}
          className="mt-3 w-full accent-[#1d0a5f]"
        />
        <div className="mt-1 flex justify-between text-xs opacity-50">
          <span>$30</span>
          <span>${priceCeil}</span>
        </div>
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] opacity-60">Size</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {ALL_SIZES.map((s) => {
            const selected = sizes.includes(s);
            return (
              <button
                key={s}
                onClick={() => onToggleSize(s)}
                className={`rounded-lg border px-3.5 py-2 text-sm font-bold transition ${
                  selected
                    ? 'border-[#1d0a5f] bg-[#1d0a5f] text-white'
                    : 'border-black/15 bg-white hover:border-black/40'
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] opacity-60">Colour</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {SHOP_COLORS.map((c) => {
            const selected = colors.includes(c.name);
            return (
              <button
                key={c.name}
                title={c.name}
                onClick={() => onToggleColor(c.name)}
                className={`flex h-9 w-9 items-center justify-center rounded-full border transition ${
                  selected ? 'border-[#1d0a5f] ring-2 ring-[#1d0a5f] ring-offset-2' : 'border-black/20 hover:border-black/50'
                }`}
                style={{ backgroundColor: c.hex }}
              >
                {selected && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 13l4 4L19 7"
                      stroke={c.name === 'White' ? '#111' : '#fff'}
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <label className="flex cursor-pointer items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-[0.18em] opacity-60">In stock only</span>
        <button
          role="switch"
          aria-checked={inStock}
          onClick={() => onInStock(!inStock)}
          className={`relative h-6 w-11 rounded-full transition ${inStock ? 'bg-[#1d0a5f]' : 'bg-black/20'}`}
        >
          <span
            className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${inStock ? 'left-[22px]' : 'left-0.5'}`}
          />
        </button>
      </label>

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] opacity-60">Sort by</p>
        <select
          value={sort}
          onChange={(e) => onSort(e.target.value as SortKey)}
          className="mt-3 w-full rounded-lg border border-black/15 bg-white px-3 py-2.5 text-sm font-semibold focus:outline-none"
        >
          {SORT_OPTIONS.map((o) => (
            <option key={o.id} value={o.id}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
