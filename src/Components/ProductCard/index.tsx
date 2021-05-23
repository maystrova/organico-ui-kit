import React from 'react'
import {
    StyledCardAction,
    StyledProductCard,
    StyledProductCardHeader,
} from './style'
import { Icon, ICON_SIZE } from '../Icon'
import { AddToWishlist } from '../AddToWishlist'
import { ProductType } from '../Pages/ProductPage/types'
import { StyledCountButton } from '../Count/style'
import plus from '../Count/pics/plus.svg'
import { COUNTING_SIZE } from '../Count'
import {
    StyledProductShop,
    StyledProductTitles,
} from '../Pages/ProductPage/style'

export enum BACKGROUND_COLOR_TYPE {
    GREEN = 'rgba(118, 178, 38, 0.15)',
    PINK = 'rgba(227, 85, 63, 0.15)',
    YELLOW = 'rgba(243, 162, 12, 0.15)',
    ORANGE = 'rgba(234, 129, 47, 0.15)',
    RED = 'rgba(151, 3, 29, 0.15)',
    SALAD = 'rgba(63, 125, 60, 0.15)',
    BEIGE = 'rgba(233, 176, 79, 0.15)',
    WHITE = '#FFF',
}

interface ProductCardProps {
    product: ProductType
    backgroundColor: BACKGROUND_COLOR_TYPE
    isShowAction: boolean
    onWishClick: () => void
}

const ProductCard = ({
    backgroundColor = BACKGROUND_COLOR_TYPE.WHITE,
    product,
    isShowAction,
    onWishClick,
}: ProductCardProps) => {
    return (
        <StyledProductCard style={{ backgroundColor: backgroundColor }}>
            <StyledProductCardHeader>
                <Icon size={ICON_SIZE.XX_LARGE} src={product.image} />
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
