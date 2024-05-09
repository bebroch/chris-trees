import { Item } from '../types'
import Card from './card'

function Cards({ items }: { items: Item[] }) {
    return (
        <div className="grid gap-4 p-5 sm:grid-cols-1 lg:grid-cols-3">
            {items.map((item) => (
                <Card item={item} />
            ))}
        </div>
    )
}

export default Cards
