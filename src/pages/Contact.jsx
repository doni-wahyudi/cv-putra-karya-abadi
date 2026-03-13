import { useState, useEffect, useRef } from 'react';
import { FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

const WA_NUMBER = '6282112976981';

export default function Contact() {
  const { t } = useLanguage();
  const observerRef = useRef(null);
  const [form, setForm] = useState({
    nama: '',
    perusahaan: '',
    kebutuhan: 'Palet Kayu Standar',
    jumlah: '',
    pesan: '',
  });

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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `${t({ ID: 'Halo CV Putra Karya Abadi', EN: 'Hello CV Putra Karya Abadi' })},\n\n${t({ ID: 'Nama', EN: 'Name' })}: ${form.nama}\n${t({ ID: 'Perusahaan', EN: 'Company' })}: ${form.perusahaan}\n${t({ ID: 'Kebutuhan', EN: 'Needs' })}: ${form.kebutuhan}\n${t({ ID: 'Jumlah', EN: 'Quantity' })}: ${form.jumlah}\n\n${t({ ID: 'Pesan', EN: 'Message' })}:\n${form.pesan}`;
    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <span className="section-label animate-fade-in-up">{t({ ID: 'Kontak', EN: 'Contact' })}</span>
          <h1 className="contact-hero__title animate-fade-in-up delay-1">
            {t({ ID: 'Hubungi Kami', EN: 'Reach Out to Us' })}
          </h1>
          <p className="contact-hero__subtitle animate-fade-in-up delay-2">
            {t({ 
              ID: 'Siap melayani konsultasi dan penawaran untuk kebutuhan palet & peti kayu Anda.',
              EN: 'Ready to serve consultation and quotation for your wooden pallet & crate needs.'
            })}
          </p>
        </div>
      </section>

      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-wrapper reveal">
              <h2 className="contact-form__title">{t({ ID: 'Form Permintaan Penawaran', EN: 'Request a Quote Form' })}</h2>
              <p className="contact-form__desc">
                {t({ ID: 'Isi form di bawah ini dan pesan akan dikirimkan melalui WhatsApp.', EN: 'Fill out the form below and the message will be sent via WhatsApp.' })}
              </p>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nama">{t({ ID: 'Nama Lengkap', EN: 'Full Name' })}</label>
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    value={form.nama}
                    onChange={handleChange}
                    placeholder={t({ ID: 'Masukkan nama Anda', EN: 'Enter your name' })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="perusahaan">{t({ ID: 'Nama Perusahaan', EN: 'Company Name' })}</label>
                  <input
                    type="text"
                    id="perusahaan"
                    name="perusahaan"
                    value={form.perusahaan}
                    onChange={handleChange}
                    placeholder={t({ ID: 'Nama perusahaan (opsional)', EN: 'Company name (optional)' })}
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="kebutuhan">{t({ ID: 'Jenis Produk', EN: 'Product Type' })}</label>
                    <select
                      id="kebutuhan"
                      name="kebutuhan"
                      value={form.kebutuhan}
                      onChange={handleChange}
                    >
                      <option>{t({ ID: 'Palet Kayu Standar', EN: 'Standard Wooden Pallet' })}</option>
                      <option>{t({ ID: 'Palet Kayu Heavy Duty', EN: 'Heavy Duty Wooden Pallet' })}</option>
                      <option>{t({ ID: 'Palet Kayu Custom', EN: 'Custom Wooden Pallet' })}</option>
                      <option>{t({ ID: 'Peti Kayu Export', EN: 'Export Wooden Crate' })}</option>
                      <option>{t({ ID: 'Peti Kayu Mesin', EN: 'Machine Wooden Crate' })}</option>
                      <option>{t({ ID: 'Peti Kayu Custom', EN: 'Custom Wooden Crate' })}</option>
                      <option>{t({ ID: 'Lainnya', EN: 'Others' })}</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="jumlah">{t({ ID: 'Jumlah (perkiraan)', EN: 'Quantity (est.)' })}</label>
                    <input
                      type="text"
                      id="jumlah"
                      name="jumlah"
                      value={form.jumlah}
                      onChange={handleChange}
                      placeholder={t({ ID: 'Contoh: 50 pcs', EN: 'Example: 50 pcs' })}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="pesan">{t({ ID: 'Pesan / Detail Kebutuhan', EN: 'Message / Detail Needs' })}</label>
                  <textarea
                    id="pesan"
                    name="pesan"
                    value={form.pesan}
                    onChange={handleChange}
                    placeholder={t({ ID: 'Jelaskan kebutuhan Anda (ukuran, material, deadline, dll.)', EN: 'Explain your needs (size, material, deadline, etc.)' })}
                    rows="4"
                  />
                </div>
                <button type="submit" className="btn btn-whatsapp btn-lg contact-form__submit">
                  <FaWhatsapp size={20} />
                  {t({ ID: 'Kirim via WhatsApp', EN: 'Send via WhatsApp' })}
                </button>
              </form>
            </div>

            <div className="contact-info reveal">
              <div className="contact-info-card">
                <h3 className="contact-info__title">{t({ ID: 'Informasi Kontak', EN: 'Contact Information' })}</h3>
                <div className="contact-info__items">
                  <div className="contact-info__item">
                    <div className="contact-info__icon"><FaWhatsapp /></div>
                    <div>
                      <span className="contact-info__label">WhatsApp</span>
                      <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer">0821-1297-6961</a>
                    </div>
                  </div>
                  <div className="contact-info__item">
                    <div className="contact-info__icon"><FaPhone /></div>
                    <div>
                      <span className="contact-info__label">{t({ ID: 'Telepon', EN: 'Phone' })}</span>
                      <a href="tel:082112976961">0821-1297-6961</a>
                    </div>
                  </div>
                  <div className="contact-info__item">
                    <div className="contact-info__icon"><FaEnvelope /></div>
                    <div>
                      <span className="contact-info__label">Email</span>
                      <a href="mailto:info@putrakarya.com">info@putrakarya.com</a>
                    </div>
                  </div>
                  <div className="contact-info__item">
                    <div className="contact-info__icon"><FaMapMarkerAlt /></div>
                    <div>
                      <span className="contact-info__label">{t({ ID: 'Alamat', EN: 'Address' })}</span>
                      <span>Indonesia</span>
                    </div>
                  </div>
                  <div className="contact-info__item">
                    <div className="contact-info__icon"><FaClock /></div>
                    <div>
                      <span className="contact-info__label">{t({ ID: 'Jam Operasional', EN: 'Business Hours' })}</span>
                      <span>{t({ ID: 'Senin - Sabtu, 08:00 - 17:00 WIB', EN: 'Monday - Saturday, 08:00 - 17:00 WIB' })}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-map">
                <iframe
                  title="Lokasi CV Putra Karya Abadi"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.2!2d106.8!3d-6.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjQnMDAuMCJTIDEwNsKwNDgnMDAuMCJF!5e0!3m2!1sid!2sid!4v1"
                  width="100%"
                  height="220"
                  style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
