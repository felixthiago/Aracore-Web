"use client"

import { useState, Suspense } from "react"
import { ChevronDown, ChevronUp, Sparkles, Zap, Shield, Users } from "lucide-react"
import { SupportButton} from "../ui/aracore-buttons"

// particulinhas

import FooterParticleScene from "../animations/particles"
import ParticleLoader from "../animations/particles"

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqData = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      question: "Como funciona a plataforma educacional?",
      answer:
        "Nossa plataforma utiliza inteligência artificial para personalizar o aprendizado de cada estudante. Analisamos o desempenho individual e criamos trilhas de estudo adaptadas às necessidades específicas de cada usuário, garantindo máxima eficiência no aprendizado.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      question: "Quantos estudantes posso cadastrar na minha instituição?",
      answer:
        "Oferecemos planos flexíveis para instituições de todos os tamanhos. Desde escolas pequenas com 50 alunos até universidades com milhares de estudantes. Nosso plano empresarial suporta usuários ilimitados com recursos avançados de gestão.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      question: "Os dados dos estudantes estão seguros?",
      answer:
        "Sim! Utilizamos criptografia de ponta a ponta e seguimos rigorosamente a LGPD. Todos os dados são armazenados em servidores seguros no Brasil, com backup automático e monitoramento 24/7. A privacidade dos estudantes é nossa prioridade máxima.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      question: "Posso integrar com outros sistemas educacionais?",
      answer:
        "Absolutamente! Nossa API permite integração com os principais sistemas de gestão educacional do mercado. Suportamos integração com Google Classroom, Moodle, Canvas e muitos outros. Nossa equipe técnica oferece suporte completo na implementação.",
    },
  ]

  return (
    <section className="relative min-h-screen bg-black overflow-hidden py-20">
      {/* particulinhas do fundo */}
      <Suspense fallback={<ParticleLoader />}>
        <FooterParticleScene />
      </Suspense>

      <div className="relative z-10 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-800 via-blue-800 to-cyan-800 bg-clip-text text-transparent">
              FAQ
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossa plataforma educacional
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-purple-400/30 transition-all duration-300 overflow-hidden hover:bg-black/50"
              style={{
                boxShadow: "0 8px 32px rgba(139, 92, 246, 0.1)",
              }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  {item.icon && (
                    <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-800/50 via-purple-800/50 to-violet-800/50 shadow-lg">
                      {item.icon}
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                </div>
                <div className="text-purple-400 transition-transform duration-200">
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-6 w-6 transform rotate-0" />
                  ) : (
                    <ChevronDown className="h-6 w-6 transform rotate-0" />
                  )}
                </div>
              </button>

              {openItems.includes(index) && (
                <div className="px-6 pb-6 animate-fadeIn">
                  <div className="pl-16">
                    <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* contato suporte */}
        <div className="text-center mt-16">
          <div className="bg-gray-900/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Ainda tem dúvidas?</h3>
            <p className="text-gray-300 mb-6">
              Nossa equipe está pronta para ajudar você a transformar a educação!
            </p>
            <div className="flex justify-center items-center mt-4">
                <SupportButton />
              </div>    
          </div>
        </div>
      </div>
    </section>
  )
}
