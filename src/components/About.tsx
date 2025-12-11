import { Heart, Users, Award, Target } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Patient-First",
      description: "Your health and safety are our top priorities"
    },
    {
      icon: Users,
      title: "Community Trust",
      description: "Building lasting relationships with healthcare providers"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Rigorous verification for every medication"
    },
    {
      icon: Target,
      title: "Accessibility",
      description: "Making healthcare accessible to all Nigerians"
    }
  ];

  return (
    <section className="py-24 bg-[#FAFAF9]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#0D9488]/10 border border-[#0D9488]/20 rounded-full px-4 py-2 mb-6">
                <span className="text-[#0D9488] font-mono text-sm font-medium">About CarePoint</span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
                Revolutionizing Healthcare Access in Nigeria
              </h2>
              
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  CarePoint was founded with a simple mission: to make authentic medications 
                  accessible to every Nigerian, regardless of their location.
                </p>
                
                <p>
                  We understand the challenges of finding genuine medications quickly. That's 
                  why we've built a network of verified suppliers and created a seamless 
                  WhatsApp-first platform that puts trust and speed at the forefront.
                </p>
                
                <p>
                  Our team of healthcare professionals and technology experts work tirelessly 
                  to ensure every medication that reaches you is authentic, affordable, and 
                  delivered with care.
                </p>
              </div>
              
              <div className="mt-8 flex items-center gap-6">
                <div>
                  <div className="text-3xl font-display font-bold text-[#0D9488]">5000+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div>
                  <div className="text-3xl font-display font-bold text-[#0D9488]">100%</div>
                  <div className="text-sm text-gray-600">Verified Suppliers</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div>
                  <div className="text-3xl font-display font-bold text-[#0D9488]">15+</div>
                  <div className="text-sm text-gray-600">Cities Covered</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(10,37,64,0.08)] hover:shadow-[0_8px_32px_rgba(13,148,136,0.15)] transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-[#0D9488]/10 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-[#0D9488]" strokeWidth={2} />
                  </div>
                  
                  <h3 className="font-display text-lg font-bold text-[#0A2540] mb-2">
                    {value.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
