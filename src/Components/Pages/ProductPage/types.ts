export enum PRODUCTS_CATEGORY {
    VEGETABLES = 'Vegetables',
    FRUITS = 'Fruits',
}

export type ProductType = {
    title: string
    details?: string
    image: string
    price: number
    shop: string
    category: PRODUCTS_CATEGORY
}
