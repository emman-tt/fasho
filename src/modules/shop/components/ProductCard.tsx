import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { ShopProduct } from '../data';
import ProductShimmer from './ProductShimmer';

interface Props {
  product: ShopProduct;
}

export default function ProductCard({ product }: Props) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <Link
      to={`/shop/${product.id}`}
      className="group block cursor-pointer overflow-hidden border border-black/10 bg-white"
    >
      <div className="relative bg-[#f1ede3]">
        {(!loaded || failed) && (
          <ProductShimmer className="absolute inset-0 h-full w-full">
            {failed && (
              <span className="absolute inset-0 flex items-center justify-center font-display text-5xl text-black/20">
                {product.name.charAt(0)}
              </span>
            )}
          </ProductShimmer>
        )}
        {!failed && (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
            className={`h-48 w-full object-cover transition duration-700 group-hover:scale-105 xs:h-56 sm:h-60 md:h-64 ${loaded ? '' : 'opacity-0'}`}
          />
        )}
        <span className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow transition duration-300 group-hover:bg-[#3dff9e]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M7 17L17 7M17 7H8M17 7v9"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="truncate text-sm font-semibold sm:text-[15px]">{product.name}</h3>
        <p className="mt-1 text-[13px] opacity-60 sm:text-sm">{product.price}</p>
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-black/10 pt-3 text-xs sm:gap-4 sm:text-[13px]">
          <p className="opacity-60">
            Stock: <span className="font-bold text-black">{product.stock}</span>
          </p>
          <p className="opacity-60">
            Sold: <span className="font-bold text-black">{product.sold}</span>
          </p>
          <p className="opacity-60">
            Views: <span className="font-bold text-black">{product.views.toLocaleString()}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
