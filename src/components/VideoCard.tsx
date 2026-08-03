"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play, MapPin } from "lucide-react";

interface VideoCardProps {
  title: string;
  couple: string;
  location: string;
  duration: string;
  category: string;
  thumbnail: string;
  driveUrl: string;
  onPlay: (driveUrl: string) => void;
  index: number;
}

export function VideoCard({
  title,
  couple,
  location,
  duration,
  category,
  thumbnail,
  driveUrl,
  onPlay,
  index
}: VideoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="bg-charcoal-900 border border-charcoal-700/50 overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:border-gold-600/30 cursor-pointer"
      onClick={() => onPlay(driveUrl)}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-charcoal-950/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
          <div className="border-2 border-gold-500 bg-charcoal-950/50 rounded-full p-4 transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <Play size={48} className="text-ivory-100 ml-1" fill="currentColor" />
          </div>
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-3 right-3 bg-charcoal-950/80 text-ivory-100 text-xs px-2 py-1 rounded backdrop-blur-sm">
          {duration}
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-gold-600/90 text-ivory-100 text-xs px-2 py-1 uppercase tracking-wider font-semibold rounded backdrop-blur-sm">
          {category}
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-heading text-xl text-ivory-100 mb-2 line-clamp-1">{title}</h3>
        <div className="flex items-center text-ivory-200/60 text-sm">
          <span className="font-medium mr-2">{couple}</span>
          <span className="w-1 h-1 rounded-full bg-charcoal-500 mx-2"></span>
          <MapPin size={14} className="mr-1 inline-block" />
          <span className="truncate">{location}</span>
        </div>
      </div>
    </motion.div>
  );
}
