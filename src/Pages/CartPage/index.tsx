import React, { useContext } from 'react'

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
import { StyledEmptySpace } from 'Pages/WishlistPage/style'
import { ACTION } from '../../context/actions'

interface CartPageProps {}

const getTotalPrice = (cart: ProductType[]): number => {
    let totalPrice: number = 0

    for (const product of cart) {
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
                    {store.cart.map(product => (
                        <h3 key={product.id}>{product.shop} </h3>
                    ))}
                </StyledCardPageShop>

                {store.cart.length ? (
                    store.cart.map(product => (
                        <ProductSticker
                            onAddToCartClick={productId =>
                                dispatch({
                                    action: ACTION.ADD_TO_CART,
                                    data: productId,
                                })
                            }
                            product={product}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                            key={product.id}
                        />
                    ))
                ) : (
                    <StyledEmptySpace>Your cart is empty :(</StyledEmptySpace>
                )}
            </StyledCartPageInfo>
            <StyledCartPageFooter>
                <StyledCartPageTotal>
                    <span>Total</span>
                    <h2>${store.cart.length && getTotalPrice(store.cart)}</h2>
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
