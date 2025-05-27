import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Icon name="BookOpen" size={28} className="text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">БукМейт</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Каталог
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Авторы
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Заработок
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Читателям
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden sm:flex">
              <Icon name="LogIn" size={16} />
              Войти
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Icon name="UserPlus" size={16} />
              Стать автором
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
