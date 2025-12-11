import { MessageCircle, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/2348000000000?text=Hello%2C%20I%20need%20help", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:support@carepoint.ng";
  };

  return (
    <footer className="bg-[#0A2540] text-white">
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#0D9488] rounded-xl flex items-center justify-center">
                <span className="font-display font-bold text-white text-xl">C</span>
              </div>
              <span className="font-display text-2xl font-bold">CarePoint</span>
            </div>
            
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Nigeria's trusted platform for authentic medication procurement. 
              Fast, safe, and verified medications delivered to your doorstep.
            </p>
            
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-[#0D9488] rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-display text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "How It Works", href: "#" },
                { label: "Benefits", href: "#" },
                { label: "Bulk Orders", href: "#" },
                { label: "About Us", href: "#" },
                { label: "FAQs", href: "#" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-[#0D9488] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <button
                onClick={handleWhatsAppClick}
                className="flex items-start gap-3 text-gray-400 hover:text-[#0D9488] transition-colors duration-200 w-full text-left"
              >
                <MessageCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white mb-1">WhatsApp</div>
                  <div className="text-sm">+234 800 000 0000</div>
                </div>
              </button>
              
              <button
                onClick={handleEmailClick}
                className="flex items-start gap-3 text-gray-400 hover:text-[#0D9488] transition-colors duration-200 w-full text-left"
              >
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white mb-1">Email</div>
                  <div className="text-sm">support@carepoint.ng</div>
                </div>
              </button>
              
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white mb-1">Address</div>
                  <div className="text-sm">
                    123 Healthcare Avenue,<br />
                    Victoria Island, Lagos,<br />
                    Nigeria
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} CarePoint. All rights reserved.
            </p>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#0D9488] transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0D9488] transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0D9488] transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
