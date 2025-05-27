import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const authors = [
  {
    id: 1,
    name: "Анна Сергеева",
    genre: "Детектив",
    monthlyEarnings: "127,500₽",
    totalBooks: 8,
    followers: 4500,
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b1c3?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Михаил Петров",
    genre: "Бизнес",
    monthlyEarnings: "95,200₽",
    totalBooks: 5,
    followers: 3200,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Елена Волкова",
    genre: "Фантастика",
    monthlyEarnings: "89,800₽",
    totalBooks: 12,
    followers: 5800,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
];

const TopAuthors = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Топ авторов месяца
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Познакомьтесь с самыми успешными авторами платформы и их доходами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {authors.map((author, index) => (
            <Card
              key={author.id}
              className="hover:shadow-lg transition-shadow relative"
            >
              {index === 0 && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-yellow-500 text-white">
                    <Icon name="Crown" size={14} />
                    Лидер
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-2">
                <div className="relative inline-block mb-4">
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="w-20 h-20 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <Icon name="Check" size={12} className="text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  {author.name}
                </h3>
                <Badge variant="outline" className="mt-2">
                  {author.genre}
                </Badge>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {author.monthlyEarnings}
                    </div>
                    <div className="text-sm text-green-700">доход за месяц</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-900">
                        {author.totalBooks}
                      </div>
                      <div className="text-sm text-gray-600">книг</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-900">
                        {author.followers}
                      </div>
                      <div className="text-sm text-gray-600">читателей</div>
                    </div>
                  </div>

                  <Button className="w-full" variant="outline">
                    <Icon name="UserPlus" size={16} />
                    Подписаться
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg">
            <Icon name="TrendingUp" size={16} />
            Стать топ-автором
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TopAuthors;
