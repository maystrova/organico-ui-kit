import React from 'react'

import { Icon, ICON_SIZE } from 'Components/Icon'

import {
    StyledCount,
    StyledCountButton,
    StyledCountButtonArea,
    StyledCountNumber,
} from './style'

import minus from './pics/minus.svg'
import plus from './pics/plus.svg'

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
    onCountChanged: (currentCount: number) => void
    currentCount: number
}

const Count = ({
    width,
    height,
    fontSize,
    currentCount,
    onCountChanged,
}: CountProps) => {
    return (
        <StyledCount>
            <StyledCountButtonArea>
                <StyledCountButton
                    style={{ width: width, height: height }}
                    onClick={() => onCountChanged(--currentCount)}
                >
                    <Icon size={ICON_SIZE.MEDIUM} src={minus} />
                </StyledCountButton>
            </StyledCountButtonArea>

            <StyledCountNumber style={{ fontSize: fontSize }}>
                {currentCount}
            </StyledCountNumber>
            <StyledCountButtonArea>
                <StyledCountButton
                    style={{
                        width: width,
                        height: height,
                    }}
                    onClick={() => {
                        onCountChanged(currentCount + 1)
                    }}
                >
                    <Icon size={ICON_SIZE.MEDIUM} src={plus} />
                </StyledCountButton>
            </StyledCountButtonArea>
        </StyledCount>
    )
}

export { Count }
