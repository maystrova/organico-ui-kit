import React, { useContext } from 'react'

import { BackToPreviousPage } from 'Components/BackToPreviousPage'
import { ProductCard } from 'Components/ProductCard'
import { ProductType } from 'Pages/ProductPage/types'

import {
    StyledCardsList,
    StyledTitledHeader,
    StyledWishlistPage,
} from './style'
import { PRODUCT_TYPE } from '../../services/products/products'
import { OrganicContext } from '../../context/storeContext'
import { ACTION } from '../../context/actions'

interface WishlistPageProps {
    onBackButtonClick: () => void
    onWishClick: (productId: string) => void
    products: ProductType[]
}

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

const WishlistPage = ({
    onBackButtonClick,
    onWishClick,
    products,
}: WishlistPageProps) => {
    const { store, dispatch } = useContext(OrganicContext)

    return (
        <StyledWishlistPage>
            <StyledTitledHeader>
                <BackToPreviousPage onClick={onBackButtonClick} />
                <span>My Wishlist</span>
            </StyledTitledHeader>
            <StyledCardsList>
                {products.map(product => {
                    return (
                        <ProductCard
                            onAddToCartClick={productId => {
                                dispatch({
                                    action: ACTION.ADD_TO_CART,
                                    data: productId,
                                })
                            }}
                            isAdded={true}
                            key={product.title}
                            product={product}
                            type={getBackgroundColorForProduct(product.title)}
                            isShowAction={false}
                            onWishClick={() => onWishClick(product.id)}
                        />
                    )
                })}
            </StyledCardsList>
        </StyledWishlistPage>
    )
}

export { WishlistPage }
