import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const PlatformRevenue = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Монетизация платформы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Устойчивая бизнес-модель с множественными источниками дохода
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Icon name="Percent" size={24} className="text-blue-600" />
                <Badge className="bg-blue-600">30%</Badge>
              </div>
              <CardTitle className="text-lg">Комиссия с авторов</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                30% с подписок и донатов авторам
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Icon name="Monitor" size={24} className="text-orange-600" />
                <Badge className="bg-orange-600">50%</Badge>
              </div>
              <CardTitle className="text-lg">Рекламные доходы</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                50% от рекламы в книгах и на сайте
              </p>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Icon name="Crown" size={24} className="text-purple-600" />
                <Badge className="bg-purple-600">Premium</Badge>
              </div>
              <CardTitle className="text-lg">Подписки Premium</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                999₽/мес за расширенные возможности
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Icon name="Handshake" size={24} className="text-green-600" />
                <Badge className="bg-green-600">5-15%</Badge>
              </div>
              <CardTitle className="text-lg">Партнерки</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Комиссии от книжных магазинов
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Прогноз доходов по этапам роста
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Старт (1-5к пользователей)
              </h4>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                150-500к₽
              </div>
              <p className="text-gray-600 text-sm">в месяц</p>
            </div>

            <div className="text-center p-6 border border-purple-300 bg-purple-50 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Рост (10-50к пользователей)
              </h4>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                2-8 млн₽
              </div>
              <p className="text-gray-600 text-sm">в месяц</p>
            </div>

            <div className="text-center p-6 border border-green-300 bg-green-50 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Масштаб (100к+ пользователей)
              </h4>
              <div className="text-3xl font-bold text-green-600 mb-2">
                15+ млн₽
              </div>
              <p className="text-gray-600 text-sm">в месяц</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformRevenue;
