import { useState } from "react";
import { MessageCircle, Building2, Package, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Procurement() {
  const [formData, setFormData] = useState({
    organization: "",
    medication: "",
    quantity: "",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `BULK ORDER REQUEST\n\nOrganization: ${formData.organization}\nMedication: ${formData.medication}\nQuantity: ${formData.quantity}\n${formData.notes ? `Additional Notes: ${formData.notes}` : ''}`;
    const encodedMessage = encodeURIComponent(message);
    
    window.open(`https://wa.me/2348000000000?text=${encodedMessage}`, "_blank");
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[#0A2540] to-[#0D9488] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItMnptMCAwdjJoLTJ2LTJoMnptMCAwdi0yaDJ2MmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <Building2 className="w-4 h-4 text-[#0D9488]" />
              <span className="text-white font-mono text-sm font-medium">For Institutions & Businesses</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Bulk Procurement Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Hospitals, clinics, pharmacies, and healthcare institutions trust us for their bulk medication needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: Package,
                  title: "Volume Discounts",
                  description: "Special pricing for bulk orders. The more you order, the more you save."
                },
                {
                  icon: Users,
                  title: "Dedicated Account Manager",
                  description: "Get a dedicated point of contact for all your procurement needs."
                },
                {
                  icon: Building2,
                  title: "Institutional Support",
                  description: "Tailored solutions for hospitals, clinics, and healthcare facilities."
                }
              ].map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                    <feature.icon className="w-6 h-6 text-[#0D9488]" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="font-display text-2xl font-bold text-[#0A2540] mb-6">
                Request Bulk Quote
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="organization" className="font-mono text-sm font-semibold text-[#0A2540] mb-2 block">
                    ORGANIZATION NAME *
                  </Label>
                  <Input
                    id="organization"
                    type="text"
                    placeholder="e.g., City General Hospital"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    required
                    className="h-12 border-2 border-gray-200 focus:border-[#0D9488] focus:ring-0 rounded-xl"
                  />
                </div>
                
                <div>
                  <Label htmlFor="bulk-medication" className="font-mono text-sm font-semibold text-[#0A2540] mb-2 block">
                    MEDICATION NAME *
                  </Label>
                  <Input
                    id="bulk-medication"
                    type="text"
                    placeholder="e.g., Antibiotics, IV Fluids"
                    value={formData.medication}
                    onChange={(e) => setFormData({ ...formData, medication: e.target.value })}
                    required
                    className="h-12 border-2 border-gray-200 focus:border-[#0D9488] focus:ring-0 rounded-xl"
                  />
                </div>
                
                <div>
                  <Label htmlFor="bulk-quantity" className="font-mono text-sm font-semibold text-[#0A2540] mb-2 block">
                    QUANTITY *
                  </Label>
                  <Input
                    id="bulk-quantity"
                    type="text"
                    placeholder="e.g., 500 units"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    required
                    className="h-12 border-2 border-gray-200 focus:border-[#0D9488] focus:ring-0 rounded-xl"
                  />
                </div>
                
                <div>
                  <Label htmlFor="bulk-notes" className="font-mono text-sm font-semibold text-[#0A2540] mb-2 block">
                    ADDITIONAL REQUIREMENTS
                  </Label>
                  <Textarea
                    id="bulk-notes"
                    placeholder="Delivery timeline, special requirements..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="min-h-20 border-2 border-gray-200 focus:border-[#0D9488] focus:ring-0 rounded-xl resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-[#0D9488] hover:bg-[#0D9488]/90 text-white rounded-full h-14 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-5 h-5" />
                  Submit Bulk Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
