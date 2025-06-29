"use client"

import type React from "react"
import { Smartphone, ArrowRight, Apple, Play, Megaphone } from "lucide-react"

// popover
import {
  PopoverRoot,
  PopoverTrigger,
  PopoverContent,
  PopoverForm,
  PopoverLabel,
  PopoverTextarea,
  PopoverFooter,
  PopoverCloseButton,
  PopoverSubmitButton,
} from "@/components/ui/popover";
import { toast } from "sonner"

interface AracoreButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "promotional"
  onClick?: () => void
  className?: string
}

export function AracoreButton({ children, variant = "primary", onClick, className = "" }: AracoreButtonProps) {
  const baseClasses =
    "cursor-pointer group flex items-center gap-3 font-medium rounded-xl transition-all duration-200 backdrop-blur-sm"

  const variants = {
    primary: "bg-white/95 hover:bg-white text-black px-6 py-3.5 shadow-lg hover:shadow-xl border border-gray-200/20",
    secondary:
      "bg-gray-900/80 hover:bg-gray-800/90 text-white px-6 py-3.5 border border-gray-700/50 hover:border-gray-600/70",
    promotional:
      "bg-gray-950/90 hover:bg-gray-900/95 text-white px-8 py-4 rounded-2xl border border-gray-800/50 hover:border-gray-700/70 shadow-2xl",
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

// Pre-built button components
export function AndroidButton() {
  return (
    <AracoreButton variant="primary">
      <Smartphone className="h-5 w-5" />
      <span>Download para Android</span>
    </AracoreButton>
  )
}

export function DownloadButton() {
  return (
    <AracoreButton variant="secondary">
        <Apple className ="h-5 w-5"></Apple>
      <span>Download Android ou IOS</span>
    </AracoreButton>
  )
}

export function DemoButton(){
  return (
    <AracoreButton variant = "primary">
      <span className="text-white font-semibold">Demonstração</span>
      <Play className = "h-5 w-5 group-hover:translate-x-1 backdrop-blur-sm transition-all duration-300 hover:scale-105 group bg-transparent"/>
    </AracoreButton>
  )
}

export function PromotionalButton() {
  return (
    <AracoreButton variant="promotional">
      <span className="text-gray-300">Apresentando nossa</span>
      <span className="text-white font-semibold">Plataforma Web</span>
      <span className="text-gray-400">|</span>
      <span className="text-blue-400 font-medium">Acesse agora</span>
      <ArrowRight className="h-4 w-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
    </AracoreButton>
  )
}

export function SupportButton(){
  return (
      <PopoverRoot>
        <PopoverTrigger>
          <div className="flex items-center gap-2 font-semibold rounded-xl bg-white/95 hover:bg-white text-black px-6 py-3.5 shadow-lg hover:shadow-xl border border-gray-200/20">
            <span>Suporte</span>
            <Megaphone className="h-4 w-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </div>
        </PopoverTrigger>

        <PopoverContent className = "w-[300px] h-[200px]">
          <PopoverForm
            onSubmit={(note) => {
              toast.promise(
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    if (note && note.length > 0) {
                      resolve(note)
                    } else {
                      reject("Mensagem vazia")
                    }
                  }, 1000)
                }),
                {
                  loading: "Enviando...",
                  success: (note) => `Enviado com sucesso: ${note}`,
                  error: (err) => `Erro: ${err}`,
                }
              )
            }}
          >
            <PopoverLabel>Deixe seu feedback</PopoverLabel>
            <PopoverTextarea/>
            <PopoverFooter>
              <PopoverCloseButton />
              <PopoverSubmitButton>Enviar</PopoverSubmitButton>
            </PopoverFooter>
          </PopoverForm>
        </PopoverContent>
      </PopoverRoot>
  )
}