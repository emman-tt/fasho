import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductGallery from '../sections/ProductGallery';
import ProductInfo from '../sections/ProductInfo';
import ProductTabs from '../sections/ProductTabs';
import RelatedProducts from '../sections/RelatedProducts';
import { SHOP_PRODUCTS } from '../data';

export default function ProductPage() {
  const { id } = useParams();
  const product = SHOP_PRODUCTS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <main className="px-3 pb-24 pt-32 md:px-6">
        <p className="font-display text-4xl">NOT FOUND</p>
        <Link to="/shop" className="mt-4 inline-block rounded-full bg-[#1d0a5f] px-6 py-3 text-sm font-bold text-white">
          Back to shop
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-[#f6f4ef] px-3 pb-20 pt-28 md:px-6 md:pt-32">
      <div className="grid gap-10 lg:grid-cols-2">
        <ProductGallery image={product.image} name={product.name} />
        <ProductInfo product={product} />
      </div>
      <ProductTabs product={product} />
      <RelatedProducts product={product} />
    </main>
  );
}
