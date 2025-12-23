"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function PlansPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const plans = [
    {
      name: "Trial",
      badge: "Gratuito",
      badgeColor: "bg-emerald-600",
      price: "0",
      period: "/24h",
      description: "Teste todas as funcionalidades por 24 horas gratuitamente.",
      features: [
        "Sistema de vendas completo",
        "Sistema de ticket profissional",
        "OAuth2 e proteção anti-fraude",
        "Personalização total",
        "Logs, moderação e automação",
        "Todas as funcionalidades incluídas"
      ],
      buttonText: "Testar Grátis",
      buttonColor: "bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800",
      highlighted: false
    },
    {
      name: "Start",
      badge: "Recomendado",
      badgeColor: "bg-purple-600",
      popular: "Mais Popular",
      popularColor: "bg-purple-700",
      price: "5,97",
      period: "/mês",
      description: "Solução completa para vendas e atendimento no Discord.",
      features: [
        "Vendas via Pix/Cartão",
        "Sistema de ticket profissional",
        "Proteção anti-fraude avançada",
        "Personalização completa",
        "Suporte prioritário"
      ],
      buttonText: "Começar Agora",
      buttonColor: "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800",
      highlighted: true
    },
    {
      name: "Enterprise",
      badge: "Em Desenvolvimento",
      badgeColor: "bg-gray-600",
      price: "Em breve",
      period: "",
      description: "Recursos avançados para grandes servidores e empresas.",
      features: [
        "Todos os recursos do Start",
        "Múltiplos bots por servidor",
        "API personalizada",
        "White-label completo"
      ],
      buttonText: "Em Breve",
      buttonColor: "bg-gray-700 hover:bg-gray-600 cursor-not-allowed",
      highlighted: false,
      disabled: true
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black text-white relative overflow-hidden">
      {/* Partículas de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full will-change-transform"
            style={{
              backgroundColor: `rgba(255, 255, 255, ${Math.random() * 0.6 + 0.2})`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-up ${Math.random() * 15 + 10}s infinite linear`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float-up {
          0% { transform: translateY(0) translateX(0); opacity: 0.3; }
          50% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }
      `}</style>

      {/* Header FIXO */}
      <header className={`fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-3 lg:px-12 z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.8)]" : "bg-transparent"}`}>
        <a href="/" className="flex items-center">
          <img src="/gwhite-logo.png" alt="G-White Apps" className="h-16 w-auto" />
        </a>
        <nav className="hidden md:flex items-center space-x-2">
          <a href="/" className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 px-4 py-2 rounded-lg">
            Início
          </a>
          <a href="/planos" className="text-white bg-white/10 transition-all duration-200 px-4 py-2 rounded-lg">
            Planos
          </a>
          <a href="#" className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 px-4 py-2 rounded-lg">
            Tutoriais
          </a>
          <a href="#" className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 px-4 py-2 rounded-lg">
            Discord
          </a>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-200 ml-4 shadow-lg font-semibold">
            Entrar
          </Button>
        </nav>
      </header>

      {/* Main Content - com padding-top para compensar header fixo */}
      <main className="relative z-10 px-6 py-20 pt-32 pb-32">
        <div className="max-w-7xl mx-auto">
          {/* Título */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Escolha o plano ideal <span className="text-red-500">para você</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Soluções flexíveis para negócios em crescimento e empresas em expansão.
            </p>
          </div>

          {/* Cards de Planos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-purple-900/40 border-2 border-purple-500 scale-105 shadow-2xl shadow-purple-500/20"
                    : "bg-gray-900/50 border border-gray-800 hover:border-gray-700"
                }`}
              >
                {/* Badge Superior */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`${plan.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                    {plan.badge}
                  </span>
                  {plan.popular && (
                    <span className={`${plan.popularColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                      {plan.popular}
                    </span>
                  )}
                </div>

                {/* Nome do Plano */}
                <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6 min-h-[40px]">{plan.description}</p>

                {/* Preço */}
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-sm text-gray-400 mr-1">R$</span>
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  {plan.price !== "Em breve" && (
                    <p className="text-xs text-gray-500 mt-2">a partir de</p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Botão */}
                <Button
                  disabled={plan.disabled}
                  className={`w-full ${plan.buttonColor} text-white py-6 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg`}
                >
                  {plan.buttonText} →
                </Button>
              </div>
            ))}
          </div>

          {/* Features Adicionais */}
          <div className="mt-20 text-center">
            <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <span className="text-gray-300">Pagamento seguro</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-gray-300">Ativação instantânea</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <span className="text-gray-300">Suporte 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer FIXO */}
      <footer className="fixed bottom-0 left-0 right-0 flex flex-col sm:flex-row items-center justify-between px-6 py-6 lg:px-12 border-t border-gray-800 z-50 bg-black/90 backdrop-blur-md gap-4">
        <div className="flex items-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
            <span>📋</span> Termos de Serviço
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/></svg>
            Discord
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            Youtube
          </a>
        </div>
        <div className="text-gray-500 text-xs">© 2025 G-White Apps. Todos os direitos reservados</div>
      </footer>
    </div>
  )
}
