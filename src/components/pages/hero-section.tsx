"use client"

import { Heart } from "lucide-react"
import { DownloadButton, DemoButton } from "../ui/aracore-buttons"

// particulinhas

import FooterParticleScene from "../animations/particles"
import ParticleLoader from "../animations/particles"
import { Suspense } from "react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
    <Suspense fallback={<ParticleLoader />}>
        <FooterParticleScene />
    </Suspense>

  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20 pointer-events-none"></div>
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-[2.7rem] md:text-2lx lg:text-5xl font-bold text-white mb-8 leading-tight">
    <span className="block text-white">
      Democratizando
      </span>
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            A Educação de qualidade
          </span>
          <span className="block text-white">No Brasil.</span>
        </h1>

        <p className="text-2xl text-gray-500 mb-12 max-w-4xl mx-auto leading-relaxed">
          <span className="block font-semibold text-[#f5f5f5]">Feito com amor por araras!</span>
        </p>
          <div className="flex items-center justify-center gap-2 -mt-8 mb-5">
            <Heart className="h-6 w-6 text-red-500 animate-pulse" />
          </div>
          <span className = "block font-normal text-[#f5f5f58c] mb-4">para estudantes, professores e instituições.</span>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <DownloadButton />
            <DemoButton />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/5 via-transparent to-transparent pointer-events-none"></div>
    </section>
  )
}
