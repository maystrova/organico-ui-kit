import { StoreType } from './storeContext'
import { ACTION } from './actions'
import { ProductType } from 'Pages/ProductPage/types'

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

const addToCart = (currentState: StoreType, productId: string) => {
    const foundProduct: ProductType | undefined = currentState.products.find(
        product => product.id === productId,
    )
    if (foundProduct) {
        const newCart = [foundProduct, ...currentState.cart]

        return {
            ...currentState,
            cart: newCart,
        }
    }
    return currentState
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
        default:
            return currentState
    }
}
