import React, { useState } from 'react'

import { Icon, ICON_SIZE } from 'Components/Icon'

import {
    StyledCount,
    StyledCountButton,
    StyledCountButtonArea,
    StyledCountNumber,
} from './style'

import minus from './pics/minus.svg'
import plus from './pics/plus.svg'
import { ProductType } from '../../Pages/ProductPage/types'

export enum COUNTING_SIZE {
    PRODUCT_PAGE = 40,
    PRODUCT_CARD = 32,
    CART = 30,
}

export enum COUNT_FONTSIZE {
    PRODUCT_PAGE = 24,
    PRODUCT_CARD = 18,
    CART = 15,
}

interface CountProps {
    width: COUNTING_SIZE
    height: COUNTING_SIZE
    fontSize: COUNT_FONTSIZE
    onAddToCartClick: (productId: string) => void
    product: ProductType
}

const Count = ({
    width,
    height,
    fontSize,
    onAddToCartClick,
    product,
}: CountProps) => {
    const [amount, setAmount] = useState<number>(1)

    const addProduct = () => {
        let productAmount = amount
        setAmount(++productAmount)
    }

    const removeProduct = () => {
        let productAmount = amount

        if (amount > 1) {
            setAmount(--productAmount)
        }
    }

    return (
        <StyledCount>
            <StyledCountButtonArea>
                <StyledCountButton
                    style={{ width: width, height: height }}
                    onClick={removeProduct}
                >
                    <Icon size={ICON_SIZE.MEDIUM} src={minus} />
                </StyledCountButton>
            </StyledCountButtonArea>

            <StyledCountNumber style={{ fontSize: fontSize }}>
                {amount}
            </StyledCountNumber>
            <StyledCountButtonArea>
                <StyledCountButton
                    style={{
                        width: width,
                        height: height,
                    }}
                    onClick={() => {
                        onAddToCartClick(product.id)
                        addProduct()
                    }}
                >
                    <Icon size={ICON_SIZE.MEDIUM} src={plus} />
                </StyledCountButton>
            </StyledCountButtonArea>
        </StyledCount>
    )
}

export { Count }
