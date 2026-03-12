import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import logo from '../assets/images/logo_cv_putra_karya_abadi.png';
import './Footer.css';

const WA_NUMBER = '6282112976961';

export default function Footer() {
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
                <p className="footer__brand-tagline">Supplier Palet Kayu & Peti Kayu Berkualitas</p>
              </div>
            </div>
            <p className="footer__brand-desc">
              Menyediakan palet kayu dan peti kayu berkualitas untuk kebutuhan industri, 
              gudang logistik, dan ekspor. Melayani custom ukuran dan pengiriman seluruh Indonesia.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer__section">
            <h4 className="footer__section-title">Menu</h4>
            <ul className="footer__links">
              <li><Link to="/">Beranda</Link></li>
              <li><Link to="/produk">Produk</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Kontak</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="footer__section">
            <h4 className="footer__section-title">Produk</h4>
            <ul className="footer__links">
              <li><Link to="/produk">Palet Kayu Standar</Link></li>
              <li><Link to="/produk">Palet Kayu Heavy Duty</Link></li>
              <li><Link to="/produk">Palet Kayu Custom</Link></li>
              <li><Link to="/produk">Peti Kayu Export</Link></li>
              <li><Link to="/produk">Peti Kayu Mesin</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__section">
            <h4 className="footer__section-title">Hubungi Kami</h4>
            <ul className="footer__contact">
              <li>
                <FaWhatsapp />
                <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer">
                  0821-1297-6961
                </a>
              </li>
              <li>
                <FaEnvelope />
                <a href="mailto:info@putrakarya.com">info@putrakarya.com</a>
              </li>
              <li>
                <FaMapMarkerAlt />
                <span>Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} CV Putra Karya Abadi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
