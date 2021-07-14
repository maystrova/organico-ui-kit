import { StoreType } from './storeContext'
import { ACTION } from './actions'
import { ProductType } from 'Pages/ProductPage/types'
import { User } from 'services/user'
import { ThemeType } from 'configs/theme'
import { firebase } from '../services/firebase'

const editUser = (currentState: StoreType, profile: User) => {
    const newProfile: User = {
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

const addToBag = (currentState: StoreType): StoreType => {
    return { ...currentState, bag: currentState.cart }
}

const updateCountInBag = (
    currentState: StoreType,
    product: ProductType,
): StoreType => {
    const bagProduct: ProductType | undefined = currentState.bag.find(
        bagProduct => bagProduct.id === product.id,
    )

    let newBag: ProductType[] = currentState.bag
    if (bagProduct) {
        newBag = currentState.bag.map(bagProduct => {
            if (bagProduct.id === product.id) {
                return {
                    ...bagProduct,
                    quantity: product.quantity,
                }
            }
            return bagProduct
        })
    }

    return { ...currentState, bag: newBag }
}

const deleteFromCart = (
    currentState: StoreType,
    currentProduct: ProductType,
): StoreType => {
    const filteredCart = currentState.cart.filter(
        product => product !== currentProduct,
    )

    return { ...currentState, cart: filteredCart }
}

const switchTheme = (currentState: StoreType, theme: ThemeType): StoreType => {
    return {
        ...currentState,
        theme,
    }
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
        case ACTION.DELETE_FROM_CART:
            return deleteFromCart(currentState, payload.data)
        case ACTION.USER_UPDATE:
            return editUser(currentState, payload.data)
        case ACTION.ADD_TO_BAG:
            return addToBag(currentState)
        case ACTION.UPDATE_COUNT_IN_BAG:
            return updateCountInBag(currentState, payload.data)
        case ACTION.SWITCH_THEME:
            return switchTheme(currentState, payload.data)

        default:
            return currentState
    }
}
