import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ScrollToTop from './components/ScrollToTop';
import Beranda from './pages/Beranda';
import Produk from './pages/Produk';
import ProductDetail from './pages/ProductDetail';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import ArticleDetail from './pages/ArticleDetail';

import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/produk" element={<Produk />} />
          <Route path="/produk/:id" element={<ProductDetail />} />
          <Route path="/artikel" element={<Blog />} />
          <Route path="/artikel/:id" element={<ArticleDetail />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <WhatsAppFloat />
      </HashRouter>
    </LanguageProvider>
  );
}

export default App;
