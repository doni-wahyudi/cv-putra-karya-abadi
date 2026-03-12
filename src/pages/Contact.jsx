import { useState, useEffect, useRef } from 'react';
import { FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import './Contact.css';

const WA_NUMBER = '6282112976961';

export default function Contact() {
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
    const message = `Halo CV Putra Karya Abadi,\n\nNama: ${form.nama}\nPerusahaan: ${form.perusahaan}\nKebutuhan: ${form.kebutuhan}\nJumlah: ${form.jumlah}\n\nPesan:\n${form.pesan}`;
    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <main className="contact-page">
      {/* Header */}
      <section className="contact-hero">
        <div className="container">
          <span className="section-label animate-fade-in-up">Kontak</span>
          <h1 className="contact-hero__title animate-fade-in-up delay-1">
            Hubungi Kami
          </h1>
          <p className="contact-hero__subtitle animate-fade-in-up delay-2">
            Siap melayani konsultasi dan penawaran untuk kebutuhan palet & peti kayu Anda.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <div className="contact-form-wrapper reveal">
              <h2 className="contact-form__title">Form Permintaan Penawaran</h2>
              <p className="contact-form__desc">
                Isi form di bawah ini dan pesan akan dikirimkan melalui WhatsApp.
              </p>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nama">Nama Lengkap</label>
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    value={form.nama}
                    onChange={handleChange}
                    placeholder="Masukkan nama Anda"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="perusahaan">Nama Perusahaan</label>
                  <input
                    type="text"
                    id="perusahaan"
                    name="perusahaan"
                    value={form.perusahaan}
                    onChange={handleChange}
                    placeholder="Nama perusahaan (opsional)"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="kebutuhan">Jenis Produk</label>
                    <select
                      id="kebutuhan"
                      name="kebutuhan"
                      value={form.kebutuhan}
                      onChange={handleChange}
                    >
                      <option>Palet Kayu Standar</option>
                      <option>Palet Kayu Heavy Duty</option>
                      <option>Palet Kayu Custom</option>
                      <option>Peti Kayu Export</option>
                      <option>Peti Kayu Mesin</option>
                      <option>Peti Kayu Custom</option>
                      <option>Lainnya</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="jumlah">Jumlah (perkiraan)</label>
                    <input
                      type="text"
                      id="jumlah"
                      name="jumlah"
                      value={form.jumlah}
                      onChange={handleChange}
                      placeholder="Contoh: 50 pcs"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="pesan">Pesan / Detail Kebutuhan</label>
                  <textarea
                    id="pesan"
                    name="pesan"
                    value={form.pesan}
                    onChange={handleChange}
                    placeholder="Jelaskan kebutuhan Anda (ukuran, material, deadline, dll.)"
                    rows="4"
                  />
                </div>
                <button type="submit" className="btn btn-whatsapp btn-lg contact-form__submit">
                  <FaWhatsapp size={20} />
                  Kirim via WhatsApp
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="contact-info reveal">
              <div className="contact-info-card">
                <h3 className="contact-info__title">Informasi Kontak</h3>
                <div className="contact-info__items">
                  <div className="contact-info__item">
                    <div className="contact-info__icon">
                      <FaWhatsapp />
                    </div>
                    <div>
                      <span className="contact-info__label">WhatsApp</span>
                      <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer">
                        0821-1297-6961
                      </a>
                    </div>
                  </div>
                  <div className="contact-info__item">
                    <div className="contact-info__icon">
                      <FaPhone />
                    </div>
                    <div>
                      <span className="contact-info__label">Telepon</span>
                      <a href="tel:082112976961">0821-1297-6961</a>
                    </div>
                  </div>
                  <div className="contact-info__item">
                    <div className="contact-info__icon">
                      <FaEnvelope />
                    </div>
                    <div>
                      <span className="contact-info__label">Email</span>
                      <a href="mailto:info@putrakarya.com">info@putrakarya.com</a>
                    </div>
                  </div>
                  <div className="contact-info__item">
                    <div className="contact-info__icon">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <span className="contact-info__label">Alamat</span>
                      <span>Indonesia</span>
                    </div>
                  </div>
                  <div className="contact-info__item">
                    <div className="contact-info__icon">
                      <FaClock />
                    </div>
                    <div>
                      <span className="contact-info__label">Jam Operasional</span>
                      <span>Senin - Sabtu, 08:00 - 17:00 WIB</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
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
