import axios from 'axios'
import { useEffect, useState } from 'react'

function LeftContainer() {
    return <div className="bg-yellow-500 rounded-lg col-span-1 h-full shadow-lg"></div>
}

type Item = {
    id: number
    name: string
    price: number
    color: string
    material: string
    quantity: number
    image_url: string
}

type ResponseJsonDB = Record<'db', Record<'items', Item[]>>

class ApiService {
    static async get() {
        const response = await axios.get<ResponseJsonDB>('https://camel-gaia.json.so/db')
        return response.data
    }
}

function Cards({ items }: { items: Item[] }) {
    const Card = ({ item }: { item: Item }) => {
        return (
            <div className="container m-2 rounded-lg bg-white border-2 border-yellow-600">
                <a href="#">
                    <img
                        src={item.image_url}
                        className="rounded-t border-b-2 border-yellow-600"
                        style={{ width: '100%', height: '15em', objectFit: 'cover' }}
                    />
                    <div className="p-2">
                        <div className="font-romanaBold text-2xl">{item.name}</div>
                        <div className="flex justify-between items-end font-romanaLight">
                            <div>
                                <ul className="ml-3">
                                    <li>{item.color}</li>
                                    <li>{item.material}</li>
                                    <li>В наличии: {item.quantity} шт.</li>
                                </ul>
                            </div>

                            <div className="text-lg justify-self-end font-poetsen">
                                {item.price} руб.
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        )
    }

    return (
        <div className="grid gap-4 p-5 sm:grid-cols-1 lg:grid-cols-3 ">
            {items.map((item) => (
                <Card item={item} />
            ))}
        </div>
    )
}

function RightContainer() {
    const [items, setItems] = useState<Item[]>([])

    useEffect(() => {
        const fetch = async () => {
            const data = await ApiService.get()
            setItems(data.db.items)
        }
        fetch()
    }, [])

    return (
        <div className="bg-blue-100 rounded-lg col-span-3 h-full shadow-lg">
            {items.length ? <Cards items={items} /> : <div>Loading...</div>}
        </div>
    )
}

function Body() {
    return (
        <div className="container mx-auto rounded-lg m-[2em]">
            <div className="grid grid-cols-4 h-dvh gap-[2em]">
                <LeftContainer />
                <RightContainer />
            </div>
        </div>
    )
}

export default Body
