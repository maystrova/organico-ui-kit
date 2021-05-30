import React, { Component } from 'react'

import { ReactComponent as WishLogo } from './wishlist.svg'

import { StyledAddToWishlist } from './style'


interface AddToWishlistProps {
    onClick: () => void
    isAdded: boolean
}

const AddToWishlist = ({ onClick, isAdded }: AddToWishlistProps) => {
    return (
        <StyledAddToWishlist
            style={{ backgroundColor: isAdded ? '#FB4141' : 'transparent' }}
            onClick={onClick}
        >
            <WishLogo
                fill={isAdded ? '#FB4141' : 'transparent'}
                stroke={isAdded ? '#FFF' : '#171725'}
                width={'18px'}
            />
        </StyledAddToWishlist>
    )
}

export { AddToWishlist }
