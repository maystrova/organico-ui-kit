import { StoreType } from './storeContext'
import { ACTION } from './actions'
import { ProductType } from 'Pages/ProductPage/types'
import { UserType } from '../services/user'

const editUser = (currentState: StoreType, profile: UserType) => {
    const newProfile: UserType = {
        ...profile,
        name: profile.name,
        address: profile.address,
        phoneNumber: profile.phoneNumber,
        avatar: profile.avatar,
    }
    return {
        ...currentState,
        profile: newProfile,
    }
}

const addToWishList = (currentState: StoreType, productId: string) => {
    const foundProduct: ProductType | undefined = currentState.products.find(
        product => product.id === productId,
    )
    if (foundProduct) {
        const newWishList = [foundProduct, ...currentState.wishList]

        return {
            ...currentState,
            wishList: newWishList,
        }
    }
    return currentState
}

const deleteFromWishList = (currentState: StoreType, productId: string) => {
    const filteredWishlist = currentState.wishList.filter(
        product => product.id !== productId,
    )
    const newWishlist = {
        ...currentState,
        wishList: filteredWishlist,
    }
    return newWishlist
}

const addToCart = (
    currentState: StoreType,
    product: ProductType,
): StoreType => {
    const newProducts = currentState.products.map(storeProduct => {
        if (storeProduct.id === product.id) {
            return {
                ...storeProduct,
                quantity: product.quantity,
            }
        }
        return storeProduct
    })

    const cartProduct: ProductType | undefined = currentState.cart.find(
        cartProduct => cartProduct.id === product.id,
    )

    let newCart: ProductType[] = currentState.cart

    if (cartProduct) {
        newCart = currentState.cart.map(cartProduct => {
            if (cartProduct.id === product.id) {
                return {
                    ...cartProduct,
                    quantity: product.quantity,
                }
            }
            return cartProduct
        })
    } else {
        newCart.push(product)
    }

    return { ...currentState, products: newProducts, cart: newCart }
}

export const reducer = (
    currentState: StoreType,
    payload: { action: ACTION; data: any },
): StoreType => {
    switch (payload.action) {
        case ACTION.ADD_TO_WISHLIST:
            return addToWishList(currentState, payload.data)
        case ACTION.ADD_TO_CART:
            return addToCart(currentState, payload.data)
        case ACTION.DELETE_FROM_WISHLIST:
            return deleteFromWishList(currentState, payload.data)
        case ACTION.USER_UPDATE:
            return editUser(currentState, payload.data)
        default:
            return currentState
    }
}
