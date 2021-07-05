import React, { useContext, useState } from 'react'

import { OrganicContext } from 'context/storeContext'

import { ProductSticker } from 'Components/ProductSticker'
import { Icon, ICON_SIZE } from 'Components/Icon'
import { Button, BUTTON_TYPE } from 'Components/Button'
import { ProductType } from 'Pages/ProductPage/types'
import { BackToPreviousPage } from 'Components/BackToPreviousPage'

import {
    StyledCardPageShop,
    StyledCardPageShopIcon,
    StyledCartPage,
    StyledCartPageFooter,
    StyledCartPageInfo,
    StyledCartPageTotal,
} from './style'
import { StyledEmptySpace, StyledTitledHeader } from 'Pages/WishlistPage/style'
import { StyledHeader } from 'Pages/ProductPage/style'

import shopIcon from 'Pages/CartPage/pics/shop-icon.svg'
import { ACTION } from 'context/actions'

const getTotalPrice = (cart: ProductType[]): number => {
    let totalPrice: number = 0

    for (const product of cart) {
        totalPrice += product.price * product.quantity
    }

    return totalPrice
}

const CartPage = () => {
    const { store, dispatch } = useContext(OrganicContext)
    const [addToBagButton, setAddToBagButton] = useState<string>('Add to bag')

    return (
        <StyledCartPage>
            <StyledHeader>
                <StyledTitledHeader>
                    <BackToPreviousPage />
                    <span>My Cart</span>
                </StyledTitledHeader>
            </StyledHeader>
            <StyledCartPageInfo>
                <StyledCardPageShop>
                    <StyledCardPageShopIcon>
                        <Icon size={ICON_SIZE.LARGE} src={shopIcon} />
                    </StyledCardPageShopIcon>
                    {store.cart.map(product => (
                        <h3 key={product.id}>{product.shop} </h3>
                    ))}
                </StyledCardPageShop>

                {store.cart.length &&
                store.cart.filter(product => product.quantity > 0) ? (
                    store.cart.map(product => (
                        <ProductSticker
                            onCountChanged={newCount =>
                                dispatch({
                                    action: ACTION.ADD_TO_CART,
                                    data: { ...product, quantity: newCount },
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
            {store.cart.length > 0 && (
                <StyledCartPageFooter>
                    <StyledCartPageTotal>
                        <span>Total</span>
                        <h2>
                            ${store.cart.length && getTotalPrice(store.cart)}
                        </h2>
                    </StyledCartPageTotal>
                    <Button
                        type={BUTTON_TYPE.PRIMARY}
                        title={addToBagButton}
                        onClick={() => {
                            dispatch({
                                action: ACTION.ADD_TO_BAG,
                                data: store.cart,
                            })
                            setAddToBagButton('Successfully added to bag!')
                        }}
                    />
                </StyledCartPageFooter>
            )}
        </StyledCartPage>
    )
}

export { CartPage, getTotalPrice }
