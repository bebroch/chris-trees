import Logo from './logo'
import Button from './button'

function Header() {
    return (
        <div className="bg-yellow-600 mt-3 px-5 py-2 rounded-lg shadow-lg mx-3 container:none lg:container lg:mx-auto">
            <div className="flex justify-between items-center lg:flex-none">
                <div className="flex justify-start items-center">
                    <Logo />
                    <div className="hidden lg:block">
                        <Button>Главная</Button>
                        <Button>Новости</Button>
                        <Button>События</Button>
                    </div>
                </div>
                <div className="flex justify-end items-center hidden lg:block">
                    <Button>Войти</Button>
                    <Button>Регистрация</Button>
                </div>
                <div className="flex justify-end items-center block lg:hidden">
                    <div className="text-3xl mr-4 text-white">☰</div>
                </div>
            </div>
        </div>
    )
}

export default Header
