import { Link } from 'react-router-dom';

export type GridCols = 3 | 4;

interface Props {
  query: string;
  onQuery: (v: string) => void;
  cols: GridCols;
  onCols: (c: GridCols) => void;
}

const Dots = ({ n }: { n: number }) => (
  <span className="grid gap-[3px]" style={{ gridTemplateColumns: `repeat(${n}, 1fr)` }}>
    {Array.from({ length: n * n }).map((_, i) => (
      <span key={i} className="h-[5px] w-[5px] rounded-[1px] bg-current" />
    ))}
  </span>
);

export default function ShopToolbar({ query, onQuery, cols, onCols }: Props) {
  return (
    <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <nav className="text-xs font-bold uppercase tracking-[0.2em]">
        <Link to="/" className="opacity-50 hover:opacity-100">
          Home
        </Link>
        <span className="mx-2 opacity-30">/</span>
        <span>Shop</span>
      </nav>
      <div className="flex flex-col gap-2 xs:flex-row xs:items-center sm:flex-row sm:items-center sm:gap-2">
        <div className="flex w-fit shrink-0 overflow-hidden rounded-full border border-black/15">
          {([3, 4] as GridCols[]).map((c) => (
            <button
              key={c}
              onClick={() => onCols(c)}
              title={`${c} columns`}
              className={`p-2.5 transition ${cols === c ? 'bg-[#1d0a5f] text-white' : 'bg-white text-black/50 hover:text-black'}`}
            >
              <Dots n={c} />
            </button>
          ))}
        </div>
        <label className="flex w-full flex-1 items-center gap-2 rounded-full border border-black/15 bg-white px-4 py-2.5 xs:max-w-xs md:w-64">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0 opacity-50">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth={2} />
            <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
          </svg>
          <input
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            placeholder="Search product..."
            className="w-full bg-transparent text-sm focus:outline-none"
          />
        </label>
      </div>
    </div>
  );
}
