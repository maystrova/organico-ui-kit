import React from 'react'
import { Count, COUNT_FONTSIZE, COUNTING_SIZE } from 'Components/Count'
import { Icon, ICON_SIZE } from 'Components/Icon'

import {
    StyledProductSticker,
    StyledProductStickerCount,
    StyledProductStickerIcon,
    StyledProductStickerInfo,
} from './style'
import { PRODUCT_TYPE } from 'services/products/products'
import { getBackgroundColorForProduct } from 'Pages/WishlistPage'

interface ProductStickerProps {
    image: string
    title: string
    price: number
}

const ProductSticker = ({ image, price, title }: ProductStickerProps) => {
    return (
        <StyledProductSticker type={getBackgroundColorForProduct(title)}>
            <StyledProductStickerIcon>
                <Icon size={ICON_SIZE.X_LARGE} src={image} />
            </StyledProductStickerIcon>
            <StyledProductStickerInfo>
                <h4>{title}</h4>
                <StyledProductStickerCount>
                    1 Kilogram
                </StyledProductStickerCount>
                <h4>${price}</h4>
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
