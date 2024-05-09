import { Item } from '../types'
import Card from './card'

function Cards({ items }: { items: Item[] }) {
    return (
        <div className="p-3 flex justify-center">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                    <Card item={item} />
                ))}
            </div>
        </div>
    )
}

export default Cards
