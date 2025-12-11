import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function RequestForm() {
  const [formData, setFormData] = useState({
    medication: "",
    quantity: "",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hello, I would like to request:\n\nMedication: ${formData.medication}\nQuantity: ${formData.quantity}\n${formData.notes ? `Additional Notes: ${formData.notes}` : ''}`;
    const encodedMessage = encodeURIComponent(message);
    
    window.open(`https://wa.me/2348000000000?text=${encodedMessage}`, "_blank");
  };

  return (
    <section id="request-form" className="py-24 bg-[#FAFAF9]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
                Request Your Medication
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Fill in the details below and we'll connect you with verified suppliers on WhatsApp. 
                Get instant quotes and delivery estimates.
              </p>
              
              <div className="space-y-4">
                {[
                  "Instant response via WhatsApp",
                  "Verified supplier network",
                  "Transparent pricing",
                  "Fast delivery options"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#0D9488]/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#0D9488]"></div>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-[0_8px_32px_rgba(10,37,64,0.12)] border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="medication" className="font-mono text-sm font-semibold text-[#0A2540] mb-2 block">
                    MEDICATION NAME *
                  </Label>
                  <Input
                    id="medication"
                    type="text"
                    placeholder="e.g., Paracetamol 500mg"
                    value={formData.medication}
                    onChange={(e) => setFormData({ ...formData, medication: e.target.value })}
                    required
                    className="h-12 border-2 border-gray-200 focus:border-[#0D9488] focus:ring-0 rounded-xl"
                  />
                </div>
                
                <div>
                  <Label htmlFor="quantity" className="font-mono text-sm font-semibold text-[#0A2540] mb-2 block">
                    QUANTITY *
                  </Label>
                  <Input
                    id="quantity"
                    type="text"
                    placeholder="e.g., 2 packs"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    required
                    className="h-12 border-2 border-gray-200 focus:border-[#0D9488] focus:ring-0 rounded-xl"
                  />
                </div>
                
                <div>
                  <Label htmlFor="notes" className="font-mono text-sm font-semibold text-[#0A2540] mb-2 block">
                    ADDITIONAL NOTES (OPTIONAL)
                  </Label>
                  <Textarea
                    id="notes"
                    placeholder="Any specific requirements or questions..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="min-h-24 border-2 border-gray-200 focus:border-[#0D9488] focus:ring-0 rounded-xl resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-[#0D9488] hover:bg-[#0D9488]/90 text-white rounded-full h-14 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-5 h-5" />
                  Continue on WhatsApp
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
