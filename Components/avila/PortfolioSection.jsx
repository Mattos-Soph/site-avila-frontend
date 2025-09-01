import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      title: "Metropolitan Bridge Complex",
      category: "Infraestrutura",
      description: "Uma sofisticada ponte estaiada com 800 metros de extensão, apresentando sistemas inovadores de isolamento sísmico e materiais sustentáveis.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      details: ["Extensão: 800m", "Zona Sísmica 4", "Certificação LEED Gold", "Prêmio de Excelência em Engenharia 2023"]
    },
    {
      title: "Skyline Tower",
      category: "Comercial",
      description: "Torre de uso misto de 65 andares com soluções avançadas de engenharia de vento e sistemas de concreto protendido para eficiência ideal.",
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      details: ["65 Andares", "Design de Uso Misto", "Testado em Túnel de Vento", "Estrutura Protendida"]
    },
    {
      title: "Innovation Campus",
      category: "Educacional",
      description: "Instalação de pesquisa de ponta com estruturas de longo vão e princípios de design sustentável integrados.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      details: ["Instalações de Pesquisa", "Design de Longo Vão", "Sistemas Sustentáveis", "Placas de Piso Flexíveis"]
    },
    {
      title: "Transit Hub",
      category: "Transporte",
      description: "Centro de transporte multimodal com sistemas complexos de telhado geométrico e proteção sísmica integrada.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      details: ["Design Multimodal", "Geometria Complexa", "Proteção Sísmica", "Altas Cargas de Tráfego"]
    }
  ];

  const nextProject = () => {
    setSelectedProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setSelectedProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D2A39] mb-6">
            Projetos <span className="text-gray-600">Destacados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Demonstrando nosso compromisso com a excelência em engenharia através de soluções
            estruturais inovadoras que definem horizontes e conectam comunidades.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Project Images */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="bg-[#1D2A39] px-3 py-1 rounded-full text-sm font-medium">
                    {projects[selectedProject].category}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex justify-center gap-4 mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={prevProject}
                className="border-[#1D2A39] text-[#1D2A39] hover:bg-[#1D2A39] hover:text-white"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextProject}
                className="border-[#1D2A39] text-[#1D2A39] hover:bg-[#1D2A39] hover:text-white"
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Project Details */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-[#1D2A39] mb-4">
                  {projects[selectedProject].title}
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {projects[selectedProject].description}
                </p>

                {/* Project Details */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {projects[selectedProject].details.map((detail, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#1D2A39] rounded-full"></div>
                      <span className="text-gray-600 font-medium">{detail}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="bg-[#1D2A39] hover:bg-[#2A3B4D] text-white px-6 py-3 group"
                >
                  Ver Detalhes do Projeto
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Project Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedProject(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === selectedProject
                  ? "bg-[#1D2A39] scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}