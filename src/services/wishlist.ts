import { ProductType } from '../Pages/ProductPage/types'
import { User } from './user'
import { firebase } from './firebase'

const createWishlist = async (wishlist: ProductType[], user: User) => {
    await firebase.database().ref(`users/${user.id}/wishlist`).push(wishlist)
}

const getWishlistFromFirebase = async (user: User) => {
    const serverWishlistRef = firebase
        .database()
        .ref(`users/${user.id}/wishlist`)

    const snapshot = await serverWishlistRef.once('value')

    const serverWishlist = snapshot.val()
    return Object.keys(serverWishlist).map(productId => ({
        ...serverWishlist[productId],
        id: productId,
    }))
}

export { createWishlist, getWishlistFromFirebase }
