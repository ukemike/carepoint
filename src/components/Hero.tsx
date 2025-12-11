import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/2348000000000?text=Hello%2C%20I%20need%20help%20with%20medication",
      "_blank",
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#0D9488]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItMnptMCAwdjJoLTJ2LTJoMnptMCAwdi0yaDJ2MmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10 py-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#0D9488]/20 border border-[#0D9488]/30 rounded-full px-4 py-2 mb-8 animate-fade-up">
            <span className="w-2 h-2 bg-[#0D9488] rounded-full animate-pulse"></span>
            <span className="text-[#0D9488] font-mono text-sm font-medium">
              Verified Authentic Medications
            </span>
          </div>

          <h1
            className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Get Your Medications
            <span className="block text-[#0D9488]">Fast, Safe & Verified</span>
          </h1>

          <p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Nigeria's trusted platform for authentic medication procurement.
            Order via WhatsApp and receive verified medications at your doorstep
            within hours.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              onClick={handleWhatsAppClick}
              className="bg-[#0D9488] hover:bg-[#0D9488]/90 text-white rounded-full h-14 px-8 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              Order on WhatsApp
            </Button>

            <Button
              onClick={() =>
                document
                  .getElementById("request-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              variant="outline"
              className="border-2 border-white/30 text-[#0A2540] hover:bg-white/10 rounded-full h-14 px-8 text-lg font-semibold backdrop-blur-sm"
            >
              Request Medicine
            </Button>
          </div>

          <div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { label: "Verified Suppliers", value: "100%" },
              { label: "Delivery Time", value: "4hrs" },
              { label: "Happy Customers", value: "5000+" },
              { label: "Cities Covered", value: "15+" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-[#0D9488] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAFAF9] to-transparent"></div>
    </section>
  );
}
