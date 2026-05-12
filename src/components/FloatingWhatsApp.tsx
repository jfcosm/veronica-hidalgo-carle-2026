
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  // Número de WhatsApp y mensaje predeterminado
  const phoneNumber = "56996133966";
  const defaultMessage = "Hola Verónica, me gustaría hacerte una consulta.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a 
      href={whatsappUrl} 
      className="floating-whatsapp" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="32"
        height="32"
        fill="white"
      >
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.43.654 4.71 1.793 6.676L2 30l7.52-1.766A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.838-1.6l-.418-.248-4.463 1.048 1.076-4.34-.273-.445A11.45 11.45 0 0 1 4.5 16C4.5 9.649 9.649 4.5 16 4.5S27.5 9.649 27.5 16 22.351 27.5 16 27.5zm6.29-8.617c-.344-.172-2.04-1.006-2.355-1.12-.316-.115-.546-.172-.776.172-.23.344-.888 1.12-1.089 1.35-.2.23-.4.258-.745.086-.344-.172-1.453-.536-2.768-1.71-1.023-.913-1.713-2.04-1.913-2.384-.2-.344-.021-.53.15-.702.154-.154.344-.402.516-.603.172-.2.23-.344.344-.573.115-.23.057-.43-.029-.603-.086-.172-.776-1.87-1.063-2.562-.28-.672-.564-.58-.776-.59l-.66-.01c-.23 0-.603.086-.918.43s-1.206 1.178-1.206 2.873 1.234 3.332 1.407 3.562c.172.23 2.427 3.706 5.878 5.197.822.355 1.463.567 1.963.726.825.263 1.575.226 2.168.137.661-.099 2.04-.834 2.327-1.638.287-.805.287-1.494.2-1.638-.085-.143-.316-.23-.66-.402z"/>
      </svg>
    </a>
  );
};

export default FloatingWhatsApp;
