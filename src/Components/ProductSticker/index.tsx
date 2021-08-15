import React, { useContext } from 'react'
import { Count, COUNT_FONTSIZE, COUNTING_SIZE } from 'Components/Count'
import { Icon, ICON_SIZE } from 'Components/Icon'

import { getBackgroundColorForProduct } from 'Pages/WishlistPage'
import { ProductType } from 'Pages/ProductPage/types'
import { ACTION } from 'context/actions'
import { OrganicContext } from 'context/storeContext'

import {
    StyledProductSticker,
    StyledProductStickerCount,
    StyledProductStickerIcon,
    StyledProductStickerInfo,
} from './style'

interface ProductStickerProps {
    image: string
    title: string
    price: number
    product: ProductType
    onCountChanged: (currentCount: number) => void
}

const ProductSticker = ({
    image,
    price,
    title,
    product,
    onCountChanged,
}: ProductStickerProps) => {
    return (
        <StyledProductSticker type={getBackgroundColorForProduct(title)}>
            <StyledProductStickerIcon>
                <Icon size={ICON_SIZE.X_LARGE} src={image} />
            </StyledProductStickerIcon>
            <StyledProductStickerInfo>
                <h4>{title}</h4>
                <StyledProductStickerCount>
                    {product.quantity}{' '}
                    {product.quantity === 1 ? `Kilogram` : 'Kilos'}
                </StyledProductStickerCount>
                <h4>${price}</h4>
            </StyledProductStickerInfo>
            <Count
                currentCount={product.quantity}
                onCountChanged={newCount => onCountChanged(newCount)}
                fontSize={COUNT_FONTSIZE.PRODUCT_CARD}
                width={COUNTING_SIZE.PRODUCT_CARD}
                height={COUNTING_SIZE.PRODUCT_CARD}
            />
        </StyledProductSticker>
    )
}

export { ProductSticker }
