"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Eye, X, Heart, Palette, Image as ImageIcon } from "lucide-react";

const Gallery = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<number | null>(null);
  const [filterCategory, setFilterCategory] = useState("all");

  const artworks = [
    {
      id: 1,
      title: "Portrait Study #1",
      description:
        "A detailed charcoal portrait capturing raw human emotion and depth",
      medium: "Charcoal",
      size: "11x14 inches",
      category: "portrait",
      price: "$250",
      year: "2024",
    },
    {
      id: 2,
      title: "Nature's Whisper",
      description:
        "Delicate pencil drawing of botanical elements with intricate details",
      medium: "Graphite Pencil",
      size: "9x12 inches",
      category: "nature",
      price: "$180",
      year: "2024",
    },
    {
      id: 3,
      title: "Urban Dreams",
      description:
        "Dynamic cityscape rendered in charcoal with dramatic light and shadow",
      medium: "Charcoal",
      size: "16x20 inches",
      category: "landscape",
      price: "$320",
      year: "2024",
    },
    {
      id: 4,
      title: "Silent Reflection",
      description:
        "Intimate portrait study focusing on contemplative expression",
      medium: "Graphite Pencil",
      size: "8x10 inches",
      category: "portrait",
      price: "$200",
      year: "2024",
    },
    {
      id: 5,
      title: "Bloom",
      description:
        "Botanical illustration showcasing the beauty of natural forms",
      medium: "Pencil & Charcoal",
      size: "12x16 inches",
      category: "nature",
      price: "$280",
      year: "2024",
    },
    {
      id: 6,
      title: "Memory Lane",
      description: "Nostalgic landscape piece evoking childhood memories",
      medium: "Charcoal",
      size: "14x18 inches",
      category: "landscape",
      price: "$300",
      year: "2024",
    },
  ];

  const categories = [
    { id: "all", label: "All Works" },
    { id: "portrait", label: "Portraits" },
    { id: "nature", label: "Nature" },
    { id: "landscape", label: "Landscapes" },
  ];

  const filteredArtworks =
    filterCategory === "all"
      ? artworks
      : artworks.filter((artwork) => artwork.category === filterCategory);

  return (
    <section id="gallery" className="py-20 bg-[#bad69b] text-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">My Gallery</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            A collection of pencil and charcoal artworks, each piece crafted
            with love, patience, and soul
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilterCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filterCategory === category.id
                    ? "bg-[#6d8c4c] text-white shadow-md"
                    : "bg-[#bad69b]/60 text-gray-700 hover:bg-[#6d8c4c]/20 border border-[#6d8c4c]/30"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {filteredArtworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedArtwork(artwork.id)}
            >
              <div className="bg-[#bad69b]/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#6d8c4c]/20 hover:border-[#6d8c4c]/40">
                {/* Image Placeholder */}
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-300 via-gray-200 to-gray-100">
                    <div className="text-center">
                      <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500 font-medium">
                        Artwork Preview
                      </p>
                      <p className="text-sm text-gray-400">{artwork.medium}</p>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#6d8c4c]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Eye className="w-8 h-8 mx-auto mb-2" />
                      <p className="font-semibold">View Details</p>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#6d8c4c] transition-colors">
                    {artwork.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-3 line-clamp-2">
                    {artwork.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Palette className="w-4 h-4 text-[#6d8c4c]" />
                      <span className="text-sm font-medium text-gray-600">
                        {artwork.medium}
                      </span>
                    </div>
                    <span className="text-lg font-bold text-[#6d8c4c]">
                      {artwork.price}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Artwork Modal */}
        {selectedArtwork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedArtwork(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-[#bad69b] rounded-3xl p-8 max-w-4xl max-h-[90vh] overflow-auto w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const artwork = artworks.find((a) => a.id === selectedArtwork);
                return artwork ? (
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Image */}
                    <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <ImageIcon className="w-20 h-20 text-gray-400 mx-auto mb-3" />
                        <p className="text-gray-500 font-medium text-lg">
                          Full Artwork View
                        </p>
                        <p className="text-gray-400">{artwork.medium}</p>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-6">
                          <h3 className="text-3xl font-bold text-black">
                            {artwork.title}
                          </h3>
                          <button
                            onClick={() => setSelectedArtwork(null)}
                            className="text-[#6d8c4c] hover:text-black transition-colors p-2 hover:bg-[#6d8c4c]/10 rounded-full"
                          >
                            <X className="w-6 h-6" />
                          </button>
                        </div>

                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                          {artwork.description}
                        </p>

                        <div className="space-y-4 mb-8">
                          <div className="flex justify-between py-2 border-b border-[#6d8c4c]/20">
                            <span className="font-medium text-gray-600">
                              Medium:
                            </span>
                            <span className="font-semibold text-black">
                              {artwork.medium}
                            </span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-[#6d8c4c]/20">
                            <span className="font-medium text-gray-600">
                              Size:
                            </span>
                            <span className="font-semibold text-black">
                              {artwork.size}
                            </span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-[#6d8c4c]/20">
                            <span className="font-medium text-gray-600">
                              Year:
                            </span>
                            <span className="font-semibold text-black">
                              {artwork.year}
                            </span>
                          </div>
                          <div className="flex justify-between py-2">
                            <span className="font-medium text-gray-600">
                              Price:
                            </span>
                            <span className="font-bold text-[#6d8c4c] text-xl">
                              {artwork.price}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <button className="flex-1 bg-[#6d8c4c] text-white py-3 px-6 rounded-full font-semibold hover:bg-[#55703a] transition-colors flex items-center justify-center gap-2">
                          <Heart className="w-5 h-5" />
                          Add to Favorites
                        </button>
                        <button
                          onClick={() => {
                            setSelectedArtwork(null);
                            document
                              .getElementById("contact")
                              ?.scrollIntoView({ behavior: "smooth" });
                          }}
                          className="flex-1 border-2 border-[#6d8c4c] text-[#6d8c4c] py-3 px-6 rounded-full font-semibold hover:bg-[#6d8c4c] hover:text-white transition-colors"
                        >
                          Commission Similar
                        </button>
                      </div>
                    </div>
                  </div>
                ) : null;
              })()}
            </motion.div>
          </motion.div>
        )}

        {/* Empty State */}
        {filteredArtworks.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-xl text-gray-600">
              No artworks found in this category
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};
export default Gallery;
