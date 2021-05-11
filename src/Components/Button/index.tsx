import React from 'react'
import { StyledButton } from './style'

export enum BUTTON_TYPE {
    PRIMARY = 'Primary',
    ADD_ITEM = 'addItem',
    REMOVE_ITEM = 'removeItem',
}

interface ButtonProps {
    type: BUTTON_TYPE
    onClick: () => void
    title?: string
}

const Button = ({ onClick, title, type }: ButtonProps) => {
    return (
        <StyledButton selfType={type} onClick={onClick}>
            {title}
        </StyledButton>
    )
}

export { Button }
