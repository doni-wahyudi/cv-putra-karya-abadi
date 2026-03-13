import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import logo from '../assets/images/logo_cv_putra_karya_abadi.png';
import './Footer.css';

const WA_NUMBER = '6282112976961';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__brand-header">
              <img src={logo} alt="Logo" className="footer__logo" />
              <div>
                <h3 className="footer__brand-name">CV Putra Karya Abadi</h3>
                <p className="footer__brand-tagline">{t({ ID: 'Supplier Palet Kayu & Peti Kayu Berkualitas', EN: 'Quality Wooden Pallet & Crate Supplier' })}</p>
              </div>
            </div>
            <p className="footer__brand-desc">
              {t({ 
                ID: 'Menyediakan palet kayu dan peti kayu berkualitas untuk kebutuhan industri, gudang logistik, dan ekspor. Melayani custom ukuran dan pengiriman seluruh Indonesia.',
                EN: 'Providing quality wooden pallets and crates for industrial, logistics warehouse, and export needs. Serving custom sizes and shipping throughout Indonesia.'
              })}
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer__section">
            <h4 className="footer__section-title">Menu</h4>
            <ul className="footer__links">
              <li><Link to="/">{t({ ID: 'Beranda', EN: 'Home' })}</Link></li>
              <li><Link to="/produk">{t({ ID: 'Produk', EN: 'Products' })}</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">{t({ ID: 'Kontak', EN: 'Contact' })}</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="footer__section">
            <h4 className="footer__section-title">{t({ ID: 'Produk', EN: 'Products' })}</h4>
            <ul className="footer__links">
              <li><Link to="/produk">{t({ ID: 'Palet Kayu Standar', EN: 'Standard Wooden Pallet' })}</Link></li>
              <li><Link to="/produk">{t({ ID: 'Palet Kayu Heavy Duty', EN: 'Heavy Duty Wooden Pallet' })}</Link></li>
              <li><Link to="/produk">{t({ ID: 'Palet Kayu Custom', EN: 'Custom Wooden Pallet' })}</Link></li>
              <li><Link to="/produk">{t({ ID: 'Peti Kayu Export', EN: 'Export Wooden Crate' })}</Link></li>
              <li><Link to="/produk">{t({ ID: 'Peti Kayu Mesin', EN: 'Machine Wooden Crate' })}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__section">
            <h4 className="footer__section-title">{t({ ID: 'Hubungi Kami', EN: 'Contact Us' })}</h4>
            <ul className="footer__contact">
              <li>
                <FaWhatsapp />
                <a href={`https://wa.me/6282112976981`} target="_blank" rel="noopener noreferrer">
                  +62 821-1297-6981
                </a>
              </li>
              <li>
                <FaPhone />
                <span>(021) 8911 9704</span>
              </li>
              <li>
                <FaEnvelope />
                <a href="mailto:info@putrakaryapalet.com">info@putrakaryapalet.com</a>
              </li>
              <li>
                <FaMapMarkerAlt />
                <span>
                  {t({ ID: 'Kp. Sempu RT 03/03, Ds. Pasirgombong, Kec. Cikarang Utara, Kab. Bekasi 17530', EN: 'Kp. Sempu RT 03/03, Pasirgombong, North Cikarang, Bekasi 17530' })}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} CV Putra Karya Abadi. {t({ ID: 'Seluruh hak cipta dilindungi.', EN: 'All rights reserved.' })}</p>
        </div>
      </div>
    </footer>
  );
}
