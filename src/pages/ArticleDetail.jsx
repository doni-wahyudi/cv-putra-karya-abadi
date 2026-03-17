import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { useLanguage } from '../context/LanguageContext';
import './ArticleDetail.css';

export default function ArticleDetail() {
  const { id } = useParams();
  const { t } = useLanguage();
  const article = articles.find(a => a.id === id);
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
  }, [id]); // Re-run when id changes

  const getVal = (obj) => {
    if (obj && typeof obj === 'object' && (obj.ID || obj.EN)) {
      return t(obj);
    }
    return obj;
  };

  if (!article) {
    return (
      <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
        <h2>{t({ ID: 'Artikel tidak ditemukan', EN: 'Article not found' })}</h2>
        <Link to="/artikel" className="btn btn-primary">{t({ ID: 'Kembali ke Blog', EN: 'Back to Blog' })}</Link>
      </div>
    );
  }

  return (
    <article className="article-detail">
      <header className="article-detail__hero">
        <div className="container">
          <Link to="/artikel" className="article-detail__back">← {t({ ID: 'Kembali ke Blog', EN: 'Back to Blog' })}</Link>
          <div className="article-detail__meta">
            <span>{getVal(article.category)}</span> — <span>{article.date}</span>
          </div>
          <h1 className="article-detail__title">{getVal(article.title)}</h1>
          <div className="article-detail__author">
            {t({ ID: 'Oleh:', EN: 'By:' })} <strong>{article.author}</strong>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="article-detail__content-wrapper reveal">
          <div 
            className="article-detail__body" 
            dangerouslySetInnerHTML={{ __html: getVal(article.content) }} 
          />
          
          <aside className="article-detail__sidebar">
            <div className="sidebar-card">
              <h3>{t({ ID: 'Butuh Konsultasi?', EN: 'Need Consultation?' })}</h3>
              <p>{t({ 
                ID: 'Tim ahli kami siap membantu Anda memilih solusi pallet dan peti kayu terbaik untuk bisnis Anda.',
                EN: 'Our expert team is ready to help you choose the best wooden pallet and crate solutions for your business.'
              })}</p>
              <a 
                href="https://wa.me/6282112976981" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp"
              >
                {t({ ID: 'Hubungi via WhatsApp', EN: 'Contact via WhatsApp' })}
              </a>
            </div>
            
            <div className="sidebar-card">
              <h3>{t({ ID: 'Artikel Terbaru', EN: 'Latest Articles' })}</h3>
              <ul className="sidebar-links">
                {articles.filter(a => a.id !== id).slice(0, 3).map(a => (
                  <li key={a.id}>
                    <Link to={`/artikel/${a.id}`}>{getVal(a.title)}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
