import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppFloat.css';

const WA_NUMBER = '6282112976961';
const WA_MESSAGE = 'Halo CV Putra Karya Abadi, saya ingin bertanya tentang produk palet/peti kayu.';

export default function WhatsAppFloat() {
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Chat via WhatsApp"
    >
      <FaWhatsapp className="wa-float__icon" />
      <span className="wa-float__label">Chat Kami</span>
    </a>
  );
}
