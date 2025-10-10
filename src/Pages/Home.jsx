import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Building2, Calculator, Users, Lightbulb, Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

import HeroSection from "../Components/avila/HeroSection";
import ServicesSection from "../Components/avila/ServicesSection";
import PortfolioSection from "../Components/avila/PortfolioSection";
import ContactSection from "../Components/avila/ContactSection";
import AboutSection from "../Components/avila/AboutSection";
import NavigationBar from "../Components/avila/NavigationBar";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "services", "portfolio", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <NavigationBar activeSection={activeSection} />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-[#1D2A39] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/50f524ad0_LogoAzulEscura-FundoTransparente.png" alt="Logotipo da AVILA" className="h-16 mb-6" style={{ filter: 'brightness(0) invert(1) grayscale(1) contrast(3)' }} />
              <p className="text-gray-300 leading-relaxed">
                Excelência em engenharia através de precisão, inovação e compromisso inabalável com a integridade estrutural.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Serviços</h4>
              <ul className="space-y-3 text-gray-300">
                <li>Análise Estrutural</li>
                <li>Projeto de Estruturas</li>
                <li>Consultoria em Engenharia</li>
                <li>Soluções Inovadoras</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Contato</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4" />
                  <span>14 3402-0553</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4" />
                  <span>projetos@avilaeng.com.br</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4" />
                  <span>Marília, SP</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 - Avila Engenharia de Estruturas | Todos os direitos reservados. </p>
          </div>
        </div>
      </footer>
    </div>
  );
}