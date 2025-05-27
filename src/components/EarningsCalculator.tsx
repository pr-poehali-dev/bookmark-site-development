import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const EarningsCalculator = () => {
  const [authorSubscribers, setAuthorSubscribers] = useState([100]);
  const [authorBooks, setAuthorBooks] = useState([3]);
  const [readerReviews, setReaderReviews] = useState([5]);
  const [readingHours, setReadingHours] = useState([20]);

  const calculateAuthorEarnings = () => {
    const subscribers = authorSubscribers[0];
    const books = authorBooks[0];
    const subscriptionRevenue = subscribers * 299 * 0.7; // 70% от подписок 299₽
    const adRevenue = subscribers * books * 45; // доход с рекламы
    const donationsEstimate = subscribers * 0.1 * 150; // 10% донатят в среднем 150₽

    return {
      subscription: Math.round(subscriptionRevenue),
      ads: Math.round(adRevenue),
      donations: Math.round(donationsEstimate),
      total: Math.round(subscriptionRevenue + adRevenue + donationsEstimate),
    };
  };

  const calculateReaderEarnings = () => {
    const reviews = readerReviews[0];
    const hours = readingHours[0];
    const reviewEarnings = reviews * 200; // средний доход за отзыв
    const loyaltyPoints = hours * 15; // баллы за чтение
    const loyaltyRubles = Math.round(loyaltyPoints * 0.5); // 1 балл = 0.5₽

    return {
      reviews: reviewEarnings,
      loyalty: loyaltyRubles,
      total: reviewEarnings + loyaltyRubles,
    };
  };

  const authorEarnings = calculateAuthorEarnings();
  const readerEarnings = calculateReaderEarnings();

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Калькулятор доходов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Рассчитайте свой потенциальный доход как автор или читатель
          </p>
        </div>

        <Tabs defaultValue="author" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="author" className="text-lg py-3">
              <Icon name="PenTool" size={20} className="mr-2" />Я автор
            </TabsTrigger>
            <TabsTrigger value="reader" className="text-lg py-3">
              <Icon name="BookOpen" size={20} className="mr-2" />Я читатель
            </TabsTrigger>
          </TabsList>

          <TabsContent value="author">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon
                      name="Settings"
                      size={24}
                      className="mr-2 text-purple-600"
                    />
                    Настройки расчета
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Количество подписчиков: {authorSubscribers[0]}
                    </label>
                    <Slider
                      value={authorSubscribers}
                      onValueChange={setAuthorSubscribers}
                      max={5000}
                      min={10}
                      step={10}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Количество книг: {authorBooks[0]}
                    </label>
                    <Slider
                      value={authorBooks}
                      onValueChange={setAuthorBooks}
                      max={20}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">
                      Как начать зарабатывать:
                    </h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>1. Опубликуйте свою первую книгу</li>
                      <li>2. Привлекайте читателей качественным контентом</li>
                      <li>3. Получайте 70% от подписок читателей</li>
                      <li>4. Зарабатывайте на рекламе и донатах</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon
                      name="TrendingUp"
                      size={24}
                      className="mr-2 text-green-600"
                    />
                    Ваш доход в месяц
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <span className="font-medium">Подписки</span>
                      <Badge className="bg-purple-600">
                        {authorEarnings.subscription.toLocaleString()}₽
                      </Badge>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium">Реклама</span>
                      <Badge variant="outline">
                        {authorEarnings.ads.toLocaleString()}₽
                      </Badge>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="font-medium">Донаты</span>
                      <Badge variant="outline">
                        {authorEarnings.donations.toLocaleString()}₽
                      </Badge>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold">Итого:</span>
                        <span className="text-2xl font-bold text-green-600">
                          {authorEarnings.total.toLocaleString()}₽
                        </span>
                      </div>
                    </div>

                    <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">
                      <Icon name="PenTool" size={16} />
                      Стать автором
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reader">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon
                      name="Settings"
                      size={24}
                      className="mr-2 text-green-600"
                    />
                    Ваша активность
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Отзывов в месяц: {readerReviews[0]}
                    </label>
                    <Slider
                      value={readerReviews}
                      onValueChange={setReaderReviews}
                      max={30}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Часов чтения: {readingHours[0]}
                    </label>
                    <Slider
                      value={readingHours}
                      onValueChange={setReadingHours}
                      max={100}
                      min={5}
                      step={5}
                      className="w-full"
                    />
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Как зарабатывать:</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>1. Читайте книги на платформе</li>
                      <li>2. Пишите качественные отзывы</li>
                      <li>3. Накапливайте баллы лояльности</li>
                      <li>4. Приглашайте друзей (10% от их покупок)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon
                      name="Coins"
                      size={24}
                      className="mr-2 text-green-600"
                    />
                    Ваш доход в месяц
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="font-medium">За отзывы</span>
                      <Badge className="bg-green-600">
                        {readerEarnings.reviews.toLocaleString()}₽
                      </Badge>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium">Баллы лояльности</span>
                      <Badge variant="outline">
                        {readerEarnings.loyalty.toLocaleString()}₽
                      </Badge>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold">Итого:</span>
                        <span className="text-2xl font-bold text-green-600">
                          {readerEarnings.total.toLocaleString()}₽
                        </span>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-lg text-sm">
                      <strong>Бонус:</strong> Пригласите 10 друзей и получайте
                      дополнительно ~2,000₽/месяц с их активности
                    </div>

                    <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                      <Icon name="BookOpen" size={16} />
                      Начать читать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default EarningsCalculator;
