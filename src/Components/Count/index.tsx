import React, { useState } from 'react'
import { StyledCount, StyledCountButton, StyledCountNumber } from './style'
import { Icon, ICON_SIZE } from '../Icon'
import minus from './pics/minus.svg'
import plus from './pics/plus.svg'

interface CountProps {}

const Count = ({}: CountProps) => {
    const [amount, setAmount] = useState<number>(0)

    const addProduct = () => {
        let productAmount = amount
        setAmount(++productAmount)
    }

    const removeProduct = () => {
        let productAmount = amount
        {
            amount > 0 && setAmount(--productAmount)
        }
    }

    return (
        <StyledCount>
            <StyledCountButton onClick={removeProduct}>
                <Icon size={ICON_SIZE.MEDIUM} src={minus} />
            </StyledCountButton>
            <StyledCountNumber>{amount}</StyledCountNumber>
            <StyledCountButton onClick={addProduct}>
                <Icon size={ICON_SIZE.MEDIUM} src={plus} />
            </StyledCountButton>
        </StyledCount>
    )
}

export { Count }
