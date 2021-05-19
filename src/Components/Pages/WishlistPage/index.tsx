import React, { useState } from 'react'
import {
    StyledWishlistPage,
    StyledWishlistPageCards,
    StyledWishlistPageHeader,
} from './style'
import { BackToPreviousPage } from '../../BackToPreviousPage'
import { BACKGROUND_COLOR_TYPE, ProductCard } from '../../ProductCard'

import { ProductType } from '../ProductPage/types'

interface WishlistPageProps {
    onBackButtonClicked: () => void
    backgroundColor: BACKGROUND_COLOR_TYPE
    onWishClicked: (product: ProductType) => void
    products: ProductType[]
}

const WishlistPage = ({
    onBackButtonClicked,
    backgroundColor,
    onWishClicked,
    products,
}: WishlistPageProps) => {
    return (
        <StyledWishlistPage>
            <StyledWishlistPageHeader>
                <BackToPreviousPage onClick={onBackButtonClicked} />
                <span>My Wishlist</span>
            </StyledWishlistPageHeader>
            <StyledWishlistPageCards>
                {products.map(product => {
                    return (
                        <ProductCard
                            product={product}
                            backgroundColor={backgroundColor}
                            isShowAction={false}
                            onWishClick={() => onWishClicked(product)}
                        />
                    )
                })}
            </StyledWishlistPageCards>
        </StyledWishlistPage>
    )
}

export { WishlistPage }
