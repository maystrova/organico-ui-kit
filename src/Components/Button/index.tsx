import React from 'react'

import { StyledButton } from './style'

export enum BUTTON_TYPE {
    PRIMARY = 'Primary',
}

interface ButtonProps {
    type: BUTTON_TYPE
    onClick: () => void
    title?: string
    width?: string
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
