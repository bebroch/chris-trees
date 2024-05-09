export type Item = {
    id: number
    name: string
    price: number
    color: string
    material: string
    quantity: number
    image_url: string
}

export type ResponseJsonDB = { db: { items: Item[] } }
