import React from 'react'

import { StyledButton } from './style'

export enum BUTTON_TYPE {
    PRIMARY = 'Primary',
    WHITE = 'White',
}

export enum BUTTON_WIDTH {
    BIG = '100%',
    MEDIUM = '50%',
}

interface ButtonProps {
    type: BUTTON_TYPE
    onClick: () => void
    title: string
    width?: BUTTON_WIDTH
}

const Button = ({ onClick, title, type, width }: ButtonProps) => {
    return (
        <StyledButton
            style={{ width: width }}
            selfType={type}
            onClick={onClick}
        >
            {title}
        </StyledButton>
    )
}

export { Button }
