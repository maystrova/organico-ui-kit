import React from 'react'
import { StyledCartPage, StyledCartPageHeader } from './style'
import { ProductCard } from '../../ProductCard'
import { broccoli } from '../../../sevices/products/products'

interface CartPageProps {}

const CartPage = ({}: CartPageProps) => {
    return (
        <StyledCartPage>
            <StyledCartPageHeader>My Cart</StyledCartPageHeader>
            <div>
                <ProductCard
                    title={broccoli.title}
                    image={broccoli.image}
                    price={broccoli.price}
                    shop={broccoli.shop}
                    category={broccoli.category}
                />
            </div>
        </StyledCartPage>
    )
}

export { CartPage }
