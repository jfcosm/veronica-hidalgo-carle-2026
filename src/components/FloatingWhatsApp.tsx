
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
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="currentColor"
      >
        <path d="M12.031 21.144l-3.328.875.885-3.243A9.704 9.704 0 0 1 2.25 12c0-5.385 4.38-9.75 9.765-9.75S21.78 6.615 21.78 12s-4.38 9.75-9.75 9.75a9.664 9.664 0 0 1-4.148-.937zM12.015 3.75A8.254 8.254 0 0 0 3.75 12a8.214 8.214 0 0 0 1.258 4.382l-.529 1.936 1.98-.519A8.204 8.204 0 0 0 12.015 20.25a8.254 8.254 0 0 0 8.25-8.25 8.254 8.254 0 0 0-8.25-8.25zm4.35 11.238c-.24-.12-.705-.348-1.02-.45-.195-.06-.405-.09-.585.18-.18.27-.45.6-.57.735-.12.135-.24.15-.48.03a3.918 3.918 0 0 1-1.155-.72c-.825-.66-1.395-1.485-1.545-1.74-.15-.255-.015-.405.09-.525.105-.105.24-.27.36-.405.12-.135.15-.24.24-.39.09-.15.045-.285-.015-.405-.06-.12-.585-1.41-.795-1.935-.21-.51-.42-.435-.585-.435-.15 0-.33-.015-.51-.015a.965.965 0 0 0-.69.315c-.24.255-.915.885-.915 2.16s.945 2.505 1.08 2.685c.135.18 1.83 2.79 4.425 3.885 1.575.66 2.16.735 2.925.615.69-.105 1.8-.735 2.055-1.44.255-.705.255-1.305.18-1.44-.075-.135-.27-.21-.51-.33z" />
      </svg>
    </a>
  );
};

export default FloatingWhatsApp;
