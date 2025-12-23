"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  
  const servers = [
    { id: 1, name: "Atentah Studio", icon: "🎨", iconBg: "from-[#8B6914] to-[#6B4E0A]", members: "205", online: "20" },
    { id: 2, name: "💎 AeroTools Premium 💎", icon: "💎", iconBg: "from-cyan-600 to-blue-700", members: "203", online: "20" },
    { id: 3, name: "BLACKOUT SHOP", icon: "🛍️", iconBg: "from-gray-700 to-black", members: "187", online: "18" },
    { id: 4, name: "Legends Store | #8K", icon: "🏪", iconBg: "from-red-700 to-red-900", members: "7.6K", online: "764" },
    { id: 5, name: "VitinStore", icon: "🎮", iconBg: "from-purple-700 to-indigo-800", members: "7.3K", online: "725" },
    { id: 6, name: "Suivex Community #5100", icon: "🦋", iconBg: "from-pink-600 to-purple-700", members: "5.0K", online: "502" },
  ]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-[#8B6914] text-white relative overflow-hidden">
      {/* Partículas pequenas */}
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
        
        {/* Orbs maiores flutuantes */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full blur-sm"
            style={{
              backgroundColor: `rgba(139, 105, 20, ${Math.random() * 0.15 + 0.05})`,
              width: `${Math.random() * 4 + 3}px`,
              height: `${Math.random() * 4 + 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-diagonal ${Math.random() * 20 + 20}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 10}s`,
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
        
        @keyframes float-diagonal {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(30px, -30px); }
          50% { transform: translate(60px, 0); }
          75% { transform: translate(30px, 30px); }
        }
        
        @keyframes natural-blink {
          0%, 85% { opacity: 1; }
          90%, 95% { opacity: 0.3; }
          100% { opacity: 1; }
        }
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="absolute inset-0 bg-gradient-to-r from-[#8B6914]/10 via-transparent to-[#8B6914]/10 pointer-events-none" />

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
            <div className="relative inline-block">
              <div className="absolute -top-12 left-0 transform -translate-x-2 -rotate-12 scale-x-[-1]">
                <span className="text-2xl" style={{ animation: "natural-blink 4s infinite ease-in-out" }}>
                  👑
                </span>
              </div>
              <span className="text-white font-bold tracking-wide">G-White Apps</span>
            </div>
          </h1>
          <h2 className="text-3xl lg:text-4xl font-bold mb-8" style={{ color: "#8B6914" }}>
            Seu futuro Bot está aqui.
          </h2>
          <div className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed space-y-0">
            <p className="text-balance">Eleve seu servidor Discord a um novo patamar com nossa tecnologia avançada.</p>
            <p className="text-balance">Automatize processos, melhore a experiência dos membros e simplifique a gestão.</p>
            <p className="text-balance">Transforme ideias em realidade com ferramentas poderosas e intuitivas.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              className="text-white px-8 py-3 text-lg rounded-lg"
              style={{ backgroundColor: "#8B6914" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#6B4E0A")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#8B6914")}
            >
              Ir para a Dashboard
            </Button>
            <Button variant="outline" className="bg-gray-800 hover:bg-gray-700 text-white border-gray-600 px-8 py-3 text-lg rounded-lg">
              Ver Planos
            </Button>
          </div>
        </div>
      </main>

      {/* Seção Nossos Clientes */}
      <section className="relative z-10 py-16">
        <div className="text-center mb-10 px-6">
          <h2 className="text-4xl font-bold mb-4 text-white">Nossos Clientes</h2>
          <p className="text-gray-300 text-base max-w-3xl mx-auto mb-8">
            Explore as melhores comunidades do Discord e conecte-se com milhares de pessoas que compartilham seus interesses.
          </p>
        </div>

        {/* Carrossel com animação */}
        <div className="w-full overflow-hidden">
          <div 
            className="flex gap-4 w-max"
            style={{
              animation: 'scroll 30s linear infinite',
            }}
          >
            {/* Duplicar 2x para loop infinito */}
            {[...servers, ...servers].map((server, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-64 bg-gradient-to-br from-gray-900/90 to-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-lg p-4 hover:border-[#8B6914] hover:shadow-[0_0_20px_rgba(139,105,20,0.25)] transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-16 h-16 bg-gradient-to-br ${server.iconBg} rounded-xl flex items-center justify-center text-2xl shadow-md flex-shrink-0`}>
                    {server.icon}
                  </div>
                  <div className="flex-1 text-left min-w-0">
                    <h3 className="text-white font-semibold text-base mb-1 truncate">{server.name}</h3>
                    <div className="flex flex-col space-y-0.5 text-xs">
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
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex items-center justify-between px-6 py-4 lg:px-12 border-t border-gray-700 relative z-10 mt-16">
        <div className="flex items-center space-x-6">
          <Link href="#" className="transition-colors text-xs" style={{ color: "#8B6914" }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#6B4E0A")} onMouseLeave={(e) => (e.currentTarget.style.color = "#8B6914")}>
            Termos de Serviço
          </Link>
          <Link href="#" className="transition-colors text-xs" style={{ color: "#8B6914" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#6B4E0A")} onMouseLeave={(e) => (e.currentTarget.style.color = "#8B6914")}>
            Discord
          </Link>
          <Link href="#" className="transition-colors text-xs" style={{ color: "#8B6914" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#6B4E0A")} onMouseLeave={(e) => (e.currentTarget.style.color = "#8B6914")}>
            Youtube
          </Link>
        </div>
        <div className="text-gray-400 text-xs">© 2025 G-White Apps. Todos os direitos reservados</div>
      </footer>
    </div>
  )
}
