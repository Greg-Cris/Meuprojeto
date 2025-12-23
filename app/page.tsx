import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, Shield, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-dark-gradient bg-particles">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">G-White Apps</h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gold-dark mb-8">
              Seu futuro Bot está aqui.
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transforme seu servidor no Discord em uma plataforma funcional e eficiente. Com nossa solução, você
              melhora a interação, organização e gestão.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gold-dark hover:bg-gold-dark/90 hover-glow cursor-pointer text-white px-8 py-4 text-lg font-semibold"
                asChild
              >
                <Link href="/dashboard">
                  Ir para a Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover-brighten cursor-pointer px-8 py-4 text-lg bg-transparent"
                asChild
              >
                <Link href="/planos">Ver Planos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Por que escolher G-White Apps?</h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Oferecemos as melhores soluções para transformar seu Discord em uma plataforma completa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6 rounded-lg bg-gray-800/50 border border-gray-700 hover-brighten cursor-pointer">
              <div className="w-16 h-16 bg-gold-dark/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="h-8 w-8 text-gold-dark" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Bots Inteligentes</h4>
              <p className="text-gray-400">Sistemas automatizados que facilitam a gestão do seu servidor</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gray-800/50 border border-gray-700 hover-brighten cursor-pointer">
              <div className="w-16 h-16 bg-discord/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-discord" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Segurança Total</h4>
              <p className="text-gray-400">Proteção avançada contra fraudes e moderação automática</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gray-800/50 border border-gray-700 hover-brighten cursor-pointer">
              <div className="w-16 h-16 bg-gold-dark/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-gold-dark" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Fácil Configuração</h4>
              <p className="text-gray-400">Setup rápido e intuitivo com tutoriais passo a passo</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-dark/10 to-discord/10">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Pronto para começar?</h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de servidores que já transformaram sua experiência no Discord
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-discord hover:bg-discord/90 hover-discord-glow cursor-pointer text-discord-foreground px-8 py-4 text-lg"
              asChild
            >
              <Link href="https://discord.gg/ZsfdV3FK" target="_blank">
                Entrar no Discord
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              className="bg-gold-dark hover:bg-gold-dark/90 hover-glow cursor-pointer text-white px-8 py-4 text-lg"
              asChild
            >
              <Link href="/planos">Ver Planos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
