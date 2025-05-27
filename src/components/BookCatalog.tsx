import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const books = [
  {
    id: 1,
    title: "Тайны московского метро",
    author: "Анна Сергеева",
    genre: "Детектив",
    rating: 4.8,
    earnings: "45,000₽",
    readers: 1250,
    cover:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Код успеха",
    author: "Михаил Петров",
    genre: "Бизнес",
    rating: 4.6,
    earnings: "38,500₽",
    readers: 890,
    cover:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Звездная пыль",
    author: "Елена Волкова",
    genre: "Фантастика",
    rating: 4.9,
    earnings: "67,200₽",
    readers: 2100,
    cover:
      "https://images.unsplash.com/photo-1518373714866-3f1478910cc0?w=300&h=400&fit=crop",
  },
];

const BookCatalog = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Популярные книги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Откройте для себя лучшие произведения наших авторов и узнайте их
            заработок
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <Card
              key={book.id}
              className="hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="aspect-w-3 aspect-h-4 relative">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500 text-white">
                    {book.earnings}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{book.genre}</Badge>
                  <div className="flex items-center space-x-1">
                    <Icon
                      name="Star"
                      size={16}
                      className="text-yellow-500 fill-current"
                    />
                    <span className="text-sm font-medium">{book.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-xl">{book.title}</CardTitle>
                <p className="text-gray-600">от {book.author}</p>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Icon name="Users" size={16} />
                    <span>{book.readers} читателей</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-green-600 font-medium">
                    <Icon name="TrendingUp" size={16} />
                    <span>Доход автора</span>
                  </div>
                </div>

                <Button className="w-full" variant="outline">
                  <Icon name="BookOpen" size={16} />
                  Читать и зарабатывать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Показать все книги
            <Icon name="ArrowRight" size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BookCatalog;
