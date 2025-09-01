import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    project: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", company: "", phone: "", project: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Nos envie um Email",
      details: ["projetos@avilaeng.com.br"],
      description: "Entre em contato para consultas sobre projetos"
    },
    {
      icon: Phone,
      title: "Ligue para Nós",
      details: ["14 3402-0553"],
      description: "Fale com nossos engenheiros especialistas"
    },
    {
      icon: MapPin,
      title: "Visite-nos",
      details: ["Av. das Esmeraldas, 1215"],
      description: "Agende uma consulta em nosso escritório"
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      details: ["Seg-Sex: 8:00 - 12:00, 13:30 - 18:00"],
      description: "Estamos aqui quando você precisar"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
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
            Inicie Seu <span className="text-gray-600">Projeto</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pronto para dar vida à sua visão? Entre em contato com nossa equipe de engenheiros
            especialistas para discutir suas necessidades de engenharia estrutural e começar hoje mesmo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#1D2A39] rounded-xl flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-[#1D2A39] mb-2">{info.title}</h3>
                          {info.details.map((detail, i) => (
                            <p key={i} className="text-gray-600 font-medium">{detail}</p>
                          ))}
                          <p className="text-sm text-gray-500 mt-2">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#1D2A39] mb-6">Nos envie uma Mensagem</h3>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-[#1D2A39] mb-2">Mensagem Enviada!</h4>
                    <p className="text-gray-600">Retornaremos em 24 horas.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-[#1D2A39] mb-2">
                          Nome Completo *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="border-gray-300 focus:border-[#1D2A39] focus:ring-[#1D2A39]"
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#1D2A39] mb-2">
                          Endereço de Email *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="border-gray-300 focus:border-[#1D2A39] focus:ring-[#1D2A39]"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-[#1D2A39] mb-2">
                          Empresa
                        </label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="border-gray-300 focus:border-[#1D2A39] focus:ring-[#1D2A39]"
                          placeholder="Nome da sua empresa"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#1D2A39] mb-2">
                          Número de Telefone
                        </label>
                        <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="border-gray-300 focus:border-[#1D2A39] focus:ring-[#1D2A39]"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#1D2A39] mb-2">
                        Tipo de Projeto
                      </label>
                      <Input
                        name="project"
                        value={formData.project}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-[#1D2A39] focus:ring-[#1D2A39]"
                        placeholder="Ex: Edifício Comercial, Ponte, Residencial"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#1D2A39] mb-2">
                        Detalhes do Projeto *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="border-gray-300 focus:border-[#1D2A39] focus:ring-[#1D2A39] resize-none"
                        placeholder="Conte-nos sobre os requisitos do seu projeto, cronograma e quaisquer desafios específicos..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#1D2A39] hover:bg-[#2A3B4D] text-white py-3 text-lg font-semibold group"
                    >
                      Enviar Mensagem
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}