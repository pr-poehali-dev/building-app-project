import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const stages = [
    {
      icon: 'FileText',
      title: 'Проектирование',
      description: 'Разработка архитектурного проекта и согласование технической документации'
    },
    {
      icon: 'HardHat',
      title: 'Подготовка',
      description: 'Оформление разрешений, подготовка площадки и закупка материалов'
    },
    {
      icon: 'Building2',
      title: 'Строительство',
      description: 'Возведение конструкций, инженерные системы, отделочные работы'
    },
    {
      icon: 'CheckCircle2',
      title: 'Сдача объекта',
      description: 'Финальная проверка, устранение недочетов и передача ключей'
    }
  ];

  const projects = [
    {
      image: 'https://cdn.poehali.dev/projects/30663070-7828-47da-a8d8-59adb14bcecd/files/17b2de51-f4c1-494f-95f6-00c2e04d1e77.jpg',
      title: 'ЖК "Современный"',
      description: 'Жилой комплекс на 120 квартир',
      area: '15 000 м²',
      period: '18 месяцев'
    },
    {
      image: 'https://cdn.poehali.dev/projects/30663070-7828-47da-a8d8-59adb14bcecd/files/2d1bc88c-ca93-4a45-8c7c-08a269fc6935.jpg',
      title: 'Бизнес-центр "Столица"',
      description: 'Офисное здание класса А',
      area: '8 500 м²',
      period: '14 месяцев'
    },
    {
      image: 'https://cdn.poehali.dev/projects/30663070-7828-47da-a8d8-59adb14bcecd/files/d0cc8095-a253-4ded-a7b2-dbe98a4fd7ff.jpg',
      title: 'ТЦ "Горизонт"',
      description: 'Торговый центр с парковкой',
      area: '22 000 м²',
      period: '24 месяца'
    }
  ];

  const reviews = [
    {
      name: 'Андрей Петров',
      position: 'Генеральный директор ООО "Инвест"',
      text: 'Отличная команда профессионалов! Построили бизнес-центр точно в срок и с высоким качеством.',
      rating: 5
    },
    {
      name: 'Елена Смирнова',
      position: 'Собственник',
      text: 'Благодарю за построенный дом мечты. Все пожелания учли, работа выполнена на высшем уровне.',
      rating: 5
    },
    {
      name: 'Михаил Козлов',
      position: 'Директор по развитию "РосСтрой"',
      text: 'Надежные партнеры. Уже третий объект строим вместе. Всегда качественно и в срок.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Building2" size={32} className="text-primary" />
              <span className="text-2xl font-bold">СтройМастер</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#projects" className="hover:text-primary transition-colors">Проекты</a>
              <a href="#stages" className="hover:text-primary transition-colors">Этапы работы</a>
              <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="hidden md:flex">
              <Icon name="Phone" size={18} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
          </nav>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Строим будущее
                <span className="text-primary"> вместе</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Профессиональное строительство жилых и коммерческих объектов под ключ. 
                Более 15 лет опыта и 200+ реализованных проектов.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg">
                  Оставить заявку
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть видео
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/30663070-7828-47da-a8d8-59adb14bcecd/files/d0cc8095-a253-4ded-a7b2-dbe98a4fd7ff.jpg"
                alt="Строительство"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="stages" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Этапы работы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Прозрачный процесс от идеи до ключей в руках
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stages.map((stage, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={stage.icon} size={32} className="text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary/20 mb-2">0{index + 1}</div>
                  <h3 className="text-xl font-bold mb-3">{stage.title}</h3>
                  <p className="text-muted-foreground">{stage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши проекты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Примеры реализованных объектов различной сложности
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Icon name="Square" size={16} className="text-secondary" />
                      <span>{project.area}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={16} className="text-accent" />
                      <span>{project.period}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Что говорят о нас наши заказчики
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="User" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.position}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary via-secondary to-accent text-white">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Оставьте заявку</h2>
            <p className="text-xl opacity-90">
              Мы свяжемся с вами в течение 15 минут
            </p>
          </div>
          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="text-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    className="text-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="text-lg"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg">
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Building2" size={32} />
                <span className="text-2xl font-bold">СтройМастер</span>
              </div>
              <p className="opacity-80">Профессиональное строительство с 2009 года</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 opacity-80">
                <li>Жилые дома</li>
                <li>Коммерческие объекты</li>
                <li>Реконструкция</li>
                <li>Дизайн</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 opacity-80">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Вакансии</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-3 opacity-80">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@stroymaster.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>Москва, ул. Строителей, 1</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center opacity-80">
            <p>&copy; 2024 СтройМастер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
