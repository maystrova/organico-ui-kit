import React, { useContext } from 'react'

import { BackToPreviousPage } from 'Components/BackToPreviousPage'
import { ProductCard } from 'Components/ProductCard'

import { PRODUCT_TYPE } from 'services/products/products'
import { OrganicContext } from 'context/storeContext'
import { ACTION } from 'context/actions'
import { ProductType } from 'Pages/ProductPage/types'

import {
    StyledCardsList,
    StyledTitledHeader,
    StyledWishlistPage,
    StyledEmptySpace,
} from './style'

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

interface WishlistPageProps {
    wishlist: ProductType[]
}

const WishlistPage = ({ wishlist }: WishlistPageProps) => {
    const { dispatch } = useContext(OrganicContext)

    return (
        <StyledWishlistPage>
            <StyledTitledHeader>
                <BackToPreviousPage />
                <span>My Wishlist</span>
            </StyledTitledHeader>
            {wishlist.length ? (
                <StyledCardsList>
                    {wishlist.map(product => {
                        return (
                            <ProductCard
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
