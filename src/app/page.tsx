"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Film,
  Palette,
  Music,
  Clock,
  Sparkles,
  Award,
  Heart,
  Check,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { VideoCard } from "@/components/VideoCard";
import { VideoModal } from "@/components/VideoModal";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { portfolioItems, categories } from "@/data/portfolio";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "/images/hero.jpg",
    "/images/thumbnail-gym-1.jpg",
    "/images/thumbnail-vlog-1.jpg",
    "/images/thumbnail-ent-1.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const handlePlay = (driveUrl: string) => {
    setActiveVideo(driveUrl);
    setModalOpen(true);
  };

  const stats = [
    { number: "10+", label: "Films Edited", icon: Film },
    { number: "100%", label: "Client Satisfaction", icon: Heart },
    { number: "48h", label: "Average Turnaround", icon: Clock },
    { number: "4K+", label: "Resolution Standard", icon: Sparkles },
  ];

  const expertise = [
    {
      icon: Film,
      title: "Cinematic Storytelling",
      description:
        "Every frame is purposefully placed to build a compelling narrative with emotional depth and seamless flow.",
    },
    {
      icon: Palette,
      title: "Color Grading",
      description:
        "Professional color science that transforms raw footage into a cinematic masterpiece with mood and atmosphere.",
    },
    {
      icon: Music,
      title: "Sound Design",
      description:
        "Immersive audio landscapes blending ambient sounds, music, and voiceovers into a cohesive, high-impact experience.",
    },
    {
      icon: Award,
      title: "Premium Pacing",
      description:
        "Refined editorial rhythm that holds attention and builds emotion, crafted with precision timing.",
    },
  ];

  const deliverables = [
    "High-End Cinematic Video Delivery",
    "Story-Driven Sound Design & Audio Mixing",
    "Professional Color Grading & Correction",
    "Custom Title Cards & Typography",
    "Licensed Music Curation",
    "Fast Turnaround (2â€“3 Weeks)",
    "Two Rounds of Revisions",
    "4K Export Delivery",
  ];

  return (
    <>
      <Navbar />
      <VideoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        driveUrl={activeVideo}
      />

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• HERO SECTION â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image Slider */}
        <div className="absolute inset-0 z-0 bg-charcoal-950">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={heroImages[currentImageIndex]}
                alt="Cinematic production scene"
                fill
                className="object-cover"
                priority
                quality={90}
              />
            </motion.div>
          </AnimatePresence>
          {/* Overlays */}
          <div className="absolute inset-0 bg-charcoal-950/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/50 via-transparent to-charcoal-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/40 via-transparent to-charcoal-950/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24 sm:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Decorative line */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-cyan-600/60" />
              <span className="text-cyan-600 text-xs uppercase tracking-[0.4em] font-body">
                Premium Video Editing
              </span>
              <div className="h-px w-12 bg-cyan-600/60" />
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-slate-100 leading-[1.1] tracking-wide">
              Crafting High-End
              <br />
              <span className=" text-cyan-500">Cinematic</span> Content
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="mt-8 text-lg md:text-xl text-slate-200/60 font-body max-w-2xl mx-auto leading-relaxed"
          >
            Premium video editing for weddings, fitness, vlogs, and creators.
            <br className="hidden md:block" />
            Where every frame tells a powerful story.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-charcoal-950 font-semibold px-8 py-4 text-sm uppercase tracking-widest transition-all duration-300 font-body"
            >
              View Portfolio
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-slate-200/30 hover:border-cyan-600 text-slate-100 hover:text-cyan-500 px-8 py-4 text-sm uppercase tracking-widest transition-all duration-300 font-body"
            >
              Work With Us
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <a href="#portfolio" className="flex flex-col items-center gap-2 group">
            <span className="text-slate-200/30 text-xs uppercase tracking-widest font-body group-hover:text-cyan-600 transition-colors">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown
                size={20}
                className="text-cyan-600/60 group-hover:text-cyan-500 transition-colors"
              />
            </motion.div>
          </a>
        </motion.div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• PORTFOLIO SECTION â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section id="portfolio" className="py-24 md:py-32 px-6 bg-charcoal-950">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Featured Work"
            subtitle="A curated selection of our finest cinematic projects across weddings, fitness, vlogs, and short-form content."
          />

          {/* Category Filters */}
          <AnimatedSection delay={0.2} className="mt-12 mb-16">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-2.5 text-xs uppercase tracking-widest font-body font-medium transition-all duration-300 border ${
                    activeCategory === cat.id
                      ? "bg-cyan-600 text-charcoal-950 border-cyan-600"
                      : "bg-transparent text-slate-200/60 border-charcoal-700 hover:border-cyan-600/50 hover:text-slate-100"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Video Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filteredItems.map((item, index) => (
              <VideoCard
                key={item.id}
                title={item.title}
                couple={item.couple}
                location={item.location}
                duration={item.duration}
                category={item.category}
                thumbnail={item.thumbnail}
                driveUrl={item.driveUrl}
                onPlay={handlePlay}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• ABOUT SECTION â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section id="about" className="py-24 md:py-32 px-6 bg-charcoal-900">
        {/* Decorative top line */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-600/30 to-transparent mb-24" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Text Content */}
            <AnimatedSection direction="left">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-cyan-600" />
                <span className="text-cyan-600 text-xs uppercase tracking-[0.3em] font-body">
                  About The Studio
                </span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-slate-100 tracking-wide leading-tight">
                Dedicated to the Art of{" "}
                <span className=" text-cyan-500">Visual Storytelling</span>
              </h2>
              <p className="mt-8 text-slate-200/60 font-body leading-relaxed text-lg">
                With a growing roster of premium edits under our belt,
                Insigio Editz specializes in transforming raw footage
                into dynamic, high-impact cinematic experiences â€” from weddings and
                fitness content to vlogs and short-form creator videos.
              </p>
              <p className="mt-4 text-slate-200/50 font-body leading-relaxed">
                We believe every video should be more than a recap â€” it
                should be a piece of art that moves you every time you watch it.
                From the first frame to the last, we craft stories that resonate
                with emotion and impact.
              </p>
            </AnimatedSection>

            {/* Right: Expertise Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {expertise.map((item, index) => (
                <AnimatedSection
                  key={item.title}
                  delay={index * 0.15}
                  direction="up"
                >
                  <div className="p-6 bg-charcoal-800/50 border border-charcoal-700/50 hover:border-cyan-600/30 transition-all duration-500 group">
                    <item.icon
                      size={28}
                      className="text-cyan-600 mb-4 group-hover:text-cyan-500 transition-colors"
                    />
                    <h3 className="font-heading text-xl text-slate-100 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-200/50 text-sm font-body leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Stats Row */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-center group">
                  <stat.icon
                    size={24}
                    className="text-cyan-600/60 mx-auto mb-3 group-hover:text-cyan-500 transition-colors"
                  />
                  <div className="font-heading text-4xl md:text-5xl font-light text-slate-100">
                    {stat.number}
                  </div>
                  <div className="mt-2 text-slate-200/40 text-xs uppercase tracking-widest font-body">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 md:py-32 px-6 bg-charcoal-900">
        {/* Decorative top line */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-600/30 to-transparent mb-24" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Info */}
            <AnimatedSection direction="left">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-cyan-600" />
                <span className="text-cyan-600 text-xs uppercase tracking-[0.3em] font-body">
                  Get In Touch
                </span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-slate-100 tracking-wide leading-tight">
                Let&apos;s Create Something{" "}
                <span className=" text-cyan-500">Beautiful</span>
              </h2>
              <p className="mt-8 text-slate-200/60 font-body leading-relaxed text-lg">
                Whether you&apos;re a wedding videographer seeking a trusted
                editing partner, or a couple looking for a premium film
                experience â€” we&apos;d love to hear from you.
              </p>
              <p className="mt-4 text-slate-200/50 font-body leading-relaxed">
                Fill out the form with your project details, and we&apos;ll get
                back to you within 24 hours to discuss how we can bring your
                vision to life.
              </p>

              <div className="mt-12 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center border border-charcoal-700 text-cyan-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div>
                    <div className="text-slate-200/40 text-xs uppercase tracking-wider font-body">
                      Email
                    </div>
                    <div className="text-slate-100 font-body">
                      insigiotech@gmail.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center border border-charcoal-700 text-cyan-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <div className="text-slate-200/40 text-xs uppercase tracking-wider font-body">
                      Phone
                    </div>
                    <div className="text-slate-100 font-body">
                      03052152155
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Form */}
            <AnimatedSection direction="right" delay={0.2}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
