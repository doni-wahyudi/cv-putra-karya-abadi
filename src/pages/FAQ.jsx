import { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaWhatsapp } from 'react-icons/fa';
import './FAQ.css';

const WA_NUMBER = '6282112976961';

const faqData = [
  {
    category: 'Umum',
    items: [
      {
        q: 'Apa itu palet kayu?',
        a: 'Palet kayu adalah alas datar yang digunakan untuk menopang barang saat penyimpanan atau pengangkutan. Palet membuat proses pemindahan barang lebih mudah dan efisien, terutama dengan alat seperti forklift atau hand pallet.'
      },
      {
        q: 'Apa perbedaan palet kayu dan peti kayu?',
        a: 'Palet kayu berfungsi sebagai alas untuk menumpuk dan memindahkan barang, sedangkan peti kayu berfungsi sebagai wadah tertutup untuk melindungi barang dari benturan dan cuaca selama pengiriman.'
      },
      {
        q: 'Apakah palet hanya digunakan untuk pengiriman?',
        a: 'Tidak. Palet juga bisa digunakan untuk penyimpanan di rak gudang, pengiriman logistik, display di toko atau pameran, dan berbagai kebutuhan industri lainnya.'
      },
    ]
  },
  {
    category: 'Produk',
    items: [
      {
        q: 'Jenis kayu apa yang digunakan?',
        a: 'Kami menggunakan berbagai jenis kayu pilihan seperti kayu pinus, mahoni, meranti, dan jenis kayu keras lainnya sesuai kebutuhan dan budget Anda. Semua kayu yang kami gunakan berkualitas tinggi dan tahan lama.'
      },
      {
        q: 'Apakah bisa custom ukuran?',
        a: 'Tentu! Kami melayani pembuatan palet dan peti kayu dengan ukuran custom sesuai kebutuhan spesifik Anda. Tim kami akan membantu konsultasi untuk menentukan ukuran dan desain yang paling optimal.'
      },
      {
        q: 'Apakah peti kayu aman untuk ekspor?',
        a: 'Ya, kami menyediakan peti kayu khusus ekspor yang telah memenuhi standar ISPM-15 dengan perlakuan Heat Treatment (HT). Sertifikasi ini wajib untuk pengiriman kayu internasional.'
      },
      {
        q: 'Berapa kapasitas beban palet kayu?',
        a: 'Palet kayu standar kami mampu menahan beban hingga 1 ton, sedangkan palet heavy duty bisa menahan beban hingga 2 ton. Kapasitas dapat disesuaikan dengan kebutuhan Anda.'
      },
    ]
  },
  {
    category: 'Pemesanan & Pengiriman',
    items: [
      {
        q: 'Bagaimana cara memesan?',
        a: 'Cukup hubungi kami via WhatsApp, sampaikan kebutuhan Anda (jenis, ukuran, jumlah), dan tim kami akan memberikan penawaran harga beserta estimasi waktu pengerjaan.'
      },
      {
        q: 'Berapa lama waktu produksi?',
        a: 'Waktu produksi bervariasi tergantung jumlah dan kompleksitas pesanan. Secara umum, untuk pesanan standar membutuhkan waktu 3-7 hari kerja. Untuk pesanan custom atau jumlah besar, akan kami informasikan saat penawaran.'
      },
      {
        q: 'Apakah melayani pengiriman ke luar kota?',
        a: 'Tentu! Kami melayani pengiriman ke seluruh Indonesia. Biaya pengiriman akan disesuaikan dengan lokasi dan jumlah pesanan Anda.'
      },
      {
        q: 'Apakah ada minimum order?',
        a: 'Kami tidak menetapkan minimum order yang rumit. Namun untuk efisiensi biaya produksi dan pengiriman, kami sarankan untuk berkonsultasi terlebih dahulu melalui WhatsApp.'
      },
    ]
  }
];

function FAQItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
      <button className="faq-item__question" onClick={() => setIsOpen(!isOpen)}>
        <span>{item.q}</span>
        <FaChevronDown className="faq-item__arrow" />
      </button>
      <div
        className="faq-item__answer"
        ref={contentRef}
        style={{ maxHeight: isOpen ? contentRef.current?.scrollHeight + 'px' : '0px' }}
      >
        <p>{item.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
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
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <main className="faq-page">
      {/* Header */}
      <section className="faq-hero">
        <div className="container">
          <span className="section-label animate-fade-in-up">FAQ</span>
          <h1 className="faq-hero__title animate-fade-in-up delay-1">
            Pertanyaan yang Sering Diajukan
          </h1>
          <p className="faq-hero__subtitle animate-fade-in-up delay-2">
            Temukan jawaban untuk pertanyaan umum tentang produk dan layanan kami.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="faq-content section">
        <div className="container">
          <div className="faq-wrapper">
            {faqData.map((category, ci) => (
              <div key={ci} className="faq-category reveal">
                <h2 className="faq-category__title">{category.category}</h2>
                <div className="faq-category__items">
                  {category.items.map((item, i) => (
                    <FAQItem key={i} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="faq-cta section">
        <div className="container">
          <div className="faq-cta__card reveal">
            <h2>Masih Ada Pertanyaan?</h2>
            <p>Tim kami siap membantu menjawab semua pertanyaan Anda melalui WhatsApp.</p>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo, saya ingin bertanya lebih lanjut tentang produk palet/peti kayu.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <FaWhatsapp size={20} />
              Tanya via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
