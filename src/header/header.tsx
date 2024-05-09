import Logo from './logo'
import Button from './button'

function Header() {
    return (
        <div className="bg-yellow-600 mt-3 px-5 py-2 rounded-lg shadow-lg mx-3 sm:container sm:mx-auto">
            <div className="flex justify-between items-center md:flex-none">
                <div className="flex justify-start items-center">
                    <Logo />
                    <div className="hidden md:block">
                        <Button>Главная</Button>
                        <Button>Новости</Button>
                        <Button>События</Button>
                    </div>
                </div>
                <div className="flex justify-end items-center hidden md:block">
                    <Button>Войти</Button>
                    <Button>Регистрация</Button>
                </div>
                <div className="flex justify-end items-center block md:hidden">
                    <div className="text-3xl mr-4 text-white">☰</div>
                </div>
            </div>
        </div>
    )
}

export default Header
