import { useState, useEffect, useRef } from 'react';
import {
  FaWhatsapp, FaShippingFast, FaTools, FaHandshake,
  FaIndustry, FaWarehouse, FaGlobeAsia, FaCheckCircle,
  FaFileDownload, FaArrowRight, FaQuoteLeft, FaStar,
  FaChevronLeft, FaChevronRight
} from 'react-icons/fa';
import {
  MdPrecisionManufacturing, MdSupportAgent
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import heroImg from '../assets/images/hero_factory.png';
import { useLanguage } from '../context/LanguageContext';
import './Beranda.css';

const WA_NUMBER = '6282112976961';

export default function Beranda() {
  const { lang, t } = useLanguage();
  const observerRef = useRef(null);

  const keunggulan = [
    {
      icon: <FaTools />,
      title: t({ ID: 'Custom Ukuran', EN: 'Custom Size' }),
      desc: t({ 
        ID: 'Produksi palet & peti sesuai ukuran, desain, dan spesifikasi kebutuhan bisnis Anda.',
        EN: 'Pallet & crate production according to your business size, design, and specifications.'
      })
    },
    {
      icon: <MdPrecisionManufacturing />,
      title: t({ ID: 'Material Berkualitas', EN: 'Quality Material' }),
      desc: t({
        ID: 'Menggunakan kayu pilihan terbaik yang kuat, tahan lama, dan sesuai standar industri.',
        EN: 'Using the best selected wood that is strong, durable, and meets industrial standards.'
      })
    },
    {
      icon: <FaShippingFast />,
      title: t({ ID: 'Pengiriman Cepat', EN: 'Fast Delivery' }),
      desc: t({
        ID: 'Tim produksi tanggap dan siap memenuhi pesanan tepat waktu ke seluruh Indonesia.',
        EN: 'Responsive production team ready to meet orders on time throughout Indonesia.'
      })
    },
    {
      icon: <FaHandshake />,
      title: t({ ID: 'Harga Kompetitif', EN: 'Competitive Price' }),
      desc: t({
        ID: 'Harga langsung dari pabrik tanpa perantara, hemat biaya untuk kebutuhan bisnis Anda.',
        EN: 'Factory-direct pricing without intermediaries, cost-saving for your business needs.'
      })
    },
    {
      icon: <FaIndustry />,
      title: t({ ID: 'Multi Industri', EN: 'Multi Industry' }),
      desc: t({
        ID: 'Cocok untuk pabrik, gudang logistik, ekspor, farmasi, elektronik, dan berbagai sektor lainnya.',
        EN: 'Suitable for factories, logistics warehouses, exports, pharmaceuticals, electronics, and others.'
      })
    },
    {
      icon: <MdSupportAgent />,
      title: t({ ID: 'Layanan Konsultasi', EN: 'Consultation Service' }),
      desc: t({
        ID: 'Tim kami siap membantu Anda memilih jenis palet & peti yang paling tepat dan efisien.',
        EN: 'Our team is ready to help you choose the most appropriate and efficient pallet & crate types.'
      })
    },
  ];

  const clients = [
    t({ ID: 'Pabrik Manufaktur', EN: 'Manufacturing Factories' }),
    t({ ID: 'Perusahaan Logistik', EN: 'Logistics Companies' }),
    t({ ID: 'Eksportir & Importir', EN: 'Exporters & Importers' }),
    t({ ID: 'Industri Farmasi', EN: 'Pharmaceutical Industry' }),
    t({ ID: 'Industri Elektronik', EN: 'Electronics Industry' }),
    t({ ID: 'Industri Makanan & Minuman', EN: 'Food & Beverage Industry' }),
    t({ ID: 'Perusahaan Pertambangan', EN: 'Mining Companies' }),
    t({ ID: 'Gudang & Distribusi', EN: 'Warehouse & Distribution' }),
  ];

  const steps = [
    { num: '01', title: t({ ID: 'Konsultasi', EN: 'Consultation' }), desc: t({ ID: 'Sampaikan kebutuhan palet/peti kayu Anda melalui WhatsApp kami.', EN: 'Communicate your pallet/crate needs via our WhatsApp.' }) },
    { num: '02', title: t({ ID: 'Penawaran', EN: 'Quotation' }), desc: t({ ID: 'Kami kirimkan estimasi biaya dan waktu pengerjaan yang transparan.', EN: 'We send transparent cost estimates and production timelines.' }) },
    { num: '03', title: t({ ID: 'Produksi', EN: 'Production' }), desc: t({ ID: 'Tim kami mulai produksi sesuai spesifikasi yang telah disepakati.', EN: 'Our team starts production based on the agreed specifications.' }) },
    { num: '04', title: t({ ID: 'Pengiriman', EN: 'Delivery' }), desc: t({ ID: 'Palet/peti siap dikirimkan ke alamat Anda dengan aman.', EN: 'Pallets/crates are ready to be safely delivered to your address.' }) },
  ];

  const testimonials = [
    {
      name: 'Bpk. Ahmad Fauzi',
      role: 'Logistics Manager',
      company: 'PT. Global Logistik Trans',
      content: t({
        ID: 'Pelayanan sangat cepat dan kualitas palet kayu sangat kokoh. Sangat membantu operasional gudang kami yang memiliki mobilitas tinggi.',
        EN: 'Service is very fast and the quality of the wooden pallets is very sturdy. It really helps our warehouse operations which have high mobility.'
      }),
      rating: 5
    },
    {
      name: 'Ibu Siska Amelia',
      role: 'Procurement Specialist',
      company: 'IndoManufacture Group',
      content: t({
        ID: 'Kami sudah berlangganan peti kayu custom di sini selama 2 tahun. Presisinya luar biasa dan harga sangat kompetitif dibanding supplier lain.',
        EN: 'We have been subscribing to custom wooden crates here for 2 years. The precision is extraordinary and the price is very competitive compared to other suppliers.'
      }),
      rating: 5
    },
    {
      name: 'Bpk. Heru Prasetyo',
      role: 'Operations Director',
      company: 'Sentosa Ekspor Pratama',
      content: t({
        ID: 'Sangat puas dengan standar ISPM-15 yang disediakan. Barang ekspor kami selalu aman dan tidak pernah ada kendala saat masuk ke pelabuhan internasional.',
        EN: 'Very satisfied with the provided ISPM-15 standards. Our export goods are always safe and there have never been any obstacles when entering international ports.'
      }),
      rating: 5
    },
    {
      name: 'Bpk. David Wijaya',
      role: 'Supply Chain Manager',
      company: 'TechChemical Indonesia',
      content: t({
        ID: 'Respon tim admin sangat cepat dan pengiriman selalu tepat waktu. Material kayu yang digunakan benar-benar berkualitas tinggi.',
        EN: 'The admin team response is very fast and delivery is always on time. The wood material used is truly high quality.'
      }),
      rating: 5
    },
    {
      name: 'Ibu Ratna Sari',
      role: 'Business Owner',
      company: 'Furniture Hub Export',
      content: t({
        ID: 'Peti kayu untuk pengiriman furniture kami selalu rapi dan kuat. Customer kami di luar negeri sering memuji keamanan packagingnya.',
        EN: 'Wooden crates for our furniture shipments are always neat and strong. Our customers abroad often praise the safety of the packaging.'
      }),
      rating: 5
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);

  // Responsive items count for logic
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth <= 768) setVisibleItems(1);
      else if (window.innerWidth <= 1024) setVisibleItems(2);
      else setVisibleItems(3);
    };
    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleItems);

  const handleNext = () => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [maxIndex]);

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

  const WA_MESSAGE = t({ 
    ID: 'Halo CV Putra Karya Abadi, saya ingin konsultasi terkait pembuatan palet/peti kayu.',
    EN: 'Hello CV Putra Karya Abadi, I would like to consult regarding pallet/crate production.'
  });

  return (
    <main className="beranda">
      {/* Hero */}
      <section className="hero" id="hero">
        <div className="hero__bg">
          <img src={heroImg} alt="Pabrik Palet Kayu" className="hero__bg-img" />
          <div className="hero__overlay" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <span className="hero__badge animate-fade-in-up">
              {t({ ID: 'Supplier Terpercaya di Indonesia', EN: 'Trusted Supplier in Indonesia' })}
            </span>
            <h1 className="hero__title animate-fade-in-up delay-1">
              {t({ ID: 'Solusi', EN: 'Solution for' })} <span className="hero__highlight">{t({ ID: 'Palet Kayu', EN: 'Wooden Pallet' })}</span> & <span className="hero__highlight">{t({ ID: 'Peti Kayu', EN: 'Wooden Crate' })}</span> {t({ ID: 'Berkualitas', EN: 'Quality' })}
            </h1>
            <p className="hero__subtitle animate-fade-in-up delay-2">
              {t({ 
                ID: 'CV Putra Karya Abadi menyediakan palet kayu dan peti kayu untuk kebutuhan pabrik, gudang logistik, dan ekspor. Bisa custom ukuran, harga langsung pabrik.',
                EN: 'CV Putra Karya Abadi provides wooden pallets and crates for factory, logistics warehouse, and export needs. Custom sizes available at factory prices.'
              })}
            </p>
            <div className="hero__actions animate-fade-in-up delay-3">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <FaWhatsapp size={20} />
                {t({ ID: 'Konsultasi Gratis', EN: 'Free Consultation' })}
              </a>
              <button onClick={handleDownload} className="btn btn-outline btn-lg">
                <FaFileDownload size={18} />
                {t({ ID: 'Profil Perusahaan', EN: 'Company Profile' })}
              </button>
            </div>
          </div>

          <div className="hero__visual animate-fade-in-up delay-4">
            <div className="hero__card">
              <div className="hero__card-icon"><FaWarehouse /></div>
              <span>{t({ ID: 'Gudang & Logistik', EN: 'Warehouse & Logistics' })}</span>
            </div>
            <div className="hero__card">
              <div className="hero__card-icon"><FaGlobeAsia /></div>
              <span>{t({ ID: 'Ekspor Internasional', EN: 'International Export' })}</span>
            </div>
            <div className="hero__card">
              <div className="hero__card-icon"><FaIndustry /></div>
              <span>{t({ ID: 'Pabrik & Industri', EN: 'Factory & Industry' })}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang Kami */}
      <section className="about section" id="tentang" style={{ backgroundColor: 'var(--color-wood)' }}>
        <div className="container">
          <div className="about__grid reveal">
            <div className="about__content">
              <span className="section-label">{t({ ID: 'Tentang Kami', EN: 'About Us' })}</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                {t({ ID: 'Berpengalaman & Profesional dalam Pembuatan Palet & Peti Kayu', EN: 'Experienced & Professional in Pallet & Crate Manufacturing' })}
              </h2>
              <p className="about__text">
                {t({ 
                  ID: 'CV Putra Karya Abadi berkomitmen menjadi solusi utama untuk kebutuhan palet kayu dan peti kayu berkualitas di Indonesia. Kami memahami pentingnya daya angkut, efisiensi ruang, hingga keamanan pengiriman.',
                  EN: 'CV Putra Karya Abadi is committed to being the primary solution for quality wooden pallet and crate needs in Indonesia. We understand the importance of load capacity, space efficiency, and shipping security.'
                })}
              </p>
              <p className="about__text">
                {t({ 
                  ID: 'Kami tidak hanya menjual — kami bantu Anda memilih jenis palet dan peti yang paling tepat dan efisien untuk kebutuhan bisnis Anda.',
                  EN: 'We don\'t just sell — we help you choose the most appropriate and efficient pallet and crate types for your business needs.'
                })}
              </p>
              <div className="about__stats">
                <div className="about__stat">
                  <span className="about__stat-number">500+</span>
                  <span className="about__stat-label">{t({ ID: 'Proyek Selesai', EN: 'Completed Projects' })}</span>
                </div>
                <div className="about__stat">
                  <span className="about__stat-number">100+</span>
                  <span className="about__stat-label">{t({ ID: 'Klien Puas', EN: 'Satisfied Clients' })}</span>
                </div>
                <div className="about__stat">
                  <span className="about__stat-number">24/7</span>
                  <span className="about__stat-label">{t({ ID: 'Layanan Support', EN: 'Support Service' })}</span>
                </div>
              </div>
            </div>
            <div className="about__industries">
              <h3 className="about__industries-title">{t({ ID: 'Industri yang Kami Layani', EN: 'Industries We Serve' })}</h3>
              <div className="about__industry-list">
                <div className="about__industry-item">
                  <FaIndustry />
                  <span>{t({ ID: 'Pabrik & Manufaktur', EN: 'Factory & Manufacturing' })}</span>
                </div>
                <div className="about__industry-item">
                  <FaWarehouse />
                  <span>{t({ ID: 'Gudang & Logistik', EN: 'Warehouse & Logistics' })}</span>
                </div>
                <div className="about__industry-item">
                  <FaGlobeAsia />
                  <span>{t({ ID: 'Ekspor & Impor', EN: 'Export & Import' })}</span>
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
            <span className="section-label">{t({ ID: 'Keunggulan Kami', EN: 'Our Advantages' })}</span>
            <h2 className="section-title">{t({ ID: 'Mengapa Memilih CV Putra Karya Abadi?', EN: 'Why Choose CV Putra Karya Abadi?' })}</h2>
            <p className="section-subtitle">
              {t({ ID: 'Kami siap produksi palet dan peti sesuai kebutuhan bisnis Anda dengan kualitas terbaik.', EN: 'We are ready to produce pallets and crates according to your business needs with the best quality.' })}
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
      <section className="clients section" id="portofolio" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">{t({ ID: 'Portofolio Klien', EN: 'Client Portfolio' })}</span>
            <h2 className="section-title">{t({ ID: 'Dipercaya oleh Berbagai Industri', EN: 'Trusted by Various Industries' })}</h2>
            <p className="section-subtitle">
              {t({ ID: 'Kami telah melayani ratusan klien dari berbagai sektor industri di Indonesia.', EN: 'We have served hundreds of clients from various industrial sectors in Indonesia.' })}
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
            <span className="section-label">{t({ ID: 'Cara Order', EN: 'How to Order' })}</span>
            <h2 className="section-title">{t({ ID: 'Proses Pemesanan yang Mudah', EN: 'Easy Ordering Process' })}</h2>
            <p className="section-subtitle">
              {t({ ID: 'Hanya 4 langkah mudah untuk mendapatkan palet & peti kayu berkualitas.', EN: 'Only 4 easy steps to get quality wooden pallets & crates.' })}
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

      {/* Testimonials */}
      <section className="testimonials section" id="testimoni" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">{t({ ID: 'Testimoni', EN: 'Testimonials' })}</span>
            <h2 className="section-title">{t({ ID: 'Apa Kata Klien Kami?', EN: 'What Our Clients Say?' })}</h2>
            <p className="section-subtitle">
              {t({ ID: 'Kepercayaan klien adalah prioritas utama kami dalam menyediakan solusi packaging kayu terbaik.', EN: 'Client trust is our top priority in providing the best wooden packaging solutions.' })}
            </p>
          </div>
          <div className="testimonials__slider-container">
            <button className="slider-nav slider-nav--prev" onClick={handlePrev} aria-label="Previous review">
              <FaChevronLeft />
            </button>
            <button className="slider-nav slider-nav--next" onClick={handleNext} aria-label="Next review">
              <FaChevronRight />
            </button>

            <div className="testimonials__track-container">
              <div 
                className="testimonials__track" 
                style={{ '--active-index': activeIndex }}
              >
                {testimonials.map((item, i) => (
                  <div key={i} className="testimonial-card-wrapper">
                    <div className="testimonial-card">
                      <div className="testimonial-card__header">
                        <div className="testimonial-card__quotes"><FaQuoteLeft /></div>
                        <div className="testimonial-card__rating">
                          {[...Array(item.rating)].map((_, idx) => (
                            <FaStar key={idx} />
                          ))}
                        </div>
                      </div>
                      <p className="testimonial-card__content">"{item.content}"</p>
                      <div className="testimonial-card__author" style={{ borderTop: '1px solid var(--color-border-light)', paddingTop: 'var(--space-6)', marginTop: 'auto' }}>
                        <div className="testimonial-card__info">
                          <h4 className="testimonial-card__name">{item.name}</h4>
                          <p className="testimonial-card__role">{item.role} - {item.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="testimonials__dots">
              {testimonials.slice(0, maxIndex + 1).map((_, i) => (
                <button
                  key={i}
                  className={`testimonials__dot ${i === activeIndex ? 'testimonials__dot--active' : ''}`}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card reveal">
            <h2 className="cta-card__title">{t({ ID: 'Siap Bermitra dengan Kami?', EN: 'Ready to Partner with Us?' })}</h2>
            <p className="cta-card__desc">
              {t({ 
                ID: 'Hubungi tim CV Putra Karya Abadi sekarang & dapatkan penawaran terbaik untuk kebutuhan palet dan peti kayu Anda.',
                EN: 'Contact CV Putra Karya Abadi team now & get the best offer for your wooden pallet and crate needs.'
              })}
            </p>
            <div className="cta-card__actions">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(t({ ID: 'Halo, saya ingin minta penawaran harga palet/peti kayu.', EN: 'Hello, I would like to request a quote for wooden pallets/crates.' }))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <FaWhatsapp size={20} />
                {t({ ID: 'Minta Penawaran', EN: 'Request a Quote' })}
              </a>
              <Link to="/produk" className="btn btn-outline btn-lg">
                {t({ ID: 'Lihat Produk', EN: 'View Products' })} <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
