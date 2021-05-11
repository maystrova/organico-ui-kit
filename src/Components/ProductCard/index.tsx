import React from 'react'
import { ProductType } from '../Pages/ProductPage/types'
import {
    StyledProductCard,
    StyledProductCardCount,
    StyledProductCardIcon,
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
    { count, backgroundColor = 'rgba(118, 178, 38, 0.15)' }: ProductCardProps,
) => {
    return (
        <StyledProductCard style={{ backgroundColor: backgroundColor }}>
            <StyledProductCardIcon>
                <Icon size={ICON_SIZE.X_LARGE} src={image} />
            </StyledProductCardIcon>
            <StyledProductPageTitles>
                <h3>{title}</h3>
                <StyledProductCardCount>{count}</StyledProductCardCount>
                <h3>${price}</h3>
            </StyledProductPageTitles>
            <Count
                fontSize={COUNT_FONTSIZE.PRODUCT_CARD}
                width={COUNTING_SIZE.PRODUCT_CARD}
                height={COUNTING_SIZE.PRODUCT_CARD}
            />
        </StyledProductCard>
    )
}

export { ProductCard }
