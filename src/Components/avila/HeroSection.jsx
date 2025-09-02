import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-20">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#1D2A39] transform rotate-45" />

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.05, x: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-1/4 left-1/6 w-96 h-2 bg-[#BCBCBC]" />

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 0.08, y: 0 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-1/3 left-1/3 w-32 h-32 border-4 border-[#E1E1E1] transform rotate-12" />

      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12">
          <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/50f524ad0_LogoAzulEscura-FundoTransparente.png" alt="Logotipo da AVILA" className="h-40 md:h-48 mx-auto" />
        </motion.div>

        {/* Main Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16">

          <h2 className="text-3xl md:text-5xl font-bold text-[#1D2A39] leading-tight mb-6">
            Engenharia de Estabilidade.
            <br />
            <span className="text-gray-600">Construindo o Futuro.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Soluções estruturais orientadas pela precisão que transformam visões arquitetônicas
            em realidades duradouras através da excelência em engenharia inovadora.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">

          <Button
            onClick={scrollToContact}
            className="bg-[#1D2A39] hover:bg-[#2A3B4D] text-white px-8 py-4 text-lg font-semibold group transition-all duration-300">

            Iniciar Seu Projeto
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            onClick={scrollToAbout}
            className="border-[#1D2A39] text-[#1D2A39] hover:bg-[#1D2A39] hover:text-white px-8 py-4 text-lg font-semibold">

            Saiba Mais
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col items-center cursor-pointer"
          onClick={scrollToAbout}>

          <span className="text-sm text-gray-500 mb-3 font-medium">Descubra Nossa Expertise</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}>

            <ArrowDown className="w-6 h-6 text-[#1D2A39]" />
          </motion.div>
        </motion.div>
      </div>
    </section>);

}