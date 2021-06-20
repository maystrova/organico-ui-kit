export enum PRODUCTS_CATEGORY {
    VEGETABLES = 'vegetables',
    FRUITS = 'fruits',
    MEATS = 'meats',
}

export type ProductType = {
    title: string
    details?: string
    image: string
    price: number
    shop: string
    category: PRODUCTS_CATEGORY
    id: string
    alias: string
}
