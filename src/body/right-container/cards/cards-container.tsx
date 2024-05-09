import { Item } from '../types'

function Cards({ items }: { items: Item[] }) {
    const Card = ({ item }: { item: Item }) => {
        return (
            <div className="container rounded-lg bg-white border-2 border-yellow-600  duration-200 hover:scale-105">
                <a href="#">
                    <img
                        src={item.image_url}
                        className="rounded-t border-b-2 border-yellow-600"
                        style={{ width: '100%', height: '15em', objectFit: 'cover' }}
                    />
                    <div className="p-2">
                        <div className="font-crooker text-2xl text-gray-700">{item.name}</div>
                        <div className="flex justify-between items-end">
                            <div>
                                <ul className="ml-3 font-waffleSoft font-normal text-gray-700">
                                    <li>{item.color}</li>
                                    <li>{item.material}</li>
                                    <li>В наличии: {item.quantity} шт.</li>
                                </ul>
                            </div>

                            <div className="text-lg justify-self-end font-waffleSoft text-yellow-700">
                                {item.price} руб.
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        )
    }

    return (
        <div className="grid gap-4 p-5 sm:grid-cols-1 lg:grid-cols-3">
            {items.map((item) => (
                <Card item={item} />
            ))}
        </div>
    )
}

export default Cards
