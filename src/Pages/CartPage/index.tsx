import React, { useContext } from 'react'

import { broccoli } from 'services/products/products'
import { OrganicContext } from 'context/storeContext'

import { ProductSticker } from 'Components/ProductSticker'
import { Icon, ICON_SIZE } from 'Components/Icon'
import { Button, BUTTON_TYPE } from 'Components/Button'
import { ProductType } from 'Pages/ProductPage/types'

import shopIcon from './pics/shop-icon.svg'

import {
    StyledCardPageShop,
    StyledCardPageShopIcon,
    StyledCartPage,
    StyledCartPageFooter,
    StyledCartPageHeader,
    StyledCartPageInfo,
    StyledCartPageTotal,
} from './style'

interface CartPageProps {}

const getTotalPrice = (products: ProductType[]): number => {
    let totalPrice: number = 0

    for (const product of products) {
        totalPrice = totalPrice + product.price
    }

    return totalPrice
}

const CartPage = ({}: CartPageProps) => {
    const { store, dispatch } = useContext(OrganicContext)

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

                {store.products.map(product => (
                    <ProductSticker
                        image={product.image}
                        title={product.title}
                        price={product.price}
                        key={product.id}
                    />
                ))}
            </StyledCartPageInfo>
            <StyledCartPageFooter>
                <StyledCartPageTotal>
                    <span>Total</span>
                    <h2>${getTotalPrice(store.products)}</h2>
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
