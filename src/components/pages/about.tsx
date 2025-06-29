"use client"

import { Heart, Target, Users, Zap, Award, Globe } from "lucide-react"
import FooterParticleScene from "../animations/particles"
import ParticleLoader from "../animations/particles"
import { NumberTicker } from "../magicui/number-ticker"

import { Suspense } from "react"

export default function AboutSection() {
  const stats = [
    { number: "24K+", label: "Estudantes Ativos", icon: <Users className="h-6 w-6" /> },
    { number: "420+", label: "Instituições Parceiras", icon: <Globe className="h-6 w-6" /> },
    { number: "69%", label: "Taxa de Satisfação", icon: <Award className="h-6 w-6" /> },
    { number: "+2000", label: "Questões de Vestibulares", icon: <Zap className="h-6 w-6" /> },
  ]
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Missão",
      description:
        "Democratizar o acesso à educação de qualidade através da tecnologia, tornando o aprendizado mais eficiente e personalizado para cada estudante brasileiro.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Valores",
      description:
        "Acreditamos na educação como ferramenta de transformação social. Priorizamos a inovação, transparência e o impacto positivo na vida dos estudantes.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Visão",
      description:
        "Ser a principal plataforma educacional do Brasil, conectando milhões de estudantes a oportunidades de aprendizado personalizadas e de alta qualidade.",
    },
  ]

  return (
    <section className="relative min-h-screen bg-black overflow-hidden py-20">
    <Suspense fallback={<ParticleLoader />}>
        <FooterParticleScene />
    </Suspense>

      <div className="relative z-10 px-2 max-w-7xl mx-auto">
        <div className="text-center mb-5">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Sobre Nós
            </span>
            
          </h2>
        </div>

        {/* missao */}
        <div className="text-center mb-20">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 max-w-5xl mx-auto">
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Somos um time de pequenas araras apaixonadas por tecnologia e educação, trabalhando incansavelmente para transformar a forma
              como os brasileiros aprendem e ensinam, queremos acelerar o desenvolvimento da educação brasileira através de soluções tecnológicas inovadoras
              Ajudamos a entregar valor dos investimentos em educação mais rapidamente, fornecendo uma solução completa
              para gerenciar todo o ciclo de vida do aprendizado.
            </p>            
          </div>
        </div>

        {/* estatisticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-purple-800 via-blue-800 to-cyan-800">{stat.icon}</div>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {/* {stat.number} */}
                <NumberTicker
                  value={Number(stat.number.replace(/[^\d]/g, ""))}
                />
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* missao valores e bla bla bla */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500 transition-all duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-800/50 via-blue-800/50 to-cyan-800/50">{value.icon}</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">{value.title}</h3>
              <p className="text-gray-300 leading-relaxed text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}