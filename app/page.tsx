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

      {/* PARTÍCULAS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              backgroundColor: `rgba(139,105,20,${Math.random() * 0.3 + 0.1})`,
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
              backgroundColor: `rgba(139,105,20,${Math.random() * 0.15 + 0.05})`,
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

      {/* ESTILOS */}
      <style jsx>{`
        @keyframes float-up {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(-100vh); opacity: 0; }
        }

        @keyframes float-diagonal {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(40px,-40px); }
        }

        @keyframes natural-blink {
          0%,85% { opacity: 1; }
          90%,95% { opacity: .3; }
          100% { opacity: 1; }
        }

        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      <div className="absolute inset-0 bg-gradient-to-r from-[#8B6914]/10 via-transparent to-[#8B6914]/10 pointer-events-none" />

      {/* HEADER */}
      <header className={`fixed top-0 inset-x-0 z-50 px-6 py-2 flex justify-between transition-all ${
        isScrolled ? "shadow-lg" : ""
      }`}>
        <img src="/gwhite-logo.png" className="h-16" />
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="#">Início</Link>
          <Link href="#">Planos</Link>
          <Link href="#">Tutoriais</Link>
          <Link href="#">Discord</Link>
          <Button className="bg-blue-800">Login com Discord</Button>
        </nav>
      </header>

      {/* HERO */}
      <main className="pt-32 text-center px-6">
        <h1 className="text-6xl font-bold mb-6">
          <span className="relative">
            👑 G-White Apps
          </span>
        </h1>
        <h2 className="text-3xl mb-8 text-[#8B6914]">
          Seu futuro Bot está aqui.
        </h2>
      </main>

      {/* CLIENTES */}
      <section className="py-16 relative z-10">
        <h2 className="text-center text-4xl font-bold mb-10">Nossos Clientes</h2>

        <div className="w-full overflow-hidden">
          <div
            className="flex gap-4"
            style={{
              width: "max-content",
              animation: "scroll 30s linear infinite",
            }}
          >
            {[...servers, ...servers].map((server, index) => (
              <div
                key={index}
                className="w-64 flex-shrink-0 bg-gray-900/90 border border-gray-700 rounded-lg p-4 hover:border-[#8B6914] transition"
              >
                <div className="flex gap-3 items-center">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${server.iconBg} flex items-center justify-center text-2xl`}>
                    {server.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold truncate">{server.name}</h3>
                    <p className="text-xs text-gray-400">{server.members} membros</p>
                    <p className="text-xs text-green-400">{server.online} online</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-700 px-6 py-4 flex justify-between text-xs">
        <span>© 2025 G-White Apps</span>
        <div className="flex gap-4">
          <Link href="#">Termos</Link>
          <Link href="#">Discord</Link>
          <Link href="#">Youtube</Link>
        </div>
      </footer>

    </div>
  )
}
