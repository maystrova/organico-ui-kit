import React, { Component, useContext } from 'react'

import { ReactComponent as WishLogo } from './wishlist.svg'

import { StyledAddToWishlist } from './style'
import { ProductType } from '../../Pages/ProductPage/types'
import { OrganicContext } from '../../context/storeContext'

interface AddToWishlistProps {
    product: ProductType
    onClick: (productId: string) => void
    isAdded: boolean
}

const AddToWishlist = ({ onClick, isAdded, product }: AddToWishlistProps) => {
    const { store, dispatch } = useContext(OrganicContext)

    return (
        <StyledAddToWishlist
            style={{ backgroundColor: isAdded ? '#FB4141' : 'transparent' }}
            onClick={() => onClick(product.id)}
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
