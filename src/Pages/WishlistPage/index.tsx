import React, { useContext } from 'react'

import { BackToPreviousPage } from 'Components/BackToPreviousPage'
import { ProductCard } from 'Components/ProductCard'

import { PRODUCT_TYPE } from 'services/products/products'
import { OrganicContext } from 'context/storeContext'
import { ACTION } from 'context/actions'

import {
    StyledCardsList,
    StyledTitledHeader,
    StyledWishlistPage,
    StyledEmptySpace,
} from './style'

interface WishlistPageProps {}

export const getBackgroundColorForProduct = (title: string): PRODUCT_TYPE => {
    switch (title) {
        case 'Banana':
        case 'Pineapple':
            return PRODUCT_TYPE.BANANA
        case 'Broccoli':
        case 'Apple':
        case 'Kiwi':
            return PRODUCT_TYPE.BROCCOLI
        case 'Chicken':
        case 'Veal':
        case 'Beef':
        case 'Pork':
        case 'Paprika':
            return PRODUCT_TYPE.PAPRIKA
        case 'Lettuce':
            return PRODUCT_TYPE.LETTUCE
        case 'Red Onion':
            return PRODUCT_TYPE.RED_ONION
        case 'Potato':
            return PRODUCT_TYPE.POTATO
        case 'Carrot':
        case 'Orange':
            return PRODUCT_TYPE.CARROT

        default:
            return PRODUCT_TYPE.DEFAULT
    }
}

const WishlistPage = ({}: WishlistPageProps) => {
    const { store, dispatch } = useContext(OrganicContext)

    return (
        <StyledWishlistPage>
            <StyledTitledHeader>
                <BackToPreviousPage />
                <span>My Wishlist</span>
            </StyledTitledHeader>
            {store.wishList.length ? (
                <StyledCardsList>
                    {store.wishList.map(product => {
                        return (
                            <ProductCard
                                onAddToCartClick={productId => {
                                    dispatch({
                                        action: ACTION.ADD_TO_CART,
                                        data: productId,
                                    })
                                }}
                                isAdded={true}
                                key={product.id}
                                product={product}
                                type={getBackgroundColorForProduct(
                                    product.title,
                                )}
                                isShowAction={false}
                                onWishClick={productId => {
                                    dispatch({
                                        action: ACTION.DELETE_FROM_WISHLIST,
                                        data: productId,
                                    })
                                }}
                            />
                        )
                    })}
                </StyledCardsList>
            ) : (
                <StyledEmptySpace>Your wishlist is empty :(</StyledEmptySpace>
            )}
        </StyledWishlistPage>
    )
}

export { WishlistPage }
