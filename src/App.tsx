import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './shared/components/Navbar';
import Footer from './shared/components/Footer';
import HomePage from './modules/home/pages/HomePage';
import ShopPage from './modules/shop/pages/ShopPage';
import ProductPage from './modules/shop/pages/ProductPage';
import BlogPage from './modules/blog/pages/BlogPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#f6f4ef]">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:id" element={<ProductPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
