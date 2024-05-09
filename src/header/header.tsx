import Logo from './logo'
import Button from './button'
import { useState } from 'react'

function SideBar({ onClickCloseButton }: { onClickCloseButton?: () => void }) {
    return (
        <div className="fixed bg-yellow-600 top-0 left-0 h-full w-full">
            <div className="mt-6 mx-6">
                <div className="flex justify-between items-center">
                    <Logo />
                    <div className="py-2 px-3">
                        <label onClick={onClickCloseButton} className="text-5xl text-white">
                            ✕
                        </label>
                    </div>
                </div>
            </div>

            <div className="mt-[3em] grid grid-cols-1 gap-[2em] grid-rows-6">
                <Button className="text-4xl">Главная</Button>
                <Button className="text-4xl">Новости</Button>
                <Button className="text-4xl">События</Button>
                <Button className="text-4xl row-start-5">Войти</Button>
                <Button className="text-4xl row-start-6">Регистрация</Button>
            </div>
        </div>
    )
}

const styleForDesktop = `    
    relative

    before:bg-teal-600 
    before:absolute
    before:-bottom-0
    before:-left-0
    before:h-[4px]
    before:w-full
    before:origin-bottom-center
    before:scale-x-0
    before:duration-200

    before:rounded-b-lg

    hover:before:origin-bottom-center
    hover:before:scale-x-100
    `

function DesktopButton({ children }: { children: React.ReactNode }) {
    return <Button className={styleForDesktop}>{children}</Button>
}

function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <div className="bg-yellow-600 mt-3 px-5 py-2 rounded-lg shadow-lg mx-3 container:none lg:container lg:mx-auto">
            <div className="flex justify-between items-center lg:flex-none">
                <div className="flex justify-start items-center">
                    <Logo />
                    <div className="hidden lg:block">
                        <DesktopButton>Главная</DesktopButton>
                        <DesktopButton>Новости</DesktopButton>
                        <DesktopButton>События</DesktopButton>
                    </div>
                </div>
                <div className="flex justify-end items-center hidden lg:block">
                    <DesktopButton>Войти</DesktopButton>
                    <DesktopButton>Регистрация</DesktopButton>
                </div>
                <div className="flex justify-end items-center block lg:hidden">
                    <div
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="text-3xl mr-2 text-white"
                    >
                        ☰
                    </div>
                    {isSidebarOpen && (
                        <SideBar onClickCloseButton={() => setIsSidebarOpen(false)} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header
