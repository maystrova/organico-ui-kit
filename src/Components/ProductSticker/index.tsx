import React from 'react'
import { ProductType } from '../Pages/ProductPage/types'
import {
    StyledProductStickerIcon,
    StyledProductStickerInfo,
    StyledProductStickerCount,
    StyledProductSticker,
} from './style'
import { Count, COUNT_FONTSIZE, COUNTING_SIZE } from '../Count'
import { Icon, ICON_SIZE } from '../Icon'
import { BACKGROUND_COLOR_TYPE } from '../ProductCard'

interface ProductStickerProps {
    product: ProductType
    backgroundColor: BACKGROUND_COLOR_TYPE
}

const ProductSticker = ({ product, backgroundColor }: ProductStickerProps) => {
    return (
        <StyledProductSticker style={{ backgroundColor: backgroundColor }}>
            <StyledProductStickerIcon>
                <Icon size={ICON_SIZE.X_LARGE} src={product.image} />
            </StyledProductStickerIcon>
            <StyledProductStickerInfo>
                <h4>{product.title}</h4>
                <StyledProductStickerCount>
                    1 Kilogram
                </StyledProductStickerCount>
                <h4>${product.price}</h4>
            </StyledProductStickerInfo>
            <Count
                fontSize={COUNT_FONTSIZE.PRODUCT_CARD}
                width={COUNTING_SIZE.PRODUCT_CARD}
                height={COUNTING_SIZE.PRODUCT_CARD}
            />
        </StyledProductSticker>
    )
}

export { ProductSticker }
