import { useState, useEffect } from 'react'
import { ApiService } from './services/api.service'
import { Item } from './types'
import Cards from './cards/cards-container'

function Loading() {
    return (
        <div className="text-center flex items-center justify-center h-full bg-gray-100 font-crooker text-2xl">
            Загрузка...
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
        <div className="bg-blue-100 rounded-lg col-span-4 h-full shadow-lg">
            {items.length ? <Cards items={items} /> : <Loading />}
        </div>
    )
}

export default RightContainer
