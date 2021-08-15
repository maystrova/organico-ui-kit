import { ProductType } from 'Pages/ProductPage/types'
import { User } from './user'
import { firebase } from './firebase'

const createWishlist = async (
    wishlist: ProductType[],
    user: User,
): Promise<void> => {
    await firebase.database().ref(`users/${user.id}/wishlist`).push(wishlist)
}

const updateWishlist = async (
    wishlist: ProductType[],
    user: User,
): Promise<void> => {
    await firebase.database().ref(`users/${user.id}/wishlist`).set(wishlist)
}

const deleteFromServerWishlist = async (
    product: ProductType,
    user: User,
): Promise<void> => {
    await firebase
        .database()
        .ref(`users/${user.id}/wishlist/${product.id}`)
        .remove()
}

const getWishlistFromFirebase = async (user: User): Promise<ProductType[]> => {
    const serverWishlistRef = firebase
        .database()
        .ref(`users/${user.id}/wishlist/`)

    const snapshot = await serverWishlistRef.once('value')

    const serverWishlist = snapshot.val()
    return Object.keys(serverWishlist).map(productId => ({
        ...serverWishlist[productId],
        id: productId,
    }))
}

export {
    createWishlist,
    getWishlistFromFirebase,
    updateWishlist,
    deleteFromServerWishlist,
}
