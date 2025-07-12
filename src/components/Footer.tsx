"use client";

import { Instagram, Twitter, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#bad69b] text-black py-16 border-t border-[#6d8c4c]/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-4">Kate Art Gallery</h3>
              <p className="text-gray-700 mb-6 max-w-md leading-relaxed">
                Creating beautiful pencil and charcoal artwork with love,
                patience, and soul. Each piece tells a story and captures the
                essence of its subject.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6d8c4c] hover:text-black transition-all duration-300 hover:scale-110 p-3 hover:bg-white/20 rounded-full"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6d8c4c] hover:text-black transition-all duration-300 hover:scale-110 p-3 hover:bg-white/20 rounded-full"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="mailto:kate@example.com"
                  className="text-[#6d8c4c] hover:text-black transition-all duration-300 hover:scale-110 p-3 hover:bg-white/20 rounded-full"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#gallery"
                    className="text-gray-700 hover:text-[#6d8c4c] transition-colors"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-700 hover:text-[#6d8c4c] transition-colors"
                  >
                    About Kate
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-700 hover:text-[#6d8c4c] transition-colors"
                  >
                    Commission
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:kate@example.com"
                    className="text-gray-700 hover:text-[#6d8c4c] transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-700">
                <li>Portrait Commissions</li>
                <li>Pet Portraits</li>
                <li>Landscape Art</li>
                <li>Custom Artwork</li>
                <li>Art Consultations</li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-[#6d8c4c]/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-700 flex items-center gap-2 mb-4 md:mb-0">
              Made with <Heart className="w-4 h-4 text-red-500" /> for Kate • ©{" "}
              {new Date().getFullYear()} Kate Art Gallery. All rights reserved.
            </p>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="bg-[#6d8c4c] text-white p-3 rounded-full hover:bg-[#55703a] transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
