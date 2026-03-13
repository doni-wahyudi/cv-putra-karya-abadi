import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX, HiGlobeAlt } from 'react-icons/hi';
import { FiDownload } from 'react-icons/fi';
import logo from '../assets/images/logo_cv_putra_karya_abadi.png';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { path: '/', label: lang === 'ID' ? 'Beranda' : 'Home' },
    { path: '/produk', label: lang === 'ID' ? 'Produk' : 'Products' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: lang === 'ID' ? 'Kontak' : 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleDownload = () => {
    window.open('./CV_Putra_Karya_Abadi.pdf', '_blank');
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__brand">
          <img src={logo} alt="CV Putra Karya Abadi" className="navbar__logo" />
          <div className="navbar__brand-text">
            <span className="navbar__brand-name">CV Putra Karya Abadi</span>
            <span className="navbar__brand-tagline">{lang === 'ID' ? 'Palet & Peti Kayu' : 'Pallet & Crate Solution'}</span>
          </div>
        </Link>

        <div className={`navbar__menu ${isOpen ? 'navbar__menu--open' : ''}`}>
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            <button
              className="navbar__lang-btn"
              onClick={toggleLang}
              title="Ganti Bahasa"
            >
              <HiGlobeAlt /> {lang}
            </button>
            <button onClick={handleDownload} className="btn btn-accent navbar__download">
              <FiDownload />
              {lang === 'ID' ? 'Profil Perusahaan' : 'Company Profile'}
            </button>
          </div>
        </div>

        <button
          className="navbar__toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {isOpen && <div className="navbar__overlay" onClick={() => setIsOpen(false)} />}
    </nav>
  );
}
