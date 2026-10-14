"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryItems, galleryCategories, GalleryCategory, GalleryItem } from "@/data/gallery";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Camera, X, Maximize2 } from "lucide-react";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-[#080808] text-white pt-12 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/30 px-3.5 py-1.5 mb-6 text-xs font-mono font-bold tracking-widest uppercase text-brand-red">
          <Camera className="w-3.5 h-3.5 text-brand-red" />
          <span>FACILITY RECON & VISUAL ARCHIVE</span>
        </div>
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-white leading-none">
          THE IRON <span className="text-gradient-fire">VAULT.</span>
        </h1>
        <p className="mt-6 text-base sm:text-xl text-zinc-400 max-w-3xl leading-relaxed">
          Step inside our 18,000 sq ft Sector 7 facility. Built with Swedish competition steel, calibrated rigs, high-intensity turf lanes, and thermal contrast suites.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap gap-2 border-b border-zinc-800 pb-4">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-brand-red text-white shadow-[0_0_15px_rgba(240,68,53,0.35)]"
                  : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative h-80 sm:h-96 w-full overflow-hidden bg-zinc-950 border border-zinc-800 hover:border-brand-red cursor-pointer transition-all duration-300"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center filter grayscale contrast-125 brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Category tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 bg-black/80 border border-zinc-700 text-zinc-300">
                  {item.category}
                </span>
              </div>

              {/* Expand icon on hover */}
              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 p-2 border border-zinc-700 text-brand-red">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <h3 className="font-display text-2xl uppercase tracking-wider text-white group-hover:text-brand-red transition-colors">
                  {item.caption}
                </h3>
                <p className="text-xs text-zinc-400 font-mono mt-1 line-clamp-1">
                  {item.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image Preview"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#111111] border border-zinc-800 p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black border border-zinc-700 text-zinc-300 hover:text-white hover:border-brand-red transition-colors"
              aria-label="Close Preview"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative h-[55vh] sm:h-[70vh] w-full overflow-hidden bg-black">
              <Image
                src={selectedItem.src}
                alt={selectedItem.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <div className="mt-4 pt-4 border-t border-zinc-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono uppercase text-brand-red">
                  {selectedItem.category}
                </span>
                <h3 className="font-display text-2xl uppercase text-white mt-0.5">
                  {selectedItem.caption}
                </h3>
              </div>
              <span className="text-xs font-mono text-zinc-500 uppercase hidden sm:inline">
                SECTOR 07 RECON ARCHIVE
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
