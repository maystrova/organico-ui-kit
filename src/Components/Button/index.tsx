import React from 'react'
import { StyledButton, StyledButtonProps } from './style'

export enum BUTTON_TYPE {
    BACK_TO_PREVIOUS_PAGE = 'backToPreviousPage',
    ADD_TO_WISHLIST = 'addToWishlist',
    ADD_TO_CART = 'addToCart',
    ADD_ITEM = 'addItem',
    REMOVE_ITEM = 'removeItem',
}

interface ButtonProps {
    type: BUTTON_TYPE
    onClick: () => void
    title?: string
    backgroundColor?: '#2ECC71'
    children?: React.ReactChild
}

const Button = ({
    backgroundColor,
    onClick,
    title,
    type,
    children,
}: ButtonProps) => {
    return (
        <StyledButton selfType={type} onClick={onClick}>
            {title}
            {children}
        </StyledButton>
    )
}

export { Button }
