"use client";

import { motion } from "framer-motion";
import { Heart, Palette, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#bad69b] text-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">About Kate</h2>
          
          <div className="bg-[#bad69b]/60 rounded-2xl p-8 shadow-lg border border-[#6d8c4c]/20">
            <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-800">
              Hi! I&apos;m Kate, a passionate artist who finds magic in the simplicity of pencil and charcoal. 
              Each stroke tells a story, each shadow captures an emotion. My journey with art began as a 
              way to express the beauty I see in everyday moments, and it has evolved into a deep love 
              for creating portraits and illustrations that touch the soul.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-[#6d8c4c] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">With Love</h3>
                <p className="text-gray-700">Every piece is crafted with genuine care and emotional connection</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-[#6d8c4c] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">With Patience</h3>
                <p className="text-gray-700">Each detail is carefully considered and meticulously executed</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-[#6d8c4c] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">With Soul</h3>
                <p className="text-gray-700">Art that captures the essence and spirit of the subject</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
