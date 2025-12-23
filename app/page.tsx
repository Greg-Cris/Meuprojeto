"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-[#8B6914] text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles with upward movement */}
        <div
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: "rgba(139, 105, 20, 0.3)",
            top: "100%",
            left: "10%",
            animation: "float-up 15s infinite linear",
          }}
        ></div>
        <div
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            backgroundColor: "rgba(139, 105, 20, 0.25)",
            top: "100%",
            left: "25%",
            animation: "float-up 18s infinite linear",
            animationDelay: "3s",
          }}
        ></div>
        <div
          className="absolute w-1 h-1 rounded-full"
          style={{
            backgroundColor: "rgba(139, 105, 20, 0.2)",
            top: "100%",
            left: "45%",
            animation: "float-up 20s infinite linear",
            animationDelay: "6s",
          }}
        ></div>
        <div
          className="absolute w-2.5 h-2.5 rounded-full"
          style={{
            backgroundColor: "rgba(139, 105, 20, 0.35)",
            top: "100%",
            left: "65%",
            animation: "float-up 16s infinite linear",
            animationDelay: "9s",
          }}
        ></div>
        <div
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            backgroundColor: "rgba(139, 105, 20, 0.3)",
            top: "100%",
            left: "80%",
            animation: "float-up 22s infinite linear",
            animationDelay: "12s",
          }}
        ></div>
        <div
          className="absolute w-1 h-1 rounded-full"
          style={{
            backgroundColor: "rgba(139, 105, 20, 0.25)",
            top: "100%",
            left: "90%",
            animation: "float-up 19s infinite linear",
            animationDelay: "15s",
          }}
        ></div>

        <div
          className="absolute w-3 h-3 rounded-full"
          style={{
            backgroundColor: "rgba(139, 105, 20, 0.2)",
            top: "100%",
            left: "5%",
            animation: "float-up 25s infinite linear",
            animationDelay: "2s",
          }}
        ></div>
        <div
          className="absolute w-1 h-1 rounded-full"
          style={{
            backgroundColor: "rgba(139, 105, 20, 0.35)",
            top: "100%",
            left: "35%",
            animation: "float-up 17s infinite linear",
            animationDelay: "8s",
          }}
        ></div>
        <div
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: "rgba(139, 105, 20, 0.25)",
            top: "100%",
            left: "55%",
            animation: "float-up 21s infinite linear",
            animationDelay: "4s",
          }}
        ></div>
        <div
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            backgroundColor: "rgba(139, 105, 20, 0.3)",
            top: "100%",
            left: "75%",
            animation: "float-up 14s infinite linear",
            animationDelay: "11s",
          }}
        ></div>
        <div
          className="absolute w-1 h-1 rounded-full"
          style={{
            backgroundColor: "rgba(139, 105, 20, 0.2)",
            top: "100%",
            left: "95%",
            animation: "float-up 23s infinite linear",
            animationDelay: "7s",
          }}
        ></div>
        <div
          className="absolute w-2.5 h-2.5 rounded-full"
          style={{
            backgroundColor: "rgba(139, 105, 20, 0.3)",
            top: "100%",
            left: "15%",
            animation: "float-up 18s infinite linear",
            animationDelay: "13s",
          }}
        ></div>

        {/* Additional layer of smaller particles */}
        <div
          className="absolute w-0.5 h-0.5 rounded-full"
          style={{
            backgroundColor: "rgba(139, 105, 20, 0.4)",
            top: "100%",
            left: "3%",
            animation: "float-up 12s infinite linear",
            animationDelay: "1s",
          }}
        ></div>
        <div
          className="absolute w-0.5 h-0.5 rounded-full"
          style={{
            backgroundColor: "rgba(139, 105, 20, 0.35)",
            top: "100%",
            left: "18%",
            animation: "float-up 16s infinite linear",
            animationDelay: "4s",
          }}
        ></div>
        <div
          className="absolute w-0.5 h-0.5 rounded-full"
          style={{
            backgroundColor: "rgba(139, 105, 20, 0.3)",
            top: "100%",
            left: "28%",
            animation: "float-up 14s infinite linear",
            animationDelay: "7s",
          }}
        ></div>
        <div
          className="absolute w-0.5 h-0.5 rounded-full"
          style={{
            backgroundColor: "rgba(139, 105, 20, 0.25)",
            top: "100%",
            left: "38%",
            animation: "float-up 19s infinite linear",
            animationDelay: "2s",
          }}
        ></div>
        <div
          className="absolute w-0.5 h-0.5 rounded-full"
          style={{
            backgroundColor: "rgba(139, 105, 20, 0.4)",
            top: "100%",
            left: "48%",
            animation: "float-up 13s infinite linear",
            animationDelay: "9s",
          }}
        ></div>
        <div
          className="absolute w-0.5 h-0.5 rounded-full"
          style={{
            backgroundColor: "rgba(139, 105, 20, 0.35)",
            top: "100%",
            left: "58%",
            animation: "float-up 17s infinite linear",
            animationDelay: "5s",
          }}
        ></div>
        <div
          className="absolute w-0.5 h-0.5 rounded-full"
          style={{
            backgroundColor: "rgba(139, 105, 20, 0.3)",
            top: "100%",
            left: "68%",
            animation: "float-up 15s infinite linear",
            animationDelay: "12s",
          }}
        ></div>
        <div
          className="absolute w-0.5 h-0.5 rounded-full"
          style={{
            backgroundColor: "rgba(139, 105, 20, 0.25)",
            top: "100%",
            left: "78%",
            animation: "float-up 21s infinite linear",
            animationDelay: "3s",
          }}
        ></div>
        <div
          className="absolute w-0.5 h-0.5 rounded-full"
          style={{
            backgroundColor: "rgba(139, 105, 20, 0.4)",
            top: "100%",
            left: "88%",
            animation: "float-up 11s infinite linear",
            animationDelay: "8s",
          }}
        ></div>
        <div
          className="absolute w-0.5 h-0.5 rounded-full"
          style={{
            backgroundColor: "rgba(139, 105, 20, 0.35)",
            top: "100%",
            left: "98%",
            animation: "float-up 24s infinite linear",
            animationDelay: "6s",
          }}
        ></div>

        {/* Additional layer of medium-sized particles */}
        <div
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            backgroundColor: "rgba(139, 105, 20, 0.25)",
            top: "100%",
            left: "12%",
            animation: "float-up 26s infinite linear",
            animationDelay: "14s",
          }}
        ></div>
        <div
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: "rgba(139, 105, 20, 0.3)",
            top: "100%",
            left: "22%",
            animation: "float-up 18s infinite linear",
            animationDelay: "16s",
          }}
        ></div>
        <div
          className="absolute w-1 h-1 rounded-full"
          style={{
            backgroundColor: "rgba(139, 105, 20, 0.35)",
            top: "100%",
            left: "32%",
            animation: "float-up 20s infinite linear",
            animationDelay: "18s",
          }}
        ></div>
        <div
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            backgroundColor: "rgba(139, 105, 20, 0.2)",
            top: "100%",
            left: "42%",
            animation: "float-up 22s infinite linear",
            animationDelay: "20s",
          }}
        ></div>
        <div
          className="absolute w-2.5 h-2.5 rounded-full"
          style={{
            backgroundColor: "rgba(139, 105, 20, 0.25)",
            top: "100%",
            left: "52%",
            animation: "float-up 16s infinite linear",
            animationDelay: "22s",
          }}
        ></div>
        <div
          className="absolute w-1 h-1 rounded-full"
          style={{
            backgroundColor: "rgba(139, 105, 20, 0.3)",
            top: "100%",
            left: "62%",
            animation: "float-up 24s infinite linear",
            animationDelay: "24s",
          }}
        ></div>
        <div
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            backgroundColor: "rgba(139, 105, 20, 0.35)",
            top: "100%",
            left: "72%",
            animation: "float-up 14s infinite linear",
            animationDelay: "26s",
          }}
        ></div>
        <div
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: "rgba(139, 105, 20, 0.2)",
            top: "100%",
            left: "82%",
            animation: "float-up 28s infinite linear",
            animationDelay: "28s",
          }}
        ></div>
        <div
          className="absolute w-1 h-1 rounded-full"
          style={{
            backgroundColor: "rgba(139, 105, 20, 0.25)",
            top: "100%",
            left: "92%",
            animation: "float-up 12s infinite linear",
            animationDelay: "30s",
          }}
        ></div>

        {/* Additional floating orbs with different movements */}
        <div
          className="absolute w-5 h-5 rounded-full blur-sm"
          style={{
            backgroundColor: "rgba(139, 105, 20, 0.12)",
            top: "30%",
            left: "15%",
            animation: "float-diagonal 25s infinite ease-in-out",
            animationDelay: "15s",
          }}
        ></div>
        <div
          className="absolute w-7 h-7 rounded-full blur-sm"
          style={{
            backgroundColor: "rgba(139, 105, 20, 0.08)",
            top: "70%",
            right: "20%",
            animation: "float-horizontal 40s infinite ease-in-out reverse",
            animationDelay: "20s",
          }}
        ></div>
        <div
          className="absolute w-4 h-4 rounded-full blur-sm"
          style={{
            backgroundColor: "rgba(139, 105, 20, 0.15)",
            top: "50%",
            left: "30%",
            animation: "float-diagonal 32s infinite ease-in-out reverse",
            animationDelay: "25s",
          }}
        ></div>
        <div
          className="absolute w-6 h-6 rounded-full blur-sm"
          style={{
            backgroundColor: "rgba(139, 105, 20, 0.1)",
            top: "25%",
            right: "30%",
            animation: "float-horizontal 38s infinite ease-in-out",
            animationDelay: "30s",
          }}
        ></div>
        <div
          className="absolute w-3 h-3 rounded-full blur-sm"
          style={{
            backgroundColor: "rgba(139, 105, 20, 0.18)",
            top: "80%",
            left: "40%",
            animation: "float-diagonal 22s infinite ease-in-out",
            animationDelay: "35s",
          }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
          }
        }
        
        @keyframes float-horizontal {
          0%, 100% {
            transform: translateX(0) translateY(0);
          }
          25% {
            transform: translateX(50px) translateY(-20px);
          }
          50% {
            transform: translateX(100px) translateY(0);
          }
          75% {
            transform: translateX(50px) translateY(20px);
          }
        }
        
        @keyframes float-diagonal {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(30px, -30px);
          }
          50% {
            transform: translate(60px, 0);
          }
          75% {
            transform: translate(30px, 30px);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.1;
          }
        }

        @keyframes natural-blink {
          0%, 85% {
            opacity: 1;
          }
          90%, 95% {
            opacity: 0.3;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>

      <div
        className="absolute inset-0 bg-gradient-to-r from-[#8B6914]/10 via-transparent to-[#8B6914]/10"
        style={{
          animation: "gradient-shift 12s ease-in-out infinite",
        }}
      ></div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% {
            transform: translateX(-10px);
            opacity: 0.3;
          }
          50% {
            transform: translateX(10px);
            opacity: 0.1;
          }
        }
      `}</style>

      {/* Header - Agora com sombra suave ao invés de mudar de cor */}
      <header
        className={`fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-2 lg:px-12 z-50 transition-all duration-300 bg-transparent ${
          isScrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.3)]" : ""
        }`}
      >
        <div className="flex items-center">
          <img src="/gwhite-logo.png" alt="G-White Apps" className="h-16 w-auto" />
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-gray-200 hover:text-white transition-colors">
            Início
          </Link>
          <Link href="#" className="text-gray-200 hover:text-white transition-colors">
            Planos
          </Link>
          <Link href="#" className="text-gray-200 hover:text-white transition-colors">
            Tutoriais
          </Link>
          <Link href="#" className="text-gray-200 hover:text-white transition-colors">
            Discord
          </Link>
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
              <span
                className="text-white font-bold tracking-wide"
                style={{
                  animation: "gentle-glow 3s ease-in-out infinite",
                  background: "linear-gradient(45deg, #ffffff, #8B6914, #ffffff)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                G-White Apps
              </span>
            </div>
          </h1>

          <h2 className="text-3xl lg:text-4xl font-bold mb-8" style={{ color: "#8B6914" }}>
            Seu futuro Bot está aqui.
          </h2>

          <div className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed space-y-0">
            <p className="text-balance">Eleve seu servidor Discord a um novo patamar com nossa tecnologia avançada.</p>
            <p className="text-balance">
              Automatize processos, melhore a experiência dos membros e simplifique a gestão.
            </p>
            <p className="text-balance">Transforme ideias em realidade com ferramentas poderosas e intuitivas.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              className="text-white px-8 py-3 text-lg rounded-lg"
              style={{
                backgroundColor: "#8B6914",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#6B4E0A")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#8B6914")}
            >
              Ir para a Dashboard
            </Button>
            <Button
              variant="outline"
              className="bg-gray-800 hover:bg-gray-700 text-white border-gray-600 px-8 py-3 text-lg rounded-lg"
            >
              Ver Planos
            </Button>
          </div>
        </div>
      </main>

      {/* Seção Nossos Clientes */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Nossos Clientes</h2>
          <p className="text-gray-300 text-lg mb-12">
            Explore as melhores comunidades do Discord e conecte-se com milhares de pessoas que compartilham seus interesses.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 - SCUM PERDIDOS */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-[#8B6914] transition-all hover:scale-105">
              <div className="flex items-center space-x-4 mb-3">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-2xl">
                  🎮
                </div>
                <div className="text-left">
                  <h3 className="text-white font-bold text-lg">SCUM PERDIDOS</h3>
                  <div className="flex items-center space-x-3 text-sm text-gray-400">
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-gray-500 rounded-full mr-1"></span>
                      594 membros
                    </span>
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                      59 online
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - UnderFoms #600 */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-[#8B6914] transition-all hover:scale-105">
              <div className="flex items-center space-x-4 mb-3">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-2xl">
                  💬
                </div>
                <div className="text-left">
                  <h3 className="text-white font-bold text-lg">UnderFoms #600</h3>
                  <div className="flex items-center space-x-3 text-sm text-gray-400">
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-gray-500 rounded-full mr-1"></span>
                      572 membros
                    </span>
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                      57 online
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - SCP STORE */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-[#8B6914] transition-all hover:scale-105">
              <div className="flex items-center space-x-4 mb-3">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-2xl">
                  🛒
                </div>
                <div className="text-left">
                  <h3 className="text-white font-bold text-lg">🛒 SCP - STORE (Top 1as)</h3>
                  <div className="flex items-center space-x-3 text-sm text-gray-400">
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-gray-500 rounded-full mr-1"></span>
                      556 membros
                    </span>
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                      56 online
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Compacto */}
      <footer className="flex items-center justify-between px-6 py-4 lg:px-12 border-t border-gray-700 relative z-10">
        <div className="flex items-center space-x-6">
          <Link
            href="#"
            className="transition-colors text-xs"
            style={{ color: "#8B6914" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#6B4E0A")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8B6914")}
          >
            Termos de Serviço
          </Link>
          <Link
            href="#"
            className="transition-colors text-xs"
            style={{ color: "#8B6914" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#6B4E0A")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8B6914")}
          >
            Discord
          </Link>
          <Link
            href="#"
            className="transition-colors text-xs"
            style={{ color: "#8B6914" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#6B4E0A")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8B6914")}
          >
            Youtube
          </Link>
        </div>

        <div className="text-gray-400 text-xs">© 2025 G-White Apps. Todos os direitos reservados</div>
      </footer>
    </div>
  )
}
