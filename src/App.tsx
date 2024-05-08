import Body from './body/body'
import Bottom from './bottom/bottom'
import Header from './header/header'

function App() {
    return (
        <div>
            <Header />
            <Body />
            <Bottom />
        </div>
    )
}

export default App

/*

    return (
        <div className="rounded-full p-3 px-6 bg-indigo-600 text-white mx-8 shadow-lg my-5 grid justify-items-start">
            <Logo />
            <div>Hello world!</div>
        </div>
    )


    <div className="flex bg-indigo-100 m-3 rounded-lg">
            {arr.map((item) => {
                return (
                    <div
                        className="flex-auto bg-yellow-300 rounded-lg m-4 font-sans text-2xl"
                        style={{
                            padding: '1em',
                            ...(item === 1 ? { width: '300px' } : { width: 'auto' }),
                            textAlign: 'center',
                        }}
                    >
                        {item}
                    </div>
                )
            })}
        </div>


*/
