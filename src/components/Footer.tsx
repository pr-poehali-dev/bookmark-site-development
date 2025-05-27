import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="BookOpen" size={28} className="text-purple-400" />
              <span className="text-2xl font-bold">БукМейт</span>
            </div>
            <p className="text-gray-400">
              Платформа для авторов и читателей, где каждая страница приносит
              доход.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Авторам</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Как начать
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Условия заработка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Продвижение книг
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Статистика
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Читателям</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Как заработать
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Подписки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Рейтинги
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Сообщество
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Справка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Правовая информация
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Соблюдение законов РФ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2024 БукМейт. Все права защищены.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="Mail" size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="Phone" size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
