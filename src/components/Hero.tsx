import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge className="mb-6 bg-purple-100 text-purple-800 border-purple-200">
            <Icon name="TrendingUp" size={14} />
            Авторы зарабатывают до 150,000₽ в месяц
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Зарабатывайте на
            <span className="text-purple-600 block">своих историях</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Платформа для авторов и читателей, где каждая страница приносит
            доход. Публикуйте книги, получайте вознаграждения за чтение и
            отзывы.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Icon name="PenTool" size={20} />
              Начать писать
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="BookOpen" size={20} />
              Читать и зарабатывать
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">12,450</div>
              <div className="text-gray-600">Авторов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">89,300</div>
              <div className="text-gray-600">Читателей</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">2.8М₽</div>
              <div className="text-gray-600">Выплачено</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">5,600</div>
              <div className="text-gray-600">Книг</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
