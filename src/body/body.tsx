import RightContainer from './right-container/right-container'
import LeftContainer from './left-container/left-container'
import { useState } from 'react'

function FiltersButton({ onClick }: { onClick?: () => void }) {
    return (
        <button onClick={onClick} className="rounded-lg text-white bg-green-400 py-3 px-4 text-2xl">
            Фильтры
        </button>
    )
}

function SideBar({ onClickCloseButton }: { onClickCloseButton?: () => void }) {
    return (
        <div className="fixed  bg-blue-300 top-0 left-0 h-full w-full">
            <div className="flex justify-end w-full">
                <label onClick={onClickCloseButton} className="text-5xl m-6 text-white">
                    X
                </label>
            </div>

            <div className="p-6 grid grid-cols-1 w-full gap-4"></div>
        </div>
    )
}

function Body() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <div className="container:none mx-0 lg:container lg:mx-auto my-3 xl:my-[2em]">
            <div className="flex justify-end pr-3 xl:hidden mb-3">
                <FiltersButton onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
            </div>
            <div>
                <div className="grid-cols-5 gap-[2em] min-h-96  hidden xl:grid ">
                    <LeftContainer />
                    <RightContainer />
                </div>
                <div className="px-3 min-h-96 block xl:hidden">
                    {isSidebarOpen && (
                        <SideBar onClickCloseButton={() => setIsSidebarOpen(false)} />
                    )}

                    <RightContainer />
                </div>
            </div>
        </div>
    )
}

export default Body
