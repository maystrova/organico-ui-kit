import React from 'react'

import { ProductType } from 'Pages/ProductPage/types'
import { Count, COUNT_FONTSIZE, COUNTING_SIZE } from 'Components/Count'
import { Icon, ICON_SIZE } from 'Components/Icon'

import {
    StyledProductStickerIcon,
    StyledProductStickerInfo,
    StyledProductStickerCount,
    StyledProductSticker,
} from './style'
import { PRODUCT_TYPE } from 'services/products/products'

interface ProductStickerProps {
    product: ProductType
    type: PRODUCT_TYPE
}

const ProductSticker = ({ product, type }: ProductStickerProps) => {
    return (
        <StyledProductSticker type={type}>
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
