"use client"

import { Heart, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Suspense } from "react"
import FooterParticleScene from "../animations/particles"

// Loading component for footer particles
function FooterParticleLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-30">
      <div className="flex space-x-1">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="w-1 h-1 rounded-full animate-pulse"
            style={{
              backgroundColor: `hsl(${260 + i * 30}, 60%, 60%)`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default function Footer() {
  const productLinks = [
    { name: "App Mobile", href: "#" },
    { name: "API Educacional", href: "#" },
  ]

  const companyLinks = [
    { name: "Sobre Nós", href: "#about" },
    { name: "Carreiras", href: "#" },
    { name: "Segurança", href: "#" },
    { name: "Termos & Privacidade", href: "#" },
  ]

  const resourceLinks = [
    { name: "Blog", href: "#" },
    { name: "Contato", href: "#" },
    { name: "Suporte", href: "#" },
    { name: "Documentação", href: "#" },
    { name: "Status", href: "#" },
  ]

  const guideLinks = [
    { name: "Guia do Professor", href: "#" },
    { name: "Guia do Estudante", href: "#" },
  ]

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* particulinhas */}
      <Suspense fallback={<FooterParticleLoader />}>
        <FooterParticleScene />
      </Suspense>

      <div className="relative z-10 px-4 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 hover:scale-110 transition-all duration-300 ">
              <div className="flex h-12 w-12 items-center justify-center rounded-full overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-500 shadow-lg">
                <Image src="/logo.png" width={48} height={48} alt="Logo" priority />
              </div>
              <span className="text-xl font-bold text-white">Aracore</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Democratizando a educação de qualidade no Brasil através da tecnologia e inovação.
            </p>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="h-4 w-4 text-purple-400" />
              <span className="text-sm">São Paulo, Brasil</span>
            </div>
          </div>

          {/* produtos */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Produtos</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* empresa */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Empresa</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-pink-400 transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* recursos */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Recursos</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* guias */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Guias</h3>
            <ul className="space-y-3">
              {guideLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* contate-nos*/}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-800/50 via-purple-800/50 to-violet-800/50">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white text-sm">buggedplanet@shitposting.agency</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-800/50 via-purple-800/50 to-violet-800/50">
                <Phone className="h-4 w-4" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Telefone</p>
                <p className="text-white text-sm">+55 (11) 42069-2424</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Siga-nos:</span>
              <div className="flex gap-3">
                <Link
                  href="https://x.com/buggedplanet"
                  target = "_blank"
                  className="p-2 rounded-lg bg-white/5 hover:bg-purple-500/20 transition-all duration-200 hover:scale-110"
                >
                  <Twitter className="h-4 w-4 text-gray-400 hover:text-purple-400" />
                </Link>
                <Link
                  href="https://instagram.com/buggedplanet"
                  target = "_blank"
                  className="p-2 rounded-lg bg-white/5 hover:bg-pink-500/20 transition-all duration-200 hover:scale-110"
                >
                  <Instagram className="h-4 w-4 text-gray-400 hover:text-pink-400" />
                </Link>
                <Link
                  href="#"
                  className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 transition-all duration-200 hover:scale-110"
                >
                  <Linkedin className="h-4 w-4 text-gray-400 hover:text-cyan-400" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* butoes */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-sm">Made by a Macaw</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span>Copyright © 2025 Aracore. Todos os direitos reservados.</span>
            <Link href="#" className="hover:text-purple-400 transition-colors duration-200">
              Termos de Uso & Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
