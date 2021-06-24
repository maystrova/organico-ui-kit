import React, { useContext } from 'react'
import { Count, COUNT_FONTSIZE, COUNTING_SIZE } from 'Components/Count'
import { Icon, ICON_SIZE } from 'Components/Icon'

import {
    StyledProductSticker,
    StyledProductStickerCount,
    StyledProductStickerIcon,
    StyledProductStickerInfo,
} from './style'
import { getBackgroundColorForProduct } from 'Pages/WishlistPage'
import { ProductType } from 'Pages/ProductPage/types'
import { ACTION } from '../../context/actions'
import { OrganicContext } from '../../context/storeContext'

interface ProductStickerProps {
    image: string
    title: string
    price: number
    product: ProductType
}

const ProductSticker = ({
    image,
    price,
    title,
    product,
}: ProductStickerProps) => {
    const { dispatch } = useContext(OrganicContext)

    console.log('ProductSticker', product)

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
                fontSize={COUNT_FONTSIZE.PRODUCT_CARD}
                width={COUNTING_SIZE.PRODUCT_CARD}
                height={COUNTING_SIZE.PRODUCT_CARD}
            />
        </StyledProductSticker>
    )
}

export { ProductSticker }
