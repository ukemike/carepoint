import { Clock, Shield, DollarSign, MapPin } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: Clock,
      title: "Lightning Fast Delivery",
      description: "Get your medications within 4 hours in major cities. We understand that health can't wait.",
      badge: "24hr Delivery",
      color: "from-[#0D9488] to-[#0A2540]"
    },
    {
      icon: Shield,
      title: "100% Authenticity Guarantee",
      description: "Every medication is verified through our rigorous authentication process. Your safety is our priority.",
      badge: "Verified",
      color: "from-[#0A2540] to-[#0D9488]"
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description: "Access the best prices from our network of verified suppliers. No hidden fees, transparent pricing.",
      badge: "Best Price",
      color: "from-[#0D9488] to-[#FB7185]"
    },
    {
      icon: MapPin,
      title: "Nationwide Coverage",
      description: "Serving 15+ major cities across Nigeria with plans to expand. Wherever you are, we're there.",
      badge: "15+ Cities",
      color: "from-[#FB7185] to-[#0D9488]"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">
            Why Choose CarePoint
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to making healthcare accessible, affordable, and trustworthy
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-[0_4px_24px_rgba(10,37,64,0.08)] hover:shadow-[0_8px_32px_rgba(13,148,136,0.15)] transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-[#0D9488]/30 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${benefit.color} opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`}></div>
              
              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-[#0D9488]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-7 h-7 text-[#0D9488]" strokeWidth={2} />
                  </div>
                  
                  <span className="font-mono text-xs font-semibold text-[#0D9488] bg-[#0D9488]/10 px-3 py-1 rounded-full">
                    {benefit.badge}
                  </span>
                </div>
                
                <h3 className="font-display text-2xl font-bold text-[#0A2540] mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
