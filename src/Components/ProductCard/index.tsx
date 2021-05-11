import React from 'react'
import { ProductType } from '../Pages/ProductPage/types'
import {
    StyledProductCard,
    StyledProductCardCount,
    StyledProductCardIcon,
    StyledProductCardInfo,
} from './style'
import { Count, COUNT_FONTSIZE, COUNTING_SIZE } from '../Count'
import { Icon, ICON_SIZE } from '../Icon'
import { StyledProductPageTitles } from '../Pages/ProductPage/style'

interface ProductCardProps extends ProductType {
    image: string
    title: string
    price: number
    shop: string
    count: number
    backgroundColor: string
}

const ProductCard = (
    { image, title, price, shop }: ProductType,
    {
        count = 1,
        backgroundColor = 'rgba(118, 178, 38, 0.15)',
    }: ProductCardProps,
) => {
    return (
        <StyledProductCard style={{ backgroundColor: backgroundColor }}>
            <StyledProductCardIcon>
                <Icon size={ICON_SIZE.X_LARGE} src={image} />
            </StyledProductCardIcon>
            <StyledProductCardInfo>
                <h4>{title}</h4>
                <StyledProductCardCount>1 Kilogram</StyledProductCardCount>
                <h4>${price}</h4>
            </StyledProductCardInfo>
            <Count
                fontSize={COUNT_FONTSIZE.PRODUCT_CARD}
                width={COUNTING_SIZE.PRODUCT_CARD}
                height={COUNTING_SIZE.PRODUCT_CARD}
            />
        </StyledProductCard>
    )
}

export { ProductCard }
