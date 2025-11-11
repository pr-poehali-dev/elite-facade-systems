import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const products = [
    {
      title: "Панорамные окна",
      description: "Элитные оконные системы с максимальным остеклением для захватывающих видов",
      image: "https://cdn.poehali.dev/projects/9dedde89-42cf-4aa3-8b0b-8c9f771d1dc3/files/615b615e-4499-471d-9ae9-94801652d4e8.jpg",
      features: ["Алюминиевые профили", "Энергоэффективность A++", "Шумоизоляция до 45 дБ"]
    },
    {
      title: "Деревянные фасады",
      description: "Премиальные фасадные системы из натурального дерева с защитой от внешних воздействий",
      image: "https://cdn.poehali.dev/projects/9dedde89-42cf-4aa3-8b0b-8c9f771d1dc3/files/8b7e31a0-f7ac-4541-8434-ff9b6736f5be.jpg",
      features: ["Термодревесина", "Устойчивость к влаге", "Гарантия 25 лет"]
    },
    {
      title: "Алюминиевые системы",
      description: "Ультратонкие профили премиум-класса для современной архитектуры",
      image: "https://cdn.poehali.dev/projects/9dedde89-42cf-4aa3-8b0b-8c9f771d1dc3/files/2bd6d411-6259-4073-aa59-5828df21f992.jpg",
      features: ["Минималистичный дизайн", "Любые RAL цвета", "Нестандартные формы"]
    }
  ];

  const advantages = [
    {
      icon: "Award",
      title: "Премиальное качество",
      description: "Только европейские материалы высшего класса"
    },
    {
      icon: "Shield",
      title: "Гарантия 25 лет",
      description: "Полная защита вашей инвестиции"
    },
    {
      icon: "Users",
      title: "Индивидуальный подход",
      description: "Персональный менеджер на всех этапах"
    },
    {
      icon: "Sparkles",
      title: "Эксклюзивный дизайн",
      description: "Уникальные решения для вашего проекта"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
              <Icon name="Building2" className="text-primary-foreground" size={24} />
            </div>
            <span className="text-2xl font-bold">ELITE WINDOWS</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm hover:text-accent transition-colors">Главная</a>
            <a href="#products" className="text-sm hover:text-accent transition-colors">Продукция</a>
            <a href="#contact" className="text-sm hover:text-accent transition-colors">Контакты</a>
          </div>
          <Button variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Консультация
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Панорамные окна для элитных застроек
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Премиальные фасадные системы из алюминия, дерева и камня. Создаем архитектурные шедевры с безупречным качеством исполнения.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                  Заказать расчет
                </Button>
                <Button size="lg" variant="outline" className="border-2 px-8">
                  Портфолио
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                <div>
                  <div className="text-4xl font-bold text-accent">500+</div>
                  <div className="text-sm text-muted-foreground mt-1">Реализованных проектов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent">25</div>
                  <div className="text-sm text-muted-foreground mt-1">Лет гарантии</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent">100%</div>
                  <div className="text-sm text-muted-foreground mt-1">Европейское качество</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-lg" />
              <img 
                src="https://cdn.poehali.dev/projects/9dedde89-42cf-4aa3-8b0b-8c9f771d1dc3/files/615b615e-4499-471d-9ae9-94801652d4e8.jpg"
                alt="Панорамные окна"
                className="rounded-lg shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow bg-card">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name={advantage.icon} className="text-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl lg:text-6xl font-bold">Наша продукция</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Элитные решения для индивидуального строительства
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-3xl font-bold">{product.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-accent" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-5xl lg:text-6xl font-bold">Начните свой проект</h2>
            <p className="text-xl opacity-90">
              Получите бесплатную консультацию и персональный расчет стоимости
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <div className="flex items-center gap-3">
                <Icon name="Phone" size={24} />
                <span className="text-xl">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Mail" size={24} />
                <span className="text-xl">info@elitewindows.ru</span>
              </div>
            </div>
            <Button size="lg" variant="secondary" className="mt-8 px-12">
              Оставить заявку
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>© 2024 Elite Windows. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
