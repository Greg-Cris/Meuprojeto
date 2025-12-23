"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const servers = [
    { id: 1, name: "Atentah Studio", icon: "🎨", members: "205", online: "20" },
    { id: 2, name: "💎 AeroTools Premium 💎", icon: "💎", members: "203", online: "20" },
    { id: 3, name: "BLACKOUT SHOP", icon: "🛍️", members: "187", online: "18" },
    { id: 4, name: "Legends Store | #8K", icon: "🏪", members: "7.6K", online: "764" },
    { id: 5, name: "VitinStore", icon: "🎮", members: "7.3K", online: "725" },
    { id: 6, name: "Suivex Community", icon: "🦋", members: "5.0K", online: "502" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-[#8B6914] text-white">
      <style jsx>{`
        @keyframes float-up {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh); opacity: 0; }
        }
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Partículas */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#8B6914]"
            style={{
              width: '2px',
              height: '2px',
              opacity: 0.3,
              top: '100%',
              left: `${Math.random() * 100}%`,
              animation: `float-up ${15 + Math.random() * 10}s infinite linear`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className={`fixed top-0 w-full px-6 py-4 z-50 transition-all ${isScrolled ? 'bg-black/50 backdrop-blur' : ''}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <img src="/gwhite-logo.png" alt="G-White Apps" className="h-12" />
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-gray-300 hover:text-white">Início</Link>
            <Link href="#" className="text-gray-300 hover:text-white">Planos</Link>
            <Link href="#" className="text-gray-300 hover:text-white">Tutoriais</Link>
            <Link href="#" className="text-gray-300 hover:text-white">Discord</Link>
            <Button className="bg-blue-700 hover:bg-blue-800">Login com Discord</Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="pt-32 pb-20 px-6 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-7xl font-bold mb-6">G-White Apps</h1>
          <h2 className="text-4xl font-bold mb-8 text-[#8B6914]">Seu futuro Bot está aqui.</h2>
          <div className="text-xl text-gray-300 mb-12 space-y-2">
            <p>Eleve seu servidor Discord a um novo patamar com nossa tecnologia avançada.</p>
            <p>Automatize processos, melhore a experiência dos membros e simplifique a gestão.</p>
          </div>
          <div className="flex gap-4 justify-center">
            <Button className="bg-[#8B6914] hover:bg-[#6B4E0A] text-white px-8 py-6 text-lg">
              Ir para a Dashboard
            </Button>
            <Button variant="outline" className="border-gray-600 px-8 py-6 text-lg">
              Ver Planos
            </Button>
          </div>
        </div>
      </main>

      {/* Nossos Clientes */}
      <section className="py-20 relative">
        <div className="text-center mb-16 px-6">
          <h2 className="text-5xl font-bold mb-4">Nossos Clientes</h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Explore as melhores comunidades do Discord e conecte-se com milhares de pessoas que compartilham seus interesses.
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="animate-scroll flex gap-6 w-max">
            {/* Primeira cópia */}
            {servers.map((server) => (
              <div key={`a-${server.id}`} className="w-80 h-28 bg-[#2b2d31] rounded-xl p-4 flex items-center gap-4 hover:bg-[#35373d] transition-colors cursor-pointer flex-shrink-0">
                <div className="w-16 h-16 bg-[#404249] rounded-full flex items-center justify-center text-3xl flex-shrink-0">
                  {server.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-bold text-base truncate mb-2">{server.name}</h3>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-gray-400 flex items-center gap-1">
                      <span className="w-2 h-2 bg-gray-500 rounded-full" />
                      {server.members} membros
                    </span>
                    <span className="text-green-400 flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      {server.online} online
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {/* Segunda cópia */}
            {servers.map((server) => (
              <div key={`b-${server.id}`} className="w-80 h-28 bg-[#2b2d31] rounded-xl p-4 flex items-center gap-4 hover:bg-[#35373d] transition-colors cursor-pointer flex-shrink-0">
                <div className="w-16 h-16 bg-[#404249] rounded-full flex items-center justify-center text-3xl flex-shrink-0">
                  {server.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-bold text-base truncate mb-2">{server.name}</h3>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-gray-400 flex items-center gap-1">
                      <span className="w-2 h-2 bg-gray-500 rounded-full" />
                      {server.members} membros
                    </span>
                    <span className="text-green-400 flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      {server.online} online
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6 mt-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex gap-6">
            <Link href="#" className="text-[#8B6914] hover:text-[#6B4E0A] text-sm">Termos de Serviço</Link>
            <Link href="#" className="text-[#8B6914] hover:text-[#6B4E0A] text-sm">Discord</Link>
            <Link href="#" className="text-[#8B6914] hover:text-[#6B4E0A] text-sm">Youtube</Link>
          </div>
          <p className="text-gray-500 text-sm">© 2025 G-White Apps. Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  )
}
