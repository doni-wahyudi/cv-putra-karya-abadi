import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiDownload } from 'react-icons/fi';
import logo from '../assets/images/logo_cv_putra_karya_abadi.png';
import './Navbar.css';

const navLinks = [
  { path: '/', label: 'Beranda' },
  { path: '/produk', label: 'Produk' },
  { path: '/faq', label: 'FAQ' },
  { path: '/contact', label: 'Kontak' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/CV_Putra_Karya_Abadi.pdf';
    link.download = 'Company_Profile_CV_Putra_Karya_Abadi.pdf';
    link.click();
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__brand">
          <img src={logo} alt="CV Putra Karya Abadi" className="navbar__logo" />
          <div className="navbar__brand-text">
            <span className="navbar__brand-name">CV Putra Karya Abadi</span>
            <span className="navbar__brand-tagline">Palet & Peti Kayu</span>
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
          <button onClick={handleDownload} className="btn btn-accent navbar__download">
            <FiDownload />
            Company Profile
          </button>
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
