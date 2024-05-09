import RightContainer from './right-container/right-container'
import LeftContainer from './left-container/left-container'

function Body() {
    return (
        <div className="container mx-auto">
            <div className="sm:my-[2em] my-2">
                <div className="grid-cols-4 gap-[2em] min-h-96 hidden md:grid">
                    <LeftContainer />
                    <RightContainer />
                </div>
                <div className="p-3 min-h-96 block md:hidden">
                    <RightContainer />
                </div>
            </div>
        </div>
    )
}

export default Body
