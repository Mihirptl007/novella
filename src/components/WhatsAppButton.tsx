export default function WhatsAppButton() {
  // Update these values as needed.
  const phoneNumber = '919513131375'; // without '+'
  const message = encodeURIComponent(
    "Hi Novella! I’d like to get more information about your products. Please share details."
  );

  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-[65px] right-5 z-[1200] p-0"
    >
      <span
        className="block h-16 w-16 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-transform duration-200 hover:scale-105"
      >
        <img
          src="/images/whatsapp-button-logo.jpg"
          alt="WhatsApp"
          className="h-full w-full rounded-full object-cover scale-90"
        />
      </span>
    </a>
  );
}

