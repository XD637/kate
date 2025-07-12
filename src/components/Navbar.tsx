"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "gallery", label: "Gallery" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`w-full backdrop-blur-md border-b border-[#6d8c4c]/20 shadow-sm sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#bad69b]/95" : "bg-[#bad69b]/80"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="text-2xl md:text-3xl font-bold tracking-wide text-[#6d8c4c] hover:text-black transition-colors"
        >
          Kate Art Gallery
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-base font-medium">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 rounded-full text-[#6d8c4c] transition-all duration-300 hover:bg-[#6d8c4c]/10 hover:text-black relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#6d8c4c] transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[#6d8c4c] hover:text-black transition-colors p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#bad69b]/95 backdrop-blur-md border-t border-[#6d8c4c]/20">
          <ul className="container mx-auto px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 rounded-lg text-[#6d8c4c] hover:bg-[#6d8c4c]/10 hover:text-black transition-all duration-300 font-medium"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
