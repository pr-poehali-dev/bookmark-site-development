import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const RewardsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Система вознаграждений
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Зарабатывайте как автор и как читатель. Получайте реальные деньги за
            свою активность
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Для авторов */}
          <div>
            <div className="flex items-center mb-6">
              <Icon name="PenTool" size={32} className="text-purple-600 mr-3" />
              <h3 className="text-3xl font-bold text-gray-900">Для авторов</h3>
            </div>

            <div className="space-y-4">
              <Card className="border-purple-200 bg-purple-50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold">
                      Подписки читателей
                    </h4>
                    <Badge className="bg-purple-600">70%</Badge>
                  </div>
                  <p className="text-gray-600">
                    Получайте 70% от стоимости подписок ваших читателей
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold">Рекламные доходы</h4>
                    <Badge variant="outline">50%</Badge>
                  </div>
                  <p className="text-gray-600">
                    Доля от рекламы, показанной в ваших книгах
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold">Донаты читателей</h4>
                    <Badge variant="outline">95%</Badge>
                  </div>
                  <p className="text-gray-600">
                    Почти вся сумма донатов поступает автору
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Для читателей */}
          <div>
            <div className="flex items-center mb-6">
              <Icon name="BookOpen" size={32} className="text-green-600 mr-3" />
              <h3 className="text-3xl font-bold text-gray-900">
                Для читателей
              </h3>
            </div>

            <div className="space-y-4">
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold">Отзывы и рецензии</h4>
                    <Badge className="bg-green-600">до 500₽</Badge>
                  </div>
                  <p className="text-gray-600">
                    За качественные развернутые отзывы на книги
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold">
                      Программа лояльности
                    </h4>
                    <Badge variant="outline">Баллы</Badge>
                  </div>
                  <p className="text-gray-600">
                    Накапливайте баллы за чтение и обменивайте на деньги
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold">
                      Реферальная программа
                    </h4>
                    <Badge variant="outline">10%</Badge>
                  </div>
                  <p className="text-gray-600">
                    Получайте комиссию с покупок приглашенных друзей
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Статистика выплат */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            Выплаты за последний месяц
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">2.8М₽</div>
              <div className="text-gray-600">Авторам</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">450К₽</div>
              <div className="text-gray-600">Читателям</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">1,250</div>
              <div className="text-gray-600">Получателей</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">24ч</div>
              <div className="text-gray-600">Среднее время</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
