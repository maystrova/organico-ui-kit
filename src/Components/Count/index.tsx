import React from 'react'
import { StyledCount, StyledCountButton, StyledCountNumber } from './style'
import { Icon, ICON_SIZE } from '../Icon'
import minus from './pics/minus.svg'
import plus from './pics/plus.svg'

interface CountProps {
    onAddClick: () => void
    onRemoveClick: () => void
    count: number
}

const Count = ({ onAddClick, onRemoveClick, count }: CountProps) => {
    return (
        <StyledCount>
            <StyledCountButton onClick={onRemoveClick}>
                <Icon size={ICON_SIZE.MEDIUM} src={minus} />
            </StyledCountButton>
            <StyledCountNumber>{count}</StyledCountNumber>
            <StyledCountButton onClick={onAddClick}>
                <Icon size={ICON_SIZE.MEDIUM} src={plus} />
            </StyledCountButton>
        </StyledCount>
    )
}

export { Count }
