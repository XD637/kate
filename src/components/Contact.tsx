"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  MessageCircle,
  User,
  Send,
  Phone,
  MapPin,
  Clock,
  Palette,
  DollarSign,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    artworkType: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage(
        "Thank you for your interest! I'll get back to you within 24 hours."
      );
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        artworkType: "",
        budget: "",
        message: "",
      });
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-[#bad69b] text-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s Create Together
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Ready to commission a custom artwork? I&apos;d love to bring your
            vision to life with pencil and charcoal.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-[#bad69b]/60 rounded-2xl p-6 shadow-lg border border-[#6d8c4c]/20">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Mail className="w-6 h-6 text-[#6d8c4c]" />
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#6d8c4c]" />
                  <a
                    href="mailto:kate@example.com"
                    className="text-gray-700 hover:text-[#6d8c4c] transition-colors"
                  >
                    kate@example.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#6d8c4c]" />
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#6d8c4c]" />
                  <span className="text-gray-700">Available Worldwide</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#6d8c4c]" />
                  <span className="text-gray-700">
                    Response within 24 hours
                  </span>
                </div>
              </div>
            </div>

            {/* Commission Process */}
            <div className="bg-[#bad69b]/60 rounded-2xl p-6 shadow-lg border border-[#6d8c4c]/20">
              <h3 className="text-2xl font-bold mb-6">Commission Process</h3>
              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: "Consultation",
                    desc: "We discuss your vision and requirements",
                  },
                  {
                    step: 2,
                    title: "Sketch & Quote",
                    desc: "Initial sketch and pricing proposal",
                  },
                  {
                    step: 3,
                    title: "Creation",
                    desc: "Careful crafting of your artwork",
                  },
                  {
                    step: 4,
                    title: "Delivery",
                    desc: "Safe packaging and shipping",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <div className="bg-[#6d8c4c] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-gray-700 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Guide */}
            <div className="bg-[#bad69b]/60 rounded-2xl p-6 shadow-lg border border-[#6d8c4c]/20">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-[#6d8c4c]" />
                Pricing Guide
              </h3>
              <div className="space-y-3">
                {[
                  { size: "8x10 Portrait", price: "$150" },
                  { size: "11x14 Portrait", price: "$250" },
                  { size: "16x20 Portrait", price: "$400" },
                  { size: "Custom Size", price: "Quote" },
                ].map((item) => (
                  <div key={item.size} className="flex justify-between">
                    <span className="font-medium">{item.size}</span>
                    <span className="text-[#6d8c4c] font-semibold">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-700 mt-4 p-3 bg-[#6d8c4c]/10 rounded-lg">
                💡 Prices vary based on complexity, medium, and size. Contact
                for detailed quote.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-[#bad69b]/60 rounded-2xl p-8 shadow-lg border border-[#6d8c4c]/20">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Palette className="w-6 h-6 text-[#6d8c4c]" />
                Commission Request Form
              </h3>

              {submitMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg text-green-800"
                >
                  {submitMessage}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-[#6d8c4c]" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-white/80 border border-[#6d8c4c]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6d8c4c] focus:border-transparent transition-all"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-[#6d8c4c]" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-white/80 border border-[#6d8c4c]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6d8c4c] focus:border-transparent transition-all"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Phone and Subject Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2"
                    >
                      Phone Number (Optional)
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-[#6d8c4c]" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-white/80 border border-[#6d8c4c]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6d8c4c] focus:border-transparent transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/80 border border-[#6d8c4c]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6d8c4c] focus:border-transparent transition-all"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="commission">New Commission</option>
                      <option value="inquiry">General Inquiry</option>
                      <option value="pricing">Pricing Information</option>
                      <option value="timeline">Timeline Questions</option>
                    </select>
                  </div>
                </div>

                {/* Artwork Type and Budget Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="artworkType"
                      className="block text-sm font-medium mb-2"
                    >
                      Artwork Type
                    </label>
                    <select
                      id="artworkType"
                      name="artworkType"
                      value={formData.artworkType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/80 border border-[#6d8c4c]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6d8c4c] focus:border-transparent transition-all"
                    >
                      <option value="">Select artwork type</option>
                      <option value="portrait">Portrait</option>
                      <option value="pet-portrait">Pet Portrait</option>
                      <option value="landscape">Landscape</option>
                      <option value="still-life">Still Life</option>
                      <option value="abstract">Abstract</option>
                      <option value="custom">Custom Request</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium mb-2"
                    >
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/80 border border-[#6d8c4c]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6d8c4c] focus:border-transparent transition-all"
                    >
                      <option value="">Select budget range</option>
                      <option value="100-200">$100 - $200</option>
                      <option value="200-300">$200 - $300</option>
                      <option value="300-500">$300 - $500</option>
                      <option value="500+">$500+</option>
                      <option value="discuss">Let&apos;s Discuss</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Project Details *
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-[#6d8c4c]" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full pl-12 pr-4 py-3 bg-white/80 border border-[#6d8c4c]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6d8c4c] focus:border-transparent resize-none transition-all"
                      placeholder="Tell me about your vision, preferred size, timeline, reference photos, and any specific details..."
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#6d8c4c] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#55703a] focus:outline-none focus:ring-2 focus:ring-[#6d8c4c] focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Commission Request
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-[#6d8c4c]/20 text-center">
                <p className="text-gray-600">
                  Prefer email? Contact me directly at{" "}
                  <a
                    href="mailto:kate@example.com"
                    className="text-[#6d8c4c] hover:underline font-medium"
                  >
                    kate@example.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
