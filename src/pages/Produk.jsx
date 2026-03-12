import { useEffect, useRef } from 'react';
import { FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import './Produk.css';

const WA_NUMBER = '6282112976961';

const products = [
  {
    category: 'Palet Kayu',
    items: [
      {
        name: 'Palet Kayu Standar',
        desc: 'Palet kayu untuk kebutuhan sehari-hari gudang dan logistik. Tersedia dalam berbagai ukuran standar Indonesia dan internasional.',
        specs: ['Ukuran standar: 100x120 cm', 'Kapasitas beban hingga 1 ton', 'Kayu pinus/mahoni pilihan', 'Cocok untuk forklift & hand pallet'],
        tag: 'Populer'
      },
      {
        name: 'Palet Kayu Heavy Duty',
        desc: 'Palet kayu extra kuat untuk beban berat dan penggunaan intensif di pabrik dan industri berat.',
        specs: ['Kapasitas beban hingga 2 ton', 'Konstruksi double-deck', 'Kayu keras pilihan', 'Tahan untuk penggunaan berulang'],
        tag: 'Heavy Duty'
      },
      {
        name: 'Palet Kayu Custom',
        desc: 'Palet kayu custom sesuai ukuran dan spesifikasi khusus yang Anda butuhkan untuk kebutuhan spesifik.',
        specs: ['Ukuran sesuai permintaan', 'Pilihan jenis kayu', 'Desain sesuai kebutuhan', 'Konsultasi gratis'],
        tag: 'Custom'
      },
    ]
  },
  {
    category: 'Peti Kayu',
    items: [
      {
        name: 'Peti Kayu Export',
        desc: 'Peti kayu khusus untuk pengiriman ekspor internasional dengan standar ISPM-15.',
        specs: ['Standar ISPM-15', 'Heat Treatment certified', 'Proteksi maksimal untuk barang', 'Siap untuk pengiriman luar negeri'],
        tag: 'Export'
      },
      {
        name: 'Peti Kayu Mesin',
        desc: 'Peti kayu reinforced untuk pengiriman mesin-mesin berat dan peralatan industri.',
        specs: ['Konstruksi extra kuat', 'Internal bracing system', 'Cocok untuk mesin berat', 'Anti guncangan & getaran'],
        tag: 'Industrial'
      },
      {
        name: 'Peti Kayu Custom',
        desc: 'Peti kayu dengan ukuran dan desain khusus sesuai kebutuhan barang yang akan dikemas.',
        specs: ['Ukuran fleksibel', 'Desain sesuai bentuk barang', 'Padding internal opsional', 'Konsultasi gratis'],
        tag: 'Custom'
      },
    ]
  }
];

export default function Produk() {
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
    <main className="produk-page">
      {/* Header */}
      <section className="produk-hero">
        <div className="container">
          <span className="section-label animate-fade-in-up">Katalog Produk</span>
          <h1 className="produk-hero__title animate-fade-in-up delay-1">
            Produk Palet & Peti Kayu Kami
          </h1>
          <p className="produk-hero__subtitle animate-fade-in-up delay-2">
            Berbagai pilihan palet kayu dan peti kayu berkualitas untuk kebutuhan industri, 
            logistik, dan ekspor Anda.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      {products.map((category, ci) => (
        <section key={ci} className="produk-category section">
          <div className="container">
            <h2 className="produk-category__title reveal">{category.category}</h2>
            <div className="produk-grid">
              {category.items.map((item, i) => (
                <div key={i} className="product-card reveal">
                  <div className="product-card__header">
                    <span className="product-card__tag">{item.tag}</span>
                    <h3 className="product-card__name">{item.name}</h3>
                    <p className="product-card__desc">{item.desc}</p>
                  </div>
                  <div className="product-card__specs">
                    {item.specs.map((spec, si) => (
                      <div key={si} className="product-card__spec">
                        <FaCheckCircle />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Halo, saya ingin bertanya tentang ${item.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp product-card__cta"
                  >
                    <FaWhatsapp size={18} />
                    Tanya via WhatsApp
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="produk-cta section">
        <div className="container">
          <div className="produk-cta__card reveal">
            <h2>Butuh Ukuran atau Desain Khusus?</h2>
            <p>Kami melayani pembuatan palet dan peti kayu custom sesuai kebutuhan spesifik Anda. Konsultasi gratis!</p>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo, saya ingin konsultasi tentang palet/peti kayu custom.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <FaWhatsapp size={20} />
              Konsultasi Custom Order
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
