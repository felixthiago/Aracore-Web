"use client"

import { Check, X, Star, Zap, Crown } from "lucide-react"
import { AracoreButton } from "../ui/aracore-buttons"

// particulinhas
import FooterParticleScene from "../animations/particles"
import ParticleLoader from "../animations/particles"
import { Suspense } from "react"

export default function PricingSection() {
  const pricingTiers = [
    {
      name: "Comum",
      price: "Gratuito",
      period: "",
      description: "Perfeito para começar sua jornada educacional",
      icon: <Star className="h-6 w-6" />,
      features: [
        "Acesso a 100 Questões de vestibulares",
        "1 simulado por mês",
        "Suporte por email",
        "Progresso individual",
        "Correção de redação somente por I.A",
      ],
      limitations: ["Sem acesso a simulados", "1 Redação por mês", "Sem mentoria personalizada"],
      buttonText: "7 dias gratuitos!",
      buttonVariant: "secondary" as const,
      popular: false,
    },
    {
      name: "Extensivo",
      price: "R$ 49",
      period: "/mês",
      description: "Para quem realmente quer se preparar para o vestibular",
      icon: <Zap className="h-6 w-6" />,
      features: [
        "Acesso ilimitado a todos as questões",
        "Simulados ilimitados",
        "Professores a seu dispor 24/7",
        "Correção de redação com feedback personalizado por professores de gramática",
        "Dashboard com progresso avançado",
        "Suporte direto na plataforma"
      ],
      limitations: [],
      buttonText: "Assinar Agora",
      buttonVariant: "primary" as const,
      popular: true,
    },
    {
      name: "Extensivo Plus",
      price: "R$ 1.000.000",
      period: "/mês",
      description: "Solução completa para equipes e organizações",
      icon: <Crown className="h-6 w-6" />,
      features: [
        "Tudo do plano Extensivo",
        "Dashboard administrativo",
        "Relatórios personalizados",
        "Mentoria individual",
        "Planejamento de estudos personalizado",
        "Aulas particulares com professores com experiência",
        "Acesso a eventos exclusivos",
        "Suporte prioritário",
      ],
      limitations: [],
      buttonText: "Assinar agora!",
      buttonVariant: "promotional" as const,
      popular: false,
    },
  ]

  return (
    <section className="relative min-h-screen bg-black overflow-hidden py-20">
      {/* particulinhas */}
      <Suspense fallback={<ParticleLoader />}>
        <FooterParticleScene />
      </Suspense>

      <div className="relative z-10 px-4 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Planos
            </span>
            <span className="block text-white">Educacionais</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Escolha o plano ideal para acelerar seu aprendizado e alcançar seus objetivos educacionais
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border transition-all duration-300 hover:bg-white/10 hover:scale-105 ${
                tier.popular
                  ? "border-blue-500/50 shadow-2xl shadow-blue-500/20 lg:scale-105"
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              {/* mais comprado */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Mais Comprado!
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div
                    className={`p-3 rounded-2xl ${
                      tier.popular ? "bg-gradient-to-r from-blue-500 to-purple-500" : "bg-gray-800"
                    }`}
                  >
                    {tier.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-gray-400 mb-4">{tier.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  {tier.period && <span className="text-gray-400 ml-1">{tier.period}</span>}
                </div>
              </div>

              {/* Features List */}
              <div className="mb-8">
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                  {tier.limitations.map((limitation, limitIndex) => (
                    <li key={limitIndex} className="flex items-start gap-3">
                      <X className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-500">{limitation}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <AracoreButton variant={tier.buttonVariant} className="w-full justify-center">
                  {tier.buttonText}
                </AracoreButton>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Garantia de 30 dias</h3>
            <p className="text-gray-300 ">
              Experimente qualquer plano por 30 dias. Se não ficar satisfeito, devolvemos 100% do seu dinheiro.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
