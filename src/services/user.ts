import Vasya from 'Pages/ProfilePage/pics/Vasya-avatar.jpg'
import { ProductType } from '../Pages/ProductPage/types'

export type User = {
    avatar: string
    name: string
    phoneNumber?: string
    address?: string
    id: string
    email: string
}

export let DEFAULT_USER: User = {
    name: 'Vasya Cat',
    phoneNumber: '92341352',
    avatar: Vasya,
    address: 'Nevskiy Prospect 1, Saint-Petersburg',
    id: Math.random().toString(),
    email: 'vasya@meow.com',
}

const getUser = async (): Promise<User | undefined> => {
    const storageUser = await window.localStorage.getItem('user')

    if (storageUser) {
        return JSON.parse(storageUser)
    }
    return undefined
}

const getUserCart = async (): Promise<ProductType[]> => {
    const storageCart = await window.localStorage.getItem('cart')

    if (storageCart) {
        return JSON.parse(storageCart)
    }
    return []
}

export { getUser, getUserCart }
