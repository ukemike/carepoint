import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Adebayo Okonkwo",
      location: "Lagos",
      medication: "Diabetes medication",
      text: "Got my father's diabetes medication in 4 hours. The verification process gave me complete peace of mind. CarePoint is a lifesaver!",
      rating: 5,
      avatar: "AO"
    },
    {
      name: "Chioma Nwosu",
      location: "Abuja",
      medication: "Blood pressure medication",
      text: "As a busy professional, ordering via WhatsApp is so convenient. The prices are transparent and delivery is always on time.",
      rating: 5,
      avatar: "CN"
    },
    {
      name: "Ibrahim Yusuf",
      location: "Kano",
      medication: "Antibiotics",
      text: "I was skeptical at first, but the authenticity guarantee is real. Every medication comes with proper documentation. Highly recommended!",
      rating: 5,
      avatar: "IY"
    },
    {
      name: "Blessing Okoro",
      location: "Port Harcourt",
      medication: "Asthma inhaler",
      text: "My daughter needed her inhaler urgently. CarePoint delivered within 3 hours. Thank you for being there when we needed you most.",
      rating: 5,
      avatar: "BO"
    },
    {
      name: "Dr. Emeka Obi",
      location: "Enugu",
      medication: "Bulk hospital supplies",
      text: "Our clinic has been using CarePoint for bulk orders. The pricing is competitive and the service is professional. A trusted partner.",
      rating: 5,
      avatar: "EO"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from real people across Nigeria
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_rgba(10,37,64,0.12)] border border-gray-100">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0D9488] to-[#0A2540] flex items-center justify-center text-white font-display text-2xl font-bold shadow-lg">
                  {testimonials[currentIndex].avatar}
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FB7185] text-[#FB7185]" />
                  ))}
                </div>
                
                <p className="text-xl text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <div>
                    <div className="font-display text-lg font-bold text-[#0A2540]">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{testimonials[currentIndex].location}</span>
                    </div>
                  </div>
                  
                  <div className="hidden sm:block w-px h-8 bg-gray-300"></div>
                  
                  <div className="font-mono text-sm text-[#0D9488] bg-[#0D9488]/10 px-3 py-1 rounded-full w-fit">
                    {testimonials[currentIndex].medication}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-2 border-[#0D9488] text-[#0D9488] hover:bg-[#0D9488] hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-[#0D9488] w-8" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-2 border-[#0D9488] text-[#0D9488] hover:bg-[#0D9488] hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
