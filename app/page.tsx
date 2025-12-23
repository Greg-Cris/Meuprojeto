"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  
  const servers = [
    { id: 1, name: "Injection - Roblox", icon: "🎮", iconBg: "from-gray-700 to-black", members: "61.6K", online: "6.2K" },
    { id: 2, name: "SatzX Unstoppable #10k", icon: "💎", iconBg: "from-cyan-600 to-blue-700", members: "9.3K", online: "932" },
    { id: 3, name: "Brasil São Paulo Roleplay - MTA", icon: "🇧🇷", iconBg: "from-red-700 to-red-900", members: "7.9K", online: "786" },
    { id: 4, name: "Legends Store | #8K", icon: "🏪", iconBg: "from-red-700 to-red-900", members: "7.6K", online: "764" },
    { id: 5, name: "VitinStore", icon: "🎮", iconBg: "from-purple-700 to-indigo-800", members: "7.3K", online: "725" },
    { id: 6, name: "Suivex Community #5100", icon: "🦋", iconBg: "from-pink-600 to-purple-700", members: "5.0K", online: "502" },
  ]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const ServerCard: React.FC<{ server: any }> = ({ server }) => (
    <div
      className="w-96 h-28 flex-shrink-0 relative rounded-2xl overflow-hidden border border-gray-700 bg-gradient-to-r from-gray-900/60 to-black/40 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.6)] hover:scale-[1.02] transition-transform"
      role="group"
    >
      {/* Subtle background pattern (uses gradient + overlay) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.02),transparent)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      <div className="relative z-10 flex items-center h-full px-4">
        <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold text-white shadow-lg ${server.iconBg}`}>
          {server.icon}
        </div>

        <div className="flex-1 pl-4">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-semibold text-lg truncate" title={server.name}>{server.name}</h3>
            {/* Discord icon placeholder */}
            <div className="flex items-center space-x-2">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-gray-300" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 9.5C8.328 9.5 9 8.828 9 8C9 7.172 8.328 6.5 7.5 6.5C6.672 6.5 6 7.172 6 8C6 8.828 6.672 9.5 7.5 9.5Z" fill="#E6E6E6"/>
                <path d="M16.5 9.5C17.328 9.5 18 8.828 18 8C18 7.172 17.328 6.5 16.5 6.5C15.672 6.5 15 7.172 15 8C15 8.828 15.672 9.5 16.5 9.5Z" fill="#E6E6E6"/>
                <path d="M4 3C4 3 6 4 8 4.5C10 5 12 5 12 5C12 5 14 5 16 4.5C18 4 20 3 20 3C20 3 19 6 18.5 9.5C18.5 9.5 17 9.1 15.5 8.5C15.5 8.5 14.8 10.2 13 10.9C13 10.9 12.5 10.1 11 10.1C9.5 10.1 9 10.9 9 10.9C7.2 10.2 6.5 8.5 6.5 8.5C5 9.1 3.5 9.5 3.5 9.5C3 6 4 3 4 3Z" fill="#C6C6C6"/>
              </svg>
            </div>
          </div>

          <div className="mt-2 flex items-center gap-4 text-xs text-gray-300">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gray-500 rounded-full inline-block" />
              {server.members} membros
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full inline-block animate-pulse" />
              {server.online} online
            </span>
          </div>
        </div>
      </div>

      {/* subtle hover shine */}
      <div className="pointer-events-none absolute -left-20 top-0 h-full w-1/2 bg-gradient-to-r from-white/12 via-white/6 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
    </div>
  )

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
        
        {[...Array(5)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full blur-sm"
            style={{
              backgroundColor: `rgba(139, 105, 20, ${Math.random() * 0.15 + 0.05})`,
              width: `${Math.random() * 120 + 80}px`,
              height: `${Math.random() * 120 + 80}px`,
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

        /* Carousel styles */
        .carousel-viewport { max-width: 1200px; margin: 0 auto; }
        .carousel-track {
          display: flex;
          gap: 24px;
          align-items: center;
          padding: 12px 0;
          will-change: transform;
          animation: scroll 40s linear infinite;
        }
        .carousel-viewport:hover .carousel-track { animation-play-state: paused; }

        /* hide native scrollbar if overflow appears */
        .carousel-viewport::-webkit-scrollbar { display: none; }
      `}</style>

      <div className="absolute inset-0 bg-gradient-to-r from-[#8B6914]/10 via-transparent to-[#8B6914]/10 pointer-events-none" />

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-2 lg:px-12 z-50 transition-all duration-300 bg-transparent ${isScrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-sm" : ""}`}>
        <div className="flex items-center">
          <img src="/gwhite-logo.png" alt="G-White Apps" className="h-12 w-auto" />
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-gray-200 hover:text-white transition-colors">Início</Link>
          <Link href="#" className="text-gray-200 hover:text-white transition-colors">Planos</Link>
          <Link href="#" className="text-gray-200 hover:text-white transition-colors">Tutoriais</Link>
          <Link href="#" className="text-gray-200 hover:text-white transition-colors">Discord</Link>
          <Button className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg transition-colors">
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
      <section className="relative z-10 py-16 overflow-hidden">
        <div className="text-center mb-12 px-6">
          <h2 className="text-4xl font-bold mb-4 text-white">Nossos Clientes</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore as melhores comunidades do Discord e conecte-se com milhares de pessoas que compartilham seus interesses.
          </p>
        </div>

        <div className="carousel-viewport relative w-full px-6">
          <div className="carousel-track">
            {/* primeira cópia */}
            <div className="flex items-center gap-6">
              {servers.map((server) => (
                <ServerCard key={`first-${server.id}`} server={server} />
              ))}
            </div>

            {/* segunda cópia (loop) */}
            <div className="flex items-center gap-6">
              {servers.map((server) => (
                <ServerCard key={`second-${server.id}`} server={server} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex items-center justify-between px-6 py-4 lg:px-12 border-t border-gray-700 relative z-10">
        <div className="flex items-center space-x-6">
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
