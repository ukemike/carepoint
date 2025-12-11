import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const handleClick = () => {
    window.open("https://wa.me/2348000000000?text=Hello%2C%20I%20need%20help%20with%20medication", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] hover:bg-[#25D366]/90 rounded-full shadow-2xl flex items-center justify-center z-50 animate-pulse-scale transition-transform duration-200 hover:scale-110 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" strokeWidth={2} />
      
      <div className="absolute -top-12 right-0 bg-[#0A2540] text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg">
        Chat with us!
        <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-[#0A2540]"></div>
      </div>
    </button>
  );
}
