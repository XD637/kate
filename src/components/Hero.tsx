"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 bg-[#bad69b] text-black"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-md mb-6"
        >
          Kate Art Gallery
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mt-4 text-gray-700 font-medium mb-3"
        >
          Pencil & Charcoal artwork crafted with love, patience, and soul.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-gray-600 mb-10"
        >
          Where every stroke tells a story and every piece captures emotion
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex gap-6 justify-center flex-wrap mb-12"
        >
          <button
            onClick={() => scrollToSection("gallery")}
            className="group inline-flex items-center rounded-full bg-[#6d8c4c] text-white px-8 py-4 text-lg font-semibold shadow-lg hover:bg-[#55703a] focus:outline-none focus:ring-2 focus:ring-[#6d8c4c] focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            View Gallery
            <motion.div
              className="ml-2"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="group inline-flex items-center rounded-full border-2 border-[#6d8c4c] text-[#6d8c4c] px-8 py-4 text-lg font-semibold shadow-lg hover:bg-[#6d8c4c] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#6d8c4c] focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Commission Artwork
            <motion.div
              className="ml-2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨
            </motion.div>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex gap-6 justify-center"
        >
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6d8c4c] hover:text-black transition-all duration-300 hover:scale-110 p-3 hover:bg-white/20 rounded-full shadow-md hover:shadow-lg"
            aria-label="Follow on Instagram"
          >
            <Instagram className="w-7 h-7" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6d8c4c] hover:text-black transition-all duration-300 hover:scale-110 p-3 hover:bg-white/20 rounded-full shadow-md hover:shadow-lg"
            aria-label="Follow on Twitter"
          >
            <Twitter className="w-7 h-7" />
          </a>
          <a
            href="mailto:kate@example.com"
            className="text-[#6d8c4c] hover:text-black transition-all duration-300 hover:scale-110 p-3 hover:bg-white/20 rounded-full shadow-md hover:shadow-lg"
            aria-label="Send an email"
          >
            <Mail className="w-7 h-7" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        onClick={() => scrollToSection("gallery")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#6d8c4c] hover:text-black transition-colors group"
        aria-label="Scroll to gallery"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">
            Explore Gallery
          </span>
          <div className="w-6 h-10 border-2 border-[#6d8c4c] rounded-full flex justify-center group-hover:border-black transition-colors">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-[#6d8c4c] rounded-full mt-2 group-hover:bg-black transition-colors"
            />
          </div>
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
