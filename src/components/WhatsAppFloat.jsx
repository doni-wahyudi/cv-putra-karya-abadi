import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './WhatsAppFloat.css';

const WA_NUMBER = '6282112976981';

export default function WhatsAppFloat() {
  const { t } = useLanguage();
  const waMessage = t({ 
    ID: 'Halo CV Putra Karya Abadi, saya ingin bertanya tentang produk pallet/peti kayu.',
    EN: 'Hello CV Putra Karya Abadi, I would like to ask about pallet/crate products.'
  });
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMessage)}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Chat via WhatsApp"
    >
      <FaWhatsapp className="wa-float__icon" />
      <span className="wa-float__label">{t({ ID: 'Chat Kami', EN: 'Chat Us' })}</span>
    </a>
  );
}
