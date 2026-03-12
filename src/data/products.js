import palletImg from '../assets/images/pallet_std.png';
import crateImg from '../assets/images/crate_export.png';

export const products = [
  {
    id: 'pallet-kayu-standar',
    category: { ID: 'Palet Kayu', EN: 'Wooden Pallet' },
    name: { ID: 'Palet Kayu Standar', EN: 'Standard Wooden Pallet' },
    image: palletImg,
    desc: { 
      ID: 'Palet kayu untuk kebutuhan sehari-hari gudang dan logistik. Tersedia dalam berbagai ukuran standar Indonesia dan internasional.',
      EN: 'Wooden pallets for daily warehouse and logistics needs. Available in various Indonesian and international standard sizes.'
    },
    detailedDesc: {
      ID: 'Palet kayu standar kami dirancang untuk efisiensi maksimal dalam penyimpanan dan transportasi. Dibuat dari kayu pinus atau mahoni pilihan yang telah melalui proses pengeringan optimal untuk mencegah jamur dan serangga.',
      EN: 'Our standard wooden pallets are designed for maximum efficiency in storage and transportation. Made from selected pine or mahogany wood that has undergone an optimal drying process to prevent mold and insects.'
    },
    specs: [
      { label: { ID: 'Ukuran Standar', EN: 'Standard Size' }, value: '100x120 cm / 110x110 cm' },
      { label: { ID: 'Kapasitas Statis', EN: 'Static Capacity' }, value: '3-4 Ton' },
      { label: { ID: 'Kapasitas Dinamis', EN: 'Dynamic Capacity' }, value: '1-1.5 Ton' },
      { label: { ID: 'Bahan', EN: 'Material' }, value: { ID: 'Kayu Pinus / Mahoni', EN: 'Pine / Mahogany Wood' } },
      { label: 'Entry', value: '4-Way Entry' }
    ],
    features: [
      { ID: 'Anti Jamur', EN: 'Anti-Mold' },
      { ID: 'Standar ISPM-15 Ready', EN: 'ISPM-15 Standard Ready' },
      { ID: 'Ramah Lingkungan', EN: 'Eco-Friendly' },
      { ID: 'Daya Tahan Tinggi', EN: 'High Durability' }
    ],
    tag: { ID: 'Populer', EN: 'Popular' }
  },
  {
    id: 'pallet-kayu-heavy-duty',
    category: { ID: 'Palet Kayu', EN: 'Wooden Pallet' },
    name: { ID: 'Palet Kayu Heavy Duty', EN: 'Heavy Duty Wooden Pallet' },
    image: palletImg,
    desc: { 
      ID: 'Palet kayu extra kuat untuk beban berat dan penggunaan intensif di pabrik dan industri berat.',
      EN: 'Extra strong wooden pallets for heavy loads and intensive use in factories and heavy industry.'
    },
    detailedDesc: {
      ID: 'Didesain khusus untuk industri berat seperti mesin, logam, dan pertambangan. Konstruksi double-deck dengan papan yang lebih tebal memastikan keamanan maksimal untuk beban ekstrem.',
      EN: 'Specially designed for heavy industries such as machinery, metal, and mining. Double-deck construction with thicker boards ensures maximum safety for extreme loads.'
    },
    specs: [
      { label: { ID: 'Ukuran', EN: 'Size' }, value: { ID: 'Lokal / Internasional', EN: 'Local / International' } },
      { label: { ID: 'Kapasitas Statis', EN: 'Static Capacity' }, value: '6 Ton' },
      { label: { ID: 'Kapasitas Dinamis', EN: 'Dynamic Capacity' }, value: '2.5 Ton' },
      { label: { ID: 'Bahan', EN: 'Material' }, value: { ID: 'Kayu Keras Campuran', EN: 'Mixed Hardwood' } },
      { label: 'Entry', value: '2-Way / 4-Way' }
    ],
    features: [
      { ID: 'Double-Deck', EN: 'Double-Deck' },
      { ID: 'Extra Kuat', EN: 'Extra Reinforced' },
      { ID: 'Tahan Benturan', EN: 'Shock Resistant' },
      { ID: 'Siklus Hidup Panjang', EN: 'Long Life Cycle' }
    ],
    tag: 'Heavy Duty'
  },
  {
    id: 'peti-kayu-export',
    category: { ID: 'Peti Kayu', EN: 'Wooden Crate' },
    name: { ID: 'Peti Kayu Export', EN: 'Export Wooden Crate' },
    image: crateImg,
    desc: { 
      ID: 'Peti kayu khusus untuk pengiriman ekspor internasional dengan standar ISPM-15.',
      EN: 'Special wooden crates for international export shipments with ISPM-15 standards.'
    },
    detailedDesc: {
      ID: 'Peti kayu ekspor kami memenuhi semua persyaratan internasional pengiriman barang. Dilengkapi dengan sertifikasi ISPM-15 (Heat Treatment) untuk memastikan kelancaran proses bea cukai di negara tujuan.',
      EN: 'Our export wooden crates meet all international shipping requirements. Equipped with ISPM-15 (Heat Treatment) certification to ensure smooth customs processing in the destination country.'
    },
    specs: [
      { label: { ID: 'Sertifikasi', EN: 'Certification' }, value: 'ISPM-15 Certified' },
      { label: { ID: 'Tipe', EN: 'Type' }, value: { ID: 'Tertutup Rapat', EN: 'Full Closed / Fully Sheathed' } },
      { label: { ID: 'Proteksi', EN: 'Protection' }, value: { ID: 'Lapisan Tahan Air', EN: 'Waterproof Lining Support' } },
      { label: { ID: 'Bahan', EN: 'Material' }, value: 'Pinus / LVL / Plywood' }
    ],
    features: [
      { ID: 'Ukuran Custom', EN: 'Custom Size' },
      { ID: 'Tahan Guncangan', EN: 'Shock Resistant' },
      { ID: 'Ventilasi Opsional', EN: 'Optional Ventilation' },
      { ID: 'Sertifikasi Lengkap', EN: 'Full Certification' }
    ],
    tag: 'Export'
  }
];
