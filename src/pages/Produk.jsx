import { useEffect, useRef } from 'react';
import { FaWhatsapp, FaCheckCircle, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import './Produk.css';

const WA_NUMBER = '6282112976961';

export default function Produk() {
  const { t, lang } = useLanguage();
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  // Use a helper to get translated value or the value itself if it's not a translation object
  const getVal = (obj) => {
    if (obj && typeof obj === 'object' && (obj.ID || obj.EN)) {
      return t(obj);
    }
    return obj;
  };

  const categories = Array.from(new Set(products.map(p => getVal(p.category))));

  return (
    <main className="produk-page">
      <header className="produk-hero">
        <div className="container">
          <span className="section-label animate-fade-in-up">{t({ ID: 'Katalog Produk', EN: 'Product Catalog' })}</span>
          <h1 className="produk-hero__title animate-fade-in-up delay-1">
            {t({ ID: 'Solusi Pengemasan Kayu Terpercaya', EN: 'Trusted Wood Packaging Solutions' })}
          </h1>
          <p className="produk-hero__subtitle animate-fade-in-up delay-2">
            {t({ 
              ID: 'Produk palet dan peti kayu berkualitas tinggi yang dirancang untuk keamanan logistik domestik maupun ekspor.',
              EN: 'High-quality wooden pallet and crate products designed for domestic and export logistics security.'
            })}
          </p>
        </div>
      </header>

      {categories.map((cat, ci) => (
        <section key={ci} className="produk-category section">
          <div className="container">
            <h2 className="produk-category__title reveal">{cat}</h2>
            <div className="produk-grid">
              {products.filter(p => getVal(p.category) === cat).map((item, i) => (
                <div key={item.id} className="product-card reveal">
                  <div className="product-card__image-box">
                    {item.image && <img src={item.image} alt={getVal(item.name)} className="product-card__img" />}
                    <span className="product-card__tag">{getVal(item.tag)}</span>
                  </div>
                  <div className="product-card__header">
                    <h3 className="product-card__name">{getVal(item.name)}</h3>
                    <p className="product-card__desc">{getVal(item.desc)}</p>
                  </div>
                  <div className="product-card__specs">
                    {item.specs.slice(0, 3).map((spec, si) => (
                      <div key={si} className="product-card__spec">
                        <FaCheckCircle />
                        <span>{getVal(spec.label)}: {getVal(spec.value)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="product-card__actions">
                    <Link to={`/produk/${item.id}`} className="btn btn-outline product-card__btn">
                      <FaInfoCircle size={16} /> {t({ ID: 'Detail', EN: 'Details' })}
                    </Link>
                    <a
                      href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(t({ ID: `Halo, saya ingin bertanya tentang ${getVal(item.name)}.`, EN: `Hello, I would like to ask about ${getVal(item.name)}.` }))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp product-card__btn"
                    >
                      <FaWhatsapp size={16} /> WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="produk-cta section">
        <div className="container">
          <div className="produk-cta__card reveal">
            <h2>{t({ ID: 'Butuh Ukuran Khusus?', EN: 'Need Custom Sizes?' })}</h2>
            <p>{t({ ID: 'Kami melayani pembuatan palet dan peti kayu custom sesuai kebutuhan spesifik Anda. Konsultasi gratis!', EN: 'We serve custom wooden pallet and crate manufacturing according to your specific needs. Free consultation!' })}</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              {t({ ID: 'Konsultasikan Sekarang', EN: 'Consult Now' })}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
