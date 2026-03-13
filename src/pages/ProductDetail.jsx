import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const { t } = useLanguage();
  const product = products.find(p => p.id === id);
  const [formData, setFormData] = useState({
    qty: '',
    dim: '',
    note: ''
  });

  const getVal = (obj) => {
    if (obj && typeof obj === 'object' && (obj.ID || obj.EN)) {
      return t(obj);
    }
    return obj;
  };

  if (!product) {
    return (
      <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
        <h2>{t({ ID: 'Produk tidak ditemukan', EN: 'Product not found' })}</h2>
        <Link to="/produk" className="btn btn-primary">{t({ ID: 'Kembali ke Katalog', EN: 'Back to Catalog' })}</Link>
      </div>
    );
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateWAMessage = () => {
    const text = `${t({ ID: 'Halo CV Putra Karya Abadi, saya tertarik dengan produk', EN: 'Hello CV Putra Karya Abadi, I am interested in' })} ${getVal(product.name)}.

${t({ ID: 'Detail Pesanan:', EN: 'Order Details:' })}
- ${t({ ID: 'Jumlah:', EN: 'Quantity:' })} ${formData.qty || '-'}
- ${t({ ID: 'Dimensi/Spek Khusus:', EN: 'Dimensions/Special Spec:' })} ${formData.dim || '-'}
- ${t({ ID: 'Catatan:', EN: 'Notes:' })} ${formData.note || '-'}

${t({ ID: 'Mohon informasi harga dan estimasi waktunya. Terima kasih.', EN: 'Please provide price information and time estimation. Thank you.' })}`;
    return `https://wa.me/6282112976981?text=${encodeURIComponent(text)}`;
  };

  return (
    <main className="product-detail">
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/">{t({ ID: 'Beranda', EN: 'Home' })}</Link> / <Link to="/produk">{t({ ID: 'Produk', EN: 'Products' })}</Link> / <span>{getVal(product.name)}</span>
        </nav>

        <div className="product-detail__grid">
          <div className="product-detail__visual">
            <div className="product-detail__img-container glass">
              <img src={product.image} alt={getVal(product.name)} className="product-detail__img" />
            </div>
          </div>

          <div className="product-detail__content">
            <span className="product-detail__tag">{getVal(product.tag)}</span>
            <h1 className="product-detail__title">{getVal(product.name)}</h1>
            <p className="product-detail__desc">{getVal(product.detailedDesc) || getVal(product.desc)}</p>

            <div className="product-detail__features">
              {product.features.map((f, i) => (
                <div key={i} className="feature-item">
                  <FaCheckCircle /> <span>{getVal(f)}</span>
                </div>
              ))}
            </div>

            <div className="product-detail__specs-card">
              <h3>{t({ ID: 'Spesifikasi Teknis', EN: 'Technical Specifications' })}</h3>
              <div className="specs-grid">
                {product.specs.map((s, i) => (
                  <div key={i} className="spec-row">
                    <span className="spec-label">{getVal(s.label)}</span>
                    <span className="spec-value">{getVal(s.value)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="product-detail__quote-form glass">
              <h3>{t({ ID: 'Minta Penawaran Harga', EN: 'Request a Price Quote' })}</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>{t({ ID: 'Jumlah Pesanan', EN: 'Order Quantity' })}</label>
                  <input 
                    type="text" 
                    name="qty" 
                    placeholder={t({ ID: 'Contoh: 100 pcs', EN: 'Example: 100 pcs' })} 
                    value={formData.qty}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>{t({ ID: 'Dimensi (Opsional)', EN: 'Dimensions (Optional)' })}</label>
                  <input 
                    type="text" 
                    name="dim" 
                    placeholder={t({ ID: 'Contoh: 110 x 110 cm', EN: 'Example: 110 x 110 cm' })} 
                    value={formData.dim}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group full">
                  <label>{t({ ID: 'Catatan Tambahan', EN: 'Additional Notes' })}</label>
                  <textarea 
                    name="note" 
                    placeholder={t({ ID: 'Kebutuhan khusus atau pertanyaan...', EN: 'Special needs or questions...' })}
                    value={formData.note}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>
              <a 
                href={generateWAMessage()} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp btn-lg full-width"
              >
                <FaWhatsapp /> {t({ ID: 'Kirim ke WhatsApp', EN: 'Send to WhatsApp' })}
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
