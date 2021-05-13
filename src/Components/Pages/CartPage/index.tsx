import React, { useState } from 'react'
import {
    StyledCardPageShop,
    StyledCardPageShopIcon,
    StyledCartPage,
    StyledCartPageFooter,
    StyledCartPageHeader,
    StyledCartPageInfo,
    StyledCartPageTotal,
} from './style'
import { ProductCard } from '../../ProductCard'
import { broccoli, carrot, products } from '../../../sevices/products/products'
import { Icon, ICON_SIZE } from '../../Icon'
import shopIcon from './pics/shop-icon.svg'
import { Button, BUTTON_TYPE } from '../../Button'
import { ProductType } from '../ProductPage/types'

interface CartPageProps {
    products: ProductType[]
}

const CartPage = ({ products }: CartPageProps) => {
    const [productCards, setProductCards] = useState<ProductType[]>([])

    return (
        <StyledCartPage>
            <StyledCartPageHeader>My Cart</StyledCartPageHeader>
            <StyledCartPageInfo>
                <StyledCardPageShop>
                    <StyledCardPageShopIcon>
                        <Icon size={ICON_SIZE.LARGE} src={shopIcon} />
                    </StyledCardPageShopIcon>

                    <h3>{broccoli.shop}</h3>
                </StyledCardPageShop>

                {products.map(product => {
                    return (
                        <ProductCard
                            id={product.id}
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            shop={product.shop}
                            category={product.category}
                        />
                    )
                })}

                <ProductCard
                    id={broccoli.id}
                    title={broccoli.title}
                    image={broccoli.image}
                    price={broccoli.price}
                    shop={broccoli.shop}
                    category={broccoli.category}
                />
                <ProductCard
                    id={carrot.id}
                    title={carrot.title}
                    image={carrot.image}
                    price={carrot.price}
                    shop={carrot.shop}
                    category={carrot.category}
                />
            </StyledCartPageInfo>
            <StyledCartPageFooter>
                <StyledCartPageTotal>
                    <span>Total</span>
                    <h2>$9.98</h2>
                </StyledCartPageTotal>
                <Button
                    type={BUTTON_TYPE.PRIMARY}
                    title={'Add to bag'}
                    onClick={() => {}}
                />
            </StyledCartPageFooter>
        </StyledCartPage>
    )
}

export { CartPage }
