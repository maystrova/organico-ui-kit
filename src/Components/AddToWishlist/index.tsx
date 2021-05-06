import React from 'react'
import { StyledAddToWishlist } from './style'
import { Icon, ICON_SIZE } from '../Icon'
import wish from '../Button/pics/wishlist.svg'

interface AddToWishlistProps {
    onClick: () => void
}

const AddToWishlist = ({ onClick }: AddToWishlistProps) => {
    return (
        <StyledAddToWishlist onClick={onClick}>
            <Icon size={ICON_SIZE.SMALL} src={wish} />
        </StyledAddToWishlist>
    )
}

export { AddToWishlist }
