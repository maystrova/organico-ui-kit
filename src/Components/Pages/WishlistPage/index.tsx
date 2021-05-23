import React from 'react'
import {
    StyledWishlistPage,
    StyledWishlistPageCards,
    StyledWishlistPageHeader,
} from './style'
import { BackToPreviousPage } from '../../BackToPreviousPage'
import { BACKGROUND_COLOR_TYPE, ProductCard } from '../../ProductCard'

import { ProductType } from '../ProductPage/types'

interface WishlistPageProps {
    onBackButtonClick: () => void
    onWishClick: (productId: string) => void
    products: ProductType[]
}

const getBackgroundColorForProduct = (title: string): BACKGROUND_COLOR_TYPE => {
    switch (title) {
        case 'Banana':
            return BACKGROUND_COLOR_TYPE.YELLOW
        case 'Broccoli':
            return BACKGROUND_COLOR_TYPE.GREEN
        case 'Meat':
        case 'Paprika':
            return BACKGROUND_COLOR_TYPE.PINK
        case 'Lettuce':
            return BACKGROUND_COLOR_TYPE.SALAD
        default:
            return BACKGROUND_COLOR_TYPE.WHITE
    }
}

const WishlistPage = ({
    onBackButtonClick,
    onWishClick,
    products,
}: WishlistPageProps) => {
    return (
        <StyledWishlistPage>
            <StyledWishlistPageHeader>
                <BackToPreviousPage onClick={onBackButtonClick} />
                <span>My Wishlist</span>
            </StyledWishlistPageHeader>
            <StyledWishlistPageCards>
                {products.map(product => {
                    return (
                        <ProductCard
                            key={product.title}
                            product={product}
                            backgroundColor={getBackgroundColorForProduct(
                                product.title,
                            )}
                            isShowAction={false}
                            onWishClick={() => onWishClick(product.id)}
                        />
                    )
                })}
            </StyledWishlistPageCards>
        </StyledWishlistPage>
    )
}

export { WishlistPage }
