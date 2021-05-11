import React, { useState } from 'react'
import {
    StyledCount,
    StyledCountButton,
    StyledCountNumber,
    StyledCountButtonArea,
} from './style'
import { Icon, ICON_SIZE } from '../Icon'
import minus from './pics/minus.svg'
import plus from './pics/plus.svg'

export enum COUNTING_SIZE {
    PRODUCT_PAGE = 40,
    PRODUCT_CARD = 32,
}

export enum COUNT_FONTSIZE {
    PRODUCT_PAGE = 24,
    PRODUCT_CARD = 18,
}

interface CountProps {
    width: COUNTING_SIZE
    height: COUNTING_SIZE
    fontSize: COUNT_FONTSIZE
}

const Count = ({ width, height, fontSize }: CountProps) => {
    const [amount, setAmount] = useState<number>(0)

    const addProduct = () => {
        let productAmount = amount
        setAmount(++productAmount)
    }

    const removeProduct = () => {
        let productAmount = amount

        setAmount(--productAmount)
    }

    return (
        <StyledCount>
            <StyledCountButtonArea>
                {amount > 0 && (
                    <StyledCountButton
                        style={{ width: width, height: height }}
                        onClick={removeProduct}
                    >
                        <Icon size={ICON_SIZE.MEDIUM} src={minus} />
                    </StyledCountButton>
                )}
            </StyledCountButtonArea>

            <StyledCountNumber style={{ fontSize: fontSize }}>
                {amount}
            </StyledCountNumber>
            <StyledCountButtonArea>
                <StyledCountButton
                    style={{ width: width, height: height }}
                    onClick={addProduct}
                >
                    <Icon size={ICON_SIZE.MEDIUM} src={plus} />
                </StyledCountButton>
            </StyledCountButtonArea>
        </StyledCount>
    )
}

export { Count }
