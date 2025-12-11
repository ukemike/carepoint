import { Search, ShieldCheck, Truck } from "lucide-react";

export default function WhatWeDo() {
  const services = [
    {
      icon: Search,
      title: "Find",
      description: "Search our extensive network of verified pharmacies and suppliers across Nigeria for your specific medication needs."
    },
    {
      icon: ShieldCheck,
      title: "Verify",
      description: "Every medication is authenticated through our rigorous verification process, ensuring you receive only genuine products."
    },
    {
      icon: Truck,
      title: "Deliver",
      description: "Fast, secure delivery to your doorstep. Track your order in real-time via WhatsApp for complete peace of mind."
    }
  ];

  return (
    <section className="py-24 bg-[#FAFAF9]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">
            How CarePoint Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three simple steps to get authentic medications delivered to your doorstep
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(10,37,64,0.08)] hover:shadow-[0_8px_32px_rgba(13,148,136,0.15)] transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#0D9488]/20"
            >
              <div className="w-16 h-16 bg-[#0D9488]/10 rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-[#0D9488]" strokeWidth={2} />
              </div>
              
              <h3 className="font-display text-2xl font-bold text-[#0A2540] mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-6 flex items-center gap-2 text-[#0D9488] font-semibold text-sm">
                <span className="font-mono">STEP {index + 1}</span>
                <div className="h-px flex-1 bg-[#0D9488]/20"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
