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

      <section id="home" className="relative pt-20 pb-0 overflow-hidden">
        <div className="absolute inset-0 animate-scale-in">
          <img 
            src="https://cdn.poehali.dev/projects/9dedde89-42cf-4aa3-8b0b-8c9f771d1dc3/files/94a1182d-1bcb-4a79-8619-471f69e22300.jpg"
            alt="Панорамный вид"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="min-h-[90vh] flex flex-col justify-center items-center text-center">
            <div className="max-w-5xl space-y-8 animate-fade-in">
              <h1 className="text-6xl lg:text-8xl font-bold leading-tight text-white drop-shadow-2xl">
                Широкие горизонты.<br/>Безграничные виды.
              </h1>
              <p className="text-2xl lg:text-3xl text-white/90 leading-relaxed drop-shadow-lg max-w-3xl mx-auto">
                Элитные панорамные окна, которые стирают границы между домом и природой
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-6">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-12 py-6 text-lg shadow-2xl">
                  Заказать расчет
                </Button>
                <Button size="lg" variant="secondary" className="px-12 py-6 text-lg shadow-2xl bg-white/90 hover:bg-white">
                  Смотреть портфолио
                </Button>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 pb-16 -mb-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-xl text-center">
              <div className="text-5xl font-bold text-accent mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Реализованных проектов</div>
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-xl text-center">
              <div className="text-5xl font-bold text-accent mb-2">25</div>
              <div className="text-sm text-muted-foreground">Лет гарантии</div>
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-xl text-center">
              <div className="text-5xl font-bold text-accent mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Европейское качество</div>
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