"use client"

import { Menu, Smartphone, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navigationLinks = [
    { name: "Quem somos nós", href: "#about" },
    { name: "Preços", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="w-full p-4 md:p-6 relative z-50">
      <header className="w-full bg-black/95 backdrop-blur-md border border-gray-800/50 shadow-lg shadow-blue-600/20 rounded-2xl relative">
        <div className="flex h-16 items-center justify-between px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Logo - Always on the left */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center gap-3 hover:scale-110 transition-all duration-300 cursor-pointer z-10"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 shadow-lg shadow-blue-500/25">
                <Image src="/logo.png" width={40} height={40} alt="Logo" priority />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-all duration-200 ease-out text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-800/50 cursor-pointer relative group"
              >
                {link.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <Button className="hidden sm:flex cursor-pointer bg-white text-black hover:bg-gray-100 hover:scale-105 text-sm font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200/20">
              <Smartphone className="h-4 w-4 mr-2" />
              Download
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="lg:hidden text-white hover:bg-gray-800/50 hover:text-white rounded-lg transition-all duration-200 z-50 relative"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden absolute top-0 left-0 right-0 bg-black/98 backdrop-blur-md border border-gray-800/50 rounded-2xl shadow-2xl transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "opacity-100 translate-y-0 visible max-h-96" : "opacity-0 -translate-y-4 invisible max-h-0"
          }`}
          style={{ zIndex: 40 }}
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-800/50">
            <Link href="/" className="flex items-center gap-3" onClick={handleLinkClick}>
              <div className="flex h-8 w-8 items-center justify-center rounded-full overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 shadow-lg shadow-blue-500/25">
                <Image src="/logo.png" width={32} height={32} alt="Logo" priority />
              </div>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu Navigation */}
          <nav className="flex flex-col p-4 space-y-2">
            {navigationLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-gray-300 hover:text-white hover:bg-gray-800/30 transition-all duration-200 text-base px-4 py-3 rounded-lg border border-transparent hover:border-gray-700/50 cursor-pointer transform hover:translate-x-2"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isOpen ? "slideInLeft 0.3s ease-out forwards" : "none",
                }}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Download Button */}
            <div className="pt-4 border-t border-gray-800/50 mt-4">
              <Button
                className="w-full bg-white text-black hover:bg-gray-100 justify-center rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 py-3"
                onClick={handleLinkClick}
              >
                <Smartphone className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu Backdrop */}
        {isOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300"
            style={{ zIndex: 30 }}
            onClick={toggleMenu}
          />
        )}
      </header>
    </div>
  )
}

