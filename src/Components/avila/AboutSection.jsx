import React from "react";
import { motion } from "framer-motion";
import { Award, Handshake, ClipboardCheck, Construction } from "lucide-react";

// Mapeamento de Ícones para renderização direta
const iconMap = {
  Award,
  Handshake,
  ClipboardCheck,
  Construction
};

export default function AboutSection() {
  const stats = [
    { icon: "Award", label: "Anos de Excelência", value: "+40" },
    { icon: "Handshake", label: "Parcerias de Sucesso em Todo o Território Nacional", value: "+200" },
    { icon: "ClipboardCheck", label: "Projetos Concluídos", value: "+2.600" },
    { icon: "Construction", label: "de m² Construídos", value: "+30.000.000" }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D2A39] mb-6">
              Precisão Encontra
              <span className="text-gray-600"> Inovação</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Na AVILA Engenharia Estrutural, combinamos décadas de experiência com
              tecnologia de ponta para entregar soluções estruturais que superam expectativas.
              Nosso compromisso com precisão e inovação nos tornou um parceiro confiável para
              arquitetos, empreiteiros e desenvolvedores em todo o mundo.
            </p>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              De arranha-céus complexos a designs intrincados de pontes, abordamos cada projeto
              com atenção meticulosa aos detalhes e um foco inabalável em segurança,
              sustentabilidade e integridade estrutural.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, index) => {
              const IconComponent = iconMap[stat.icon]; // Pega o componente do mapa
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-[#1D2A39] rounded-full flex items-center justify-center mx-auto mb-4">
                    {/* Renderiza o componente do ícone */}
                    {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
                  </div>
                  <div className="text-3xl font-bold text-[#1D2A39] mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}