import React from 'react'

import { BackToPreviousPage } from 'Components/BackToPreviousPage'
import { ProductCard } from 'Components/ProductCard'
import { ProductType } from 'Pages/ProductPage/types'

import {
    StyledWishlistPage,
    StyledWishlistPageCards,
    StyledWishlistPageHeader,
} from './style'
import { PRODUCT_TYPE } from '../../services/products/products'

interface WishlistPageProps {
    onBackButtonClick: () => void
    onWishClick: (productId: string) => void
    products: ProductType[]
}

const getBackgroundColorForProduct = (title: string): PRODUCT_TYPE => {
    switch (title) {
        case 'Banana':
            return PRODUCT_TYPE.BANANA
        case 'Broccoli':
            return PRODUCT_TYPE.BROCCOLI
        case 'Meat':
        case 'Paprika':
            return PRODUCT_TYPE.PAPRIKA
        case 'Lettuce':
            return PRODUCT_TYPE.LETTUCE
        case 'Red Onion':
            return PRODUCT_TYPE.RED_ONION
        case 'Potato':
            return PRODUCT_TYPE.POTATO
        case 'Carrot':
            return PRODUCT_TYPE.CARROT

        default:
            return PRODUCT_TYPE.DEFAULT
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
                            type={getBackgroundColorForProduct(product.title)}
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
