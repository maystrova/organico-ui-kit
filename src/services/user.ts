import Vasya from 'Pages/ProfilePage/pics/Vasya-avatar.jpg'
import { ProductType } from 'Pages/ProductPage/types'
import firebase from 'firebase/app'

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

export const getUserFromFirebase = async (user: User) => {
    const userRef = await firebase
        .database()
        .ref()
        .child(`users/${user.id}`)
        .get()

    const serverUser = userRef.val()
    return serverUser
}

const getUser = async (): Promise<User | undefined> => {
    const storageUser = await window.localStorage.getItem('user')

    if (storageUser) {
        return JSON.parse(storageUser)
    }
    return undefined
}

const getUserWishlist = async (): Promise<ProductType[]> => {
    const storageWishlist = await window.localStorage.getItem('wishlist')

    if (storageWishlist) {
        return JSON.parse(storageWishlist)
    }
    return []
}

const getUserCart = async (): Promise<ProductType[]> => {
    const storageCart = await window.localStorage.getItem('cart')

    if (storageCart) {
        return JSON.parse(storageCart)
    }
    return []
}

const getUserBag = async (): Promise<ProductType[]> => {
    const storageBag = await window.localStorage.getItem('bag')

    if (storageBag) {
        return JSON.parse(storageBag)
    }
    return []
}

export { getUser, getUserCart, getUserWishlist, getUserBag }
