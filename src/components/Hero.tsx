"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center text-center px-6 py-24 bg-[#bad69b] text-black mb-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-md">
          Kate Art Gallery
        </h1>
        <p className="text-lg md:text-xl mt-4 text-gray-700 font-medium">
          Pencil & Charcoal artwork crafted with love, patience, and soul.
        </p>

        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <a
            href="#gallery"
            className="inline-block rounded-full bg-[#6d8c4c] text-white px-8 py-3 text-lg font-semibold shadow-md hover:bg-[#55703a] focus:outline-none focus:ring-2 focus:ring-[#6d8c4c] focus:ring-offset-2 transition"
          >
            View Gallery
          </a>
          <a
            href="#contact"
            className="inline-block rounded-full border-2 border-[#6d8c4c] text-[#6d8c4c] px-8 py-3 text-lg font-semibold shadow-md hover:bg-[#6d8c4c] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#6d8c4c] focus:ring-offset-2 transition"
          >
            Commission an Artwork
          </a>
        </div>

        <div className="flex gap-6 justify-center mt-10">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6d8c4c] hover:text-black transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6d8c4c] hover:text-black transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="mailto:kate@example.com"
            className="text-[#6d8c4c] hover:text-black transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
