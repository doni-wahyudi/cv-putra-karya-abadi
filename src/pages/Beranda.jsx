import { useEffect, useRef } from 'react';
import {
  FaWhatsapp, FaShippingFast, FaTools, FaHandshake,
  FaIndustry, FaWarehouse, FaGlobeAsia, FaCheckCircle,
  FaFileDownload, FaArrowRight
} from 'react-icons/fa';
import {
  MdPrecisionManufacturing, MdSupportAgent
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import './Beranda.css';

const WA_NUMBER = '6282112976961';
const WA_MESSAGE = 'Halo CV Putra Karya Abadi, saya ingin konsultasi terkait pembuatan palet/peti kayu.';

const keunggulan = [
  {
    icon: <FaTools />,
    title: 'Custom Ukuran',
    desc: 'Produksi palet & peti sesuai ukuran, desain, dan spesifikasi kebutuhan bisnis Anda.'
  },
  {
    icon: <MdPrecisionManufacturing />,
    title: 'Material Berkualitas',
    desc: 'Menggunakan kayu pilihan terbaik yang kuat, tahan lama, dan sesuai standar industri.'
  },
  {
    icon: <FaShippingFast />,
    title: 'Pengiriman Cepat',
    desc: 'Tim produksi tanggap dan siap memenuhi pesanan tepat waktu ke seluruh Indonesia.'
  },
  {
    icon: <FaHandshake />,
    title: 'Harga Kompetitif',
    desc: 'Harga langsung dari pabrik tanpa perantara, hemat biaya untuk kebutuhan bisnis Anda.'
  },
  {
    icon: <FaIndustry />,
    title: 'Multi Industri',
    desc: 'Cocok untuk pabrik, gudang logistik, ekspor, farmasi, elektronik, dan berbagai sektor lainnya.'
  },
  {
    icon: <MdSupportAgent />,
    title: 'Layanan Konsultasi',
    desc: 'Tim kami siap membantu Anda memilih jenis palet & peti yang paling tepat dan efisien.'
  },
];

const clients = [
  'Pabrik Manufaktur',
  'Perusahaan Logistik',
  'Eksportir & Importir',
  'Industri Farmasi',
  'Industri Elektronik',
  'Industri Makanan & Minuman',
  'Perusahaan Pertambangan',
  'Gudang & Distribusi',
];

const steps = [
  { num: '01', title: 'Konsultasi', desc: 'Sampaikan kebutuhan palet/peti kayu Anda melalui WhatsApp kami.' },
  { num: '02', title: 'Penawaran', desc: 'Kami kirimkan estimasi biaya dan waktu pengerjaan yang transparan.' },
  { num: '03', title: 'Produksi', desc: 'Tim kami mulai produksi sesuai spesifikasi yang telah disepakati.' },
  { num: '04', title: 'Pengiriman', desc: 'Palet/peti siap dikirimkan ke alamat Anda dengan aman.' },
];

export default function Beranda() {
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/CV_Putra_Karya_Abadi.pdf';
    link.download = 'Company_Profile_CV_Putra_Karya_Abadi.pdf';
    link.click();
  };

  return (
    <main className="beranda">
      {/* Hero */}
      <section className="hero" id="hero">
        <div className="hero__bg-pattern" />
        <div className="container hero__inner">
          <div className="hero__content">
            <span className="hero__badge animate-fade-in-up">
              Supplier Terpercaya di Indonesia
            </span>
            <h1 className="hero__title animate-fade-in-up delay-1">
              Solusi <span className="hero__highlight">Palet Kayu</span> & <span className="hero__highlight">Peti Kayu</span> Berkualitas
            </h1>
            <p className="hero__subtitle animate-fade-in-up delay-2">
              CV Putra Karya Abadi menyediakan palet kayu dan peti kayu untuk kebutuhan 
              pabrik, gudang logistik, dan ekspor. Bisa custom ukuran, harga langsung pabrik.
            </p>
            <div className="hero__actions animate-fade-in-up delay-3">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <FaWhatsapp size={20} />
                Konsultasi Gratis
              </a>
              <button onClick={handleDownload} className="btn btn-outline btn-lg">
                <FaFileDownload size={18} />
                Company Profile
              </button>
            </div>
          </div>

          <div className="hero__visual animate-fade-in-up delay-4">
            <div className="hero__card">
              <div className="hero__card-icon"><FaWarehouse /></div>
              <span>Gudang & Logistik</span>
            </div>
            <div className="hero__card">
              <div className="hero__card-icon"><FaGlobeAsia /></div>
              <span>Ekspor Internasional</span>
            </div>
            <div className="hero__card">
              <div className="hero__card-icon"><FaIndustry /></div>
              <span>Pabrik & Industri</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang Kami */}
      <section className="about section" id="tentang">
        <div className="container">
          <div className="about__grid reveal">
            <div className="about__content">
              <span className="section-label">Tentang Kami</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Berpengalaman & Profesional dalam Pembuatan Palet & Peti Kayu
              </h2>
              <p className="about__text">
                CV Putra Karya Abadi berkomitmen menjadi solusi utama untuk kebutuhan 
                palet kayu dan peti kayu berkualitas di Indonesia. Kami memahami pentingnya 
                daya angkut, efisiensi ruang, hingga keamanan pengiriman.
              </p>
              <p className="about__text">
                Kami tidak hanya menjual — kami bantu Anda memilih jenis palet dan peti 
                yang paling tepat dan efisien untuk kebutuhan bisnis Anda.
              </p>
              <div className="about__stats">
                <div className="about__stat">
                  <span className="about__stat-number">500+</span>
                  <span className="about__stat-label">Proyek Selesai</span>
                </div>
                <div className="about__stat">
                  <span className="about__stat-number">100+</span>
                  <span className="about__stat-label">Klien Puas</span>
                </div>
                <div className="about__stat">
                  <span className="about__stat-number">24/7</span>
                  <span className="about__stat-label">Layanan Support</span>
                </div>
              </div>
            </div>
            <div className="about__industries">
              <h3 className="about__industries-title">Industri yang Kami Layani</h3>
              <div className="about__industry-list">
                <div className="about__industry-item">
                  <FaIndustry />
                  <span>Pabrik & Manufaktur</span>
                </div>
                <div className="about__industry-item">
                  <FaWarehouse />
                  <span>Gudang & Logistik</span>
                </div>
                <div className="about__industry-item">
                  <FaGlobeAsia />
                  <span>Ekspor & Impor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="advantages section" id="keunggulan">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Keunggulan Kami</span>
            <h2 className="section-title">Mengapa Memilih CV Putra Karya Abadi?</h2>
            <p className="section-subtitle">
              Kami siap produksi palet dan peti sesuai kebutuhan bisnis Anda dengan kualitas terbaik.
            </p>
          </div>
          <div className="advantages__grid">
            {keunggulan.map((item, i) => (
              <div key={i} className="advantage-card reveal" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="advantage-card__icon">{item.icon}</div>
                <h3 className="advantage-card__title">{item.title}</h3>
                <p className="advantage-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portofolio Client */}
      <section className="clients section" id="portofolio">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Portofolio Klien</span>
            <h2 className="section-title">Dipercaya oleh Berbagai Industri</h2>
            <p className="section-subtitle">
              Kami telah melayani ratusan klien dari berbagai sektor industri di Indonesia.
            </p>
          </div>
          <div className="clients__grid reveal">
            {clients.map((client, i) => (
              <div key={i} className="client-card">
                <FaCheckCircle className="client-card__icon" />
                <span className="client-card__name">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proses Pemesanan */}
      <section className="process section" id="proses">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Cara Order</span>
            <h2 className="section-title">Proses Pemesanan yang Mudah</h2>
            <p className="section-subtitle">
              Hanya 4 langkah mudah untuk mendapatkan palet & peti kayu berkualitas.
            </p>
          </div>
          <div className="process__grid reveal">
            {steps.map((step, i) => (
              <div key={i} className="process-step">
                <div className="process-step__num">{step.num}</div>
                <h3 className="process-step__title">{step.title}</h3>
                <p className="process-step__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card reveal">
            <h2 className="cta-card__title">Siap Bermitra dengan Kami?</h2>
            <p className="cta-card__desc">
              Hubungi tim CV Putra Karya Abadi sekarang & dapatkan penawaran terbaik untuk kebutuhan palet dan peti kayu Anda.
            </p>
            <div className="cta-card__actions">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo, saya ingin minta penawaran harga palet/peti kayu.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <FaWhatsapp size={20} />
                Minta Penawaran
              </a>
              <Link to="/produk" className="btn btn-outline btn-lg">
                Lihat Produk <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
