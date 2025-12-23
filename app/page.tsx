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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-[#8B6914] text-white overflow-hidden">

      {/* ESTILOS DAS ANIMAÇÕES */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>

      {/* HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-50 px-6 py-3 flex items-center justify-between transition-all ${
        isScrolled ? "bg-black/70 backdrop-blur shadow-lg" : "bg-transparent"
      }`}>
        <img src="/gwhite-logo.png" alt="G-White Apps" className="h-14" />
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#">Início</Link>
          <Link href="#">Planos</Link>
          <Link href="#">Tutoriais</Link>
          <Button className="bg-blue-800 hover:bg-blue-900">Login com Discord</Button>
        </nav>
      </header>

      {/* HERO */}
      <main className="pt-36 pb-24 text-center px-6">
        <h1 className="text-6xl font-bold mb-4">G-White Apps</h1>
        <h2 className="text-3xl font-semibold mb-6 text-[#8B6914]">
          Seu futuro Bot está aqui.
        </h2>
        <p className="max-w-3xl mx-auto text-gray-300 mb-10">
          Automatize, escale e profissionalize seu servidor Discord com tecnologia de ponta.
        </p>

        <div className="flex gap-4 justify-center">
          <Button style={{ backgroundColor: "#8B6914" }}>
            Ir para a Dashboard
          </Button>
          <Button variant="outline">Ver Planos</Button>
        </div>
      </main>

      {/* NOSSOS CLIENTES */}
      <section className="py-16">
        <h2 className="text-center text-4xl font-bold mb-4">Nossos Clientes</h2>
        <p className="text-center text-gray-400 mb-10">
          Comunidades que confiam na G-White Apps
        </p>

        {/* CARROSSEL */}
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
                className="w-64 flex-shrink-0 bg-gray-900 border border-gray-700 rounded-xl p-4 hover:border-[#8B6914] transition hover:scale-105"
              >
                <div className="flex gap-3 items-center">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${server.iconBg} flex items-center justify-center text-2xl`}>
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
      <footer className="border-t border-gray-700 px-6 py-4 text-xs text-gray-400 flex justify-between">
        <span>© 2025 G-White Apps</span>
        <div className="flex gap-4">
          <Link href="#">Termos</Link>
          <Link href="#">Discord</Link>
          <Link href="#">YouTube</Link>
        </div>
      </footer>
    </div>
  )
}
