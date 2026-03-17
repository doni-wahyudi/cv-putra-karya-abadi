import { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './FAQ.css';

const WA_NUMBER = '6282112976981';

export default function FAQ() {
  const { t } = useLanguage();
  const observerRef = useRef(null);

  const faqData = [
    {
      category: t({ ID: 'Umum', EN: 'General' }),
      items: [
        {
          q: t({ ID: 'Apa itu pallet kayu?', EN: 'What is a wooden pallet?' }),
          a: t({
            ID: 'Pallet kayu adalah alas datar yang digunakan untuk menopang barang saat penyimpanan atau pengangkutan. Pallet membuat proses pemindahan barang lebih mudah dan efisien, terutama dengan alat seperti forklift atau hand pallet.',
            EN: 'A wooden pallet is a flat base used to support goods during storage or transport. Pallets make the process of moving goods easier and more efficient, especially with tools like forklifts or hand pallets.'
          })
        },
        {
          q: t({ ID: 'Apa perbedaan pallet kayu dan peti kayu?', EN: 'What is the difference between pallets and crates?' }),
          a: t({
            ID: 'Pallet kayu berfungsi sebagai alas untuk menumpuk dan memindahkan barang, sedangkan peti kayu berfungsi sebagai wadah tertutup untuk melindungi barang dari benturan dan cuaca selama pengiriman.',
            EN: 'A wooden pallet functions as a base for stacking and moving goods, while a wooden crate functions as a closed container to protect goods from impact and weather during shipment.'
          })
        },
        {
          q: t({ ID: 'Apakah pallet hanya digunakan untuk pengiriman?', EN: 'Are pallets only used for shipping?' }),
          a: t({
            ID: 'Tidak. Pallet juga bisa digunakan untuk penyimpanan di rak gudang, pengiriman logistik, display di toko atau pameran, dan berbagai kebutuhan industri lainnya.',
            EN: 'No. Pallets can also be used for warehouse shelf storage, logistics shipping, displays in stores or exhibitions, and various other industrial needs.'
          })
        },
      ]
    },
    {
      category: t({ ID: 'Produk', EN: 'Products' }),
      items: [
        {
          q: t({ ID: 'Jenis kayu apa yang digunakan?', EN: 'What types of wood are used?' }),
          a: t({
            ID: 'Kami menggunakan berbagai jenis kayu pilihan seperti kayu pinus, mahoni, meranti, dan jenis kayu keras lainnya sesuai kebutuhan dan budget Anda. Semua kayu yang kami gunakan berkualitas tinggi dan tahan lama.',
            EN: 'We use various types of selected wood such as pine, mahogany, meranti, and other types of hardwood according to your needs and budget. All the wood we use is of high quality and durable.'
          })
        },
        {
          q: t({ ID: 'Apakah bisa custom ukuran?', EN: 'Can the size be customized?' }),
          a: t({
            ID: 'Tentu! Kami melayani pembuatan pallet dan peti kayu dengan ukuran custom sesuai kebutuhan spesifik Anda. Tim kami akan membantu konsultasi untuk menentukan ukuran dan desain yang paling optimal.',
            EN: 'Of course! We provide wooden pallet and crate manufacturing with custom sizes according to your specific needs. Our team will help consult to determine the most optimal size and design.'
          })
        },
        {
          q: t({ ID: 'Apakah peti kayu aman untuk ekspor?', EN: 'Are wooden crates safe for export?' }),
          a: t({
            ID: 'Ya, kami menyediakan peti kayu khusus ekspor yang telah memenuhi standar dengan perlakuan Heat Treatment (HT). Sertifikasi ini wajib untuk pengiriman kayu internasional.',
            EN: 'Yes, we provide special export crates that meet standards with Heat Treatment (HT). This certification is mandatory for international wood shipments.'
          })
        },
      ]
    },
    {
      category: t({ ID: 'Pemesanan & Pengiriman', EN: 'Ordering & Shipping' }),
      items: [
        {
          q: t({ ID: 'Bagaimana cara memesan?', EN: 'How to order?' }),
          a: t({
            ID: 'Cukup hubungi kami via WhatsApp, sampaikan kebutuhan Anda (jenis, ukuran, jumlah), dan tim kami akan memberikan penawaran harga beserta estimasi waktu pengerjaan.',
            EN: 'Just contact us via WhatsApp, convey your needs (type, size, quantity), and our team will provide a price quote along with an estimation of processing time.'
          })
        },
        {
          q: t({ ID: 'Berapa lama waktu produksi?', EN: 'How long is the production time?' }),
          a: t({
            ID: 'Waktu produksi bervariasi tergantung jumlah dan kompleksitas pesanan. Secara umum, untuk pesanan standar membutuhkan waktu 3-7 hari kerja. Untuk pesanan custom atau jumlah besar, akan kami informasikan saat penawaran.',
            EN: 'Production time varies depending on the quantity and complexity of the order. Generally, standard orders take 3-7 business days. For custom or large orders, we will inform you during the quotation process.'
          })
        },
      ]
    }
  ];

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

  return (
    <main className="faq-page">
      <section className="faq-hero">
        <div className="container">
          <span className="section-label animate-fade-in-up">FAQ</span>
          <h1 className="faq-hero__title animate-fade-in-up delay-1">
            {t({ ID: 'Pertanyaan yang Sering Diajukan', EN: 'Frequently Asked Questions' })}
          </h1>
          <p className="faq-hero__subtitle animate-fade-in-up delay-2">
            {t({ ID: 'Temukan jawaban untuk pertanyaan umum tentang produk dan layanan kami.', EN: 'Find answers to common questions about our products and services.' })}
          </p>
        </div>
      </section>

      <section className="faq-content section">
        <div className="container">
          <div className="faq-wrapper">
            {faqData.map((category, ci) => (
              <div key={ci} className="faq-category reveal">
                <h2 className="faq-category__title">{category.category}</h2>
                <div className="faq-category__items">
                  {category.items.map((item, i) => (
                    <FAQItem key={i} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-cta section">
        <div className="container">
          <div className="faq-cta__card reveal">
            <h2>{t({ ID: 'Masih Ada Pertanyaan?', EN: 'Still Have Questions?' })}</h2>
            <p>{t({ ID: 'Tim kami siap membantu menjawab semua pertanyaan Anda melalui WhatsApp.', EN: 'Our team is ready to help answer all your questions via WhatsApp.' })}</p>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(t({ ID: 'Halo, saya ingin bertanya lebih lanjut tentang produk pallet/peti kayu.', EN: 'Hello, I would like to ask more about pallet/crate products.' }))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <FaWhatsapp size={20} />
              {t({ ID: 'Tanya via WhatsApp', EN: 'Ask via WhatsApp' })}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function FAQItem({ q, a }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
      <button className="faq-item__question" onClick={() => setIsOpen(!isOpen)}>
        <span>{q}</span>
        <FaChevronDown className="faq-item__arrow" />
      </button>
      <div
        className="faq-item__answer"
        ref={contentRef}
        style={{ maxHeight: isOpen ? contentRef.current?.scrollHeight + 'px' : '0px' }}
      >
        <p>{a}</p>
      </div>
    </div>
  );
}
