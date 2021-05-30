import React from 'react'

import { Icon, ICON_SIZE } from 'Components/Icon'
import { AddToWishlist } from 'Components/AddToWishlist'
import { ProductType } from 'Pages/ProductPage/types'
import { COUNTING_SIZE } from 'Components/Count'
import { PRODUCT_TYPE } from 'services/products/products'

import { StyledProductShop, StyledProductTitles } from 'Pages/ProductPage/style'
import { StyledCountButton } from 'Components/Count/style'
import {
    StyledCardAction,
    StyledProductCard,
    StyledProductCardHeader,
} from './style'

import plus from 'Components/Count/pics/plus.svg'

interface ProductCardProps {
    product: ProductType
    type: PRODUCT_TYPE
    isShowAction: boolean
    onWishClick: () => void
}

const ProductCard = ({
    type,
    product,
    isShowAction,
    onWishClick,
}: ProductCardProps) => {
    return (
        <StyledProductCard type={type}>
            <StyledProductCardHeader>
                <Icon size={ICON_SIZE.XXX_LARGE} src={product.image} />
                <AddToWishlist onClick={onWishClick} isAdded />
            </StyledProductCardHeader>
            <StyledProductTitles>
                <h3>{product.title}</h3>
                {isShowAction ? (
                    <StyledProductShop>{product.shop}</StyledProductShop>
                ) : (
                    <StyledProductShop>1 Kilogram</StyledProductShop>
                )}
            </StyledProductTitles>

            {isShowAction && (
                <StyledCardAction>
                    <h3>{product.price} /Kg</h3>
                    <StyledCountButton
                        style={{
                            width: COUNTING_SIZE.PRODUCT_PAGE,
                            height: COUNTING_SIZE.PRODUCT_PAGE,
                        }}
                    >
                        <Icon size={ICON_SIZE.MEDIUM} src={plus} />
                    </StyledCountButton>
                </StyledCardAction>
            )}
        </StyledProductCard>
    )
}

export { ProductCard }
