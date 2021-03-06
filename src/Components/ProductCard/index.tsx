import React, { useContext, useState } from 'react'

import { Icon, ICON_SIZE } from 'Components/Icon'
import { AddToWishlist } from 'Components/AddToWishlist'
import { Link } from 'react-router-dom'

import { ProductType } from 'Pages/ProductPage/types'
import { Count, COUNT_FONTSIZE, COUNTING_SIZE } from 'Components/Count'
import { PRODUCT_TYPE } from 'services/products/products'

import { StyledProductShop, StyledProductTitles } from 'Pages/ProductPage/style'
import { StyledCountButton } from 'Components/Count/style'
import {
    StyledCardAction,
    StyledProductCard,
    StyledProductCardHeader,
    StyledAddToCart,
} from './style'

import plus from 'Components/Count/pics/plus.svg'
import { ACTION } from 'context/actions'
import { OrganicContext } from 'context/storeContext'

export interface ProductCardProps {
    product: ProductType
    type: PRODUCT_TYPE
    isShowAction: boolean
    onWishClick: (productId: string) => void
    isAdded: boolean
}

const ProductCard = ({
    type,
    product,
    isShowAction,
    onWishClick,
    isAdded,
}: ProductCardProps) => {
    const [isAddedToCart, setIsAddedToCart] = useState(false)
    const { dispatch } = useContext(OrganicContext)

    return (
        <StyledProductCard type={type}>
            <StyledProductCardHeader>
                <Link to={`/product/${product.alias}`} key={product.id}>
                    <Icon size={ICON_SIZE.XXX_LARGE} src={product.image} />
                </Link>
                <AddToWishlist
                    product={product}
                    onClick={() => onWishClick(product.id)}
                    isAdded={isAdded}
                />
            </StyledProductCardHeader>
            <Link to={`/product/${product.alias}`} key={product.id}>
                <StyledProductTitles>
                    <h3>{product.title}</h3>
                    {isShowAction ? (
                        <StyledProductShop>{product.shop}</StyledProductShop>
                    ) : (
                        <StyledProductShop>1 Kilogram</StyledProductShop>
                    )}
                </StyledProductTitles>
            </Link>

            {isShowAction && (
                <StyledCardAction>
                    <Link to={`/product/${product.alias}`} key={product.id}>
                        <h3>{product.price} /Kg</h3>
                    </Link>

                    {isAddedToCart ? (
                        <Count
                            currentCount={product.quantity}
                            onCountChanged={newCount => {
                                dispatch({
                                    action: ACTION.ADD_TO_CART,
                                    data: {
                                        ...product,
                                        quantity: newCount,
                                    },
                                })
                            }}
                            width={COUNTING_SIZE.CART}
                            height={COUNTING_SIZE.CART}
                            fontSize={COUNT_FONTSIZE.CART}
                        />
                    ) : (
                        <StyledAddToCart>
                            <StyledCountButton
                                onClick={() => {
                                    dispatch({
                                        action: ACTION.ADD_TO_CART,
                                        data: {
                                            ...product,
                                            quantity: 1,
                                        },
                                    })
                                    setIsAddedToCart(true)
                                }}
                                style={{
                                    width: COUNTING_SIZE.PRODUCT_PAGE,
                                    height: COUNTING_SIZE.PRODUCT_PAGE,
                                }}
                            >
                                <Icon size={ICON_SIZE.MEDIUM} src={plus} />
                            </StyledCountButton>
                        </StyledAddToCart>
                    )}
                </StyledCardAction>
            )}
        </StyledProductCard>
    )
}

export { ProductCard }
