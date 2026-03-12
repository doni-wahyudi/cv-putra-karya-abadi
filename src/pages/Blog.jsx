import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { useLanguage } from '../context/LanguageContext';
import './Blog.css';

export default function Blog() {
  const { t } = useLanguage();
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

  const getVal = (obj) => {
    if (obj && typeof obj === 'object' && (obj.ID || obj.EN)) {
      return t(obj);
    }
    return obj;
  };

  return (
    <main className="blog-page">
      <header className="blog-hero">
        <div className="container">
          <span className="section-label animate-fade-in-up">{t({ ID: 'Artikel & Berita', EN: 'Articles & News' })}</span>
          <h1 className="blog-hero__title animate-fade-in-up delay-1">
            {t({ ID: 'Wawasan Industri Palet & Peti Kayu', EN: 'Insights on Pallet & Crate Industry' })}
          </h1>
          <p className="blog-hero__subtitle animate-fade-in-up delay-2">
            {t({ 
              ID: 'Pelajari lebih lanjut tentang standar pengiriman internasional, pemilihan material kayu, dan tren logistik global.',
              EN: 'Learn more about international shipping standards, wooden material selection, and global logistics trends.'
            })}
          </p>
        </div>
      </header>

      <section className="blog-list section">
        <div className="container">
          <div className="blog-grid">
            {articles.map((article, i) => (
              <article key={article.id} className="article-card reveal" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="article-card__category">{getVal(article.category)}</div>
                <div className="article-card__content">
                  <div className="article-card__meta">
                    <span>{article.date}</span> — <span>{article.author}</span>
                  </div>
                  <h2 className="article-card__title">
                    <Link to={`/artikel/${article.id}`}>{getVal(article.title)}</Link>
                  </h2>
                  <p className="article-card__excerpt">{getVal(article.excerpt)}</p>
                  <Link to={`/artikel/${article.id}`} className="article-card__link">
                    {t({ ID: 'Baca Selengkapnya', EN: 'Read More' })} <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
