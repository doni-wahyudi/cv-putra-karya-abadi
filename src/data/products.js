import palletImg from '../assets/images/pallet_std.png';
import petiImg from '../assets/images/gallery/peti.jpeg';

export const products = [
  {
    id: 'pallet-kayu-custom',
    category: { ID: 'Produk Custom', EN: 'Custom Products' },
    name: { ID: 'Pallet Kayu Custom', EN: 'Custom Wooden Pallet' },
    image: palletImg,
    desc: { 
      ID: 'Pallet kayu custom dengan ukuran dan spesifikasi sesuai kebutuhan industri, cocok untuk gudang, distribusi, dan pengiriman ekspor.',
      EN: 'Custom wooden pallets with sizes and specifications according to industrial needs, suitable for warehouses, distribution, and export shipping.'
    },
    specs: [
      { label: { ID: 'Ukuran', EN: 'Size' }, value: { ID: 'Custom Sesuai Permintaan', EN: 'Custom by Demand' } },
      { label: { ID: 'Ketebalan', EN: 'Thickness' }, value: { ID: 'Disesuaikan', EN: 'Adjustable' } },
      { label: { ID: 'Kapasitas', EN: 'Capacity' }, value: { ID: 'Disesuaikan', EN: 'Adjustable' } }
    ],
    features: [
      { ID: 'Pallet untuk gudang', EN: 'Warehouse Pallets' },
      { ID: 'Pallet untuk ekspor (ISPM-15)', EN: 'Export Pallets (ISPM-15)' },
      { ID: 'Pallet heavy duty', EN: 'Heavy Duty Pallets' },
      { ID: 'Pallet ukuran khusus', EN: 'Special Size Pallets' }
    ],
    tag: { ID: 'Custom', EN: 'Custom' }
  },
  {
    id: 'peti-kayu-custom',
    category: { ID: 'Produk Custom', EN: 'Custom Products' },
    name: { ID: 'Peti Kayu Custom', EN: 'Custom Wooden Crate' },
    image: petiImg,
    desc: { 
      ID: 'Peti kayu custom untuk pengemasan dan pengiriman barang industri, dirancang kuat untuk melindungi mesin, alat berat, dan produk domestik serta ekspor.',
      EN: 'Custom wooden crates for industrial goods packaging and shipping, designed strong to protect machinery, heavy equipment, and domestic as well as export products.'
    },
    specs: [
      { label: { ID: 'Jenis Peti', EN: 'Crate Type' }, value: { ID: 'Full / Skeleton / Base', EN: 'Full / Skeleton / Base' } },
      { label: { ID: 'Material', EN: 'Material' }, value: { ID: 'Kayu Keras / Plywood / LVL', EN: 'Hardwood / Plywood / LVL' } },
      { label: { ID: 'Sertifikasi', EN: 'Certification' }, value: 'ISPM-15 Ready' }
    ],
    features: [
      { ID: 'Peti kayu mesin', EN: 'Machine Wooden Crates' },
      { ID: 'Peti packaging industri', EN: 'Industrial Packaging Crates' }
    ],
    tag: { ID: 'Custom', EN: 'Custom' }
  }
];
