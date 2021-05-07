import React, { Component } from 'react'
import { StyledAddToWishlist } from './style'

import { ReactComponent as WishLogo } from './wishlist.svg'

interface AddToWishlistProps {
    onClick: () => void
    isAdded: boolean
}

const AddToWishlist = ({ onClick, isAdded }: AddToWishlistProps) => {
    return (
        <StyledAddToWishlist onClick={onClick}>
            <WishLogo
                fill={isAdded ? '#FB4141' : 'transparent'}
                stroke={isAdded ? '#FB4141' : '#171725'}
                width={'18px'}
            />
        </StyledAddToWishlist>
    )
}

export { AddToWishlist }
