"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  
  const servers = [
    { id: 1, name: "Atentah Studio", icon: "🎨", iconBg: "from-gray-700 to-gray-900", members: "205", online: "20" },
    { id: 2, name: "💎 AeroTools Premium 💎", icon: "💎", iconBg: "from-gray-600 to-gray-800", members: "203", online: "20" },
    { id: 3, name: "BLACKOUT SHOP", icon: "🛍️", iconBg: "from-gray-800 to-black", members: "187", online: "18" },
    { id: 4, name: "Legends Store | #8K", icon: "🏪", iconBg: "from-gray-700 to-black", members: "7.6K", online: "764" },
    { id: 5, name: "VitinStore", icon: "🎮", iconBg: "from-gray-600 to-gray-900", members: "7.3K", online: "725" },
    { id: 6, name: "Suivex Community #5100", icon: "🦋", iconBg: "from-gray-700 to-gray-950", members: "5.0K", online: "502" },
  ]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const ServerCard = ({ server }) => (
    <div className="relative flex-shrink-0 w-80 bg-[#1a1a1a] border border-gray-700/50 rounded-xl p-3 hover:bg-[#252525] transition-all duration-200 cursor-pointer overflow-hidden">
      {/* Fundo animado com símbolos */}
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-symbol ${Math.random() * 8 + 6}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            {['🎵', '🎶', '♪', '♫', '🎧', '🎤'][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>
      
      <div className="relative z-10 flex items-center space-x-3">
        <div className={`w-14 h-14 bg-gradient-to-br ${server.iconBg} rounded-xl flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}>
          {server.icon}
        </div>
        <div className="flex-1 text-left min-w-0">
          <h3 className="text-white font-semibold text-sm mb-0.5 truncate">{server.name}</h3>
          <div className="flex items-center space-x-3 text-xs">
            <span className="flex items-center text-gray-400">
              <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-1.5"></span>
              {server.members} membros
            </span>
            <span className="flex items-center text-green-400">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse"></span>
              {server.online} online
            </span>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black text-white relative overflow-hidden">
      {/* Partículas MUITO FORTES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Partículas brancas pequenas - MUITO MAIS */}
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              backgroundColor: `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.3})`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: "100%",
              left: `${Math.random() * 100}%`,
              animation: `float-up ${Math.random() * 12 + 8}s infinite linear`,
              animationDelay: `${Math.random() * 20}s`,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(255, 255, 255, 0.6)`,
            }}
          />
        ))}
        
        {/* Orbs GRANDES e BRILHANTES */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full blur-md"
            style={{
              backgroundColor: `rgba(255, 255, 255, ${Math.random() * 0.4 + 0.2})`,
              width: `${Math.random() * 15 + 10}px`,
              height: `${Math.random() * 15 + 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-diagonal ${Math.random() * 15 + 15}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 8}s`,
              boxShadow: `0 0 ${Math.random() * 30 + 20}px rgba(255, 255, 255, 0.5)`,
            }}
          />
        ))}

        {/* Partículas cinzas médias */}
        {[...Array(50)].map((_, i) => (
          <div
            key={`gray-${i}`}
            className="absolute rounded-full"
            style={{
              backgroundColor: `rgba(200, 200, 200, ${Math.random() * 0.6 + 0.2})`,
              width: `${Math.random() * 8 + 3}px`,
              height: `${Math.random() * 8 + 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-up ${Math.random() * 18 + 12}s infinite linear`,
              animationDelay: `${Math.random() * 15}s`,
              boxShadow: `0 0 ${Math.random() * 8 + 4}px rgba(200, 200, 200, 0.4)`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float-up {
          0% { transform: translateY(0) translateX(0) scale(0.5); opacity: 0; }
          10% { opacity: 1; transform: scale(1); }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(30px) scale(0.8); opacity: 0; }
        }
        
        @keyframes float-diagonal {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(50px, -50px) scale(1.2); }
          50% { transform: translate(100px, 0) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.1); }
        }
        
        @keyframes natural-blink {
          0%, 85% { opacity: 1; }
          90%, 95% { opacity: 0.3; }
          100% { opacity: 1; }
        }
        
        @keyframes float-symbol {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(10px, -10px) rotate(5deg); }
          50% { transform: translate(-5px, -20px) rotate(-5deg); }
          75% { transform: translate(-10px, -10px) rotate(3deg); }
        }
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        
        .carousel-container:hover .carousel-track { animation-play-state: paused; }
        .carousel-track { animation: scroll 20s linear infinite; display: flex; }
      `}</style>

      {/* Overlay de gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 pointer-events-none" />

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-3 lg:px-12 z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.8)]" : "bg-transparent"}`}>
        <div className="flex items-center">
          <img src="/gwhite-logo.png" alt="G-White Apps" className="h-16 w-auto" />
        </div>
        <nav className="hidden md:flex items-center space-x-2">
          <Link href="#" className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 px-4 py-2 rounded-lg">
            Início
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 px-4 py-2 rounded-lg">
            Planos
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 px-4 py-2 rounded-lg">
            Tutoriais
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 px-4 py-2 rounded-lg">
            Discord
          </Link>
          <Button className="bg-white hover:bg-gray-200 text-black px-6 py-2 rounded-lg transition-all duration-200 ml-4 shadow-lg font-semibold">
            Entrar
          </Button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-6 py-20 pt-32 text-center min-h-screen relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <div className="relative inline-block">
              <div className="absolute -top-12 left-0 transform -translate-x-2 -rotate-12 scale-x-[-1]">
                <span className="text-2xl" style={{ animation: "natural-blink 4s infinite ease-in-out" }}>
                  👑
                </span>
              </div>
              <span className="text-white font-bold tracking-wide">G-White Apps</span>
            </div>
          </h1>
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-300">
            Seu futuro Bot está aqui.
          </h2>
          <div className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed space-y-0">
            <p className="text-balance">Eleve seu servidor Discord a um novo patamar com nossa tecnologia avançada.</p>
            <p className="text-balance">Automatize processos, melhore a experiência dos membros e simplifique a gestão.</p>
            <p className="text-balance">Transforme ideias em realidade com ferramentas poderosas e intuitivas.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              className="bg-white hover:bg-gray-200 text-black px-8 py-4 text-lg rounded-lg font-bold shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Ir para a Dashboard →
            </Button>
            <Button className="bg-transparent hover:bg-white/10 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 text-lg rounded-lg font-semibold transform hover:scale-105 transition-all duration-200">
              Ver Planos
            </Button>
          </div>
        </div>
      </main>

      {/* Seção Nossos Clientes */}
      <section className="relative z-10 py-16 overflow-hidden">
        <div className="text-center mb-12 px-6">
          <h2 className="text-4xl font-bold mb-4 text-white">Nossos Clientes</h2>
          <p className="text-gray-400 text-base">
            Explore as melhores comunidades do Discord e conecte-se com milhares de pessoas que compartilham seus interesses.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-8">
          <div className="carousel-container relative w-full overflow-hidden">
            <div className="carousel-track">
              {/* Primeira cópia */}
              <div className="flex space-x-3 pr-3">
                {servers.map((server) => (
                  <ServerCard key={`first-${server.id}`} server={server} />
                ))}
              </div>
              {/* Segunda cópia para loop */}
              <div className="flex space-x-3 pr-3">
                {servers.map((server) => (
                  <ServerCard key={`second-${server.id}`} server={server} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col sm:flex-row items-center justify-between px-6 py-6 lg:px-12 border-t border-gray-800 relative z-10 bg-black/60 backdrop-blur-sm gap-4">
        <div className="flex items-center space-x-6">
          <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
            <span>📋</span> Termos de Serviço
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
            <span>💬</span> Discord
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
            <span>▶️</span> Youtube
          </Link>
        </div>
        <div className="text-gray-500 text-xs">© 2025 G-White Apps. Todos os direitos reservados</div>
      </footer>
    </div>
  )
}
