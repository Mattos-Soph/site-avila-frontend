import React from "react";
import { motion } from "framer-motion";
import { Calculator, Building2, Users, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesSection() {
  const services = [
    {
      icon: Calculator,
      title: "Análise Estrutural",
      description: "Avaliações estruturais abrangentes utilizando métodos computacionais avançados e software líder da indústria para garantir desempenho e segurança ideais.",
      features: ["Análise de Carga", "Projeto Sísmico", "Engenharia de Vento", "Análise Dinâmica"]
    },
    {
      icon: Building2,
      title: "Projeto",
      description: "Serviços de design de ponta a ponta, desde o conceito até a construção, entregando planos detalhados que atendem a todos os requisitos regulatórios e excedem os padrões da indústria.",
      features: ["Integração Arquitetônica", "Modelagem 3D", "Documentos de Construção", "Conformidade com Códigos"]
    },
    {
      icon: Users,
      title: "Consultoria em Engenharia",
      description: "Serviços de consultoria especializada fornecendo orientação estratégica, revisões por pares e experiência técnica para apoiar o sucesso do seu projeto em todas as etapas.",
      features: ["Revisão por Pares", "Engenharia de Valor", "Avaliação de Riscos", "Garantia de Qualidade"]
    },
    {
      icon: Lightbulb,
      title: "Soluções Inovadoras",
      description: "Soluções de engenharia de ponta, alavancando as mais recentes tecnologias e metodologias para resolver desafios estruturais complexos de forma eficiente.",
      features: ["Integração BIM", "Foco em Sustentabilidade", "Otimização de Custos", "Materiais Avançados"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
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
            Nossos <span className="text-gray-600">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Soluções abrangentes de engenharia estrutural adaptadas para atender às demandas únicas
            de cada projeto, desde o conceito inicial até a construção final.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1D2A39] to-[#2A3B4D] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-[#1D2A39] mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#1D2A39] rounded-full"></div>
                        <span className="text-sm text-gray-600 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}