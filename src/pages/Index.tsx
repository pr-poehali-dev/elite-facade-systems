import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [currentStyle, setCurrentStyle] = useState<'classic' | 'modern' | 'minimal'>('classic');

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

  const styles = {
    classic: {
      bgClass: "bg-gradient-to-br from-slate-900 via-slate-800 to-black",
      accentClass: "text-amber-400",
      buttonClass: "bg-amber-400 text-black hover:bg-amber-500",
      cardClass: "bg-white/5 backdrop-blur-sm border-amber-400/20",
      textClass: "text-white"
    },
    modern: {
      bgClass: "bg-gradient-to-br from-blue-950 via-indigo-900 to-violet-950",
      accentClass: "text-cyan-400",
      buttonClass: "bg-cyan-400 text-black hover:bg-cyan-500",
      cardClass: "bg-white/10 backdrop-blur-md border-cyan-400/30",
      textClass: "text-white"
    },
    minimal: {
      bgClass: "bg-white",
      accentClass: "text-black",
      buttonClass: "bg-black text-white hover:bg-gray-800",
      cardClass: "bg-gray-50 border-gray-200",
      textClass: "text-black"
    }
  };

  const currentTheme = styles[currentStyle];

  return (
    <div className={`min-h-screen ${currentTheme.bgClass} transition-all duration-700`}>
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <Button
          size="sm"
          variant={currentStyle === 'classic' ? 'default' : 'outline'}
          onClick={() => setCurrentStyle('classic')}
          className="bg-amber-400 text-black hover:bg-amber-500"
        >
          Классика
        </Button>
        <Button
          size="sm"
          variant={currentStyle === 'modern' ? 'default' : 'outline'}
          onClick={() => setCurrentStyle('modern')}
          className="bg-cyan-400 text-black hover:bg-cyan-500"
        >
          Модерн
        </Button>
        <Button
          size="sm"
          variant={currentStyle === 'minimal' ? 'default' : 'outline'}
          onClick={() => setCurrentStyle('minimal')}
          className="bg-black text-white hover:bg-gray-800"
        >
          Минимал
        </Button>
      </div>

      <nav className={`fixed top-0 left-0 right-0 z-40 ${currentStyle === 'minimal' ? 'bg-white/95' : 'bg-black/60'} backdrop-blur-sm border-b ${currentStyle === 'minimal' ? 'border-gray-200' : 'border-white/10'}`}>
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/d494bc9a-c278-4782-b5f4-01791bfbf790.png"
              alt="INFACADE"
              className={`h-8 ${currentStyle === 'minimal' ? '' : 'invert'}`}
            />
          </div>
          <div className={`hidden md:flex items-center gap-8 ${currentTheme.textClass}`}>
            <a href="#home" className={`text-sm hover:${currentTheme.accentClass} transition-colors`}>Главная</a>
            <a href="#products" className={`text-sm hover:${currentTheme.accentClass} transition-colors`}>Продукция</a>
            <a href="#contact" className={`text-sm hover:${currentTheme.accentClass} transition-colors`}>Контакты</a>
          </div>
          <Button className={currentTheme.buttonClass}>
            Консультация
          </Button>
        </div>
      </nav>

      <section id="home" className="relative pt-20 pb-0 overflow-hidden">
        <div className="absolute inset-0 animate-scale-in opacity-40">
          <img 
            src="https://cdn.poehali.dev/projects/9dedde89-42cf-4aa3-8b0b-8c9f771d1dc3/files/94a1182d-1bcb-4a79-8619-471f69e22300.jpg"
            alt="Панорамный вид"
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${currentStyle === 'minimal' ? 'bg-white/70' : 'bg-black/60'}`} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="min-h-[90vh] flex flex-col justify-center items-center text-center">
            <div className="max-w-5xl space-y-8 animate-fade-in">
              <h1 className={`text-6xl lg:text-8xl font-bold leading-tight ${currentTheme.textClass} drop-shadow-2xl`}>
                Широкие горизонты.<br/>
                <span className={currentTheme.accentClass}>Безграничные виды.</span>
              </h1>
              <p className={`text-2xl lg:text-3xl ${currentStyle === 'minimal' ? 'text-gray-700' : 'text-white/90'} leading-relaxed drop-shadow-lg max-w-3xl mx-auto`}>
                Элитные панорамные окна, которые стирают границы между домом и природой
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-6">
                <Button size="lg" className={`${currentTheme.buttonClass} px-12 py-6 text-lg shadow-2xl`}>
                  Заказать расчет
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className={`px-12 py-6 text-lg shadow-2xl ${currentStyle === 'minimal' ? 'bg-white border-black text-black hover:bg-gray-100' : 'bg-white/10 border-white text-white hover:bg-white/20'}`}
                >
                  Смотреть портфолио
                </Button>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 pb-16 -mb-8">
            <div className={`${currentTheme.cardClass} rounded-lg p-8 shadow-xl text-center border`}>
              <div className={`text-5xl font-bold ${currentTheme.accentClass} mb-2`}>500+</div>
              <div className={`text-sm ${currentStyle === 'minimal' ? 'text-gray-600' : 'text-white/70'}`}>Реализованных проектов</div>
            </div>
            <div className={`${currentTheme.cardClass} rounded-lg p-8 shadow-xl text-center border`}>
              <div className={`text-5xl font-bold ${currentTheme.accentClass} mb-2`}>25</div>
              <div className={`text-sm ${currentStyle === 'minimal' ? 'text-gray-600' : 'text-white/70'}`}>Лет гарантии</div>
            </div>
            <div className={`${currentTheme.cardClass} rounded-lg p-8 shadow-xl text-center border`}>
              <div className={`text-5xl font-bold ${currentTheme.accentClass} mb-2`}>100%</div>
              <div className={`text-sm ${currentStyle === 'minimal' ? 'text-gray-600' : 'text-white/70'}`}>Европейское качество</div>
            </div>
          </div>
        </div>
      </section>

      <section className={`py-16 ${currentStyle === 'minimal' ? 'bg-gray-50' : 'bg-black/20'}`}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className={`${currentTheme.cardClass} border shadow-lg hover:shadow-xl transition-shadow`}>
                <CardContent className="p-6 space-y-3">
                  <div className={`w-12 h-12 ${currentStyle === 'minimal' ? 'bg-black/5' : 'bg-white/10'} rounded-full flex items-center justify-center`}>
                    <Icon name={advantage.icon} className={currentTheme.accentClass} size={24} />
                  </div>
                  <h3 className={`text-xl font-semibold ${currentTheme.textClass}`}>{advantage.title}</h3>
                  <p className={currentStyle === 'minimal' ? 'text-gray-600' : 'text-white/70'}>{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className={`text-5xl lg:text-6xl font-bold ${currentTheme.textClass}`}>Наша продукция</h2>
            <p className={`text-xl max-w-2xl mx-auto ${currentStyle === 'minimal' ? 'text-gray-600' : 'text-white/70'}`}>
              Элитные решения для индивидуального строительства
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className={`overflow-hidden ${currentTheme.cardClass} border shadow-lg hover:shadow-2xl transition-all duration-300 group`}>
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 ${currentStyle === 'minimal' ? 'bg-gradient-to-t from-white/90 to-transparent' : 'bg-gradient-to-t from-black/80 to-transparent'}`} />
                </div>
                <CardContent className="p-8 space-y-4">
                  <h3 className={`text-3xl font-bold ${currentTheme.textClass}`}>{product.title}</h3>
                  <p className={`leading-relaxed ${currentStyle === 'minimal' ? 'text-gray-600' : 'text-white/70'}`}>{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className={currentTheme.accentClass} size={18} />
                        <span className={currentTheme.textClass}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full mt-4 ${currentTheme.buttonClass}`}>
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className={`py-24 ${currentStyle === 'minimal' ? 'bg-black text-white' : 'bg-white/5 text-white border-t border-white/10'}`}>
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className={`text-5xl lg:text-6xl font-bold`}>Начните свой проект</h2>
            <p className={`text-xl ${currentStyle === 'minimal' ? 'text-white/80' : 'opacity-90'}`}>
              Получите бесплатную консультацию и персональный расчет стоимости
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <div className="flex items-center gap-3">
                <Icon name="Phone" size={24} />
                <span className="text-xl">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Mail" size={24} />
                <span className="text-xl">info@infacade.ru</span>
              </div>
            </div>
            <Button size="lg" className={`mt-8 px-12 ${currentTheme.buttonClass}`}>
              Оставить заявку
            </Button>
          </div>
        </div>
      </section>

      <footer className={`py-8 border-t ${currentStyle === 'minimal' ? 'border-gray-200' : 'border-white/10'}`}>
        <div className="container mx-auto px-6 text-center">
          <img 
            src="https://cdn.poehali.dev/files/d494bc9a-c278-4782-b5f4-01791bfbf790.png"
            alt="INFACADE"
            className={`h-6 mx-auto mb-4 ${currentStyle === 'minimal' ? '' : 'invert'}`}
          />
          <p className={`text-sm ${currentStyle === 'minimal' ? 'text-gray-600' : 'text-white/50'}`}>
            © 2024 INFACADE. Остекление и фасады. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
