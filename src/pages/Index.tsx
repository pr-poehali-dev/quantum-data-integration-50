import SplineScene from "@/components/SplineScene"
import Header from "@/components/Header"
import RotatingTextAccent from "@/components/RotatingTextAccent"
import Footer from "@/components/Footer"
import HeroTextOverlay from "@/components/HeroTextOverlay"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "ShieldCheck",
    title: "Дезинфекция",
    description: "Уничтожение патогенных микроорганизмов, вирусов и бактерий. Обработка поверхностей, воздуха и систем вентиляции сертифицированными препаратами.",
    tags: ["Квартиры", "Офисы", "Медучреждения"],
  },
  {
    icon: "Bug",
    title: "Дезинсекция",
    description: "Избавляем от тараканов, клопов, муравьёв, комаров и других насекомых. Применяем безопасные методы с длительным защитным эффектом.",
    tags: ["Жилые дома", "Рестораны", "Склады"],
  },
  {
    icon: "Rat",
    title: "Дератизация",
    description: "Полное уничтожение грызунов — крыс и мышей. Профессиональные приманки и ловушки, закрытие путей проникновения, контрольные выезды.",
    tags: ["Производства", "Склады", "Частные дома"],
  },
]

const Index = () => {
  return (
    <div className="w-full min-h-screen py-0 bg-background">
      <div className="max-w-[1200px] mx-auto">
        <main className="w-full relative h-[600px]">
          <Header />
          <SplineScene />
          <HeroTextOverlay />
          <RotatingTextAccent />
        </main>

        {/* About section */}
        <section
          className="relative rounded-4xl py-7 mx-4 md:mx-0 w-[calc(100%-2rem)] md:w-full bg-card border border-solid border-border pb-12"
          style={{
            backgroundImage: `
              linear-gradient(var(--border) 1px, transparent 1px),
              linear-gradient(90deg, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        >
          <div className="absolute top-8 left-8 text-foreground opacity-50 text-5xl font-extralight font-sans leading-[0rem]">+</div>
          <div className="absolute top-8 right-8 text-foreground opacity-50 text-5xl font-sans leading-[0] font-extralight">+</div>
          <div className="absolute bottom-8 left-8 text-foreground opacity-50 text-5xl font-sans font-extralight">+</div>
          <div className="absolute bottom-8 right-8 text-foreground opacity-50 text-5xl font-sans font-extralight">+</div>

          <div className="px-6 md:px-16 pt-6">
            <div className="flex flex-col gap-2 max-w-5xl">
              <div className="flex items-center gap-4">
                <span className="text-accent font-mono text-sm">Компания</span>
                <span className="text-foreground font-mono text-sm">Геометрия чистоты</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-accent font-mono text-sm">Услуги</span>
                <span className="text-foreground font-mono text-sm">Дезинфекция · Дезинсекция · Дератизация</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-accent font-mono text-sm">О нас</span>
                <span className="text-foreground font-mono text-sm">
                  Уничтожаем патогены, насекомых и грызунов с применением сертифицированных препаратов. Работаем с жилыми, коммерческими и производственными объектами. Точно, безопасно, с гарантией результата.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Services section */}
        <section className="px-4 md:px-0 py-16">
          <div className="mb-10">
            <span className="text-accent font-mono text-sm">Наши услуги</span>
            <h2 className="text-foreground text-3xl md:text-4xl font-bold mt-2" style={{ fontFamily: "var(--font-montserrat)" }}>
              Полный цикл санитарной защиты
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="relative rounded-3xl p-7 bg-card border border-border flex flex-col gap-4 hover:border-accent transition-colors duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20">
                  <Icon name={service.icon as "ShieldCheck"} size={24} className="text-accent" />
                </div>
                <h3 className="text-foreground text-xl font-bold" style={{ fontFamily: "var(--font-montserrat)" }}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-mono text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Index