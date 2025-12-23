"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  
  const servers = [
    { id: 1, name: "Atentah Studio", icon: "🎨", members: "205", online: "20" },
    { id: 2, name: "💎 AeroTools Premium 💎", icon: "💎", members: "203", online: "20" },
    { id: 3, name: "BLACKOUT SHOP", icon: "🛍️", members: "187", online: "18" },
    { id: 4, name: "Legends Store | #8K", icon: "🏪", members: "7.6K", online: "764" },
    { id: 5, name: "VitinStore", icon: "🎮", members: "7.3K", online: "725" },
    { id: 6, name: "Suivex Community #5100", icon: "🦋", members: "5.0K", online: "502" },
  ]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-[#8B6914] text-white relative overflow-hidden">
      {/* Partículas animadas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              backgroundColor: `rgba(139, 105, 20, ${Math.random() * 0.3 + 0.1})`,
              width: `${Math.random() * 3 + 0.5}px`,
              height: `${Math.random() * 3 + 0.5}px`,
              top: "100%",
              left: `${Math.random() * 100}%`,
              animation: `float-up ${Math.random() * 15 + 10}s infinite linear`,
              animationDelay: `${Math.random() * 30}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float-up {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .carousel-container:hover .carousel-track { animation-play-state: paused; }
        .carousel-track { animation: scroll 30s linear infinite; display: flex; }
      `}</style>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-2 lg:px-12 z-50 transition-all duration-300 bg-transparent ${isScrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.3)]" : ""}`}>
        <div className="flex items-center">
          <img src="/gwhite-logo.png" alt="G-White Apps" className="h-16 w-auto" />
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-gray-200 hover:text-white transition-colors">Início</Link>
          <Link href="#" className="text-gray-200 hover:text-white transition-colors">Planos</Link>
          <Link href="#" className="text-gray-200 hover:text-white transition-colors">Tutoriais</Link>
          <Link href="#" className="text-gray-200 hover:text-white transition-colors">Discord</Link>
          <Button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-lg transition-colors">
            Login com Discord
          </Button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-6 py-20 pt-32 text-center min-h-screen relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white font-bold tracking-wide">G-White Apps</span>
          </h1>
          <h2 className="text-3xl lg:text-4xl font-bold mb-8" style={{ color: "#8B6914" }}>
            Seu futuro Bot está aqui.
          </h2>
          <div className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            <p>Eleve seu servidor Discord a um novo patamar com nossa tecnologia avançada.</p>
            <p>Automatize processos, melhore a experiência dos membros e simplifique a gestão.</p>
            <p>Transforme ideias em realidade com ferramentas poderosas e intuitivas.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="text-white px-8 py-3 text-lg rounded-lg" style={{ backgroundColor: "#8B6914" }}>
              Ir para a Dashboard
            </Button>
            <Button variant="outline" className="bg-gray-800 hover:bg-gray-700 text-white border-gray-600 px-8 py-3 text-lg rounded-lg">
              Ver Planos
            </Button>
          </div>
        </div>
      </main>

      {/* Seção Nossos Clientes */}
      <section className="relative z-10 py-16 bg-black/20">
        <div className="text-center mb-12 px-6">
          <h2 className="text-4xl font-bold mb-4 text-white">Nossos Clientes</h2>
          <p className="text-gray-300 text-lg">
            Explore as melhores comunidades do Discord e conecte-se com milhares de pessoas que compartilham seus interesses.
          </p>
        </div>

        <div className="carousel-container relative w-full px-4">
          <div className="carousel-track">
            {/* Primeira cópia */}
            <div className="flex gap-4">
              {servers.map((server) => (
                <div key={`first-${server.id}`} className="flex-shrink-0 w-72 h-24 bg-[#2b2d31] rounded-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <div className="h-full px-4 py-3 flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#313338] rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                      {server.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-semibold text-sm truncate mb-1 group-hover:text-[#8B6914] transition-colors">
                        {server.name}
                      </h3>
                      <div className="flex items-center gap-3 text-xs">
                        <div className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-gray-500 rounded-full" />
                          <span className="text-gray-400">{server.members} membros</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          <span className="text-green-400">{server.online} online</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Segunda cópia para loop */}
            <div className="flex gap-4 ml-4">
              {servers.map((server) => (
                <div key={`second-${server.id}`} className="flex-shrink-0 w-72 h-24 bg-[#2b2d31] rounded-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <div className="h-full px-4 py-3 flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#313338] rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                      {server.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-semibold text-sm truncate mb-1 group-hover:text-[#8B6914] transition-colors">
                        {server.name}
                      </h3>
                      <div className="flex items-center gap-3 text-xs">
                        <div className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-gray-500 rounded-full" />
                          <span className="text-gray-400">{server.members} membros</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          <span className="text-green-400">{server.online} online</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex items-center justify-between px-6 py-4 lg:px-12 border-t border-gray-700 relative z-10 mt-16">
        <div className="flex items-center gap-6">
          <Link href="#" className="transition-colors text-xs" style={{ color: "#8B6914" }}>
            Termos de Serviço
          </Link>
          <Link href="#" className="transition-colors text-xs" style={{ color: "#8B6914" }}>
            Discord
          </Link>
          <Link href="#" className="transition-colors text-xs" style={{ color: "#8B6914" }}>
            Youtube
          </Link>
        </div>
        <div className="text-gray-400 text-xs">© 2025 G-White Apps. Todos os direitos reservados</div>
      </footer>
    </div>
  )
}
