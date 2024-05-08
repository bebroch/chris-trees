import Logo from './logo'
import Button from './button'

function Header() {
    return (
        <div className="bg-yellow-600 m-3 px-5 py-2 rounded-lg container mx-auto">
            <div className="flex justify-between items-center md:flex-none">
                <div className="flex justify-start items-center">
                    <Logo />
                    <Button>Главная</Button>
                    <Button>Новости</Button>
                    <Button>События</Button>
                </div>
                <div className="flex justify-end items-center">
                    <Button>Войти</Button>
                    <Button>Регистрация</Button>
                </div>
            </div>
        </div>
    )
}

export default Header
